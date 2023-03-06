import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./ShowError.module.css";
type errProps = {
  err_msg: string;
  setError: any;
  email: string;
  link: any;
};

const ShowError = ({ err_msg, email, setError, link }: errProps) => {
  setTimeout(() => {
    setError(false);
  }, 400000);

  return (
    <div className={styles.main__container}>
      <div className={styles.design}></div>
      <div className={styles.content__container}>
        <h1 className={styles.message__box}>
          {email && (
            <span className={styles.field}>
              {email}
              <br />
            </span>
          )}
          {err_msg}

          <Link to={link} className={styles.link__desing}>
            Click here
          </Link>
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
