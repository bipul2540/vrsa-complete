import React from "react";
import Chart from "react-apexcharts";
import { useEffect } from "react";
import { marksAnalyze } from "../services/marksAnalyze";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./UserDetailPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const BarChart = () => {
  const params = useParams();

  const [marks, setmMarks] = useState([]);
  const [semester, setSemester] = useState([]);

  const markUpdate = useSelector(
    (state: RootState) => state.semester.marksUpdated
  );
  useEffect(() => {
    const getMarks = async () => {
      const [sem, data] = await marksAnalyze(params.regNo);
      setmMarks(data);
      setSemester(sem);
    };

    getMarks();
  }, [markUpdate]);

  return (
    <div className={styles.graph__container}>
      <h1 className={styles.PieChart__heading}>Marks of the Each semester</h1>
      <Chart
        type='bar'
        width={350}
        height={250}
        series={[{ name: "Semester marks", data: marks }]}
        options={{
          title: {
            text: "Total Marks in each semester",
            style: { fontSize: "11", fontWeight: "100" },
          },

          colors: ["#642ef8"],

          xaxis: {
            categories: semester,
            title: {
              text: "Semester",
              style: { fontSize: "11", fontWeight: "100" },
            },
          },
        }}></Chart>
    </div>
  );
};

export default BarChart;
