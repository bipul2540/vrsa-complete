import React from "react";
import { MdGroup } from "react-icons/md";
import BarChart from "./BarChart";
import styles from "./TotalStudents.module.css";

const ToalStudents = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.top__bar}>
        <div className={styles.icon}>
          <MdGroup className={styles.group__icon} />
        </div>

        <h1 className={styles.header}> Total Students</h1>

        <div className={styles.select__box}>
          <select name='' id=''>
            <option selected disabled aria-disabled>
              Branch
            </option>
            <option value='cse' className={styles.option}>
              Cse
            </option>
            <option value='cse' className={styles.option}>
              Ise
            </option>
            <option value='cse' className={styles.option}>
              Ece
            </option>
          </select>
        </div>
      </div>

      <div className={styles.bar__container}>
        <div className={styles.number}>
          <h1>243</h1>
        </div>
        <div className={styles.graph__area}>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default ToalStudents;
