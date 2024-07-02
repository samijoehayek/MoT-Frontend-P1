import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PartOne = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="flex flex-col px-8 md:px-0">
      <div className={"absolute opacity-80 z-0 top-8 right-4 md:bottom-60 md:left-40"}>
        <Image
          src="/images/number-1.png"
          alt="Background"
          width={isMobile ? 120 : 180}
          height={180}
          quality={100}
        />
      </div>
      <p
        className="flex flex-row text-based text-white md:py-4 md:text-xl"
        style={{
          fontFamily: "AlbertFontNormal",
        }}
      >
        Lobby
      </p>

      <h1
        className="flex flex-row leading-tight text-white text-4xl pt-4 md:text-6xl 2xl:text-7xl "
        style={{
          fontFamily: "AlbertFont",
        }}
      >
        Unveiling Key <br /> Attractions and <br /> Visitor Facilities
      </h1>
      <p
        className="flex flex-row leading-tight text-white pt-4"
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: isMobile ? "1rem" : "1.3rem",
        }}
      >
        Embark on a journey to discover Saudi {isMobile && <br />}Arabia's{" "}
        {!isMobile && <br />}key destinations and tourism {isMobile && <br />}
        highlights, immersing {!isMobile && <br />}yourself in its rich{" "}
        {isMobile && <br />}culture and visitor facilities.
      </p>
    </div>
  );
};

export default PartOne;
