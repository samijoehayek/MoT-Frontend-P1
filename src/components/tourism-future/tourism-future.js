"use client";
import React from "react";
import Image from "next/image";
import PartFour from "@/components/part-four/part-four";
import { useMediaQuery } from "@mui/material";
import RadialGradientGreen from "../radial-gradient-green/radial-gradient-green";

const TourismFuture = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`flex flex-col relative md:flex-row md:px-12 md:pb-40`}>
      <RadialGradientGreen />
      <div
        className={
          "flex flex-col text-white justify-center items-center mb-8 py-12 md:flex-[5] md:px-8"
        }
      >
        <PartFour />
      </div>
      <div className={`flex flex-col items-center md:flex-[5]`}>
        <Image
          src="/images/avatar-visuals.png"
          alt="Background"
          width={isMobile ? 360 : 450}
          height={400}
          quality={100}
        />
      </div>
    </div>
  );
};

export default TourismFuture;
