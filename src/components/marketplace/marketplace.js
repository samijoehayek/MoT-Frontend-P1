"use client";
import React from "react";
import Image from "next/image";
import PartFive from "@/components/part-five/part-five";
import { useMediaQuery } from "@mui/material";

const Marketplace = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={"flex flex-col py-20 md:flex-row md:px-12 md:py-20"}>
      <div
        className="mb-8 py-12
        flex flex-col text-white justify-center items-center text-center md:text-start md:flex-[4] md:px-8"
      >
        <PartFive />
      </div>
      <div className="flex flex-col items-center md:flex-[5] md:pb-48">
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
