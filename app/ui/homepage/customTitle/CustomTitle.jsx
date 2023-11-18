import React from "react";
import styles from "./customtitle.module.css";

const CustomTitle = ({ title }) => {
  return (
    <div className={styles.parallelogram}>
      <p>{title}</p>
    </div>
  );
};

export default CustomTitle;
