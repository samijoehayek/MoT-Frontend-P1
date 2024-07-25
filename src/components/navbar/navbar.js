"use client";
import React, { useContext } from "react";
import { Button } from "@mui/material";
import StcLogo from "../stc-logo/stc-logo";
import { useRouter } from "next/navigation";
import { AppContext } from "../../app/appContext";

const Navbar = () => {
  const router = useRouter();
  const {english, setEnglish} = useContext(AppContext);

  const handleChangeLanguage = (lang) => {
    setEnglish(lang);
  };
  
  return (
    <nav className="flex flex-row w-full justify-between z-10 py-4 px-8 sm:p-8">
      <StcLogo />
      <div className="flex items-center">
        {/* Add your navbar content here */}
        <div
          className="flex flex-col text-white px-6"
          style={{ fontFamily: "AlbertFontNormal" }}
        >
          <ul className="flex space-x-4">
            <li
              className={`cursor-pointer ${
                english === true ? "underline" : ""
              }`}
              onClick={() => {
                handleChangeLanguage(true);
              }}
            >
              <span className="sm:hidden">En</span>
              <span className="hidden sm:inline">English</span>
            </li>
            <li className="hidden sm:inline">|</li>
            <li
              className={`cursor-pointer ${
                english === false ? "underline" : ""
              }`}
              onClick={() => {
                handleChangeLanguage(false);
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
            sx={{
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
            <p className="mt-1" onClick={() => {router.push('/dashboard')}}>
              <span className="sm:hidden">{english?"Join":"انضم"}</span>
              <span className="hidden sm:inline">{english?"JOIN THE METAVERSE":"انضم إلى ميتافيرس"}</span>
            </p>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
