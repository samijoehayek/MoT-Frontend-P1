"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <nav className="w-full flex justify-between text-white py-4 px-8 z-10">
      <div className="flex flex-col justify-center items-center mb-4">
        <Image
          src="/images/stc-logo.png"
          alt="STC Logo"
          width={180}
          height={60}
        />
      </div>
      <div className="flex flex-row justify-center items-center">
        {/* Add your navbar content here */}
        <div
          className="flex flex-col px-6"
          style={{ fontFamily: "AlbertFontNormal" }}
        >
          <ul className="flex space-x-4">
            <li
              className={`cursor-pointer ${
                language === "en" ? "underline" : ""
              }`}
              onClick={() => {
                handleChangeLanguage("en");
              }}
            >
              <span className="sm:hidden">En</span>
              <span className="hidden sm:inline">English</span>
            </li>
            <li className="hidden sm:inline">|</li>
            <li
              className={`cursor-pointer ${
                language === "ar" ? "underline" : ""
              }`}
              onClick={() => {
                handleChangeLanguage("ar");
              }}
            >
              <span className="sm:hidden">ع</span>
              <span className="hidden sm:inline">العربية</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <Button
            fullWidth
            size="medium"
            sx={{
              mt: 3,
              mb: 3,
              borderRadius: "100px",
              color: "white",
              border: "1px solid white",
              background: "transparent",
              fontFamily: "AlbertFontNormal",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
                border: "1px solid white",
              },
              "&.Mui-disabled": {
                background: "#36373E",
                color: "rgba(255, 255, 255, 0.5)",
              },
            }}
            type="submit"
            variant="contained"
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            <p className="mt-1">
              <span className="sm:hidden">Join</span>
              <span className="hidden sm:inline">JOIN THE METAVERSE</span>
            </p>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
