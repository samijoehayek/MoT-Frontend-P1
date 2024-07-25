"use client";
import React, { useContext } from "react";
import Image from "next/image";
import NumberOne from "../../../public/images/number-1.png";
import { useMediaQuery } from "@mui/material";
import { AppContext } from "../../app/appContext";

const Facilities = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { english } = useContext(AppContext);

  return (
    <div className="relative flex flex-col justify-center text-center md:text-start md:min-h-[450px] lg:min-h-[600px] xl:min-h-[700px] 2xl:max-h-[800px] 2xl:pt-32">
      <div className="absolute z-0 opacity-80 w-[100px] h-[300px] right-[4%] bottom-[0%] sm:w-[100px] md:h-[250px] sm:right-[0%] md:w-[100px] md:h-[250px] md:right-[40%] md:top-[5%] lg:top-[7%] lg:w-[100px] lg:h-[250px] lg:left-[20%] lg:top-[20%] xl:w-[110px] xl:h-[250px] xl:left-[20%] xl:top-[18%] 2xl:w-[160px] 2xl:h-[380px] 2xl:top-[20%] 2xl:left-[20%]">
        <Image
          src={NumberOne}
          alt="Background"
          fill
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </div>
      <p
        className={`font-[AlbertFontNormal] text-[1.15rem] text-white pb-4 ${
          english ? "" : "text-end justify-end"
        }`}
      >
        {english ? "Lobby" : "ردهة"}
      </p>

      <h1
        className={`font-[AlbertFont] text-white leading-[1.2] text-[1.8rem] md:text-[1.7rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.3rem] ${
          english ? "" : "text-end justify-end"
        }`}
      >
        {english ? (
          <>
            Unveiling Key <br /> Attractions and <br /> Visitor Facilities
          </>
        ) : (
          <>
            الكشف عن المعالم
            <br /> السياحية الرئيسية
            <br /> ومرافق الزوار
          </>
        )}
      </h1>
      <p
        className={`"font-[AlbertFontNormal] text-white pt-8 leading-[1.2] text-[0.9rem] md:text-[0.8rem] lg:text-[0.7rem] xl:text-[1rem] 2xl:text-[1.1rem]" ${
          english ? "" : "text-end justify-end"
        }`}
      >
        {english ? (
          <>
            Embark on a journey to discover Saudi {isMobile && <br />}Arabia's
            {!isMobile && <br />}key destinations and tourism
            {isMobile && <br />}
            highlights, immersing {!isMobile && <br />}yourself in its rich
            {isMobile && <br />}culture and visitor facilities.
          </>
        ) : (
          <>
            انطلق في رحلة لاكتشاف المملكة العربية{isMobile && <br />}السعوديةا
            {!isMobile && <br />}لوجهات{isMobile && <br />} الرئيسية والمعالم
            .السياحية البارزة،{!isMobile && <br />} وتنغمس في ثقافتها{" "}
            {isMobile && <br />}الغنية ومرافق الزوار
          </>
        )}
      </p>
    </div>
  );
};

export default Facilities;
