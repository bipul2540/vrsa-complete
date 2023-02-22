import React from "react";
import { Link } from "react-router-dom";
import styles from "./ImageLink.module.css";

type linkProps = {
  url: string;
  imgLink: any;
};

const ImageLink = ({ url, imgLink }: linkProps) => {
  return (
    <Link to={url} className={styles.link__img}>
      <img src={imgLink} alt='' className={styles.image} />{" "}
    </Link>
  );
};

export default ImageLink;
