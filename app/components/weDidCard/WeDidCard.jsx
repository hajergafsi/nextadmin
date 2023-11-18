import Image from "next/image";
import React from "react";
import styles from "./weDidCard.module.css";
import Link from "next/link";
import { limitStringTo15Words } from "@/app/lib/functions";

const WeDidCard = ({ img, title, date, desc, bigFormat, slug }) => {
  return (
    <div className={styles.weDidCard}>
      <div
        className={styles.row}
        style={bigFormat ? { flexWrap: "wrap" } : null}
      >
        <Image
          className={styles.image}
          src={img}
          height={bigFormat ? 450 : 150}
          width={bigFormat ? 600 : 150}
          alt="cover"
        />
        <div
          style={bigFormat ? { width: 550 } : null}
          className={styles.textContainer}
        >
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{limitStringTo15Words(desc || "")}</p>
        </div>
      </div>
      <Link href={`/home/news/${slug}`} className={styles.readMore}>
        Devamı...
      </Link>
      {/* <div className={styles.readMore}>Devamı...</div> */}
    </div>
  );
};

export default WeDidCard;
