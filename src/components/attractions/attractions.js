"use client"; 
import React from "react";
import PartOne from "@/components/part-one/part-one";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Attractions = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative w-full flex flex-col pt-28 md:justify-center md:pb-20 md:pt-24 md:px-12 xl:flex-row">
      <PartOne />
      <div className="flex flex-row md:flex-col py-16 md:py-0">
        <Image
          src="/images/new-map.png"
          alt="Background"
          width={isMobile ? 500 : 1050}
          height={500}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Attractions;
