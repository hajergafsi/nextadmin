"use client";
import { useState } from "react";
import { addNews, addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddNewsPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [filePath, setFilePath] = useState("");
  console.log(filePath);
  const handleUpload = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setFilePath(`${data.fileUrl}`);
          alert("File uploaded successfully");
          console.log("File uploaded successfully:", data);
        } else {
          console.error("Error uploading file");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.warn("No file selected");
    }
  };
  return (
    <div className={styles.container}>
      <form action={addNews} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="slug" name="slug" required />
        <input
          type="text"
          name="image"
          placeholder="image"
          style={{ display: "none" }}
          defaultValue={filePath}
        />
        <div className={styles.imgUpload}>
          <input type="file" placeholder="Image" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <input type="text" placeholder="source" name="source" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewsPage;
