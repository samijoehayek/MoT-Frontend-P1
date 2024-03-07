"use client";
import { verifyEmail } from "@/axios";
import React, {useState, useEffect} from "react";

const VerifyEmail = () => {
const [emailVerified, setEmailVerified] = React.useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const verificationString = urlParams.get("verificationString");
    verifyEmail(verificationString).then(() => {setEmailVerified(true);});
  }, []);

  return (
    emailVerified && (
      <div>
        <h1>Email Verified</h1>
      </div>
    )
  );
};

export default VerifyEmail;
