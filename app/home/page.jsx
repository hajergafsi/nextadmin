import React from "react";
import UpperBanner from "../ui/homepage/upperBanner/UpperBanner";
import { SecondSection } from "../ui/homepage/secondSection/SecondSection";
import { WhatWeDid } from "../ui/homepage/whatWeDid/WhatWeDid";
import WhatWeAreDoing from "../ui/homepage/whatWeAreDoing/WhatWeAreDoing";
import GallerySection from "../ui/homepage/gallery/Gallery";
import AboutUs from "../ui/homepage/aboutUs/AboutUs";
import { fetchNews } from "../lib/data";
import styles from "../ui/homepage/homepage.module.css";

const Home = async () => {
  const { count, news } = await fetchNews("", 1);
  return (
    <div>
      <UpperBanner />
      <SecondSection />
      <WhatWeDid />
      <div className={styles.line} />
      <WhatWeAreDoing />
      <GallerySection />
      <AboutUs news={news} />
    </div>
  );
};

export default Home;
