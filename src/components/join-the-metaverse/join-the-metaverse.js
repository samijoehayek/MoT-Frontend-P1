"use client";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { Box, Stack, Typography } from "@mui/material";
import Login from "@/components/login/login";
import Signup from "@/components/signup/signup";
import TwoFactorAuth from "../two-factor-auth/two-factor-auth";
import { AppContext } from "../../app/appContext";
import STCLogo from "../../../public/images/stc-logo.png";
import TwoFactorSecurityCode from "../two-factor-security-code/two-factor-security-code";

const JoinTheMetaverse = ({
  setDuplicateEmailModal,
  setEmailConfirmationModal,
  setUserEmail,
}) => {
  const [method, setMethod] = useState("login");

  const { english } = useContext(AppContext);

  function getUserLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser"));
      }
    });
  }

  return (
    <>
      <Head>{english ? "Welcome Back!" : "مرحبًا بعودتك!"}</Head>
      <Box className="flex flex-col justify-center w-full max-w-[550px] z-10 pt-28 px-8">
        <div className="mb-16">
          <Image src={STCLogo} alt="STC Logo" width={200} height={100} />
        </div>
        <div>
          {(method === "login" || method === "signup") && (
            <>
              <Stack spacing={1} sx={{ mb: 2 }}>
                <Typography
                  variant="h4"
                  className={`font-[AlbertFont] text-white text-4xl ${
                    english ? "" : "text-end justify-end"
                  }`}
                >
                  {english ? "Welcome Back!" : "مرحبًا بعودتك"}
                </Typography>
              </Stack>
              <Stack spacing={1} sx={{ mb: 5 }}>
                <Typography
                  className={`text-white ${
                    english ? "" : "text-end justify-end"
                  }`}
                  style={{ fontFamily: "AlbertFontNormal", fontSize: "1rem" }}
                >
                  {english ? "Join the Metaverse and be part of the future." : "انضم إلى العالم الافتراضي وكن جزءًا من المستقبل"}
                </Typography>
              </Stack>
            </>
          )}

          {method === "login" && (
            <Login
              setMethod={setMethod}
              setDuplicateEmailModal={setDuplicateEmailModal}
            />
          )}
          {method === "signup" && (
            <Signup
              setMethod={setMethod}
              setEmailConfirmationModal={setEmailConfirmationModal}
              setUserEmail={setUserEmail}
              setDuplicateEmailModal={setDuplicateEmailModal}
            />
          )}
          {method === "2FA" && <TwoFactorAuth setMethod={setMethod} />}
          {method === "2FASecond" && (
            <TwoFactorSecurityCode setMethod={setMethod} />
          )}
        </div>
      </Box>
    </>
  );
};

export default JoinTheMetaverse;
