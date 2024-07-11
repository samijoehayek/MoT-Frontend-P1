"use client";
import React from "react";
import { useMediaQuery } from "@mui/material";

const KsaNetwork = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="flex flex-col text-white justify-center text-center pb-12 md:pb-0 md:text-start md:min-h-[450px] lg:min-h-[600px] xl:min-h-[700px] 2xl:max-h-[800px] 2xl:pt-32">
      <h1 className="font-[AlbertFont] text-white leading-[1.2] text-[1.8rem] md:text-[1.8rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.3rem]">
        Join our thriving <br /> network to shape KSA <br /> tourism's future.
      </h1>
      <p className="font-[AlbertFontNormal] text-white pt-8 leading-[1.2] text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]">
        Connect privately, host keynote speakers, and {isMobile && <br />}{" "}
        collaborate in {!isMobile && <br />}
        our business-friendly environment. {isMobile && <br />} Your input
        shapes Saudi {!isMobile && <br />}
        Arabia's tourism future!
      </p>
    </div>
  );
};

export default KsaNetwork;
