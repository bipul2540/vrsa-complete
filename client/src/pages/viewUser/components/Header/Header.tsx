import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import styles from "./Header.module.css";
import burger from "./../../../../assets/png/menu.png";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
const Header = ({ searchVal, setSearchVal }) => {
  const [active, setActive] = useState(false);
  const handleMenuclick = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <div className={styles.main__header__contaienr}>
      <div className={styles.design__contianer}>
        <div className={styles.search__bar}>
          <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />
        </div>
        <div
          className={
            active ? `${styles.links}` : `${styles.links} ${styles.active}`
          }>
          <Link to={"/teacher/home/view-user/student/analyze"}>
            <button className={styles.button} role='button'>
              Analyze
            </button>
          </Link>
        </div>
        <div className={styles.menu__icon} onClick={handleMenuclick}>
          <img src={burger} alt='' className={styles.menu__img} />
        </div>
      </div>
    </div>
  );
};

export default Header;
