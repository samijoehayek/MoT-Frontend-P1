"use client";
import React, { useState, useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { createTwoFactorAuth, verifyTwoFactorAuth } from "@/axios";
import TwoFactorInput from "../two-factor-input/two-factor-input";
import { useRouter } from "next/navigation";

const TwoFactorQR = ({ setMethod }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [qrImage, setQrImage] = useState(null);
  const [otpFailed, setOtpFailed] = useState(false);

  const router = useRouter();

  const verifyUser = async (otp) => {
    const newOTP = otp.join("");
    verifyTwoFactorAuth(localStorage.getItem("token"), newOTP).then((res) => {
      if (res.data) {
        router.push("/dashboard");
      } else {
        setOtpFailed(true);
      }
    });
  };

  useEffect(() => {
    createTwoFactorAuth(localStorage.getItem("token")).then((res) => {
      setQrImage(res.data);
    });
  }, []);

  return (
    <div>
      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography
          variant="h4"
          className="font-[AlbertFont] text-white text-4xl"
        >
          Enter Security Code
        </Typography>
      </Stack>
      <Stack spacing={1} sx={{ mb: 5 }}>
        <Typography
          className={`text-white`}
          style={{ fontFamily: "AlbertFontNormal", fontSize: "0.9rem" }}
        >
          Please use your authenticator app (such as Google or Duo
          Authenticator) to scan this QR code, then enter the 6 digits code from
          the application.
        </Typography>
      </Stack>
      {qrImage && (
        <div className="mb-12 rounded-lg overflow-hidden inline-block">
          <Image src={qrImage} width={180} height={200} alt="QRCode"></Image>
        </div>
      )}
      <TwoFactorInput setCode={setCode} code={code} otpFailed={otpFailed}/>
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
        onClick={() => {
          verifyUser(code);
        }}
        variant="contained"
        style={{ fontFamily: "AlbertFontNormal" }}
      >
        <p className="mt-1">VERIFY CODE</p>
      </Button>

      <div
        className={`flex items-center justify-center font-normal text-base text-white mt-4 mb-20`}
        style={{ fontFamily: "AlbertFontNormal" }}
        onClick={() => setMethod("signup")}
      >
        CANCEL
      </div>
    </div>
  );
};

export default TwoFactorQR;
