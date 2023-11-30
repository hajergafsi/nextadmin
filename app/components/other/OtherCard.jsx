import React from "react";
import Image from "next/image";
import styles from "./other.module.css";
import { limitStringTo15Words } from "@/app/lib/functions";
import Link from "next/link";

const OtherCard = ({ title, description, image, slug }) => {
  return (
    <div className={styles.container}>
      <Link href={`/news/${slug}`}>
        <Image
          className={styles.image}
          src={image || "/card.jpg"}
          alt=""
          width={370}
          height={270}
        />
      </Link>
      <span className={styles.title}>{title}</span>
      <p className={styles.desc}>{limitStringTo15Words(description)}</p>
    </div>
  );
};

export default OtherCard;
