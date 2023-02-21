import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({
  class_name,
  name,
  url,
}: {
  class_name: string;
  name: string;
  url: string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <button
      onClick={handleClick}
      className={`${styles.btn} ${
        class_name === "primary_btn" ? styles.primary_btn : styles.secondary_btn
      }`}>
      {name}
    </button>
  );
};

export default Button;
