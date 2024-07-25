"use client";
import React, { useContext } from "react";
import Image from "next/image";
import NumberTwo from "../../../public/images/number-2.png";
import { useMediaQuery } from "@mui/material";
import { AppContext } from "../../app/appContext";

const InvestmentOpportunities = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { english } = useContext(AppContext);

  return (
    <div
      className={`relative flex flex-col order-1 ${
        english ? "md:order-3" : "md:order-1"
      } justify-center text-start md:min-h-[450px] lg:min-h-[600px] xl:min-h-[700px] 2xl:max-h-[800px] 2xl:pt-32 `}
    >
      <div className="absolute z-0 opacity-80 w-[180px] h-[300px] right-[4%] bottom-[20%] sm:right-[0%] md:w-[160px] md:h-[250px] md:right-[15%] md:top-[0%] lg:top-[7%] 2xl:w-[260px] 2xl:h-[380px] lg:left-[10%] xl:left-[15%] xl:top-[12%] 2xl:top-[17%] 2xl:left-[8%]">
        <Image
          src={NumberTwo}
          alt="Background"
          fill
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </div>
      <p
        className={`font-[AlbertFontNormal] ${
          !english && "text-end"
        } text-[1.15rem] text-white pb-4`}
      >
        {english ? "Business Network" : "شبكة الأعمال"}
      </p>

      <h1
        className={`font-[AlbertFont] ${
          !english && "text-end"
        } text-white leading-[1.2] text-[1.8rem] md:text-[1.8rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.3rem]`}
      >
        {english ? (
          <>
            Unlocking Business <br /> Tourism Investment <br /> Opportunities
          </>
        ) : (
          <>
            فتح فرص الاستثمار <br /> في سياحة الأعمال
          </>
        )}
      </h1>
      <p
        className={`font-[AlbertFontNormal] ${
          !english && "text-end"
        } text-white pt-8 leading-[1.2] text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]`}
      >
        {english ? (
          <>
            Explore business tourism in Saudi Arabia, {isMobile && <br />}{" "}
            connecting with {!isMobile && <br />}
            fellow entrepreneurs to {isMobile && <br />} discuss investment
            prospects and tap {!isMobile && <br />}
            into {isMobile && <br />} lucrative opportunities.
          </>
        ) : (
          <>
            استكشف سياحة الأعمال في المملكة العربية السعودية،{" "}
            {isMobile && <br />} وتواصل مع {!isMobile && <br />} زملائك من رواد
            الأعمال {isMobile && <br />} لمناقشة آفاق الاستثمار والاستفادة{" "}
            {isMobile && <br />} من الفرص المربحة
          </>
        )}
      </p>
    </div>
  );
};

export default InvestmentOpportunities;
