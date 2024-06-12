import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PartOne = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative">
      <p
        className="text-based text-white md:py-4 md:text-xl"
        style={{
          fontFamily: "AlbertFontNormal",
        }}
      >
        Lobby
      </p>
      <div
        className={
          "absolute opacity-60 bottom-0 right-0 md:left-24"
        }
      >
        <Image
          src="/images/number-1.png"
          alt="Background"
          width={isMobile?140:180}
          height={180}
          quality={100}
        />
      </div>

      <h1
        className="leading-tight text-white text-4xl pt-4 md:text-7xl"
        style={{
          fontFamily: "AlbertFont",
        }}
      >
        Unveiling Key <br /> Attractions and <br /> Visitor Facilities
      </h1>
      <p
        className="leading-tight text-white text-small pt-4"
        style={{
          fontFamily: "AlbertFontNormal",
        }}
      >
        Embark on a journey to discover Saudi {isMobile && <br />}Arabia's key{" "}
        {!isMobile && <br />}
        destinations and tourism {isMobile && <br />}highlights, immersing{" "}
        {!isMobile && <br />}yourself in its rich {isMobile && <br />}culture
        and visitor facilities.
      </p>
    </div>
  );
};

export default PartOne;
