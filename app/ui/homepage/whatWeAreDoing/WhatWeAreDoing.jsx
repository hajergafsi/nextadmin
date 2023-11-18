import React from "react";
import { Card } from "../card/Card";
import styles from "../whatWeDid/whatWeDid.module.css";
import extraStyles from "./whatWeAreDoing.module.css";
import CustomTitle from "../customTitle/CustomTitle";

const WhatWeAreDoing = () => {
  return (
    <div className={`${styles.WhatWeDid} ${extraStyles.bg}`}>
      <CustomTitle title={"Neler Yapıyoruz?"} />
      <div className={styles.row}>
        <Card
          title={"1050 Konutlar Kentsel Dönüşüm Projesi"}
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

export default WhatWeAreDoing;
