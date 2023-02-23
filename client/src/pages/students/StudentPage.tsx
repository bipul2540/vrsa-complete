import React from "react";
import { Outlet } from "react-router-dom";

const StudentPage = () => {
  return (
    <div>
      StudentPage
      <Outlet />
    </div>
  );
};

export default StudentPage;
