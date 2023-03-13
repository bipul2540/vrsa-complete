import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import styles from "./UserDetailPage.module.css";
import { useEffect } from "react";
import { getCourse } from "../../addUser/services/API/marksApi";
import { getCoursewithUSN } from "../services/getCourseWithUsn";
import { useParams } from "react-router-dom";
import SelectBox from "../../../components/SelectBox/SelectBox";
import { BsPlus } from "react-icons/bs";
import { getMarksWithUsn } from "../services/getMarksWithUsn";
import { useDispatch, useSelector } from "react-redux";
import { isMarksUpdated, setValue } from "../../../store/slices/userSlice";
import { RootState } from "../../../store/store";
import EditMarks from "../components/EditMarks/EditMarks";

const UserMarks = ({ regNo, semester }) => {
  const params = useParams();
  const [activeFilter, setActiveFilter] = useState(false);
  const [marks, setMarks] = useState([]);
  const [marksUpdated, setMarksUpdated] = useState(false);

  useEffect(() => {
    const getcourses = async () => {
      const res = await getMarksWithUsn(params.regNo);
      setMarks(res.result);
    };

    getcourses();
  }, [marksUpdated]);

  const handleFilterClick = () => {
    setActiveFilter(!activeFilter);
  };

  const [semVal, setSemVal] = useState(" ");

  const dispatch = useDispatch();
  const hanleSemChange = (e: any) => {
    setSemVal(e.target.value);
    dispatch(setValue(e.target.value));
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [courseVal, setCourseVal] = useState({});
  const [semesterVal, setSemester] = useState("");
  const handleEditClick = (fields, studval) => {
    setShowEditModal(true);
    setCourseVal(fields);
    setSemester(studval.semester);
  };

  return (
    <div className={styles.moreInfo}>
      <div className={styles.filter__options}>
        <p className={styles.filter} onClick={handleFilterClick}>
          {" "}
          <BsPlus className={styles.filter__icon} />
          filter
        </p>
        <div
          className={
            activeFilter
              ? styles.selectbox__div
              : `${styles.selectbox__div} ${styles.active}`
          }>
          <label htmlFor='sem' className={styles.select__label}>
            Choose semester :
          </label>
          <select
            name='semester'
            id=''
            value={semVal}
            onChange={hanleSemChange}
            className={styles.seme__select}>
            <option value='all' defaultChecked>
              All
            </option>
            <option value='1st'>1st</option>
            <option value='2nd'>2nd</option>
            <option value='3rd'>3rd</option>
            <option value='4rth'>4rth</option>
            <option value='5th'>5th</option>
            <option value='6th'>6th</option>
            <option value='7th'>7th</option>
            <option value='8th'>8th</option>
          </select>
        </div>
      </div>

      <div className={styles.main__container__table}>
        {marks.length === 0 ? (
          <p>Marks of the sudent is not updated</p>
        ) : (
          <table className={styles.marks__table}>
            <thead>
              <tr>
                <th className={styles.marks__table__heading}>Course</th>
                <th className={styles.marks__table__heading}>IA-1</th>
                <th className={styles.marks__table__heading}>IA-2</th>
                <th className={styles.marks__table__heading}>IA-3</th>
                <th className={styles.marks__table__heading}>Assing</th>
                <th className={styles.marks__table__heading}>Total</th>
                <th className={styles.marks__table__heading}>Edit</th>
              </tr>
            </thead>
            <tbody>
              {
                marks
                  .filter(function (item) {
                    return semVal.toLowerCase() === " " ||
                      semVal.toLowerCase() === "all"
                      ? item
                      : item.semester === semVal;
                  })
                  .map((item, idx) => {
                    return item.marks.map((curr: any, id: any) => {
                      return (
                        <tr key={curr._id}>
                          <td className={styles.marks__td}>
                            {curr.course_name.toUpperCase()}
                          </td>
                          {curr.internal_marks.firstIa < 16 ? (
                            <td
                              className={styles.marks__td}
                              style={{ color: "red" }}>
                              {curr.internal_marks.firstIa}
                            </td>
                          ) : (
                            <td className={styles.marks__td}>
                              {curr.internal_marks.firstIa}
                            </td>
                          )}

                          {curr.internal_marks.secondIa < 16 ? (
                            <td
                              className={styles.marks__td}
                              style={{ color: "red" }}>
                              {curr.internal_marks.secondIa}
                            </td>
                          ) : (
                            <td className={styles.marks__td}>
                              {curr.internal_marks.secondIa}
                            </td>
                          )}
                          {curr.internal_marks.thirdIa < 16 ? (
                            <td
                              className={styles.marks__td}
                              style={{ color: "red" }}>
                              {curr.internal_marks.thirdIa}
                            </td>
                          ) : (
                            <td className={styles.marks__td}>
                              {curr.internal_marks.thirdIa}
                            </td>
                          )}
                          <td className={styles.marks__td}>
                            {curr.assingment ? curr.assingment : "--"}
                          </td>
                          <td className={styles.marks__td}>
                            {parseInt(curr.internal_marks.firstIa) +
                              parseInt(curr.internal_marks.secondIa) +
                              parseInt(curr.internal_marks.thirdIa) +
                              parseInt(curr.assingment ? curr.assingment : "0")}
                          </td>
                          <td
                            className={styles.marks__td}
                            onClick={() => handleEditClick(curr, item)}>
                            <AiFillEdit className={styles.td__edit} />
                          </td>
                        </tr>
                      );
                    });
                  })}
            </tbody>
          </table>
        )}
      </div>
      {showEditModal && (
        <EditMarks
          values={courseVal}
          showEditModal={setShowEditModal}
          semester={semesterVal}
          setMarksUpdated={setMarksUpdated}
        />
      )}
    </div>
  );
};

export default UserMarks;
