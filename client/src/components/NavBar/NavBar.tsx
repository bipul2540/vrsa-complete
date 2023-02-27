import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const NavBar = () => {
  const handleLogoutClick = () => {
    cookies.remove("auth_token");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <div className={styles.main__container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav__options}>
        <div className={styles.navLink__label}>
          <Link to='/teacher/profile' className={styles.icon__div_link}>
            <FaUserAlt className={styles.icon} />
          </Link>
          <p className={styles.hover__label}>profile</p>
        </div>
        <div className={styles.navLink__label} onClick={handleLogoutClick}>
          <Link to='' className={`${styles.icon__div_link} ${styles.logout}`}>
            <HiOutlineLogout className={styles.logout__icon} />
          </Link>
          <p className={styles.hover__label}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
