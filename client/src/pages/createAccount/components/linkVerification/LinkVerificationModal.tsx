import styles from "./LinkVerificationModal.module.css";
import success from "./../../../../assets/png/successful.png";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";


const OtpVerificationModal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signin");
  };
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className={styles.animated__container}>
      <div className={styles.modal__container}>
        <div className={styles.main__container}>
          <img src={success} width={80} />
          <div className={styles.info__container}>
            <h1>Hurrey !! account have been created</h1>
            <p>
              Please verify the link send to email in order to procced further.
            </p>
          </div>

          <p className={styles.goto_login_btn} onClick={handleClick}>
            continue to login{" "}
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default OtpVerificationModal;
