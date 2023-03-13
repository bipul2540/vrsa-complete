import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import styles from "./UserDetailPage.module.css";

const ContactMe = ({ students }) => {
  return (
    <div className={styles.contactus}>
      <h1 className={styles.contactus__header}>Contact Info</h1>

      <div className={styles.contact__body}>
        <div className={styles.con__iocn}>
          <MdEmail className={styles.contact__iocn} color='#2D7DD2' />
          <h1>{students["email"]}</h1>
        </div>
        <div className={styles.con__iocn}>
          <BsTelephoneFill className={styles.contact__iocn} color='#4F1271' />
          <h1>+91 {students["phone"] ? students["phone"] : "---"}</h1>
        </div>

        <div className={styles.con__iocn}>
          <ImLocation color='#23967F' className={styles.contact__iocn} />
          <h1>
            {students["address"] ? students["address"].line1 : "--"},
            {students["address"] ? students["address"].city : "--"} <br />{" "}
            {students["address"] ? students["address"].state : "--"}, India{" "}
            <br />{" "}
            {students["address"] ? students["address"].postal_code : "--"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
