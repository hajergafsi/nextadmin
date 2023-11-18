import React from "react";
import styles from "./secondSection.module.css";
import Image from "next/image";

export const SecondSection = () => {
  return (
    <div className={styles.second}>
      <Image
        className={styles.image}
        src="/city.png"
        alt="alinur"
        width={650}
        height={650}
      />
      <div>
        <div className={styles.textSection}>
          <div className={styles.firstText}>
            <h2>Canla Başla Bursa..</h2>
            <h3>Hep beraber başardık.....</h3>
          </div>
          <div className={styles.textBox}>
            <h2>Hep Beraber Başardık...</h2>
            <h3>
              2017&apos;den bu yana tüm Bursalı vatandaşlarımızla beraber
              başardık.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
