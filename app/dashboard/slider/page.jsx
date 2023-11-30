import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchSlider } from "@/app/lib/data";
import { deleteNews } from "@/app/lib/actions";

const NewsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, sliders } = await fetchSlider(q, page);
  console.log(sliders);
  /* console.log(news[0]); */
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/slider/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.row}>
        {sliders.map((item) => (
          <div key={item.id} className={styles.item}>
            <Image
              src={item.image || "/noitem.jpg"}
              alt=""
              width={300}
              height={300}
              className={styles.itemImage}
            />
            <form action={deleteNews}>
              <input type="hidden" name="id" value={item.id} />
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default NewsPage;
