import React from "react";
import Image from "next/image";
import PartFive from "@/components/part-five/part-five";
import { useMediaQuery } from "@mui/material";

const Marketplace = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col py-20" : "md:flex-row px-12 py-20"
      }`}
    >
      <div
        className={`${
          isMobile ? "mb-8 py-12 text-center" : "flex-[4] px-8"
        } flex flex-col text-white justify-center items-center`}
      >
        <PartFive />
      </div>
      <div
        className={`${
          isMobile ? "" : "flex-[5] pb-48"
        } flex flex-col items-center`}
      >
        <Image
          src="/images/villa.png"
          alt="Background"
          width={700}
          height={500}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Marketplace;
