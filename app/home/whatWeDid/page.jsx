import CustomTitle from "@/app/ui/homepage/customTitle/CustomTitle";
import React from "react";
import styles from "./whatWeDid.module.css";
import WeDidCard from "@/app/components/weDidCard/WeDidCard";
const Page = () => {
  return (
    <div className={styles.container}>
      <CustomTitle title={"Neler Yaptik"} />
      <div className={styles.cardContainer}>
        <WeDidCard
          img={"/card.jpg"}
          bigFormat={true}
          title={"KART16 SOSYAL DESTEK KARTI"}
          desc={
            "Bursa il sınırları içerisinde ikamet eden ve sosyal desteğe ihtiyaç duyan kişi ve aileler için; gıda, giysi, temizlik malzemesi gibi te..."
          }
          date={new Date().toDateString()}
        />
        <div>
          <WeDidCard
            img={"/card.jpg"}
            bigFormat={false}
            title={"KART16 SOSYAL DESTEK KARTI"}
            desc={
              "Bursa il sınırları içerisinde ikamet eden ve sosyal desteğe ihtiyaç duyan kişi ve aileler için; gıda, giysi, temizlik malzemesi gibi te..."
            }
            date={new Date().toDateString()}
          />
          <WeDidCard
            img={"/card.jpg"}
            bigFormat={false}
            title={"KART16 SOSYAL DESTEK KARTI"}
            desc={
              "Bursa il sınırları içerisinde ikamet eden ve sosyal desteğe ihtiyaç duyan kişi ve aileler için; gıda, giysi, temizlik malzemesi gibi te..."
            }
            date={new Date().toDateString()}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
