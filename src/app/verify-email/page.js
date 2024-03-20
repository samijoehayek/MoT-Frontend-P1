"use client";
import { verifyEmail } from "@/axios";
import { useRouter } from "next/navigation";
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const albertFont = localFont({
  src: "../../../public/FSAlbertArabic-Bold.ttf",
  display: "swap",
});

const albertFontNormal = localFont({
  src: "../../../public/FSAlbertArabic-Regular.ttf",
  display: "swap",
});

const VerifyEmail = () => {
  const [emailVerified, setEmailVerified] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const verificationString = urlParams.get("verificationString");
    verifyEmail(verificationString).then(() => {
      setEmailVerified(true);
    }).catch(() => {
      setEmailVerified(false);
    });
  }, []);

  return (
    emailVerified && (
      <div className="flex h-screen bg-[#1A1B22]">
        <div className="absolute top-0 left-0 mt-8 ml-8">
          <Image
            src="/images/stc-logo.png"
            alt="STC Logo"
            width={150}
            height={60}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center px-8">
          <div className="flex flex-col items-start">
            <Image
              width={120}
              height={120}
              alt="check-icon"
              src="/images/checkicon2.svg"
              style={{ marginBottom: "16px" }}
            />
            <div>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#ffffff",
                  marginBottom: "22px",
                  marginTop: "16px",
                  fontSize: "1.8rem",
                }}
                className={`${albertFont.className}`}
              >
                Your account has been verified!
              </Typography>
              <DialogContentText
                className={`${albertFontNormal.className}`}
                sx={{ color: "#ffffff", fontSize: "1.1rem" }}
              >
                Your email is successfully verified.
              </DialogContentText>
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
                  "&.glow": {
                    boxShadow:
                      "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
                  },
                }}
                type="submit"
                variant="contained"
                onClick={() => router.push("/dashboard")}
                className={`${albertFont.className} glow`}
              >
                JOIN THE METAVERSE
              </Button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .glow {
            @apply shadow-lg;
            box-shadow: 0 0 20px rgba(120, 95, 220, 0.8),
              0 0 30px rgba(50, 210, 160, 0.6);
          }
        `}</style>

        {/* Image Section */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-start p-20 mt-10 ml-10">
            <div className={`${albertFont.className} text-white z-10`}>
              <h2 className="text-5xl font-bold mb-4">
                Diriyah Digital Marketplace
              </h2>
              <p className="text-5xl font-bold">Journey Begins Here!</p>
            </div>
          </div>
          <div className="absolute inset-0">
            <div className="relative h-full">
              <Image
                src="/images/email-success-bg.png"
                alt="Background"
                fill={true}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default VerifyEmail;
