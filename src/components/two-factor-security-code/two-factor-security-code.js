import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TwoFactorInput from "../two-factor-input/two-factor-input";
import { verifyTwoFactorAuth } from "@/axios";
import { Button, Stack, Typography } from "@mui/material";

const TwoFactorSecurityCode = ({ token }) => {
  const [otpFailed, setOtpFailed] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const router = useRouter();

  const verifyUser = async (otp) => {
    const newOTP = otp.join("");
    verifyTwoFactorAuth(token, newOTP).then((res) => {
      if (res.data) {
        localStorage.setItem("token", token);
        document.cookie = `token=${token}`;
        router.push("/dashboard");
      } else {
        setOtpFailed(true);
      }
    });
  };

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
          Authenticator) to retrieve the 6 digits code and insert it below.
        </Typography>
      </Stack>
      <TwoFactorInput setCode={setCode} code={code} otpFailed={otpFailed} />
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
    </div>
  );
};

export default TwoFactorSecurityCode;
