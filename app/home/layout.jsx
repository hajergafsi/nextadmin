import Navbar from "../ui/homepage/navbar/Navbar";
import styles from "../ui/homepage/homepage.module.css";
import UpperBanner from "../ui/homepage/upperBanner/UpperBanner";
import { SecondSection } from "../ui/homepage/secondSection/SecondSection";
import { WhatWeDid } from "../ui/homepage/whatWeDid/WhatWeDid";
import WhatWeAreDoing from "../ui/homepage/whatWeAreDoing/WhatWeAreDoing";
import Gallery from "../ui/homepage/gallery/Gallery";
import AboutUs from "../ui/homepage/aboutUs/AboutUs";
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
