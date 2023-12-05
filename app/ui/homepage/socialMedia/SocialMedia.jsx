"use client";
import React from "react";
import CustomTitle from "../customTitle/CustomTitle";
import inherited from "../gallery/gallery.module.css";
import {
  InstagramEmbed,
  FacebookEmbed,
  TwitterEmbed,
} from "react-social-media-embed";

const SocialMedia = () => {
  return (
    <div className={inherited.container}>
      <CustomTitle title={"Sosyal Media"} />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: 35,
          flexWrap: "wrap",
        }}
      >
        <InstagramEmbed
          url="https://www.instagram.com/p/C0TVibho67t/"
          width={550}
        />

        <TwitterEmbed
          url="https://x.com/suleymanaksoy_1/status/1732024064770711987?s=20"
          width={550}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
