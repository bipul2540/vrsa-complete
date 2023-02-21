import FrontHeader from "../../components/FrontHeader/FrontHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/LeftSection/ContactInfo";
import styles from "./Contactus.module.css";

export const Contactus = () => {
  return (
    <div>
      <FrontHeader />
      <div className={styles.main__conatiner}>
        <div className={styles.left__container}>
          <ContactInfo />
        </div>
        <div className={styles.right__container}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
