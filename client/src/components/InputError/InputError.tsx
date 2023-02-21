import React from "react";
import { BiError } from "react-icons/bi";
import styles from "./InputError.module.css";

const InputError = ({
  isError,
  isTouched,
  err_msg,
}: {
  isError: any;
  isTouched: any;
  err_msg: any;
}) => {
  return (
    <div>
      {" "}
      {isError && isTouched ? (
        <p className={styles.err_message}>
          <BiError />
          {err_msg}
        </p>
      ) : null}
    </div>
  );
};

export default InputError;
