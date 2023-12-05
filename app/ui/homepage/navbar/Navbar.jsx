"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/about"}>Süleyman Aksoy Hakkında</Link>
          <Link href={"/whatWeDid"}>Neler Yaptık?</Link>
          <Link href={"/whatWeDoing"}>Neler Yapıyoruz?</Link>
          <Link href={"/gallery"}>Galeri</Link>
          <Link href={"/contact"}>İletişim</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
