import React from "react";
import UpperBanner from "../ui/homepage/upperBanner/UpperBanner";
import { SecondSection } from "../ui/homepage/secondSection/SecondSection";
import { WhatWeDid } from "../ui/homepage/whatWeDid/WhatWeDid";
import WhatWeAreDoing from "../ui/homepage/whatWeAreDoing/WhatWeAreDoing";
import GallerySection from "../ui/homepage/gallery/Gallery";
import AboutUs from "../ui/homepage/aboutUs/AboutUs";
import { fetchNews, fetchSlider } from "../lib/data";
import styles from "../ui/homepage/homepage.module.css";
import Slider from "../ui/homepage/slider/Slider";
import SocialMedia from "../ui/homepage/socialMedia/SocialMedia";

const Home = async () => {
  const { count, news } = await fetchNews("", 1);
  const { sliders } = await fetchSlider("", 1);
  return (
    <div>
      <Slider images={sliders} />
      <UpperBanner />
      <SecondSection />
      <WhatWeDid />
      <div className={styles.line} />
      <WhatWeAreDoing />
      <GallerySection />
      <AboutUs news={news} />
      <SocialMedia />
    </div>
  );
};

export default Home;
