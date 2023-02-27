import { FaBook, FaUserGraduate } from "react-icons/fa";
import styles from "./CourseForm.module.css";

const CourseForm = () => {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.heading}>
        <div className={styles.icon}>
          <FaBook />
        </div>
        Register Courses
      </h1>
      <div className={styles.form__container}>
        {" "}
        <p className={styles.register__btn}>Register</p>
      </div>
    </div>
  );
};

export default CourseForm;
