"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Restaurants = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={isMobile ? "flex md:flex-row" : "flex md:flex-row px-12"}>
      <div className="w-full flex flex-col justify-center items-center text-white relative">
        <div
          className="absolute z-10"
          style={{ left: "-3%", bottom: isMobile && "-32%" }}
        >
          <Image
            src={
              isMobile
                ? "/images/circle-mobile.png"
                : "/images/video-portal-full.png"
            }
            alt="Background"
            width={isMobile ? 650 : 1150}
            height={600}
            quality={100}
          />
        </div>
        <Box
          sx={{
            background: "#1A1A1A",
            borderRadius: isMobile ? "10px" : "48px",
            paddingTop: "32px",
            paddingX: "32px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            minHeight: isMobile ? "600px" : "500px",
            width: "100%",
            display: "flex",
            justifyContent: !isMobile && "center",
            alignItems: !isMobile && "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div
            className={
              isMobile ? "flex flex-col w-full" : "flex flex-row w-full"
            }
          >
            <div className="w-full md:w-1/2"></div>
            <div
              className="w-full md:w-1/2 md:pl-36"
              style={{
                order: isMobile ? 1 : 2,
              }}
            >
              <h2
                style={{
                  fontFamily: "AlbertFont",
                  fontSize: isMobile ? "2.3rem" : "3.5rem",
                  lineHeight: "1.1",
                  paddingBottom: "1rem",
                  paddingTop: isMobile ? "1rem" : "0",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Lively mix of world <br /> class eateries
              </h2>
              <p
                style={{
                  fontFamily: "AlbertFontNormal",
                  fontSize: isMobile ? "1rem" : "1.15rem",
                  lineHeight: "1.2",
                  paddingTop: "1rem",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Virtual wonderland delivering a unique <br /> online destination
                for delightful culinary <br /> and cultural experiences.
              </p>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Restaurants;
