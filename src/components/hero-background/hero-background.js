import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const HeroBackground = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return isMobile ? (
    <div className={`absolute z-0`}>
      <Image
        src={"/images/hero-mobile.png"}
        alt="Background"
        height={1080}
        width={1920}
        quality={100}
      />
    </div>
  ) : (
    <div className={`absolute z-0`}>
      <Image
        src={"/images/hero-background.jpg"}
        alt="Background"
        height={1080}
        width={1920}
        quality={100}
      />
    </div>
  );
};

export default HeroBackground;
