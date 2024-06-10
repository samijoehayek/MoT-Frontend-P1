import React from "react";
import { useMediaQuery } from "@mui/material";

const PartFour = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative">
      {isMobile ? (
        <div className="justify-center items-center text-center">
          <h1
            style={{
              fontFamily: "AlbertFont",
              fontSize: "2rem",
              lineHeight: "1.1",
              paddingTop: "5rem",
              paddingBottom: "1rem",
            }}
          >
            Join our thriving <br /> network to shape KSA <br /> tourism's
            future.
          </h1>
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "1.1rem",
              lineHeight: "1.2",
              paddingTop: "1rem",
            }}
          >
            Connect privately, host keynote speakers, and <br /> collaborate in
            our business-friendly environment. <br /> Your input shapes Saudi
            Arabia's tourism future!
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
            Join our thriving <br /> network to shape KSA <br /> tourism's
            future.
          </h1>
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "1.15rem",
              lineHeight: "1.2",
              paddingTop: "1rem",
            }}
          >
            Connect privately, host keynote speakers, and collaborate in <br />{" "}
            our business-friendly environment. Your input shapes Saudi <br />{" "}
            Arabia's tourism future!
          </p>
        </div>
      )}
    </div>
  );
};

export default PartFour;
