import { Link } from "react-router-dom";
import styles from "./FrontHeader.module.css";

const FrontHeader = () => {
  return (
    <main className={styles.main__container}>
      <div className={styles.header__logo}>
        <Link to={"/"}>
          <h1 className={styles.logo}>
            vrs<span>a</span>{" "}
          </h1>
        </Link>
      </div>

      <div className={styles.nav__items}>
        <ul className={styles.lists}>
          <li className={styles.list__item}>
            <Link to={"/about"}>About us</Link>
          </li>

          <li className={styles.list__item}>
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default FrontHeader;
