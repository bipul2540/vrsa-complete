import React from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import styles from "./MarksForm.module.css";
const MarksFrom = () => {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.heading}>
        <div className={styles.icon}>
          <BsBookmarkStarFill />
        </div>
        Register Marks
      </h1>
      <div className={styles.form__container}>
        {" "}
        <p className={styles.register__btn}>Register</p>
      </div>
    </div>
  );
};

export default MarksFrom;
