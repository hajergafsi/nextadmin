import React from "react";
import styles from "./contact.module.css";
import CustomTitle from "../../ui/homepage/customTitle/CustomTitle";

const page = () => {
  return (
    <div className={styles.contactUs}>
      <CustomTitle title={"İletişim"} />
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="name">İsim:</label>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="surname">Soyisim:</label>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-posta:</label>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="">Mesajınız:</label>
          <textarea className={styles.area} type="text" />
        </div>
        <div className={styles.formGroup} style={{ width: "76%" }}>
          <button className={styles.btn}>Gönder</button>
        </div>
      </div>
    </div>
  );
};

export default page;
