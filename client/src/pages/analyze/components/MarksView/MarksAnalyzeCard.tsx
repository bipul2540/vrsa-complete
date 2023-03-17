import React, { useEffect, useState } from "react";
import { failPass } from "../../services/FailPass";
import styles from "./MarkView.module.css";

const MarksAnalyzeCard = ({ coursePass, courseFail, checkValue }) => {
  const [totalPass, setTotalPass] = useState(0);
  const [totalFail, setTotalFail] = useState(0);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await failPass();
      setTotalFail(data[1]);
      setTotalPass(data[0]);
    };

    fetchdata();
  }, [checkValue]);

  return (
    <div className={styles.card__container__about__info}>
      <h1 className={styles.analyze_heading}>Marks overview</h1>

      <div className={styles.anlayze__main}>
        <p className={styles.anlayze_p}>
          Total number of courses
          <span className={styles.number}>
            {(courseFail === 0 && coursePass === 0 ? totalFail : courseFail) +
              (coursePass === 0 && courseFail === 0 ? totalPass : coursePass)}
          </span>{" "}
        </p>
        <p className={styles.anlayze_p}>
          Number of Student Passed
          <span className={styles.number}>
            {coursePass === 0 && courseFail === 0 ? totalPass : coursePass}
          </span>
        </p>
        <p className={styles.anlayze_p}>
          Number of Student Failed
          <span className={`${styles.number} ${styles.redFail}`}>
            {courseFail === 0 && coursePass === 0 ? totalFail : courseFail}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MarksAnalyzeCard;
