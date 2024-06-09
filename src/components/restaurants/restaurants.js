"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const Restaurants = () => {
  return (
    <div className="flex md:flex-row px-12">
      <div className="w-full flex flex-col justify-center items-center text-white relative">
        <div className="absolute z-10" style={{ left: "-3%" }}>
          <Image
            src="/images/video-portal-full.png"
            alt="Background"
            width={1150}
            height={600}
            quality={100}
          />
        </div>
        <Box
          sx={{
            background: "#1A1A1A",
            borderRadius: "48px",
            paddingTop: "32px",
            paddingRight: "32px",
            paddingLeft: "32px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            minHeight: "500px",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-row w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex flex-col items-start pl-36">
              <h2
                style={{
                  fontFamily: "AlbertFont",
                  fontSize: "3.5rem",
                  lineHeight: "1.1",
                  paddingBottom: "1rem",
                }}
              >
                Lively mix of world <br /> class eateries
              </h2>
              <p
                style={{
                  fontFamily: "AlbertFontNormal",
                  fontSize: "1.15rem",
                  lineHeight: "1.2",
                  paddingTop: "1rem",
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
