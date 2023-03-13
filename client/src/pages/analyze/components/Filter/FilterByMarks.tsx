import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import CheckBox from "./CheckBox";
import styles from "./Filter.module.css";

const FilterByMarks = ({ showFilter }) => {
  const [marksVal, setMarksVal] = useState([]);
  const handleFilterClick = () => {
    console.log(marksVal);
  };

  return (
    <>
      {showFilter && (
        <div className={styles.marks__filter}>
          <div className={styles.marks__modal}>
            <p className={styles.marks__header}>Filter By Marks</p>
            <div className={styles.checkBox__input}>
              <CheckBox
                label={"Great"}
                marks={"80-100"}
                rating='A'
                color={"green"}
                marksVal={marksVal}
                setMarksVal={setMarksVal}
              />
              <CheckBox
                label={"Good"}
                marks={"60-79"}
                rating='B'
                color='blue'
                marksVal={marksVal}
                setMarksVal={setMarksVal}
              />
              <CheckBox
                label={"Passable"}
                marks={"40-59"}
                rating='C'
                marksVal={marksVal}
                setMarksVal={setMarksVal}
                color='yellow'
              />

              <CheckBox
                label={"Poor"}
                marks={"20-39"}
                rating='D'
                color='red'
                marksVal={marksVal}
                setMarksVal={setMarksVal}
              />
              <CheckBox
                label={"Failed"}
                marks={"0-33"}
                rating='E'
                marksVal={marksVal}
                setMarksVal={setMarksVal}
                color='red'
              />
            </div>
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

export default FilterByMarks;
