"use client";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import EmailConfirmationModal from "@/components/email-confirmation-modal/email-confirmation-modal";
import Login from "@/components/login/login";
import Signup from "@/components/signup/signup";
import { AppContext } from '../../app/appContext';

const JoinTheMetaverse = () => {
  const [method, setMethod] = useState("login");
  const [emailConfirmationModal, setEmailConfirmationModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      document.cookie = `token=${token}`;
      router.push("/dashboard");
    }
  }, []);
  return (
    <>
      <Head>Welcome Back!</Head>
      <EmailConfirmationModal
        email={userEmail}
        open={emailConfirmationModal}
        onClose={() => {
          setEmailConfirmationModal(false);
        }}
      />

      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div className="mb-16">
            <Image
              src="/images/stc-logo.png"
              alt="STC Logo"
              width={150}
              height={50}
            />
          </div>
          <div>
            <Stack spacing={1} sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                className={`text-white text-4xl`}
                style={{ fontFamily: "AlbertFont" }}
              >
                Welcome Back!
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ mb: 5 }}>
              <Typography
                className={`text-white`}
                style={{ fontFamily: "AlbertFontNormal", fontSize: "1rem"}}
              >
                Join the Metaverse and be part of the future.
              </Typography>
            </Stack>

            {method === "login" && <Login setMethod={setMethod} />}
            {method === "signup" && <Signup setMethod={setMethod} setEmailConfirmationModal={setEmailConfirmationModal} setUserEmail={setUserEmail}/>}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default JoinTheMetaverse;
