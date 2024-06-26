"use client";
import React, { useState, useEffect } from "react";
import bg from "../../../public/images/login-bg6.jpg";
import ForgotPasswordForm from "@/components/forgot-password-form/forgot-password-form";
import PasswordFailedSnackbar from "@/components/password-failed-snackbar/password-failed-snackbar";

const ForgotPassword = () => {
  // States
  const [verificationString, setVerificationString] = useState("");
  const [failedPasswordChange, setFailedPasswordChange] = useState(false);

  // Constants
  const bgStyling = {
    backgroundImage: `url(${bg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  // UseEffects
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const verificationString = urlParams.get("verificationString");
    setVerificationString(verificationString);
  }, []);

  return (
    <div
      className={"w-screen h-screen flex justify-center items-center"}
      style={bgStyling}
    >
      {/* Text Section */}
      <div className="relative md:block hidden">
        <div className={`text-white`} style={{ fontFamily: "AlbertFont" }}>
          <h2 className="text-8xl">
            Saudi Tourism
            <br /> Metaverse
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center px-8 min-h-screen md:min-h-0">
        <ForgotPasswordForm
          verificationString={verificationString}
          setFailedPasswordChange={setFailedPasswordChange}
        />
      </div>
      <PasswordFailedSnackbar
        open={failedPasswordChange}
        onClose={() => setFailedPasswordChange(false)}
      />
    </div>
  );
};

export default ForgotPassword;
