import React, { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import { setValue } from "../../../../store/slices/inputSlice";
import { RootState } from "../../../../store/store";
import { numberOfPassFail } from "../../services/filterNoOfPassFail";
import PieChart from "../Graph/PieChart";
import { getCourseNameAndMarks } from "./../../services/marksUtility";
import MarksAnalyzeCard from "./MarksAnalyzeCard";
import MarksGrade from "./MarksGrade";
import styles from "./MarkView.module.css";

const MarksView = ({ marks, setMarks }) => {
  const [sort, setSort] = useState(false);

  const handleSortclick = () => {
    setSort(!sort);
    if (sort) marks.sort((a: any, b: any) => b.total_marks - a.total_marks);
    else marks.sort((a: any, b: any) => a.total_marks - b.total_marks);
  };
  useEffect(() => {
    const getMarks = async () => {
      const data = await getCourseNameAndMarks();
      setMarks(data);
    };
    setTimeout(() => {
      setSort(!sort);
    }, 5000);
    getMarks();
  }, [setSort]);

  const [coursePass, setCoursePass] = useState(0);
  const [courseCount, setCourseCount] = useState({});
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getMarks = async () => {
      const data = await getCourseNameAndMarks();
      setMarks(data);

      const res = data.map((item) => {
        return item.course_name.toUpperCase();
      });

      setCourse(res);
    };
    getMarks();
    const counts = {};

    for (const num of course) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    setCourseCount(counts);
  }, []);

  const checkValue = useSelector((state: RootState) => state.check.value);

  const [courseFail, setCourseFail] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const ans = await numberOfPassFail(checkValue);
      if (ans) {
        setCoursePass(ans[0]);
        setCourseFail(ans[1]);
      }
    };

    fetchData();
  }, [checkValue]);

  const dispatch = useDispatch();
  const handleClearFilter = () => {
    dispatch(setValue([]));
  };

  console.log(course, courseCount);

  return (
    <div className={styles.main__container}>
      <div className={styles.marksView__container}>
        <div className={styles.marksView__container__heading}>
          <h1>Marks of each semester</h1>
        </div>

        {checkValue.length !== 0 ? (
          <div className={styles.clear__filter} onClick={handleClearFilter}>
            clear filter
          </div>
        ) : (
          ""
        )}

        <ul className={styles.table}>
          <div className={`${styles.list__item} ${styles.table__head}`}>
            <li className={styles.head__list}>Id</li>
            <li className={styles.head__list}>Course</li>
            <li className={`${styles.head__list} ${styles.sort__icon}`}>
              Marks <BiSort onClick={handleSortclick} />{" "}
            </li>
            <li className={styles.head__list}>P or F</li>
          </div>
          <div className={styles.table__body}>
            {marks
              .filter((item: any) => {
                for (var i = 0; i < checkValue.length; i++) {
                  if (
                    item.course_name &&
                    item.course_name === checkValue[i].toLowerCase()
                  )
                    return item;
                }

                if (checkValue.length === 0) return item;
              })
              .map((item: any, index: any) => {
                return (
                  <div className={styles.list__item} key={index}>
                    <li className={styles.body__list}>{index + 1}</li>
                    <li className={styles.body__list}>
                      {item.course_name.toUpperCase()}
                    </li>
                    <li className={styles.body__list}>{item.total_marks}</li>
                    <li className={styles.body__list}>
                      {item.total_marks < 33 ? (
                        <span className={styles.fail}>F</span>
                      ) : (
                        <span className={styles.pass}>P</span>
                      )}
                    </li>
                  </div>
                );
              })}
          </div>
        </ul>
      </div>

      <div className={styles.marks__analyze__cards}>
        <MarksAnalyzeCard
          courseFail={courseFail}
          coursePass={coursePass}
          checkValue={checkValue}
        />
        <MarksGrade marks={marks} />
      </div>
      <div className={styles.piechart__container}>
        <PieChart courseFail={courseFail} coursePass={coursePass} />
      </div>
    </div>
  );
};

export default MarksView;
