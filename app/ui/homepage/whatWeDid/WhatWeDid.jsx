import React from "react";
import styles from "./whatWeDid.module.css";
import CustomTitle from "../customTitle/CustomTitle";
import { Card } from "../card/Card";

export const WhatWeDid = () => {
  return (
    <div className={styles.WhatWeDid}>
      <CustomTitle title={"Neler Yaptık?"} />
      <div className={styles.row}>
        <Card
          title={"KART16 SOSYAL DESTEK KARTI"}
          description={"Bursa il sınırları içerisinde ikamet eden ve sosya..."}
        />
        <Card
          title={"KART16 SOSYAL DESTEK KARTI"}
          description={"Bursa il sınırları içerisinde ikamet eden ve sosya..."}
        />
        <Card
          title={"KART16 SOSYAL DESTEK KARTI"}
          description={"Bursa il sınırları içerisinde ikamet eden ve sosya..."}
        />
      </div>
      <span className={styles.button}>Daha Fazla</span>
    </div>
  );
};
