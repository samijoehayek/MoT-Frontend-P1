import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { CheckCircle, Cancel } from "@mui/icons-material";
import axios from "axios";

const GoogleRecaptcha = ({
  recaptchaSuccess,
  setRecaptchaSuccess,
  verificationFailed,
  setVerificationFailed,
}) => {
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const executeCaptcha = async () => {
    setLoading(true);
    if (!executeRecaptcha) {
      console.log("Not avalibale to execute recaptcha");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("signup");

    const response = await axios({
      method: "POST",
      url: "/api/recaptcha",
      data: {
        gRecaptchaToken: gRecaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response.data.success === true) {
      console.log("Recaptcha success", response.data.score);
      setLoading(false);
      setRecaptchaSuccess(true);
    } else {
      console.log("Recaptcha failed", response.data.message);
      setLoading(false);
      setVerificationFailed(true);
    }
  };

  const getButtonColor = () => {
    if (loading) return "rgba(200, 200, 200, 0.1) !important";
    if (recaptchaSuccess) return "rgba(50, 210, 160, 0.2) !important";
    if (verificationFailed) return "rgba(255, 90, 90, 0.1) !important";
    return "rgba(200, 200, 200, 0.1) !important";
  };

  const getButtonText = () => {
    if (loading) return "Verifying...";
    if (recaptchaSuccess) return "Verification Successful!";
    if (verificationFailed) return "Verification failed, try again!";
    return "I'm not a robot";
  };

  const getTextColor = () => {
    if (loading) return "#C8C8C8";
    if (recaptchaSuccess) return "#32D2A0";
    if (verificationFailed) return "#FF5A5A";
    return "inherit";
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        executeCaptcha();
      }}
      disabled={loading || recaptchaSuccess || verificationFailed}
      sx={{
        backgroundColor: getButtonColor(),
        "&:hover": getButtonColor(),
        width: "100%",
        height: "3.2rem",
      }}
      className="justify-start"
      startIcon={
        loading ? (
          <CircularProgress size={20} style={{ color: "#C8C8C8" }}/>
        ) : recaptchaSuccess ? (
          <CheckCircle style={{ color: "#32D2A0" }}/>
        ) : verificationFailed ? (
          <Cancel style={{ color: "#FF5A5A"}} />
        ) : (
          <Checkbox
            checked={recaptchaSuccess}
            sx={{
              color: getTextColor(),
              "&.Mui-checked": {
                color: getTextColor(),
              },
            }}
          />
        )
      }
    >
      <Typography
        variant="body2"
        style={{
          fontFamily: "AlbertFontNormal",
          color: getTextColor(),
          textTransform: "none",
          fontSize: "1rem",
          marginTop: "0.4rem",
        }}
      >
        {getButtonText()}
      </Typography>
    </Button>
  );
};

export default GoogleRecaptcha;
