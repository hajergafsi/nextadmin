import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <Image src="/logo-update.png" alt="logo" width={150} height={130} />
        <Image
          src="/marmara-belediye.jpeg"
          alt="logo"
          width={130}
          height={130}
        />
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} href={"/about"}>
          Süleyman Aksoy Hakkında
        </Link>
        <Link className={styles.link} href={"/whatWeDid"}>
          Neler Yaptık?
        </Link>
        <Link className={styles.link} href={"/whatWeDoing"}>
          Neler Yapıyoruz?
        </Link>
        <Link className={styles.link} href={"/gallery"}>
          Galeri
        </Link>
        <Link className={styles.link} href={"/contact"}>
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
