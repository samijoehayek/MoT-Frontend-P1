import React from "react";
import { useMediaQuery } from "@mui/material";

const PartFour = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative">
      <div className="justify-center items-center text-center md:justify-start md:text-start">
        <h1
          style={{
            fontFamily: "AlbertFont",
            fontSize: isMobile ? "2rem" : "3.5rem",
            lineHeight: "1.1",
            paddingTop: isMobile ? "5rem" : "0rem",
            paddingBottom: "1rem",
          }}
        >
          Join our thriving <br /> network to shape KSA <br /> tourism's future.
        </h1>
        <p
          style={{
            fontFamily: "AlbertFontNormal",
            fontSize: isMobile ? "1.1rem" : "1.15rem",
            lineHeight: "1.2",
            paddingTop: "1rem",
          }}
        >
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

export default PartFour;
