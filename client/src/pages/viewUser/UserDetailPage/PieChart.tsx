import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { getMarksWithUsn } from "../services/getMarksWithUsn";
import { useState } from "react";

import styles from "./UserDetailPage.module.css";
const PieChart = () => {
  const semesterName = useSelector((state: RootState) => state.semester.value);

  const params = useParams();
  const [semSub, setSemSub] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      const data = await getMarksWithUsn(params.regNo);
      const subs = data.result;
      setSemSub(subs);
    };

    getCourse();
  }, []);

  const course = [];
  const courseMarks = [];
  const semMarks = semSub.filter((item: any, idx: any) => {
    return item.semester === semesterName;
  });

  if (semMarks && semMarks[0] && semMarks[0].marks) {
    semMarks[0].marks.map((item) => {
      course.push(item.course_name.toUpperCase());
    });

    semMarks[0].marks.map((item) => {
      const m =
        parseInt(item.assingment ? item.assingment : "0") +
        parseInt(item.internal_marks.firstIa) +
        parseInt(item.internal_marks.secondIa) +
        parseInt(item.internal_marks.thirdIa);

      courseMarks.push(m);
    });
  }

  console.log(semesterName);

  return (
    <div className={styles.graph__container}>
      <h1 className={styles.PieChart__heading}>
        {semesterName.length > 4 ? "" : semesterName} semester marks in Each
        subject
      </h1>
      <Chart
        type='donut'
        width={400}
        height={300}
        series={courseMarks}
        options={{
          labels: course,
          title: {
            text: "Marks of Each subject in Semester",
            style: { fontSize: "11", fontWeight: "100" },
          },
        }}></Chart>
    </div>
  );
};

export default PieChart;
