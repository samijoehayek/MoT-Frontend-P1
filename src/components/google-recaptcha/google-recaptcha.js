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

const GoogleRecaptcha = ({ recaptchaSuccess, setRecaptchaSuccess }) => {
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
      setRecaptchaSuccess(false);
    }
  };
  return (
    <Button
      variant="contained"
      onClick={() => {
        executeCaptcha();
      }}
      disabled={loading || recaptchaSuccess}
      sx={{
        backgroundColor: recaptchaSuccess
          ? "green !important"
          : loading
          ? "default"
          : "red !important",
        "&:hover": {
          backgroundColor: recaptchaSuccess
            ? "green"
            : loading
            ? "default"
            : "darkred",
        },
      }}
      startIcon={
        loading ? (
          <CircularProgress size={20} />
        ) : recaptchaSuccess ? (
          <CheckCircle />
        ) : (
          <Cancel />
        )
      }
    >
      <Typography variant="body2" style={{ fontFamily: "AlbertFontNormal" }}>
        {loading
          ? "Verifying..."
          : recaptchaSuccess
          ? "You are Human"
          : "Verify you are Human"}
      </Typography>
    </Button>
  );
};

export default GoogleRecaptcha;
