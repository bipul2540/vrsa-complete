import { Link } from "react-router-dom";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/LeftSection/ContactInfo";
import styles from "./Contactus.module.css";
import fb from "./../../assets/png/facebook.png";
import tw from "./../../assets/png/twitter.png";
import ins from "./../../assets/png/instagram.png";
import ln from "./../../assets/png/linkedin.png";
import ImageLink from "../../components/ImageLink/ImageLink";
import SuccessMessage from "./components/successMessage/SuccessMessage";
import { useState } from "react";

export const Contactus = () => {
  const [isSuccessForm, setSuccessForm] = useState(false);
  return (
    <div>
      <FrontHeader />
      <div className={styles.main__conatiner}>
        <div className={styles.left__container}>
          <ContactInfo />
        </div>
        <div className={styles.right__container}>
          <ContactForm
            isSuccessForm={isSuccessForm}
            setSuccessForm={setSuccessForm}
          />

          <div className={styles.other__contact__option}>
            <p>or</p>
            <h1 className={styles.h1__tag}>Other contact options</h1>

            <div className={styles.image__links}>
              <ImageLink url='' imgLink={fb} />
              <ImageLink url='' imgLink={tw} />
              <ImageLink url='' imgLink={ins} />
              <ImageLink url='' imgLink={ln} />
            </div>
          </div>
        </div>
      </div>

      {isSuccessForm && (
        <SuccessMessage
          isSuccessForm={isSuccessForm}
          setSuccessForm={setSuccessForm}
        />
      )}
    </div>
  );
};
