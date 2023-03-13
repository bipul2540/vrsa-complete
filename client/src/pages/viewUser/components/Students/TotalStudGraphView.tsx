import React from "react";
import BarChart from "./BarChart";

import styles from "./Students.module.css";

const TotalStudGraphView = () => {
  return (
    <div className={styles.total_Student_graph_view__container}>
      <div className={styles.header__container}>
        <h1>Graph Analysis</h1>
      </div>
      <div className={styles.graph__container}>
        <BarChart />
      </div>
    </div>
  );
};

export default TotalStudGraphView;
