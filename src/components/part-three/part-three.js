import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PartThree = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className={
        isMobile
          ? "flex-[4] flex flex-col text-white pl-8 mt-56"
          : "flex-[4] flex flex-col px-8 text-white justify-center items-center"
      }
    >
      <div className="relative">
        <p
          style={{
            fontFamily: "AlbertFontNormal",
            fontSize: "1.15rem",
            paddingBottom: "1rem",
          }}
        >
          Business Network
        </p>
        <div
          className={
            isMobile
              ? "absolute transform z-0 opacity-80"
              : "absolute transform -translate-x-1/3 -translate-y-1/3 z-0 opacity-80"
          }
          style={{
            top: isMobile ? "-40%" : "-2%",
            left: isMobile ? "37%" : "35%",
          }}
        >
          <Image
            src="/images/number-2.png"
            alt="Background"
            width={240}
            height={240}
            quality={100}
          />
        </div>
        {isMobile ? (
          <>
            <h1
              style={{
                fontFamily: "AlbertFont",
                fontSize: "2.2rem",
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
                paddingBottom: "1rem",
              }}
            >
              Explore business tourism in Saudi Arabia, <br /> connecting with
              fellow entrepreneurs to <br /> discuss investment prospects and
              tap into <br /> lucrative opportunities.
            </p>
          </>
        ) : (
          <>
            <h1
              style={{
                fontFamily: "AlbertFont",
                fontSize: "3.5rem",
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
              }}
            >
              Explore business tourism in Saudi Arabia, connecting with
              <br /> fellow entrepreneurs to discuss investment prospects and
              tap
              <br /> into lucrative opportunities.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PartThree;
