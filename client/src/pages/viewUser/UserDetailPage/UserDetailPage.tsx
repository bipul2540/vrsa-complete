import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "./UserDetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudentWithUsn } from "../services/getStudentWithregNo";
import boy from "./../../../assets/png/boy.png";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import UserMarks from "./UserMarks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { getUser } from "../../../util/useToken";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { TotalPercentage } from "../services/marksAnalyze";
import MarksOverView from "./MarksOverView";
import ContactMe from "./ContactMe";
import { isMarksUpdated } from "../../../store/slices/userSlice";

const UserDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [students, setStudent] = useState({});
  const [semPercent, setSemPercent] = useState({});
  const [totalPercent, setTotalPercent] = useState();

  const dispatch = useDispatch();
  const markUpdate = useSelector(
    (state: RootState) => state.semester.marksUpdated
  );

  const getUser = async () => {
    const user = await getStudentWithUsn(params.regNo);
    if (user.status === 200) {
      setStudent(user.data.student);
    }
  };

  const semesterName = useSelector((state: RootState) => state.semester.value);
  const getPercentage = async () => {
    const data: any = await TotalPercentage(params.regNo);
    setTotalPercent(data[1]);
    setSemPercent(data[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getPercentage();
    setTimeout(() => {
      dispatch(isMarksUpdated(false));
    }, 1000);
  }, [markUpdate]);

  console.log(semPercent, totalPercent);
  const handleBackClick = () => {
    navigate("/teacher/home/view-user");
  };
  return (
    <div className={styles.User__detail__container}>
      <div className={styles.back__header}>
        <div className={styles.icn} onClick={handleBackClick}>
          <IoArrowBackOutline className={styles.back__icon} />
        </div>
        <div className={styles.user__name}>
          <h1 className={styles.name__h1}>{params.regNo}</h1>
        </div>
      </div>
      <div className={styles.main__body}>
        <div className={styles.profile__image}>
          <img src={boy} alt='' />
          <div className={styles.info}>
            <h1 className={styles.student__name}>{students["name"]}</h1>
            <h1 className={styles.branch}>{students["department"]}</h1>
            <ul className={styles.year__sec_sem}>
              <li>2019 Batch</li>
              <li>Sec 'A'</li>
              <li>Semester 8th</li>
              <li>Year 4rth</li>
            </ul>
          </div>
        </div>

        <div className={styles.moreInfo__contact__body}>
          <UserMarks
            regNo={students["regNo"]}
            semester={students["semester"]}
          />
          <MarksOverView
            semPercent={semPercent}
            semesterName={semesterName}
            totalPercent={totalPercent}
          />
          <ContactMe students={students} />
        </div>

        <div className={styles.graphs__container}>
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
