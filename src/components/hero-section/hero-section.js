"use client";
import React, { useContext } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { AppContext } from "../../app/appContext";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { english } = useContext(AppContext);
  const router = useRouter();

  return (
    <div
      className={`w-full h-[85vh] flex flex-col justify-between px-4 md:px-20 pt-20 z-10 lg:w-1/2 ${
        english ? "" : "lg:ml-auto items-end"
      }`}
    >
      <div>
        <div className="flex flex-row">
          <h1
            className={`font-[AlbertFont] flex flex-row text-white leading-tight pb-4 text-[2rem] lg:text-[3.5rem] xl:text-[4.7rem] 2xl:text-[6rem] ${
              english ? "text-start" : "text-end"
            }`}
          >
            {english ? "Saudi Tourism Metaverse" : "السياحة السعودية ميتافيرس"}
          </h1>
        </div>
        <div
          className={`flex flex-row  ${english ? "" : "text-end justify-end"}`}
        >
          <p
            className={`font-[AlbertFontNormal] text-white leading-[1.2] text-base lg:text-[1.1rem] xl:text-[1.5rem] 2xl:text-[1.7rem]`}
          >
            {english ? (
              <>
                Begin a remarkable metaverse trip,
                {isMobile && <br />}
                exploring
                {!isMobile && <br />}
                Saudi Arabia's beauty, landscapes,
                {isMobile && <br />}
                cuisine, and
                {!isMobile && <br />}
                debating with top investors!
              </>
            ) : (
              <>
                ابدأ رحلة رائعة، واستكشف جمال المملكة العربية السعودية،{" "}
                {!isMobile && <br />}ومناظرها الطبيعية، ومطبخها، وناقش مع كبار
                المستثمرين!
              </>
            )}
          </p>
        </div>
        <div className={`flex flex-row ${!english && "justify-end"}`}>
          <Button
            className="w-[70%] xl:w-[45%]  font-[AlbertFontNormal]"
            sx={{
              mt: 6,
              mb: 3,
              borderRadius: "100px",
              height: "3rem",
              paddingTop: "0.7rem",
              fontSize: "1rem",
              background:
                "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important",

              "&:hover": {
                background:
                  "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%)",
              },
              boxShadow:
                "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
              "&.Mui-disabled": {
                background: "#36373E",
                color: "rgba(255, 255, 255, 0.5)",
              },
            }}
            type="submit"
            variant="contained"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            {english ? "JOIN THE METAVERSE" : "انضم إلى ميتافيرس"}
          </Button>
        </div>
      </div>
      <div className="flex flex-row">
        <Image
          src={`/images/scroll-element.png`}
          alt="Background"
          width={isMobile ? 37 : 50}
          height={isMobile ? 50 : 55}
          quality={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
