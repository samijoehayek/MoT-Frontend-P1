"use client";
import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const VirtualMarketplace = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="relative flex flex-col md:flex-[4] justify-center text-center py-20 md:text-start md:min-h-[450px] lg:min-h-[600px] xl:min-h-[700px] 2xl:max-h-[800px]">
      <div className="absolute z-0 opacity-80 w-[180px] h-[330px] right-[4%] bottom-[5%] md:w-[220px] md:h-[350px] md:right-[15%] md:top-[0%] lg:top-[7%] 2xl:w-[260px] 2xl:h-[380px] lg:left-[10%] xl:left-[15%] xl:top-[12%] 2xl:top-[18%] 2xl:left-[8%]">
        <Image
          src="/images/number-3.png"
          alt="Background"
          fill
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </div>
      <div className="2xl:pt-40">
        <p className="font-[AlbertFontNormal] text-[1.15rem] text-white pb-4">
          Marketplace
        </p>
        <div>
          <h1 className="font-[AlbertFont] text-[1.8rem] leading-[1.2] md:text-[2rem] md:leading-[1.1] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[4rem] text-white pb-4">
            Join our Bustling <br /> Virtual Marketplace!
          </h1>
          <p className="font-[AlbertFontNormal] text-[0.9rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.3rem] leading-[1.2] text-white 2xl:pt-8">
            Explore Bujairi Terrace to find out more about its{" "}
            {isMobile && <br />} world class {!isMobile && <br />} dining
            locations while admiring the beauty {isMobile && <br />} and
            heritage of {!isMobile && <br />} Diriyah and At-Turaif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualMarketplace;
