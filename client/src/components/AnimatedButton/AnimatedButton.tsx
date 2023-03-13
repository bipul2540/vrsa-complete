import React from "react";
import styles from "./AnimatedButton.module.css";

const AnimatedButton = ({ color }) => {
  return (
    <button className={styles.button__pushable} role='button'>
      <span className={styles.button__shadow}></span>
      <span
        className={`${styles.button__edge} ${
          color === "green" && `${styles.green__edge}`
        }  ${color === "blue" && `${styles.blue__edge}`} 
        
        ${color === "purple" && `${styles.purple__edge}`}
        }`}></span>
      <span
        className={`${styles.button__front} ${
          color === "green" && `${styles.green}`
        }  ${color === "blue" && `${styles.blue}`} 
        
        ${color === "purple" && `${styles.purple}`}
        }`}>
        Register
      </span>
    </button>
  );
};

export default AnimatedButton;
