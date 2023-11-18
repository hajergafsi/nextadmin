import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchNews } from "@/app/lib/data";
import { deleteNews } from "@/app/lib/actions";

const NewsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, news } = await fetchNews(q, page);
  /* console.log(news[0]); */
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/news/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Slug</td>
            <td>Created At</td>
            <td>Image</td>
            <td>Source</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.item}>{item.title}</div>
              </td>
              <td>{item.desc}</td>
              <td>{item.slug}</td>
              <td>{item.createdAt?.toString().slice(4, 16)}</td>
              <td>
                {item.img}
                <Image
                  src={item.image || "/noitem.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.itemImage}
                />
              </td>
              <td>{item.source}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/news/${item.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteNews}>
                    <input type="hidden" name="id" value={item.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default NewsPage;
