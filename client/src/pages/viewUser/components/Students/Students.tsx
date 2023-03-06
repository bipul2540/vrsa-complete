import React from "react";
import SingleStudent from "./SingleStudent";
import styles from "./Students.module.css";
import { useEffect, useState } from "react";
import { getAllStudents } from "../../services/getAllStudent";
import { Outlet } from "react-router-dom";
const Students = ({ searchVal }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const data = await getAllStudents();
      setUsers(data);
    };
    getUser();
  }, []);

  return (
    <div className={styles.main__page__container}>
      <div className={styles.table}>
        <div className={styles.table__header}>
          <h1>Students</h1>
        </div>
        <div className={styles.table__body}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>USN</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Year</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter(function (item) {
                  return searchVal.toLowerCase() === " "
                    ? item
                    : item.regNo.toLowerCase().includes(searchVal);
                })
                .map(function (item, idx) {
                  return (
                    <SingleStudent
                      id={idx}
                      name={item.name}
                      Branch={item.department}
                      year={item.year}
                      email={item.email}
                      gender={item.gender}
                      phone={item.phone}
                      regNo={item.regNo.toUpperCase()}
                      key={item.name}
                      section={item.section}
                      semester={item.semester}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Students;
