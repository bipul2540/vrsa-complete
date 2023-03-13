import React, { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import MarksView from "./components/MarksView/MarksView";
import { getAllMarks } from "./services/getAllMarks";
import {
  courseName,
  filterWithCourseName,
  filterWithSemester,
} from "./services/marksUtility";

const Analyze = () => {
  const [allMarks, setMarks] = useState([]);

  useEffect(() => {
    const getMarks = async () => {
      const res = await getAllMarks();
      setMarks(res);

      const course = await courseName();
      const filcourse = await filterWithCourseName("18cs73");

      const seme = await filterWithSemester("8th");
      // console.log(course, filcourse, seme);
    };

    getMarks();
  }, []);

  return (
    <div>
      <Filter />
      <MarksView />
    </div>
  );
};

export default Analyze;
