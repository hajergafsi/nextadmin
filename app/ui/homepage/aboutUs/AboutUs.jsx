import React from "react";
import CustomTitle from "../customTitle/CustomTitle";
import inherited from "../gallery/gallery.module.css";
/* import { useAppSelector } from "@/app/redux/store"; */
import inheritCard from "../whatWeDid/whatWeDid.module.css";
import { Card } from "../card/Card";
import Link from "next/link";

const AboutUs = ({ news }) => {
  /*  const { news } = useAppSelector((state) => state.news); */
  console.log(news);
  return (
    <div className={inherited.container}>
      <CustomTitle title={"Basında Biz"} />
      <div
        className={inheritCard.row}
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...news].slice(0, 4).map((item) => (
          <Card
            key={item._id}
            title={item.title}
            image={item.image}
            description={item.desc}
            slug={item.slug}
          />
        ))}
      </div>
      <Link href={"/home/news"} className={inheritCard.button}>
        Daha Fazla
      </Link>
    </div>
  );
};

export default AboutUs;
