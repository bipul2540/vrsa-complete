import React from "react";
import styles from "./UserProfile.module.css";
import profile from "./../../assets/png/user.png";

const UserProfile = () => {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.roles__name}>Teacher Dashboard</h1>
      <h1 className={styles.small_device}>T</h1>
    </div>
  );
};

export default UserProfile;
