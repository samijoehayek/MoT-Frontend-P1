import React from "react";
import PartOne from "@/components/part-one/part-one";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Attractions = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative w-full flex flex-col pt-28 md:flex-row md:justify-end md:py-0">
      <div className={"absolute opacity-60 z-0 inset-0 top-12 left-64 md:top-8 md:left-56"}>
        <Image
          src="/images/number-1.png"
          alt="Background"
          width={isMobile ? 140 : 180}
          height={180}
          quality={100}
        />
      </div>
      <PartOne />
      <div className="flex flex-row md:flex-col py-20 md:py-0">
        <Image
          src="/images/new-map.png"
          alt="Background"
          width={isMobile ? 500 : 1100}
          height={500}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Attractions;
