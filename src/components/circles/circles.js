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
          width={isMobile ? 650 : 1920}
          height={isMobile ? 600 : 851}
          quality={100}
        />
      </div>
      <div className="flex relative z-10 items-center justify-center pt-24 pb-20 md:pt-40 md:pt-20 lg:pt-72 lg:pb-40">
        <div
          className="text-white text-center md:text-4xl lg:text-6xl"
          style={{
            fontFamily: "AlbertFont",
            lineHeight: "1.3",
          }}
        >
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
