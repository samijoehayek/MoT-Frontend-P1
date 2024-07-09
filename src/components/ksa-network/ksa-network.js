import React from "react";
import { useMediaQuery } from "@mui/material";

const KsaNetwork = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="flex flex-col text-white justify-center lg:items-center xl:items-start mb-8 py-12 md:flex-[5]">
      <div className="justify-center items-center text-center md:justify-start md:text-start">
        <h1 className="font-[AlbertFont] text-[2rem] leading-[1.1] md:text-[1.9rem] md:leading-[1.1] lg:text-[2.5rem] xl:text-[3rem] xl:leading-[1.1] 2xl:text-[3.5rem] 2xl:leading-[1.1] pb-4">
          Join our thriving <br /> network to shape KSA <br /> tourism's future.
        </h1>
        <p className="font-[AlbertFontNormal] text-[1.1rem] leading-[1.2] md:text-[0.8rem] md:leading-[1.2] lg:text-[1rem] xl:text-[1rem] xl:leading-[1.2] 2xl:text-[1.2rem] 2xl:leading-[1.2] pb-4">
          Connect privately, host keynote speakers, and {isMobile && <br />}{" "}
          collaborate in {!isMobile && <br />}
          our business-friendly environment. {isMobile && <br />} Your input
          shapes Saudi {!isMobile && <br />}
          Arabia's tourism future!
        </p>
      </div>
    </div>
  );
};

export default KsaNetwork;
