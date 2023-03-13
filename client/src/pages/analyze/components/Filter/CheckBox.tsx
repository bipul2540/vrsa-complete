import React, { useState } from "react";
import styles from "./Filter.module.css";

const CheckBox = ({ rating, label, marks, color, marksVal, setMarksVal }) => {
  const [val, setVal] = useState([]);
  const handleCheckboxChange = (event: any) => {
    const { name, value } = event.target;
    const checked = event.target.checked;

    console.log(name, value, checked);

    if (checked) {
      setVal([...val, value]);
      setMarksVal([...marksVal, value]);
    } else {
      val.filter((item) => item !== name);
      setMarksVal(marksVal.filter((item: any) => item !== value));
    }
  };


  return (
    <div className={styles.checkbox__wrapper}>
      <input
        id={label}
        type='checkbox'
        name='box'
        value={label}
        onChange={(e) => handleCheckboxChange(e)}
      />
      <label className={styles.cbx} htmlFor={"cbx"}></label>
      <label className={styles.lbl} htmlFor={label}>
        <div className={styles.value__div}>
          <span className={`${styles.rating} ${styles[color]}`}>{rating}</span>
          <p>
            {label} <span className={styles.marks__between}>{marks}</span>
          </p>
        </div>
      </label>
    </div>
  );
};

export default CheckBox;
