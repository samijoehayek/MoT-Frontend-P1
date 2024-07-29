"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../app/appContext";

const VillaImage = () => {
  const { english } = useContext(AppContext);

  return (
    <div className="flex flex-col order-3 justify-start sm:max-w-[400px] md:max-w-[330px] lg:justify-start lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[700px]">
      <Image
        src="/images/villa.png"
        alt="Background"
        width={700}
        height={500}
        quality={100}
      />
    </div>
  );
};

export default VillaImage;
