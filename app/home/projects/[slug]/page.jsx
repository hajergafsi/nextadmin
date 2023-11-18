import React from "react";
import styles from "./project.module.css";
import Image from "next/image";
import OtherCard from "@/app/components/other/OtherCard";

const Page = () => {
  return (
    <div>
      <div className={styles.row}>
        <Image
          className={styles.image}
          src="/card.jpg"
          alt=""
          width={400}
          height={270}
        />
        <div>
          <h2 className={styles.title}>
            1050 Konutlar Kentsel Dönüşüm Projesi
          </h2>
          <p className={styles.text}>
            Mevcut yapı stoğu ile barındırdığı nüfus dikkate alınarak 1980
            lerde, o günün yönetmelik ve teknolojisine göre projelendirilerek
            inşa edilmiş, fiziksel ve ekonomik ömrünü tamamlayan, olası bir
            depremde can ve mal güvenliği açısından büyük risk oluşturan mevcut
            yapıların yıkılarak, gerçekleştirilmesi planlanan proje ile alanın
            deprem riskine karşı hazırlıklı hale getirilmesi, niteliksiz
            çevre/yaşam alanlarının nitelikli, sağlıklı, yaşanabilir ve
            sürdürülebilir kent parçası haline getirilermesi amaçlanmaktadır.
          </p>
          <div className="styles row"></div>
        </div>
      </div>
      <div className={styles.others}>
        <h3 className={styles.otherNews}>Diğer Haberler</h3>
        <div className={styles.rowTwo}>
          <OtherCard
            title={"1050 Konutlar Kentsel Dönüşüm Projesi"}
            description={
              "Mevcut yapı stoğu ile barındırdığı nüfus dikkate alınarak 1980 lerde, o günün yönetmelik ve teknolojisine göre proje..."
            }
          />
          <OtherCard
            title={"1050 Konutlar Kentsel Dönüşüm Projesi"}
            description={
              "Mevcut yapı stoğu ile barındırdığı nüfus dikkate alınarak 1980 lerde, o günün yönetmelik ve teknolojisine göre proje..."
            }
          />
          <OtherCard
            title={"1050 Konutlar Kentsel Dönüşüm Projesi"}
            description={
              "Mevcut yapı stoğu ile barındırdığı nüfus dikkate alınarak 1980 lerde, o günün yönetmelik ve teknolojisine göre proje..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
