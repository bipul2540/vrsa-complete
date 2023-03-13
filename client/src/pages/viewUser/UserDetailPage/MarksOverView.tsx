import React from "react";
import styles from "./UserDetailPage.module.css";

const MarksOverView = ({ semesterName, semPercent, totalPercent }) => {
  return (
    <div className={styles.marks__overView__conatainer}>
      <div className={styles.mark__overView__header}>
        <h1 className={styles.mark__overView__h1}>Marks Overview</h1>
      </div>
      <div className={styles.marks__overView__body}>
        <h1 className={styles.marks__h1}>
          {!semesterName ? "1st" : semesterName} Semester:{" "}
          <span className={styles.h1__span}>
            {semPercent[!semesterName ? "1st" : semesterName]
              ? semPercent[!semesterName ? "1st" : semesterName].toFixed(2)
              : 0}
            %
          </span>
        </h1>
        <h1 className={styles.marks__h1}>
          Total Percentage:{" "}
          <span className={styles.h1__span}>
            {totalPercent ? totalPercent.toFixed(2) : 0}%
          </span>{" "}
        </h1>
        <h1 className={styles.marks__h1}>Grade: A+</h1>
      </div>
    </div>
  );
};

export default MarksOverView;
