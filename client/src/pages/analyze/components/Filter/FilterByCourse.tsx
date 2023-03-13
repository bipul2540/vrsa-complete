import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../../store/slices/userSlice";
import { RootState } from "../../../../store/store";
import CheckBox from "./CheckBox";
import styles from "./Filter.module.css";

const FilterByCourse = ({
  showCourseFilter,
  searchVal,
  handleSearchChange,
  courses,
  setShowCourseFilter,
}) => {
  const dispatch = useDispatch();
  const [checkVal, setCheckVal] = useState([]);
  const handleFilterClick = () => {
    dispatch(setValue(checkVal));
    setShowCourseFilter(false);
    setCheckVal([]);
  };

  return (
    <>
      {showCourseFilter && (
        <div className={styles.marks__filter}>
          <div className={`${styles.marks__modal} ${styles.subject__filter}`}>
            <div className={styles.search__area}>
              <input
                type='text'
                className={styles.search}
                placeholder='Filter by course'
                value={searchVal}
                onChange={handleSearchChange}
              />
              <IoSearchSharp className={styles.filter__search__icon} />
            </div>

            {courses &&
              courses
                .filter((item: any) => {
                  if (searchVal === "") return item;
                  return item.includes(searchVal);
                })
                .map((item: any, idx: any) => {
                  return (
                    <CheckBox
                      color={""}
                      label={item.toUpperCase()}
                      rating={""}
                      marks=''
                      key={idx}
                      marksVal={checkVal}
                      setMarksVal={setCheckVal}
                    />
                  );
                })}
          </div>

          <div className={styles.next__options}>
            <p className={styles.filter__btn} onClick={handleFilterClick}>
              Filter <MdNavigateNext size={23} />{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterByCourse;
