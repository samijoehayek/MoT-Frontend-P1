import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PartOne = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative">
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          padding: isMobile ? "" : "1rem",
        }}
      >
        Lobby
      </p>
      <div className={isMobile?"absolute transform opacity-80":"absolute transform -translate-x-1/3 -translate-y-1/3 z-0 mx-36 mt-4 opacity-80"}
        style={{ bottom: isMobile&&"-25%", left: isMobile&&"60%"}}  
      >
        <Image
          src="/images/number-1.png"
          alt="Background"
          width={160}
          height={180}
          quality={100}
        />
      </div>
      {isMobile ? (
        <>
          <h1
            style={{
              fontFamily: "AlbertFont",
              fontSize: "2rem",
              lineHeight: "1.1",
              paddingTop: "1rem",
            }}
          >
            Unveiling Key <br /> Attractions and <br /> Visitor Facilities
          </h1>
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "0.9rem",
              lineHeight: "1.4",
              paddingTop: "1rem",
            }}
          >
            Embark on a journey to discover Saudi <br /> Arabia's key{" "}
            destinations and tourism <br /> highlights, immersing yourself in
            its rich <br /> culture and visitor facilities.
          </p>
        </>
      ) : (
        <>
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
            Embark on a journey to discover Saudi Arabia's key <br />{" "}
            destinations and tourism highlights, immersing <br /> yourself in
            its rich culture and visitor facilities.
          </p>
        </>
      )}
    </div>
  );
};

export default PartOne;
