import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Circles = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={"flex md:flex-row md:px-12 md:pt-20 md:pb-40 "}>
      <div className="w-full relative">
        <div className="flex absolute inset-0 opacity-80 justify-center items-center">
          <Image
            src={
              isMobile ? "/images/circles-mobile.png" : "/images/circles.png"
            }
            alt="Background"
            width={isMobile ? 450 : 1800}
            height={isMobile ? 600 : 1920}
            quality={100}
          />
        </div>
        <div
          className="relative py-16 sm:py-24 lg:py-32 text-white text-center"
          style={{
            fontFamily: "AlbertFont",
            fontSize: isMobile ? "1.2rem" : "3rem",
            lineHeight: "1.3",
          }}
        >
          <h1
            style={{
              paddingTop: isMobile ? "4rem" : "6rem",
            }}
          >
            Begin a remarkable virtual trip to <br /> Saudi Arabia's enchanting
            tourist
            <br />
            spots, alone or with friends!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Circles;
