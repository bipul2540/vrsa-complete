import styles from "./RegisterSuccess.module.css";
import tick from "./../../../assets/png/tick.png";
import ReactDom from "react-dom";
import { useEffect } from "react";
const RegisterSuccess = ({ setRegisterSuccess }) => {
  const handleClick = () => {
    setRegisterSuccess(false);
    document.getElementsByName("body")[0].classList.remove("disable-scroll");
  };
  setTimeout(() => {
    setRegisterSuccess(false);
  }, 10000);
  return ReactDom.createPortal(
    <div className={styles.modal__portal}>
      <div className={styles.main__container}>
        <img src={tick} alt='' className={styles.tick__image} />
        <h1 className={styles.info}>
          Student has been successfully added to the database
        </h1>
        <p className={styles.btn__close} onClick={handleClick}>
          continue
        </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default RegisterSuccess;
