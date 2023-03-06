import React from "react";
import { AiFillEdit } from "react-icons/ai";
import styles from "./UserDetailPage.module.css";
import { useEffect } from "react";
import { getCourse } from "../../addUser/services/API/marksApi";
import { getCoursewithUSN } from "../services/getCourseWithUsn";
import { useParams } from "react-router-dom";

const UserMarks = ({ regNo, semester }) => {
  console.log(regNo, semester);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const getcourses = async () => {
      const res = await getCoursewithUSN(params.regNo);
      console.log(res);
    };

    getcourses();
  }, [params.regNo]);
  return (
    <div className={styles.main__container__table}>
      <table className={styles.marks__table}>
        <thead>
          <tr>
            <th className={styles.marks__table__heading}>Course</th>
            <th className={styles.marks__table__heading}>IA-1</th>
            <th className={styles.marks__table__heading}>IA-1</th>
            <th className={styles.marks__table__heading}>IA-3</th>
            <th className={styles.marks__table__heading}>Assing</th>
            <th className={styles.marks__table__heading}>Total</th>
            <th className={styles.marks__table__heading}>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.marks__td}>18CSL57</td>
            <td className={styles.marks__td}>20</td>
            <td className={styles.marks__td}>30</td>
            <td className={styles.marks__td}>22</td>
            <td className={styles.marks__td}>55</td>
            <td className={styles.marks__td}>55</td>
            <td className={styles.marks__td}>
              <AiFillEdit className={styles.td__edit} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserMarks;
