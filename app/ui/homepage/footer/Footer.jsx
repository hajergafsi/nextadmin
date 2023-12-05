import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { Facebook } from "@/app/icons/Facebook";
import { Twitter } from "@/app/icons/Twitter";
import { Instagram } from "@/app/icons/Instagram";
import { Youtube } from "@/app/icons/Youtube";
import { LinkedIn } from "@/app/icons/LinkedIn";
import { Tiktok } from "@/app/icons/Tiktok";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Image
        style={{ cursor: "pointer" }}
        src={"/marmara-belediye.jpeg"}
        alt=""
        width={100}
        height={100}
        className={styles.productImage}
      />
      <div className={styles.iconsContainer}>
        <Link
          href={"https://www.facebook.com/suleymanaksoy972"}
          className={styles.icon}
        >
          <Facebook fill={"inherit"} />
        </Link>
        <Link
          href={
            "https://twitter.com/suleymanaksoy_1?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Asuleymanaksoy_1%7Ctwcon%5Es1_c1"
          }
          className={styles.icon}
        >
          <Twitter fill={"inherit"} />
        </Link>
        <Link
          href={"https://www.instagram.com/suleymanaksoy.sa"}
          className={styles.icon}
        >
          <Instagram fill={"inherit"} />
        </Link>
        <Link
          href={
            "https://www.youtube.com/channel/UC82fryk8KPF8m2NX7F7Xrhw/videos"
          }
          className={styles.icon}
        >
          <Youtube fill={"inherit"} />
        </Link>
      </div>
      <p className={styles.copyright}>
        Suleyman Aksoy - Tüm hakları saklıdır. © 2023
      </p>
    </div>
  );
};

export default Footer;
