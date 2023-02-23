import React from "react";
import styles from "./SideBar.module.css";
import { FaUserPlus, FaHouseUser, FaUsers } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";
import { CgFolderRemove } from "react-icons/cg";
import { Link } from "react-router-dom";

type props = {
  links: any;
};
const SideBar = ({ links }: props) => {
  const { home, adduser, viewuser, analyze, remove } = links;
  return (
    <div className={styles.main__container}>
      <div className={styles.sidebar__items}>
        <div className={styles.item}>
          <Link to={home} className={styles.link}>
            <h1 className={styles.name}>Home</h1>
            <FaHouseUser className={styles.icon} style={{ color: "59c6fd" }} />
          </Link>
        </div>
        <div className={styles.item}>
          <Link to={adduser} className={styles.link}>
            <h1 className={styles.name}>Add</h1>
            <FaUserPlus className={styles.icon} style={{ color: "4ECDC4" }} />
          </Link>
        </div>
        <div className={styles.item}>
          <Link to={viewuser} className={styles.link}>
            <h1 className={styles.name}>View</h1>
            <FaUsers className={styles.icon} color='731DD8' />
          </Link>
        </div>
        <div className={styles.item}>
          <Link to={analyze} className={styles.link}>
            <h1 className={styles.name}>Analyze</h1>
            <FcComboChart className={styles.icon} />
          </Link>
        </div>
        <div className={styles.item}>
          <Link to={remove} className={styles.link}>
            <h1 className={styles.name}>remove</h1>
            <CgFolderRemove
              className={styles.icon}
              style={{ color: "e71d36" }}
            />
          </Link>
        </div>
      </div>
      <div className='close__sidebar__icon'></div>
    </div>
  );
};

export default SideBar;
