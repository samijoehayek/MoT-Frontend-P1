"use client";
import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AppContext } from "../../app/appContext";

const RestaurantBox = () => {
  const { english } = useContext(AppContext);

  return (
    <div className="flex flex-row justify-center">
      <Box className="bg-[#1A1A1A] w-full md:w-[85%] min-h-[500px] flex flex-col rounded-[10px] md:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px] md:flex-row md:justify-center md:items-center md:rounded-[48px] shadow-lg">
        <div className={"w-full flex flex-col md:flex-row"}>
          <div className="w-full h-full lg:w-[55%]" />

          <div className="w-full lg:w-[45%] order-1 lg:order-2 text-white mt-8 lg:mt-0 text-end">
            <h2
              className={`font-[AlbertFont] text-[2.3rem] lg:text-[2.8rem] xl:text-[3.5rem] leading-[1.1] pb-4 pt-4 lg:pt-0 text-center ${
                english ? "md:text-start" : "md:text-end md:mr-24"
              } `}
            >
              {english ? (
                <>
                  Lively mix of world <br /> class eateries
                </>
              ) : (
                <>
                  مزيج حيوي من المطاعم <br /> ذات المستوى العالمي
                </>
              )}
            </h2>
            <p
              className={`font-[AlbertFontNormal] text-base lg:text-[1.2rem] xl:text-[1.4rem] leading-[1.2] pt-4 text-center ${
                english ? "md:text-left" : "md:text-end md:mr-24"
              } `}
            >
              {english ? (
                <>
                  Virtual wonderland delivering a unique <br /> online
                  destination for delightful culinary <br /> and cultural
                  experiences.
                </>
              ) : (
                <>
                  أرض العجائب الافتراضية توفر وجهة فريدة عبر <br /> الإنترنت
                  لتجارب الطهي والثقافة المبهجة
                </>
              )}
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default RestaurantBox;
