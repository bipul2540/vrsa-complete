import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import styles from "./TotalStudents.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

ChartJS.register(BarElement, CategoryScale, Tooltip, Legend, LinearScale);

const BarChart = () => {
  const data = {
    labels: ["8A", "8B", "8C", "8D", "8E", "8F", "7A", "7B", "7C", "7D"],
    datasets: [
      {
        data: [50, 43, 60, 65, 70, 70, 44, 56, 64, 80, 90, 90, 90, 70, 80, 80],
        pointStyle: "rect",
        backgroundColor: ["#4ECDC4", "#FF2C55"],
        borderRadius: 100,

        barThickness: 20,
        innerWidth: 700,
      },
    ],
  };

  const options = {
    responsive: false,
    elements: {
      point: {
        borderWidth: 0,
        radius: 0,
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      zoom: {
        pan: {
          enabled: true,
        },
        enabled: true,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: false,
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 8,
            color: "red",
          },
          minRotation: 20,
        },
      },
      y: {
        display: false,
        grid: {
          drawOnChartArea: false,
          beginAtZero: true,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const myRef = useRef(null);
  const handleRightClick = () => {
    myRef.current.scrollLeft += 30;
    myRef.current.scrollLeft({ behavior: "smooth" });
  };

  const handleLeftClick = () => {
    myRef.current.scrollLeft = 0;
    myRef.current.scrollRight({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.barchart} barchart`} ref={myRef}>
      <Bar data={data} options={options}></Bar>
      <div className={styles.circle}>
        <FaChevronLeft
          className={styles.left__scroll__icons}
          onClick={handleLeftClick}
        />
      </div>
      <div className={styles.circle}>
        <FaChevronRight
          className={styles.right__scroll__icons}
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
};

export default BarChart;
