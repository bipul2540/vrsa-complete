import { IoClose } from "react-icons/io5";
import styles from "./ShowError.module.css";
type errProps = {
  err_msg: string;
  setError: any;
  email: string;
};

const ShowError = ({ err_msg, email, setError }: errProps) => {
  setTimeout(() => {
    setError(false);
  }, 40000);

  return (
    <div className={styles.main__container}>
      <div className={styles.design}></div>
      <div className={styles.content__container}>
        <h1 className={styles.message__box}>
          {email && (
            <span>
              {email}
              <br />
            </span>
          )}
          {err_msg}
        </h1>
        <IoClose
          className={styles.close__icon}
          onClick={() => setError(false)}
        />
      </div>
    </div>
  );
};

export default ShowError;
