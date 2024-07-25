"use client";
import React, {useContext} from "react";
import Image from "next/image";
import HeroBackgroundImage from "../../../public/images/hero-background.jpg";
import HeroBackgroundImageArabic from "../../../public/images/hero-bg-arabic.png";
import HeroBackgroundImageMobile from "../../../public/images/hero-mobile.png";
import { useMediaQuery } from "@mui/material";
import { AppContext } from "../../app/appContext";

const HeroBackground = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { english } = useContext(AppContext);

  return (
    <div className={`absolute z-0 w-full min-h-[110%]`}>
      <Image
        src={
          isMobile
            ? HeroBackgroundImageMobile
            : english
            ? HeroBackgroundImage
            : HeroBackgroundImageArabic
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
