import { BsBookmarkStarFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import styles from "./AddUser.module.css";
import { FaBook, FaUserGraduate } from "react-icons/fa";
import { useState } from "react";
import img from "./../../assets/png/destination.gif";

export const AddUser = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };
  return (
    <div className={styles.main__container}>
      <div className={styles.uppar__container}>
        <Link
          to='/teacher/home/add-user/student-form'
          className={styles.item}
          onClick={handleClick}>
          <p>Student</p>
          <FaUserGraduate className={styles.icon} color='731DD8' />
        </Link>
        <Link
          to='/teacher/home/add-user/course-form'
          className={styles.item}
          onClick={handleClick}>
          <p>Course</p>
          <FaBook className={styles.icon} color='4ECDC4' />
        </Link>{" "}
        <Link
          to='/teacher/home/add-user/marks-form'
          className={styles.item}
          onClick={handleClick}>
          <p>Marks</p>
          <BsBookmarkStarFill className={styles.icon} color='2f74df' />
        </Link>
      </div>
      <div className={styles.form__container}>
        {showForm ? (
          <Outlet />
        ) : (
          <div className={styles.temp__show}>
            <img src={img} alt='' className={styles.animated__jpg} />
            <h1 className={styles.info}>Please click any of the options to open the form.</h1>
          </div>
        )}
      </div>
    </div>
  );
};
