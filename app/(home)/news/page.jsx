import React from "react";
import CustomTitle from "@/app/ui/homepage/customTitle/CustomTitle";
import styles from "../whatWeDid/whatWeDid.module.css";
import WeDidCard from "@/app/components/weDidCard/WeDidCard";
import { fetchNews } from "@/app/lib/data";

const Page = async () => {
  const { count, news } = await fetchNews("", 1);
  return (
    <div className={styles.container}>
      <CustomTitle title={"Basında Biz"} />
      <div className={styles.cardContainer}>
        <WeDidCard
          type={"news"}
          img={news[0].image}
          bigFormat={true}
          slug={news[0].slug}
          title={news[0].title}
          desc={news[0].desc}
          date={new Date(news[0].createdAt).toDateString()}
        />
        <div>
          {news.slice(1, 3).map((item) => (
            <WeDidCard
              type={"news"}
              key={item._id}
              img={item.image}
              slug={item.slug}
              bigFormat={false}
              title={item.title}
              desc={item.desc}
              date={new Date(item.createdAt).toDateString()}
            />
          ))}
        </div>
      </div>
      <div className={styles.cardContainer}>
        {news.slice(3).map((item) => (
          <WeDidCard
            type={"news"}
            key={item._id}
            img={item.image}
            slug={item.slug}
            bigFormat={false}
            title={item.title}
            desc={item.desc}
            date={new Date(item.createdAt).toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
