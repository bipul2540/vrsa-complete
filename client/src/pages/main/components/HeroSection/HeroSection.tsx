import styles from "./HeroSection.module.css";
import heroImg from "./../../../../assets/png/hero-img1.png";
import img from "./../../../../assets/svg/img4.svg";
import figImg from './../../../../assets/png/Group 7.png'
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
        <img className='image' src={figImg} height={500} width={600} alt='image' />
      </div>
    </main>
  );
};

export default HeroSection;

// import { Container, Row, Col } from "reactstrap";

// const HeroSection = () => {
//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg='6' md='6'>
//             <div className={styles.hero__content}>
//               <h2 className={`${styles.hero__title} mb-4`}>
//                 Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
//               </h2>
//               <p className='mb-5'>
//                 Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
//                 Aut saepe voluptatum earum delectus <br /> deserunt id iste,
//                 quas officiis et repellat!
//               </p>
//             </div>
//             <div className={styles.search}>
//               <input type='text' placeholder='Search' />
//               <button className='btn'>Search</button>
//             </div>
//           </Col>

//           <Col lg='6' md='6'>
//             <img src={heroImg} alt='' className='w-100 hero__img' />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default HeroSection;

