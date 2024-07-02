import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Circles = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={"relative w-full"}>
      <div className="absolute inset-0 opacity-80">
        <Image
          src={isMobile ? "/images/circles-mobile.png" : "/images/circles.png"}
          alt="Background"
          width={isMobile ? 450 : 1920}
          height={isMobile ? 600 : 851}
          quality={100}
        />
      </div>
      <div className="flex relative z-10 items-center justify-center pt-24 pb-20 md:pt-72 md:pb-40">
        <div
          className="text-white text-center max-w-4xl px-4"
          style={{
            fontFamily: "AlbertFont",
            fontSize: isMobile ? "1.2rem" : "3.5rem",
            lineHeight: "1.3",
          }}
        >
          <h1>
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
