"use client";
import React, {useContext} from "react";
import Image from "next/image";
import { AppContext } from "../../app/appContext";

const SofasImage = () => {
  const { english } = useContext(AppContext);
  return (
    <div className={`flex flex-col justify-start order-3 sm:max-w-[400px] ${english ? "md:order-1" : "md:order-3"} md:max-w-[330px] lg:justify-start lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[700px]`}>
      <Image
        src={english?"/images/sofas-vis.png":"/images/sofas-vis-ar.png"}
        alt="Background"
        width={700}
        height={500}
        quality={100}
      />
    </div>
  );
};

export default SofasImage;
