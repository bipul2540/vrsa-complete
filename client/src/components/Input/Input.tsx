import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import InputError from "../InputError/InputError";
import styles from "./Input.module.css";

type inputProps = {
  label: string;
  required: boolean;
  value: any;
  handleChange: any;
  name: string;
  handleBlur: any;
  touched: any;
  error: any;
  err_msg: string;
};
const Input = ({
  name,
  label,
  required,
  value,
  handleChange,
  handleBlur,
  touched,
  error,
  err_msg,
}: inputProps) => {
  return (
    <div className={styles.form__group}>
      <div className={styles.required__field}>
        <label htmlFor='firstName' className={styles.input__label}>
          {label}
        </label>
        {required && <FaStarOfLife className={styles.required__icon} />}
        {touched && error ? (
          <p className={styles.error__message}> {`(${err_msg})`}</p>
        ) : null}
      </div>

      <input
        autoComplete='off'
        name={name}
        type='text'
        className={`${styles.input__field} ${
          touched && error ? "invalid" : ""
        }`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
