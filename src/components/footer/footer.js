import React from "react";
import Image from "next/image";
import SocialMedia from "../social-media/social-media";

const Footer = () => {
  return (
    <div className="w-full">
      <nav className="w-full flex flex-row text-white py-8 px-20">
        <div className="flex flex-col justify-center items-start">
          <Image
            src="/images/stc-logo.png"
            alt="STC Logo"
            width={180}
            height={60}
          />
        </div>
        <div className="flex-1 flex flex-row justify-center items-center">
          {/* Add your navbar content here */}
          <div
            className="flex flex-col px-12 mr-12"
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            <ul className="flex space-x-4">
              <li className="px-2">Join The Metaverse</li>
              <li className="px-2">Terms of Use</li>
              <li className="px-2">Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col mr-24">
            <SocialMedia />
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-row justify-center my-6">
        <div className="w-5/6 border-t-1 border-white opacity-40"></div>
      </div>
      <div className="w-full flex flex-row justify-center my-6">
        <div style={{ fontFamily: "AlbertFontNormal" }}>
          All rights reserved © 2024 Ministry of Tourism - Saudi Arabia
        </div>
      </div>
    </div>
  );
};

export default Footer;
