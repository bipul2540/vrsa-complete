import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Students from "./components/Students/Students";
import TotalStudGraphView from "./components/Students/TotalStudGraphView";
import styles from "./ViewUser.module.css";

const ViewUser = () => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className={styles.view_user__main_container}>
      <Header searchVal={searchVal} setSearchVal={setSearchVal} />
      <Students searchVal={searchVal} />
      <Outlet />
    </div>
  );
};

export default ViewUser;
