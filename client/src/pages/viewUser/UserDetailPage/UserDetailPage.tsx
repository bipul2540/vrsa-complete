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
const UserDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [students, setStudent] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const user = await getStudentWithUsn(params.regNo);
      console.log(user);
      if (user.status === 200) {
        setStudent(user.data.student);
      }
    };
    getUser();
  }, []);
  console.log(students);

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
            <h1 className={styles.branch}>Computer Sciene and Engineering</h1>
            <ul className={styles.year__sec_sem}>
              <li>2019 Batch</li>
              <li>Sec 'A'</li>
              <li>Semester 8th</li>
              <li>Year 4rth</li>
            </ul>
          </div>
        </div>

        <div className={styles.moreInfo__contact__body}>
          <div className={styles.moreInfo}>
            <UserMarks
              regNo={students["regNo"]}
              semester={students["semester"]}
            />
          </div>

          <div className={styles.contactus}>
            <h1 className={styles.contactus__header}>Contact Info</h1>

            <div className={styles.contact__body}>
              <div className={styles.con__iocn}>
                <MdEmail className={styles.contact__iocn} color='#2D7DD2' />
                <h1>bipulkumar2540@gmail.com</h1>
              </div>
              <div className={styles.con__iocn}>
                <BsTelephoneFill
                  className={styles.contact__iocn}
                  color='#4F1271'
                />
                <h1>+91 8709188657</h1>
              </div>

              <div className={styles.con__iocn}>
                <ImLocation color='#23967F' className={styles.contact__iocn} />
                <h1>
                  Gottigere, Bangalore <br /> Karntaka, India <br /> 560083
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
