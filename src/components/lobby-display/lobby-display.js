import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const LobbyDisplay = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="flex md:flex-row">
      <div className="w-full relative flex flex-col h-screen">
        {isMobile ? (
          <div className="absolute inset-0">
            <Image
              src="/images/lobby-bg-mobile.png"
              alt="Background"
              width={1920}
              height={1080}
              quality={100}
              style={{ height: "100%" }}
            />
          </div>
        ) : (
          <div className="absolute inset-0">
            <Image
              src="/images/lobby-bg.png"
              alt="Background"
              width={1920}
              height={1080}
              quality={100}
              style={{ height: "100%" }}
            />
          </div>
        )}

        <div
          className={
            isMobile
              ? "absolute inset-0 flex flex-col justify-end text-white text-left z-10 ml-4 mb-16"
              : "absolute inset-0 flex flex-col text-white text-left mt-24 ml-24 z-10"
          }
        >
          <h2
            style={{
              fontFamily: "AlbertFont",
              fontSize: isMobile ? "2.2rem" : "4.5rem",
              lineHeight: "1.1",
              paddingBottom: "1rem",
            }}
          >
            Plan your trip <br /> with ease!
          </h2>
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "1.1rem",
              lineHeight: "1.3",
              paddingTop: "1rem",
            }}
          >
            Engage with our Ai powered assistant <br /> to help plan your trip
            and learn more <br /> about your destination.
          </p>
        </div>
        {isMobile ? (
          <>
            {/* <div className="absolute inset-0 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 z-10"></div> */}
          </>
        ) : (
          <>
            <div className="absolute inset-0 z-10">
              <Image
                src="/images/upper-black.png"
                alt="Background"
                width={1920}
                height={1080}
                quality={100}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <Image
                src="/images/lower-black.png"
                alt="Background"
                width={1920}
                height={1080}
                quality={100}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LobbyDisplay;
