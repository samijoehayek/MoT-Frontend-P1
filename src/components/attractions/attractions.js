import React from "react";
import PartOne from "@/components/part-one/part-one";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Attractions = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`flex flex-col pt-28 md:flex-row md:py-20 md:px-12`}>
      <div className={`flex flex-col px-8 py-20 md:flex-[3]`}>
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
