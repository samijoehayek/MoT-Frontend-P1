import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const router = useRouter();

  return (
    <div
      className={
        "w-full flex flex-col justify-between z-10 px-8 py-8 sm:pt-24 sm:pb-36 sm:px-16 xl:w-1/2"
      }
      style={{
        minHeight: "90vh",
      }}
    >
      <div>
        <div className="flex flex-row">
          <h1
            className="flex flex-row text-white text-4xl leading-tight pb-4 md:text-7xl"
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            Saudi Tourism Metaverse
          </h1>
        </div>
        <div className="flex flex-row">
          <p
            className="flex flex-row text-white text-base md:text-lg"
            style={{
              fontFamily: "AlbertFontNormal",
            }}
          >
            Begin a remarkable metaverse trip, {isMobile && <br />}exploring{" "}
            {!isMobile && <br />}Saudi Arabia's beauty, landscapes,{" "}
            {isMobile && <br />}cuisine, and{!isMobile && <br />} debating with
            top investors!
          </p>
        </div>
        <div className="flex flex-row">
          <Button
            sx={{
              mt: 6,
              mb: 3,
              borderRadius: "100px",
              width: isMobile ? "70%" : "45%",
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
            className="flex flex-row"
            type="submit"
            variant="contained"
            style={{ fontFamily: "AlbertFontNormal" }}
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            JOIN THE METAVERSE
          </Button>
        </div>
      </div>
      <div className="flex flex-row">
        <Image
          src={`/images/scroll-element.png`}
          alt="Background"
          width={isMobile ? 37 : 50}
          height={isMobile ? 50 : 55}
          quality={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
