import React from "react";
import { IoIosClose } from "react-icons/io";
import styles from "./CloseButton.module.css";

import { useNavigate } from "react-router-dom";

const CloseButton = ({ goto }: { goto: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(goto);
  };
  return (
    <div className={styles.close__button} onClick={handleClick}>
      <IoIosClose className={styles.close__icon} />
      <p className={styles.label}>close</p>
    </div>
  );
};

export default CloseButton;
