import React from "react";
import Image from "next/image";
import PartFour from "@/components/part-four/part-four";
import { useMediaQuery } from "@mui/material";

const TourismFuture = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`flex ${isMobile ? "flex-col" : "md:flex-row px-12 pb-40"}`}>
      <div className={`${isMobile?"mb-8 py-12":"flex-[5] px-8"} flex flex-col  text-white justify-center items-center`}>
        <PartFour />
      </div>
      <div className={`${
          isMobile ? "" : "flex-[5]"
        } flex flex-col items-center`}>
        <Image
          src="/images/avatar-visuals.png"
          alt="Background"
          width={isMobile?360:450}
          height={400}
          quality={100}
        />
      </div>
    </div>
  );
};

export default TourismFuture;
