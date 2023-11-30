"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./carousel.module.css";

/* const images = [
  {
    id: "102",
    author: "Ben Moore",
    width: 4320,
    height: 3240,
    url: "https://unsplash.com/photos/pJILiyPdrXI",
    download_url: "https://picsum.photos/id/102/4320/3240",
  },
  {
    id: "103",
    author: "Ilham Rahmansyah",
    width: 2592,
    height: 1936,
    url: "https://unsplash.com/photos/DwTZwZYi9Ww",
    download_url: "https://picsum.photos/id/103/2592/1936",
  },
  {
    id: "104",
    author: "Dyaa Eldin",
    width: 3840,
    height: 2160,
    url: "https://unsplash.com/photos/2fl-ocJ5MOA",
    download_url: "https://picsum.photos/id/104/3840/2160",
  },
  {
    id: "106",
    author: "Arvee Marie",
    width: 2592,
    height: 1728,
    url: "https://unsplash.com/photos/YnfGtpt2gf4",
    download_url: "https://picsum.photos/id/106/2592/1728",
  },
  {
    id: "107",
    author: "Lukas Schweizer",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/9VWOr22LhVI",
    download_url: "https://picsum.photos/id/107/5000/3333",
  },
  {
    id: "108",
    author: "Florian Klauer",
    width: 2000,
    height: 1333,
    url: "https://unsplash.com/photos/t1mqA3V3-7g",
    download_url: "https://picsum.photos/id/108/2000/1333",
  },
  {
    id: "109",
    author: "Zwaddi",
    width: 4287,
    height: 2392,
    url: "https://unsplash.com/photos/YvYBOSiBJE8",
    download_url: "https://picsum.photos/id/109/4287/2392",
  },
]; */

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length; // Change this value based on the total number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);
      slideRef.current.scrollTo({
        left: slideRef.current.offsetWidth * nextSlide,
        behavior: "smooth",
      });
    }, 3000); // Change the time interval (in milliseconds) between slides

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  const slideRef = useRef(null);

  return (
    <div className={styles.slider}>
      {/*    <Link href="#slide-1" scroll={false}>
        1
      </Link>
      <Link href="#slide-2" scroll={false}>
        2
      </Link>
      <Link href="#slide-3" scroll={false}>
        3
      </Link>
      <Link href="#slide-4" scroll={false}>
        4
      </Link>
      <Link href="#slide-5" scroll={false}>
        5
      </Link> */}

      <div className={styles.slides} ref={slideRef}>
        {images.map((item, index) => (
          <div
            key={index + 1}
            id={`slide-${index + 1}`}
            name={`slide-${index + 1}`}
            style={{
              backgroundImage: `url(${item.image})`,
              scrollSnapAlign: "start",
              width: "100%",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
