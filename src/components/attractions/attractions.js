"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Facilities from "../facilities/facilities";
import { AppContext } from "../../app/appContext";

const Attractions = () => {
  const { english } = useContext(AppContext);

  return (
    <div
      className={`flex flex-col pt-60 sm:justify-center sm:items-center md:flex-row md:py-20 md:px-20`}
    >
      {english ? (
        <>
          <Facilities />
          <div className="md:min-w-[10px] lg:min-w-[50px] xl:min-w-[100px] 2xl:min-w-[100px]"></div>
          <div className="flex flex-col justify-center items-center sm:max-w-[500px] md:max-w-[390px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[900px]">
            <Image
              src="/images/new-map.png"
              alt="Background"
              width={900}
              height={500}
              quality={100}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center sm:max-w-[500px] md:max-w-[390px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[9000px]">
            <Image
              src="/images/new-map.png"
              alt="Background"
              width={900}
              height={500}
              quality={100}
            />
          </div>

          <div className="md:min-w-[10px] lg:min-w-[50px] xl:min-w-[100px] 2xl:min-w-[100px]"></div>
          <Facilities />
        </>
      )}
    </div>
  );
};

export default Attractions;
