"use client";
import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import TwoFASecurity from "../../../public/images/two-factor-security.png";
import { useRouter } from "next/navigation";

const TwoFactorAuth = ({ setMethod }) => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-4">
        <Image src={TwoFASecurity} alt="STC Logo" width={200} height={100} />
      </div>
      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography
          variant="h4"
          className="font-[AlbertFont] text-white text-4xl"
        >
          Protect your account with Two-Step Verification
        </Typography>
      </Stack>
      <Stack spacing={1} sx={{ mb: 5 }}>
        <Typography
          className={`text-white`}
          style={{ fontFamily: "AlbertFontNormal", fontSize: "1rem" }}
        >
          Use an app like Google Authenticator or Duo Mobile to generate verification codes for more protection.
        </Typography>
      </Stack>
      <Button
        fullWidth
        size="large"
        sx={{
          mt: 3,
          mb: 3,
          borderRadius: "100px",
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
        onClick={() => setMethod("2FASecond")}
        variant="contained"
        style={{ fontFamily: "AlbertFontNormal" }}
      >
        <p className="mt-1">GET STARTED</p>
      </Button>

      <div
        className={`flex items-center justify-center font-normal text-base text-white mt-4 mb-20`}
        style={{ fontFamily: "AlbertFontNormal" }}
        onClick={() => {router.push("/dashboard")}}
      >
        SKIP
      </div>

      <div
        className={`flex items-center justify-center font-normal text-base text-white`}
        style={{ fontFamily: "AlbertFontNormal" }}
        onClick={() => setMethod("signup")}
      >
        Don't have an account?
        <b style={{ fontFamily: "AlbertFont" }}>
          &nbsp;<u>SIGN UP HERE</u>
        </b>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
