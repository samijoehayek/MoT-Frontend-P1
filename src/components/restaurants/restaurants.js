"use client";
import React, { useState } from "react";
import { Typography, Box } from "@mui/material";

const Restaurants = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        borderRadius: "48px",
        padding: "32px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        minHeight: "570px",
        opacity: "0.04",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "white", mb: 1 }}
        style={{ fontFamily: "AlbertFont" }}
      >
        Reset Password
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 3 }}
        style={{ fontFamily: "AlbertFontNormal" }}
      >
        Enter your email to change your password.
      </Typography>
    </Box>
  );
};

export default Restaurants;
