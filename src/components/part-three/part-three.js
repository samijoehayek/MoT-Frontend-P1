import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PartThree = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="flex flex-col flex-[4] pl-8 mt-56 relative text-white md:justify-center md:px-8 md:mt-0">
      <div
        className={
          "absolute transform z-0 opacity-80 bottom-24 left-52 md:top-44 md:left-32"
        }
      >
        <Image
          src="/images/number-2.png"
          alt="Background"
          width={isMobile ? 200 : 240}
          height={240}
          quality={100}
        />
      </div>
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          paddingBottom: "1rem",
        }}
      >
        Business Network
      </p>

      <h1
        style={{
          fontFamily: "AlbertFont",
          fontSize: isMobile ? "2.2rem" : "3.5rem",
          lineHeight: "1.1",
          paddingBottom: "1rem",
        }}
      >
        Unlocking Business <br /> Tourism Investment <br /> Opportunities
      </h1>
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          lineHeight: "1.2",
          paddingTop: "1rem",
          paddingBottom: isMobile ? "1rem" : "0rem",
        }}
      >
        Explore business tourism in Saudi Arabia, {isMobile && <br />}{" "}
        connecting with {!isMobile && <br />}
        fellow entrepreneurs to {isMobile && <br />} discuss investment
        prospects and tap {!isMobile && <br />}
        into {isMobile && <br />} lucrative opportunities.
      </p>
    </div>
  );
};

export default PartThree;
