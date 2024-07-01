import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const HeroBackground = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`absolute z-0 w-full min-h-screen`}>
      <Image
        src={isMobile?"/images/hero-mobile.png":"/images/hero-background.jpg"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  ) 
};

export default HeroBackground;
