import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useState } from "react";
import { getCourseNameAndMarks } from "../../services/marksUtility";
import { failPass } from "../../services/FailPass";
import styles from "./PieChart.module.css";

const PieChart = ({ courseFail, coursePass }) => {
  var [fail, setFail] = useState(0);
  var [pass, setPass] = useState(0);

  useEffect(() => {
    const getMarks = async () => {
      const data = await failPass();

      setFail(data[1]);
      setPass(data[0]);
    };

    getMarks();
  }, []);

  return (
    <div className={styles.graph__container}>
      <h1 className={styles.PieChart__heading}>Performace of the student</h1>
      <Chart
        type='donut'
        width={400}
        height={300}
        series={[
          courseFail === 0 && coursePass === 0 ? fail : courseFail,
          coursePass === 0 && courseFail === 0 ? pass : coursePass,
        ]}
        options={{
          labels: ["Fail", "Pass"],
          title: {
            text: "Pass and Fail",
            style: { fontSize: "11", fontWeight: "100" },
          },
          fill: {
            colors: ["#EF233C", "#2AE8A8"],
          },
          
          markers: {
            colors: ["#EF233C", "#2AE8A8"],
          },
        }}></Chart>
    </div>
  );
};

export default PieChart;
