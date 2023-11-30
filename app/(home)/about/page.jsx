import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const page = () => {
  return (
    <div className={styles.row}>
      <Image src={"/12.jpg"} alt="fotograf" width={700} height={450} />
      <div>
        <h2 className={styles.title}>Süleyman Aksoy Hakkında</h2>
        <p className={styles.text}>
          Süleyman AKSOY 25.08.1965 yılında Trabzon’un Sürmene ilçesinde doğdu.
          İlköğrenimimi Hasan Tahsin Kırali ilkokulunda; orta öğrenim ve lise
          öğrenimimi ise Sürmene Lisesi&apos;nde tamamladı. 1989 yılında
          Karadeniz Teknik Üniversitesi Jeoloji Mühendisliği bölümünden mezun
          oldu. Evli ve 3 çocuk babası olan AKSOY&apos;un mesleği için bir
          mermer cenneti olan Saraylar biçilmiş kaftandı. Ailesi ile birlikte
          Marmara Adası Saraylar Beldesi&apos;nde mesleğini icra etmek için 18
          yıl önce geldi. İki dönem AK Parti Meslis Üyeliği yaptı. 2010 yılı
          sonunda Belediye Başkanı Güner YAVUZ&apos;un vefatının ardından Meclis
          üyelerinden tam destek alarak Belediye Başkanı oldu. Beldedeki
          tamamlanamamış birçok projeyi ekibi ile 3,5 yıl gibi kısa sürede
          tamamladı. &apos;&apos;Yaptıklarım yapacaklarımın
          teminatıdır&apos;&apos; sloganı ile tüm ada için özveri ile
          çalışacağını belirten AKSOY Cennet Köşesine benzettiği adaları tüm
          ülkeye tanıtacak projelerin altına imza atacağınında sözünü verdi.
          2014 yılında gerçekleşen seçimde tüm Marmara Adalarına başkan adayı
          olarak gösterildi. Ekinlik, Avşa ve Marmara olmak üzere toplam üç
          adalar halkının takdiriyle tekrar seçilerek başkanlık görevine Marmara
          Adalar Belediye Başkanı olarak devam etmektedir. SÜLEYMAN AKSOY
          Jeoloji Mühendisi
        </p>
      </div>
    </div>
  );
};

export default page;
