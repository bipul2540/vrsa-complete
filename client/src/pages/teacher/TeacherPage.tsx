import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ToalStudents from "../../components/MainPageComponents/TotalStudents/TotlStudents";
import NavBar from "../../components/NavBar/NavBar";
import PageLoader from "../../components/PageLoader/PageLoader";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./TeacherPage.module.css";

const TeacherPage = () => {
  const [isLoading, setLoading] = useState(true);

  const sideBarLinks = {
    home: "/teacher/home",
    adduser: "/teacher/home/add-user",
    viewuser: "/teacher/home/view-user",
    analyze: "/teacher/home/analyze-marks",
    remove: "/teacher/home/edit-user",
  };

  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className={styles.container}>
          <div className={styles.main__container}>
            <div className={styles.navbar}>
              <NavBar />
            </div>
            <div className={styles.sidebar__and_body__container}>
              <div className={styles.sidebar}>
                <SideBar links={sideBarLinks} />
              </div>
              <div className={styles.body__container}>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeacherPage;
