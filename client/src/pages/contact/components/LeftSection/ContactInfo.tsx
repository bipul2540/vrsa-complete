import styles from "./ContactInfo.module.css";
import image from "./../../../../assets/svg/contact.svg";

const ContactInfo = () => {
  return (
    <div className={styles.left__container}>
      <div className={styles.left__info}>
        <span className={styles.info__effect}>
          Thanks for showing support,
          <br />
        </span>
        <p>we love to onboard you on our platform</p>
      </div>
      <div className={styles.left__img}>
        <img src={image} />
      </div>
    </div>
  );
};

export default ContactInfo;
