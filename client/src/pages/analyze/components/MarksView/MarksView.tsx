import React, { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { BsFilterCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../../store/slices/inputSlice";
import { RootState } from "../../../../store/store";
import { numberOfPassFail } from "../../services/filterNoOfPassFail";
import PieChart from "../Graph/PieChart";
import { getCourseNameAndMarks } from "./../../services/marksUtility";
import MarksAnalyzeCard from "./MarksAnalyzeCard";
import styles from "./MarkView.module.css";

const MarksView = () => {
  const [marks, setMarks] = useState([]);
  const [sort, setSort] = useState(false);

  const handleSortclick = () => {
    setSort(!sort);
    if (sort) marks.sort((a, b) => b.total_marks - a.total_marks);
    else marks.sort((a, b) => a.total_marks - b.total_marks);
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

  useEffect(() => {
    const getMarks = async () => {
      const data = await getCourseNameAndMarks();
      setMarks(data);
    };
    getMarks();
  }, []);

  const checkValue = useSelector((state: RootState) => state.check.value);
  const [clear, setClear] = useState(false);
  const dispatch = useDispatch();
  const handleFilterClear = () => {
    setClear(false);
    dispatch(setValue([]));
  };

  const [coursePass, setCoursePass] = useState(0);
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

  return (
    <div className={styles.main__container}>
      <div className={styles.marksView__container}>
        <div className='info'>
          <h1>Marks of each semester</h1>
        </div>

        <ul className={styles.table}>
          <div className={`${styles.list__item} ${styles.table__head}`}>
            <li className={styles.head__list}>Id</li>
            <li className={styles.head__list}>Course</li>
            <li className={`${styles.head__list} ${styles.sort__icon}`}>
              Marks <BiSort onClick={handleSortclick} />{" "}
            </li>
            <li className={styles.head__list}>P or F</li>
            {clear && (
              <h1 className={styles.clear__filter} onClick={handleFilterClear}>
                clear <BsFilterCircleFill />
              </h1>
            )}
          </div>
          <div className={styles.table__body}>
            {marks
              .filter((item) => {
                for (var i = 0; i < checkValue.length; i++) {
                  if (
                    item.course_name &&
                    item.course_name === checkValue[i].toLowerCase()
                  )
                    return item;
                }

                if (checkValue.length === 0) return item;
              })
              .map((item, index) => {
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
      <MarksAnalyzeCard
        courseFail={courseFail}
        coursePass={coursePass}
        checkValue={checkValue}
      />
      <PieChart courseFail={courseFail} coursePass={coursePass} />
    </div>
  );
};

export default MarksView;
