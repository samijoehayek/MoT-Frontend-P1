import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PartFive = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative">
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          paddingBottom: "1rem",
        }}
      >
        Marketplace
      </p>
      <div className={"absolute transform z-0 opacity-80 bottom-0 left-40 md:bottom-4 md:left-12"}>
        <Image
          src="/images/number-3.png"
          alt="Background"
          width={isMobile ? 240 : 300}
          height={isMobile ? 200 : 240}
          quality={100}
        />
      </div>
      <div>
        <h1
          style={{
            fontFamily: "AlbertFont",
            fontSize: isMobile ? "2rem" : "3.5rem",
            lineHeight: isMobile ? "1.2" : "1.1",
            paddingBottom: "1rem",
          }}
        >
          Join our Bustling <br /> Virtual Marketplace!
        </h1>
        <p
          style={{
            fontFamily: "AlbertFontNormal",
            fontSize: isMobile ? "1rem" : "1.15rem",
            lineHeight: "1.2",
            paddingTop: "1rem",
          }}
        >
          Explore Bujairi Terrace to find out more about its{" "}
          {isMobile && <br />} world class {!isMobile && <br />} dining
          locations while admiring the beauty {isMobile && <br />} and heritage
          of {!isMobile && <br />} Diriyah and At-Turaif.
        </p>
      </div>
    </div>
  );
};

export default PartFive;
