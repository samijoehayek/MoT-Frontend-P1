import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Circles = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={isMobile?"flex md:flex-row":"flex md:flex-row px-12 pt-20 pb-40"}>
      <div className="w-full relative flex flex-col text-white">
        {isMobile ? (
          <div className="flex absolute inset-0 opacity-80 justify-center items-center">
            <Image
              src="/images/circles-mobile.png"
              alt="Background"
              width={450}
              height={600}
              quality={100}
            />
          </div>
        ) : (
          <div className="absolute inset-0">
            <Image
              src="/images/circles.png"
              alt="Background"
              layout="fill"
              quality={100}
            />
          </div>
        )}

        <div
          className="relative py-16 sm:py-24 lg:py-32 text-white text-center"
          style={{
            fontFamily: "AlbertFont",
            fontSize: isMobile?"1.2rem":"3rem",
            lineHeight: "1.3",
          }}
        >
          <h1
            style={{
              paddingTop: isMobile?"4rem":"6rem",
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
