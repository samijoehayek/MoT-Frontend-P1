import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PartOne = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="flex flex-col px-8 py-8 md:px-0 md:justify-center">
      <p
        className="flex flex-row text-based text-white md:py-4 md:text-xl"
        style={{
          fontFamily: "AlbertFontNormal",
        }}
      >
        Lobby
      </p>

      <h1
        className="flex flex-row leading-tight text-white text-4xl pt-4 md:text-7xl"
        style={{
          fontFamily: "AlbertFont",
        }}
      >
        Unveiling Key <br /> Attractions and <br /> Visitor Facilities
      </h1>
      <p
        className="flex flex-row leading-tight text-white text-small pt-4"
        style={{
          fontFamily: "AlbertFontNormal",
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
