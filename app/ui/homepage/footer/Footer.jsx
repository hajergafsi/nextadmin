import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { Facebook } from "@/app/icons/Facebook";
import { Twitter } from "@/app/icons/Twitter";
import { Instagram } from "@/app/icons/Instagram";
import { Youtube } from "@/app/icons/Youtube";
import { LinkedIn } from "@/app/icons/LinkedIn";
import { Tiktok } from "@/app/icons/Tiktok";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Image
        style={{ cursor: "pointer" }}
        src={"/footer.png"}
        alt=""
        width={450}
        height={100}
        className={styles.productImage}
      />
      <div className={styles.iconsContainer}>
        <span className={styles.icon}>
          <Facebook fill={"inherit"} />
        </span>
        <span className={styles.icon}>
          <Twitter fill={"inherit"} />
        </span>
        <span className={styles.icon}>
          <Instagram fill={"inherit"} />
        </span>
        <span className={styles.icon}>
          <Youtube fill={"inherit"} />
        </span>
        <span className={styles.icon}>
          <LinkedIn fill={"inherit"} />
        </span>
        <span className={styles.icon}>
          <Tiktok fill={"inherit"} />
        </span>
      </div>
      <p className={styles.copyright}>
        Alinur Aktaş - Tüm hakları saklıdır. © 2023
      </p>
    </div>
  );
};

export default Footer;
