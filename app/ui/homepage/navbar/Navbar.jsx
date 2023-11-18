import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/home"} className={styles.logo}>
        <Image src="/logo-update.png" alt="facebook" width={150} height={130} />
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} href={"/home/about"}>
          Süleyman Aksoy Hakkında
        </Link>
        <Link className={styles.link} href={"/home/whatWeDid"}>
          Neler Yaptık?
        </Link>
        <Link className={styles.link} href={"/home/whatWeDoing"}>
          Neler Yapıyoruz?
        </Link>
        <Link className={styles.link} href={"/home/gallery"}>
          Galeri
        </Link>
        <Link className={styles.link} href={"/home/contact"}>
          İletişim
        </Link>
      </div>
      <div>
        <input
          placeholder="Ara.."
          className={styles.inputContainer}
          type="text"
        />
      </div>
    </div>
  );
};

export default Navbar;
