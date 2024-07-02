"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const HeroBackground = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className={`absolute z-0 w-full min-h-screen`}>
      <Image
        src={
          isMobile ? "/images/hero-mobile.png" : "/images/hero-background.jpg"
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
