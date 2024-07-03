"use client";
import React, {useContext} from "react";
import JoinTheMetaverse from "@/components/join-the-metaverse/join-the-metaverse";
import BackgroundImage from "@/components/background-image/background-image";
import PasswordUpdatedSnackbar from "@/components/password-updated-snackbar/password-updated-snackbar";
import { AppContext } from './appContext';

const Home = () => {
  const { passwordChangedBC, setPasswordChangedBC } = useContext(AppContext);

  const handleCloseChangePasswordModal = () => {
    setPasswordChangedBC(false);
  };

  return (
    <div className="relative h-screen bg-[#1A1B22] overflow-hidden">
      <BackgroundImage imageName="mask-group" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex h-full">
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <JoinTheMetaverse />
        </div>
      </div>
      <PasswordUpdatedSnackbar
        open={passwordChangedBC}
        onClose={handleCloseChangePasswordModal}
      />
    </div>
  );
};

export default Home;
