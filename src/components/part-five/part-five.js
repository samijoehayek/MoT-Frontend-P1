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
      <div
        className={isMobile?"absolute transform z-0 opacity-80":"absolute transform -translate-x-1/3 -translate-y-1/3 z-0 opacity-80"}
        style={{ top: isMobile?"-47%":"-12%", left: isMobile?"35%":"35%" }}
      >
        <Image
          src="/images/number-3.png"
          alt="Background"
          width={isMobile?240:260}
          height={isMobile?200:240}
          quality={100}
        />
      </div>
      {isMobile ? (
        <div>
          <h1
            style={{
              fontFamily: "AlbertFont",
              fontSize: "2rem",
              lineHeight: "1.2",
              paddingBottom: "1rem",
            }}
          >
            Join our Bustling <br /> Virtual Marketplace!
          </h1>
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "1rem",
              lineHeight: "1.2",
              paddingTop: "1rem",
            }}
          >
            Explore Bujairi Terrace to find out more about its {" "}
            <br /> world class dining locations while admiring the beauty{" "}
            <br /> and heritage of Diriyah and At-Turaif.
          </p>
        </div>
      ) : (
        <div>
          <h1
            style={{
              fontFamily: "AlbertFont",
              fontSize: "3.5rem",
              lineHeight: "1.1",
              paddingBottom: "1rem",
            }}
          >
            Join our Bustling <br /> Virtual Marketplace!
          </h1>
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "1.15rem",
              lineHeight: "1.2",
              paddingTop: "1rem",
            }}
          >
            Explore Bujairi Terrace to find out more about its world class{" "}
            <br /> dining locations while admiring the beauty and heritage of{" "}
            <br /> Diriyah and At-Turaif.
          </p>
        </div>
      )}
    </div>
  );
};

export default PartFive;
