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
    <div className="flex md:flex-row h-screen bg-[#1A1B22]">
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <JoinTheMetaverse />
      </div>

      {/* Image Section */}
      <div className="w-1/2 relative overflow-hidden md:block hidden">
        <BackgroundImage imageName="login-bg5" />
      </div>
      <PasswordUpdatedSnackbar
        open={passwordChangedBC}
        onClose={handleCloseChangePasswordModal}
      />
    </div>
  );
};

export default Home;
