"use client";
import React, { useContext } from "react";
import { AppContext } from "../../app/appContext";

const FooterCopyright = () => {
  const { english } = useContext(AppContext);

  return (
    <div className="w-full flex flex-row justify-center mb-6 text-white text-sm lg:text-base">
      <div
        style={{
          fontFamily: "AlbertFontNormal",
        }}
      >
        {english
          ? "All rights reserved © 2024 Ministry of Tourism - Saudi Arabia"
          : "جميع الحقوق محفوظة © 2024 وزارة السياحة - المملكة العربية السعودية"}
      </div>
    </div>
  );
};

export default FooterCopyright;
