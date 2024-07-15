"use client";
import React from "react";
import Image from "next/image";
import HeroBackgroundImage from "../../../public/images/hero-background.jpg";
import HeroBackgroundImageMobile from "../../../public/images/hero-mobile.png";
import { useMediaQuery } from "@mui/material";

const HeroBackground = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className={`absolute z-0 w-full min-h-[110%]`}>
      <Image
        src={
          isMobile ? HeroBackgroundImageMobile : HeroBackgroundImage
        }
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
      />
    </div>
  );
};

export default HeroBackground;
