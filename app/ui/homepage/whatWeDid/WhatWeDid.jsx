import React from "react";
import styles from "./whatWeDid.module.css";
import CustomTitle from "../customTitle/CustomTitle";
import { Card } from "../card/Card";
import { fetchProjects } from "@/app/lib/data";

export const WhatWeDid = async () => {
  const { count, projects } = await fetchProjects("", 1);
  return (
    <div className={styles.WhatWeDid}>
      <CustomTitle title={"Neler Yaptık?"} />
      <div className={styles.row}>
        {[...projects]
          .filter((it) => it.time === "past")
          .slice(0, 4)
          .map((item) => (
            <Card
              type={"project"}
              image={item.image}
              key={item._id}
              title={item.title}
              slug={item.slug}
              description={
                "Bursa il sınırları içerisinde ikamet eden ve sosya..."
              }
            />
          ))}
        {/* <Card
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
        /> */}
      </div>
      <span className={styles.button}>Daha Fazla</span>
    </div>
  );
};
