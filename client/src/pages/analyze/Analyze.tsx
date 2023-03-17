import React, { useEffect, useState } from "react";
import GradientCircleProgressbar from "../../components/ProgressCircular/Progress";
import Filter from "./components/Filter/Filter";
import MarksView from "./components/MarksView/MarksView";
import { getAllMarks } from "./services/getAllMarks";
import {
  courseName,
  filterWithCourseName,
  filterWithSemester,
} from "./services/marksUtility";

const Analyze = () => {
  const [marks, setMarks] = useState([]);

  return (
    <div>
      <Filter />
      <MarksView marks={marks} setMarks={setMarks} />
    </div>
  );
};

export default Analyze;
