import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={isMobile?"flex md:flex-row pb-36 px-8 z-10":"flex md:flex-row pt-24 pb-36 px-8 z-10"}>
      <div
        className={
          isMobile
            ? "w-full md:w-1/2 flex flex-col text-white"
            : "w-full md:w-1/2 flex flex-col px-8 text-white"
        }
      >
        <h1
          style={{
            fontFamily: "AlbertFont",
            fontSize: isMobile ? "2.7rem" : "4.7rem",
            lineHeight: "1.2",
            paddingBottom: "1rem",
          }}
        >
          Saudi Tourism Metaverse
        </h1>
        {isMobile ? (
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "1rem",
            }}
          >
            Begin a remarkable metaverse trip, <br /> exploring Saudi Arabia's
            beauty, landscapes, <br /> cuisine, and debating with top investors!
          </p>
        ) : (
          <p
            style={{
              fontFamily: "AlbertFontNormal",
              fontSize: "1.15rem",
            }}
          >
            Begin a remarkable metaverse trip, exploring Saudi <br /> Arabia's
            beauty, landscapes, cuisine, and debating with <br /> top investors!
          </p>
        )}
        <Button
          sx={{
            mt: 6,
            mb: 3,
            borderRadius: "100px",
            width: isMobile?"70%":"45%",
            height: "3rem",
            paddingTop: "0.7rem",
            fontSize: "1rem",
            background:
              "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important",

            "&:hover": {
              background:
                "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%)",
            },
            boxShadow:
              "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
            "&.Mui-disabled": {
              background: "#36373E",
              color: "rgba(255, 255, 255, 0.5)",
            },
          }}
          type="submit"
          variant="contained"
          style={{ fontFamily: "AlbertFontNormal" }}
        >
          JOIN THE METAVERSE
        </Button>
        <div style={{ paddingTop: isMobile?"18rem":"10rem" }}>
          <Image
            src={`/images/scroll-element.png`}
            alt="Background"
            width={37}
            height={50}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
