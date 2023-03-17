import React, { useEffect, useState } from "react";
import { FaGreaterThan, FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import GradientCircleProgressbar from "../../../../components/ProgressCircular/Progress";
import { RootState } from "../../../../store/store";
import styles from "./MarkView.module.css";
import SingleMarksGrade from "./SingleMarksGrade";

const MarksGrade = ({ marks }) => {
  const checkValue = useSelector((state: RootState) => state.check.value);
  const [grade, setGrade] = useState([]);
  useEffect(() => {
    if (checkValue.length !== 0) {
      const ans = marks
        .filter((item: any) => {
          for (var i = 0; i < checkValue.length; i++) {
            if (
              item.course_name &&
              item.course_name === checkValue[i].toLowerCase()
            )
              return item;
          }
        })
        .map((item: any) => {
          return item.total_marks;
        });
      setGrade(ans);
    } else {
      setGrade([]);
    }

    console.log(grade);
  }, [checkValue]);

  var lt40 = 0;
  var gt40lt60 = 0;
  var gt60lt80 = 0;
  var gt80lt90 = 0;
  var gt90 = 0;
  grade.map((item) => {
    if (item < 40) {
      lt40++;
    }

    if (item >= 40 && item < 60) {
      gt40lt60++;
    }

    if (item >= 60 && item < 80) {
      gt60lt80++;
    }

    if (item >= 80 && item < 90) {
      gt80lt90++;
    }

    if (item >= 90) {
      gt90++;
    }
  });

  return (
    <div className={styles.grade__main__container}>
      <div className={styles.grade__main_container_heading}>
        Detail overview of marks
      </div>
      <div className={styles.grade__main__container__body}>
        {/* {`${lt40}, ${gt40lt60}, ${gt60lt80}, ${gt80lt90}, ${gt90}`} */}

        {grade.length !== 0 ? (
          <div className={styles.progress___cards}>
            <SingleMarksGrade
              color={"#26C485"}
              value={gt90}
              length={grade.length}
              remark='Excellent'
              rating='A+'
              marksBt='Above 90'
            />
            <SingleMarksGrade
              color={"#14BDEB"}
              value={gt80lt90}
              length={grade.length}
              remark='Very good'
              rating='B'
              marksBt='81-90'
            />

            <SingleMarksGrade
              color={"#FFBA08"}
              value={gt60lt80}
              length={grade.length}
              remark='Good'
              rating='C'
              marksBt='61-80'
            />
            <SingleMarksGrade
              color={"#FB6107"}
              value={gt40lt60}
              length={grade.length}
              remark='Average'
              rating='D'
              marksBt='41-60'
            />
            <SingleMarksGrade
              color={"#EF233C"}
              value={lt40}
              length={grade.length}
              remark='Poor'
              rating='E'
              marksBt='Below 40'
            />
          </div>
        ) : (
          <p className={styles.guiding}>
            Select some courses to view this section
          </p>
        )}
      </div>
    </div>
  );
};

export default MarksGrade;
