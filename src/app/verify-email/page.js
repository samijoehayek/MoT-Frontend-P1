"use client";
import { verifyEmail } from "@/axios";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

const VerifyEmail = () => {
  const [emailVerified, setEmailVerified] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const verificationString = urlParams.get("verificationString");
    verifyEmail(verificationString).then(() => {
      setEmailVerified(true);
    });
  }, []);

  return (
    emailVerified && (
      <div>
        <h1>Congratulations! Your Email is Verified</h1>
        <p>Please head to the login page to log in</p>
        <Button
          fullWidth
          size="large"
          sx={{ mt: 3, backgroundColor: "black !important" }}
          type="submit"
          variant="contained"
          onClick={() => router.push("/")} 
        >
          Go to Login
        </Button>
      </div>
    )
  );
};

export default VerifyEmail;
