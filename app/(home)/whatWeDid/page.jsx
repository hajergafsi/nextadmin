import CustomTitle from "@/app/ui/homepage/customTitle/CustomTitle";
import React from "react";
import styles from "./whatWeDid.module.css";
import WeDidCard from "@/app/components/weDidCard/WeDidCard";
import { fetchProjects } from "@/app/lib/data";
const Page = async () => {
  const { projects } = await fetchProjects("", 1);
  return (
    <div className={styles.container}>
      <CustomTitle title={"Neler Yaptik"} />
      <div className={styles.cardContainer}>
        <WeDidCard
          type={"projects"}
          slug={[...projects].find((item) => item.time === "past").slug}
          img={
            [...projects].find((item) => item.time === "past")?.image ||
            "/card.jpg"
          }
          bigFormat={true}
          title={
            [...projects].find((item) => item.time === "past")?.title || ""
          }
          desc={[...projects].find((item) => item.time === "past")?.desc}
          date={new Date(
            [...projects].find((item) => item.time === "past")?.createdAt
          ).toDateString()}
        />
        <div>
          {[...projects]
            .filter((item) => item.time === "past")
            .slice(1, 3)
            .map((element) => (
              <WeDidCard
                type={"projects"}
                slug={element.slug}
                key={element._id}
                img={element.image}
                bigFormat={false}
                title={element.title}
                desc={element.desc}
                date={new Date(element.createdAt).toDateString()}
              />
            ))}
        </div>
      </div>
      <div className={styles.cardContainer} style={{ paddingTop: 0 }}>
        {[...projects]
          .filter((item) => item.time === "past")
          .slice(3)
          .map((element) => (
            <WeDidCard
              type={"projects"}
              slug={element.slug}
              key={element._id}
              img={element.image}
              bigFormat={false}
              title={element.title}
              desc={element.desc}
              date={new Date(element.createdAt).toDateString()}
            />
          ))}
      </div>
    </div>
  );
};

export default Page;
