"use client";
import React from "react";
import { useMediaQuery } from "@mui/material";
import VideoCircle from "../../../public/images/video-portal-full.png";
import VideoCircleMobile from "../../../public/images/circle-mobile.png";
import Image from "next/image";

const CirclesImage = () => {
    const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="absolute z-10 w-[100%] h-[100%] top-[30%] sm:w-[570px] sm:h-[625px] sm:top-[50%] sm:left-[5%] md:w-[500px] md:h-[600px] md:top-[-10%] md:left-[0%] lg:w-[710px] lg:h-[830px] lg:top-[-20%] lg:left-[0%] xl:w-[935px] xl:h-[1025px] xl:top-[-30%] xl:left-[0%] 2xl:w-[1025px] 2xl:h-[1175px] 2xl:top-[-50%] 2xl:left-[0%]">
      <Image
        src={
          isMobile
            ? VideoCircleMobile
            : VideoCircle
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
