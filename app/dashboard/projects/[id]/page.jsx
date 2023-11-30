import { updateProject } from "@/app/lib/actions";
import { fetchProject } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const item = await fetchProject(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={item.image} alt="" fill />
        </div>
        {item.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProject} className={styles.form}>
          <input type="hidden" name="id" value={item.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={item?.title} />
          <label>Fotograf linki</label>
          <input type="text" name="image" placeholder={item?.image} />
          <label>Zaman</label>
          <select name="time" id="time" value={item?.time}>
            <option value={"past"}>Geçmiş</option>
            <option value={"present"}>Güncel</option>
          </select>
          <label>Slug</label>
          <input type="text" name="slug" placeholder={item?.slug} />
          <label>Description</label>

          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={item.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
