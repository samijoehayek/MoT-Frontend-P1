import React from "react";
import Image from "next/image";
import SocialMedia from "../social-media/social-media";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="w-full flex flex-col bg-[#18191C]">
      <nav
        className={`w-full flex ${
          isMobile ? "flex-col items-center" : "flex-row"
        } text-white py-8 px-20`}
      >
        <div
          className={`${
            isMobile ? "flex-col items-center" : "flex-col item-start"
          } flex justify-center mb-8`}
        >
          <Image
            src="/images/stc-logo.png"
            alt="STC Logo"
            width={180}
            height={60}
          />
        </div>
        <div
          className={`flex-1 flex ${
            isMobile
              ? "flex-col items-center"
              : "flex-row justify-center items-center"
          }`}
        >
          <div
            className={`flex flex-col ${
              isMobile ? "justify-cetner items-center mb-8 text-center" : "px-12 mr-12"
            }`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            <ul
              className={`flex ${
                isMobile ? "flex-col space-y-4" : "space-x-4"
              }`}
            >
              <li className="px-2 cursor-pointer" onClick={() => {router.push('/dashboard')}}>Join The Metaverse</li>
              <li className="px-2 cursor-pointer" onClick={() => {router.push('/terms-and-conditions')}}>Terms of Use</li>
              <li className="px-2 cursor-pointer" onClick={() => {router.push('/privacy-policy')}}>Privacy Policy</li>
            </ul>
          </div>
          <div
            className={`flex flex-col ${isMobile ? "items-center" : "mr-24"}`}
          >
            <SocialMedia />
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-row justify-center my-6">
        <div className={`${isMobile?"w-full":"w-5/6"} border-t-1 border-white opacity-40`}></div>
      </div>
      <div className="w-full flex flex-row justify-center mb-6 text-white">
        <div style={{ fontFamily: "AlbertFontNormal", fontSize:isMobile&&"0.9rem"}}>
          All rights reserved © 2024 Ministry of Tourism - Saudi Arabia
        </div>
      </div>
    </div>
  );
};

export default Footer;
