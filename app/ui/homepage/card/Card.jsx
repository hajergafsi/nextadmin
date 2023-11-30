import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { limitStringTo15Words } from "@/app/lib/functions";
import Link from "next/link";

export const Card = ({ title, description, image, slug, type }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cover} />
      <Image
        className={styles.image}
        src={image || "/card.jpg"}
        alt=""
        width={350}
        height={250}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {limitStringTo15Words(description || "")}
      </p>
      <Link
        href={`/${type === "news" ? "news" : "projects"}/${slug}`}
        className={styles.button}
      >
        Devamı...
      </Link>
    </div>
  );
};
