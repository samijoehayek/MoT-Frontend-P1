"use client";
import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const CirclesImage = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="absolute z-10 w-[100%] h-[125%] top-[10%] md:w-[65%] md:h-[195%] md:top-[-45%] lg:w-[70%] lg:h-[190%] lg:top-[-45%] xl:w-[65%] xl:h-[205%] xl:top-[-50%] 2xl:w-[63%] 2xl:h-[235%] 2xl:top-[-70%]">
      <Image
        src={
          isMobile
            ? "/images/circle-mobile.png"
            : "/images/video-portal-full.png"
        }
        alt="Background"
        fill
        style={{ objectFit: "fill" }}
        quality={100}
      />
    </div>
  );
};

export default CirclesImage;
