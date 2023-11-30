import React from "react";
import styles from "./project.module.css";
import Image from "next/image";
import OtherCard from "@/app/components/other/OtherCard";
import { fetchProjects, getProjectBySlug } from "@/app/lib/data";

const Page = async ({ params }) => {
  const { slug } = params;
  const item = await getProjectBySlug(slug);
  const { projects } = await fetchProjects("", 1);
  return (
    <div>
      <div className={styles.row}>
        <Image
          className={styles.image}
          src={item?.image}
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
          {[...projects]
            .filter((p) => p.slug !== slug)
            .map((el) => (
              <OtherCard
                image={el.image}
                key={el._id}
                title={el.title}
                description={el.desc}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
