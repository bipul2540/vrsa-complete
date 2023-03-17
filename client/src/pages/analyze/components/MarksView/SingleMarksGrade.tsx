import React from "react";
import { FaUsers } from "react-icons/fa";
import GradientCircleProgressbar from "../../../../components/ProgressCircular/Progress";
import styles from "./SingleMarksGrade.module.css";

const SingleMarksGrade = ({
  color,
  value,
  length,
  remark,
  rating,
  marksBt,
}: {
  color: string;
  value: number;
  length: any;
  remark: string;
  rating: string;
  marksBt: string;
}) => {
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.single__card}>
        <div className={styles.card__front}>
          <GradientCircleProgressbar
            percentage={parseFloat(((value / length) * 100).toFixed(1))}
            primaryColor={[color, color]}
            secondaryColor={"#E1DEE3"}
            width={100}
            fontColor={color}
          />
          <p className={styles.grade__label}>{marksBt}</p>
          <span className={styles.label__stud}>
            <FaUsers />
            {value} students
          </span>
        </div>

        <div className={styles.card__back}>
          <p className={styles.back__text}>
            {remark}
            <br /> <span>{rating}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMarksGrade;
