import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import styles from "./PageLoader.module.css";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const PageLoader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#2f74df");
  return (
    <div className={styles.modal__container}>
      <div className={styles.main__container}>
        <h1>Sit tight, we're getting things ready for you....</h1>
        <HashLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={40}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    </div>
  );
};

export default PageLoader;
