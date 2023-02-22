import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ImageLink from "../../../../components/ImageLink/ImageLink";
import logo from "./../../../../assets/png/letter-v (1).png";
import styles from "./SuccessMassage.module.css";

type props = {
  isSuccessForm: boolean;
  setSuccessForm: any;
};
const SuccessMessage = ({ isSuccessForm, setSuccessForm }: props) => {
  return (
    <div className={styles.model__container}>
      <div className={styles.main__container}>
        <div
          className={styles.close__icons}
          onClick={() => setSuccessForm(false)}>
          <IoMdClose className={styles.icon} />
        </div>
        <div className={styles.logo}>
          <img src={logo} alt='' className={styles.logo__image} />
        </div>

        <div className={styles.info__container}>
          <h1 className={styles.info__h1}>Thanks for contacting us.</h1>
          <p className={styles.info__p}>
            We'll keep you updated on your query feel free to reach us again{" "}
            <span className={styles.info_p__span}>
              we are available 24/7 to help you.
            </span>{" "}
          </p>
        </div>
        <div className={styles.button}>
          <Link to='/' className={styles.button__link}>
            continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
