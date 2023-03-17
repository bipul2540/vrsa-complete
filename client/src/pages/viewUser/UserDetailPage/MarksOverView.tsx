import React from "react";
import GradientCircleProgressbar from "../../../components/ProgressCircular/Progress";
import styles from "./UserDetailPage.module.css";

const MarksOverView = ({ semesterName, semPercent, totalPercent }) => {
  console.log(semesterName);
  return (
    <div className={styles.marks__overView__conatainer}>
      <div className={styles.mark__overView__header}>
        <h1 className={styles.mark__overView__h1}>Marks Overview</h1>
      </div>
      <div className={styles.marks__overView__body}>
        <div className={styles.progress__container}>
          <div className={styles.marks__h1}>
            <p className={styles.progresss_label}>
              {semesterName.length > 4 ? " " : semesterName} Semester{" "}
            </p>

            <span className={styles.h1__span}>
              <GradientCircleProgressbar
                percentage={
                  semPercent[!semesterName ? "1st" : semesterName]
                    ? semPercent[!semesterName ? "1st" : semesterName].toFixed(
                        1
                      )
                    : 0
                }
                primaryColor={["#26C485", "#00CC66"]}
                secondaryColor={"#E1DEE3"}
                width={100}
                fontSize='12px'
              />
            </span>
          </div>
          <div className={styles.marks__h1}>
            <p className={styles.progresss_label}>Avg. Percentage</p>
            <span className={styles.h1__span}>
              <GradientCircleProgressbar
                percentage={totalPercent ? totalPercent.toFixed(1) : 0}
                primaryColor={["#26C485", "#00CC66"]}
                secondaryColor={"#E1DEE3"}
                width={100}
                fontSize='12px'
              />
            </span>{" "}
          </div>
        </div>

        <h1 className={styles.marks__h1}>Grade: A+</h1>
      </div>
    </div>
  );
};

export default MarksOverView;
