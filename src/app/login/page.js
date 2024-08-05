"use client";
import React, { useContext, useState, useEffect } from "react";
import JoinTheMetaverse from "@/components/join-the-metaverse/join-the-metaverse";
import BackgroundImage from "@/components/background-image/background-image";
import PasswordUpdatedSnackbar from "@/components/password-updated-snackbar/password-updated-snackbar";
import { AppContext } from "../appContext";
import DuplicateEmailModal from "@/components/duplicate-email-modal/duplicate-email-modal";
import GoogleTwoStepModal from "@/components/google-two-step-modal/google-two-step-modal";
import EmailConfirmationModal from "@/components/email-confirmation-modal/email-confirmation-modal";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [emailConfirmationModal, setEmailConfirmationModal] = useState(false);
  const [duplicateEmailModal, setDuplicateEmailModal] = useState(false);
  const [googleTwoStepModal, setGoogleTwoStepModal] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();
  const { passwordChangedBC, setPasswordChangedBC } = useContext(AppContext);

  const handleCloseChangePasswordModal = () => {
    setPasswordChangedBC(false);
  };

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
    <div className="relative h-screen bg-[#1A1B22]">
      {/* Background Image Section */}
      <BackgroundImage imageName="mask-group" />
      {/* Modal For Email Confirmation */}
      <EmailConfirmationModal
        email={userEmail}
        open={emailConfirmationModal}
        onClose={() => {
          setEmailConfirmationModal(false);
        }}
      />
      {/* Modal For Duplicate Email */}
      <DuplicateEmailModal
        open={duplicateEmailModal}
        onClose={() => {
          setDuplicateEmailModal(false);
        }}
      />

      {/* Modal to start two factor google auth */}
      <GoogleTwoStepModal
        open={googleTwoStepModal}
        onClose={() => {
          setGoogleTwoStepModal(false);
        }}
      />

      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <JoinTheMetaverse
          setDuplicateEmailModal={setDuplicateEmailModal}
          setEmailConfirmationModal={setEmailConfirmationModal}
          setUserEmail={setUserEmail}
        />
      </div>

      {/* Password Snacker after a password change */}
      <PasswordUpdatedSnackbar
        open={passwordChangedBC}
        onClose={handleCloseChangePasswordModal}
      />
    </div>
  );
};

export default LoginPage;
