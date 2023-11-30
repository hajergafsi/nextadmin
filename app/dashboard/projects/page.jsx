import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProjects } from "@/app/lib/data";
import { deleteProject } from "@/app/lib/actions";

const NewsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, projects } = await fetchProjects(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a project..." />
        <Link href="/dashboard/projects/add">
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
            <td>Time</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {projects.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.item}>{item.title}</div>
              </td>
              <td>{item.desc}</td>
              <td>{item.slug}</td>
              <td>{item.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <Image
                  src={item.image || "/noitem.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.itemImage}
                />
              </td>
              <td>{item.time}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/projects/${item.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProject}>
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
