import styles from "./HeroSection.module.css";
import img from "./../../../../assets/svg/img4.svg";
import Button from "../../../../components/Button/Button";

const HeroSection = () => {
  return (
    <main className={styles.main__container}>
      <div className={styles.hero__section}>
        <div className={styles.info}>
          <h1>
            Welcome to <span className={styles.logo}>vrsa,</span>
            <br />
            Platform for Analysing the Results of collage{" "}
            <span className={styles.info__student}>students.</span>
          </h1>
        </div>
        <div className={styles.buttons}>
          <Button
            name={"Login"}
            class_name={"primary_btn"}
            url={"/signin"}
          />
          <Button
            name={"Create Account"}
            class_name={"btn signin_btn btn-primary"}
            url={"/create-account"}
          />
        </div>
      </div>
      <div className={styles.hero__image}>
        <img className='image' src={img} height={500} width={600} alt='image' />
      </div>
    </main>
  );
};

export default HeroSection;
