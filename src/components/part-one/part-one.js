import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

const PartOne = () => {
  return (
    <div className="relative">
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          paddingBottom: "1rem",
        }}
      >
        Lobby
      </p>
      <div className="absolute transform -translate-x-1/3 -translate-y-1/3 z-0 mx-36 mt-4 opacity-80">
        <Image
          src="/images/number-1.png"
          alt="Background"
          width={160}
          height={180}
          quality={100}
        />
      </div>
      <h1
        style={{
          fontFamily: "AlbertFont",
          fontSize: "4.3rem",
          lineHeight: "1.1",
          paddingBottom: "1rem",
        }}
      >
        Unveiling Key <br /> Attractions and <br /> Visitor Facilities
      </h1>
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          lineHeight: "1.2",
          paddingTop: "1rem",
        }}
      >
        Embark on a journey to discover Saudi Arabia's key <br /> destinations
        and tourism highlights, immersing <br /> yourself in its rich culture
        and visitor facilities.
      </p>
    </div>
  );
};

export default PartOne;
