import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import styles from "./SelectBox.module.css";

const SelectBox = ({
  label,
  name,
  error,
  touched,
  value,
  handleChange,
  handleBlur,
  options,
}) => {
  return (
    <div className={styles.select_div}>
      <label htmlFor='' className={styles.label}>
        <h1 className={styles.label__h1}>
          {label} <FaStarOfLife className={styles.required__icon} />
        </h1>

        {error && touched ? <p className={styles.error_msg}>({error})</p> : ""}
      </label>{" "}
      <select
        name={name}
        id=''
        className={`${styles.select} ${error && touched ? "invalid" : ""}`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}>
        <option
          value=''
          selected
          disabled
          hidden
          className={styles.selected__select}>
          select
        </option>
        {options.map((option: any) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectBox;
