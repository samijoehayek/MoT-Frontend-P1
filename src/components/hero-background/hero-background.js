import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const HeroBackground = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`absolute z-0`}>
      <Image
        src={isMobile?"/images/hero-mobile.png":"/images/hero-background.jpg"}
        alt="Background"
        height={1080}
        width={1920}
        quality={100}
      />
    </div>
  ) 
};

export default HeroBackground;
