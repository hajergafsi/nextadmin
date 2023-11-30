import React from "react";
import { Card } from "../card/Card";
import styles from "../whatWeDid/whatWeDid.module.css";
import extraStyles from "./whatWeAreDoing.module.css";
import CustomTitle from "../customTitle/CustomTitle";
import { fetchProjects } from "@/app/lib/data";

const WhatWeAreDoing = async () => {
  const { count, projects } = await fetchProjects("", 1);
  return (
    <div className={`${styles.WhatWeDid} ${extraStyles.bg}`}>
      <CustomTitle title={"Neler Yapıyoruz?"} />
      <div className={styles.row}>
        {[...projects]
          .filter((it) => it.time === "present")
          .slice(0, 4)
          .map((item) => (
            <Card
              type={"project"}
              slug={item.slug}
              image={item.image}
              key={item._id}
              title={item.title}
              description={
                "Bursa il sınırları içerisinde ikamet eden ve sosya..."
              }
            />
          ))}
        {/* <Card
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
        /> */}
      </div>
      <span className={styles.button}>Daha Fazla</span>
    </div>
  );
};

export default WhatWeAreDoing;
