"use client";
import React from "react";
import Image from "next/image";
import LobbyBg from "../../../public/images/lobby-bg.png";
import LobbyBgMobile from "../../../public/images/lobby-bg-mobile.png";
import { useMediaQuery } from "@mui/material";

const LobbyDisplay = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="w-full h-screen relative flex flex-row">
      <Image
        src={isMobile ? LobbyBgMobile : LobbyBg}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
      />

      <div className="flex flex-col justify-end text-white text-left z-10 ml-4 mb-16 md:my-24 md:ml-24 md:justify-start">
        <h2 className="font-[AlbertFont] leading-[1.1] pb-4 text-[2.2rem] lg:text-[4.5rem]">
          Plan your trip <br /> with ease!
        </h2>
        <p className="font-[AlbertFontNormal] leading-[1.3] pb-4 text-[1.1rem] lg-[1.5rem]">
          Engage with our Ai powered assistant <br /> to help plan your trip and
          learn more <br /> about your destination.
        </p>
      </div>

      <div className="absolute inset-0">
        <Image
          src="/images/upper-black.png"
          alt="Background"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <Image
          src="/images/lower-black.png"
          alt="Background"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
    </div>
  );
};

export default LobbyDisplay;
