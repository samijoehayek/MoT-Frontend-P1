"use client";
import React, { useContext } from "react";
import { useMediaQuery } from "@mui/material";
import NumberThree from "../../../public/images/number-3.png";
import Image from "next/image";
import { AppContext } from "../../app/appContext";

const VirtualMarketplace = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { english } = useContext(AppContext);

  return (
    <div
      className={`${
        english ? "order-1" : "order-3"
      } relative flex flex-col justify-center text-center md:text-start md:min-h-[450px] lg:min-h-[600px] xl:min-h-[700px] 2xl:max-h-[800px] 2xl:pt-32`}
    >
      <div className="absolute z-0 opacity-80 w-[180px] h-[300px] right-[4%] bottom-[5%] sm:right-[0%] md:w-[160px] md:h-[250px] md:right-[20%] md:top-[5%] lg:top-[7%] 2xl:w-[260px] 2xl:h-[380px] lg:left-[10%] xl:left-[15%] xl:top-[12%] 2xl:top-[17%] 2xl:left-[8%]">
        <Image
          src={NumberThree}
          alt="Background"
          fill
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </div>
      <p
        className={`${
          !english && "text-end"
        } font-[AlbertFontNormal] text-[1.15rem] text-white pb-4`}
      >
        {english ? <>Marketplaces</> : <>المتجر</>}
      </p>
      <div>
        <h1
          className={`${
            !english && "text-end"
          } font-[AlbertFont] text-white leading-[1.2] text-[1.8rem] md:text-[1.8rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.3rem]`}
        >
          {english ? (
            <>
              Join our Bustling <br /> Virtual Marketplace!
            </>
          ) : (
            <>
              انضم إلى سوقنا <br /> الافتراضي الصاخب!
            </>
          )}
        </h1>
        <p
          className={`${
            !english && "text-end"
          } font-[AlbertFontNormal] text-white pt-8 leading-[1.2] text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]`}
        >
          {english ? (
            <>
              Explore Bujairi Terrace to find out more about its{" "}
              {isMobile && <br />} world class {!isMobile && <br />} dining
              locations while admiring the beauty {isMobile && <br />} and
              heritage of {!isMobile && <br />} Diriyah and At-Turaif.
            </>
          ) : (
            <>
              استكشف تراس البجيري لتعرف المزيد عن مواقع تناول الطعام <br /> ذات
              المستوى العالمي بينما تستمتع بجمال وتراث الدرعية والطريف
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default VirtualMarketplace;
