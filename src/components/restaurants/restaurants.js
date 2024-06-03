"use client";
import React, { useState } from "react";
import { Typography, Box } from "@mui/material";

const Restaurants = () => {
  return (
    <Box
      sx={{
        background: "#1A1A1A",
        borderRadius: "48px",
        padding: "32px",
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
        <div className="w-1/2 flex flex-col items-start px-20">
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
            Virtual wonderland delivering a unique <br /> online destination for
            delightful culinary <br /> and cultural experiences.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Restaurants;
