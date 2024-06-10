import React from "react";
import PartOne from "@/components/part-one/part-one";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Attractions = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`flex ${isMobile ? "flex-col" : "md:flex-row py-20 px-12"}`}>
      <div className={`${isMobile ? "" : "flex-[3]"} flex flex-col px-8 py-20 text-white`}>
        <PartOne />
      </div>
      <div className={`${isMobile ? "mb-24" : "flex-[5]"} flex flex-col`}>
        <Image
          src="/images/new-map.png"
          alt="Background"
          width={isMobile?390:1000}
          height={500}
          quality={100}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Attractions;
