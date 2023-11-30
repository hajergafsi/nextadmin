import Navbar from "../ui/homepage/navbar/Navbar";
import styles from "../ui/homepage/homepage.module.css";
import Footer from "../ui/homepage/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
