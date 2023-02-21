import styles from "./CreateAccount.module.css";
import student from "./../../assets/png/graduate-cap.png";
import CreateAccountForm from "./components/createAccountForm/CreateAccountForm";
import img from "./../../assets/png/createback.png";
import { Link } from "react-router-dom";
import CloseButton from "../../components/CloseButton/CloseButton";
import Logo from "../../components/Logo/Logo";
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
        <div className={styles.image}>
          <img src={img} alt='' width={200} />
        </div>
        <div className='form'>
          <CreateAccountForm />
        </div>

        <div className={styles.login__option}>
          <p>
            Already have an account? <Link to={"/signin"}>Sign in</Link>{" "}
          </p>
        </div>

        <div className={styles.close__btn}>
          <CloseButton goto='/' />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
