import React from "react";
import styles from "./upperbanner.module.css";
import Image from "next/image";

const UpperBanner = () => {
  return (
    <div className={styles.upperBanner}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          İşimiz, Gücümüz Var, Bursa&apos;ya Sözümüz Var.
        </h1>
        <span className={styles.hashTag}>#BursaİçinCanlaBaşla</span>
      </div>
      <div className={styles.logo}>
        <Image src="/12.png" alt="alinur" width={480} height={520} />
      </div>
    </div>
  );
};

export default UpperBanner;
