import React from "react";
import styles from "./project.module.css";
import Image from "next/image";
import OtherCard from "@/app/components/other/OtherCard";
import { useParams } from "next/navigation";
import { fetchNews, getNewsBySlug } from "@/app/lib/data";

const Page = async ({ params }) => {
  const { slug } = params;
  const item = await getNewsBySlug(slug);
  const { news } = await fetchNews("", 1);

  return (
    <div>
      <div className={styles.row}>
        <Image
          className={styles.image}
          src={item?.image || "/card.jpg"}
          alt=""
          width={400}
          height={270}
        />
        <div>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.text}>{item.desc}</p>
          <div className="styles row"></div>
        </div>
      </div>
      <div className={styles.others}>
        <h3 className={styles.otherNews}>Diğer Haberler</h3>
        <div className={styles.rowTwo}>
          {[...news]
            .filter((nw) => nw.slug !== slug)
            .slice(0, 3)
            .map((elem) => (
              <OtherCard
                key={elem._id}
                slug={elem.slug}
                image={elem.image}
                title={elem.title}
                description={elem.desc}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
