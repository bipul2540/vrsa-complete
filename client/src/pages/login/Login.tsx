import styles from "./Login.module.css";
import img from "./../../assets/png/letter-v (1).png";
import hand from "./../../assets/png/wave.png";
import LoginForm from "./components/LoginForm";
import { IoIosClose } from "react-icons/io";
import CloseButton from "../../components/CloseButton/CloseButton";

const CreateAccount = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.left__container}>
        <div className={styles.info__container}>
          <h1>
            Digital Platform for result <span> analysis.</span>
          </h1>
          <p className={styles.left_sm_info}>
            You can visualize your succcess, by knowing your insight
          </p>
        </div>
      </div>

      <div className={styles.right__container}>
        <div className={styles.content__container}>
          <div className={styles.logo}>
            <img src={img} alt='' />
          </div>
          <div className={styles.info}>
            <h1>
              Hey, hello <img src={hand} alt='' className={styles.hand} />{" "}
            </h1>
            <p>Enter the information you entered while registering.</p>
          </div>
        </div>
        <div className={styles.form__container}>
          <LoginForm />
        </div>
      </div>
      <div className={styles.close__btn}>
        <CloseButton goto={"/"} />
      </div>
    </div>
  );
};

export default CreateAccount;
