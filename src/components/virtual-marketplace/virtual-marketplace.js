import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const VirtualMarketplace = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="flex flex-col relative text-white justify-center items-center mb-8 py-12 md:flex-[4] md:px-8">
      <div className="absolute z-0 opacity-80 w-[189px] h-[100%] right-[4%] bottom-[12%] md:w-[210px] md:h-[400px] md:top-[-10%] lg:top-[15%] lg:left-[30%]">
        <Image
          src="/images/number-3.png"
          alt="Background"
          fill
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </div>
      <p className="font-[AlbertFontNormal] text-[1.15rem] pb-4">Marketplace</p>
      <div>
        <h1 className="font-[AlbertFont] text-[2rem] leading-[1.2] md:text-[2.2rem] md:leading-[1.1] lg:text-[3.5rem] pb-4">
          Join our Bustling <br /> Virtual Marketplace!
        </h1>
        <p className="font-[AlbertFontNormal] text-[1rem] md:text-[1rem] lg:text-[1.15rem] leading-[1.2] pt-4">
          Explore Bujairi Terrace to find out more about its{" "}
          {isMobile && <br />} world class {!isMobile && <br />} dining
          locations while admiring the beauty {isMobile && <br />} and heritage
          of {!isMobile && <br />} Diriyah and At-Turaif.
        </p>
      </div>
    </div>
  );
};

export default VirtualMarketplace;
