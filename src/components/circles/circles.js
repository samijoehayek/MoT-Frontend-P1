"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Circles = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className={"relative w-full"}>
      <div className="absolute inset-0 opacity-80">
        <Image
          src={isMobile ? "/images/circles-mobile.png" : "/images/circles.png"}
          alt="Background"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="flex relative z-10 items-center justify-center pt-20 pb-20 sm:pt-24 md:pt-32 lg:pt-48 lg:pb-40 xl:pt-60 2xl:pt-72">
        <div className="font-[AlbertFont] leading-[1.3] text-white text-center sm:text-[1.2rem] md:text-[1.8rem] lg:text-[2.6rem] xl:text-[3rem] 2xl:text-[3.5rem] 2xl:leading-[1.1]">
          <h1>
            Begin a remarkable virtual trip to <br /> Saudi Arabia's enchanting
            tourist
            <br />
            spots, alone or with friends!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Circles;
