import React, { useEffect, useState } from "react";
import { getAllStudents } from "../../services/getAllStudent";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [students, setStudent] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      const data = await getAllStudents();

      setStudent(data);
    };

    getStudents();
  }, []);

  const department = [];
  if (students) {
    students.map((item) => {
      department.push(item.department);
    });
  }
  const uniqueElements = department.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const elementCount = uniqueElements.reduce((acc, value) => {
    acc[value] = department.filter((v) => v === value).length;
    return acc;
  }, {});

  const onlyCount: any = Object.values(elementCount);
  const onlyDepartment = Object.keys(elementCount);

  return (
    <div>
      <Chart
        type='bar'
        width={350}
        height={250}
        series={[{ name: "Semester marks", data: onlyCount }]}
        options={{
          title: {
            text: "Total Students",
            style: { fontSize: "11", fontWeight: "100" },
          },

          colors: ["#642ef8"],

          xaxis: {
            categories: ["CSE", "ISE", "ME", "Civil"],
            title: {
              text: "Department",
              style: { fontSize: "11", fontWeight: "100" },
            },
          },
        }}></Chart>
    </div>
  );
};

export default BarChart;
