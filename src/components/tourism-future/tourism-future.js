"use client";
import React from "react";
import Image from "next/image";
import RadialGradientGreen from "../radial-gradient-green/radial-gradient-green";
import KsaNetwork from "../ksa-network/ksa-network";

const TourismFuture = () => {

  return (
    <div className={`flex flex-col md:flex-row md:px-8 md:py-8 xl:pl-40`}>
      <RadialGradientGreen />
      <KsaNetwork />
      <div className="flex flex-col px-4 py-4 lg:px-20 lg:py-20 items-center md:flex-[5]">
        <Image
          src="/images/avatar-visuals.png"
          alt="Background"
          width={450}
          height={400}
          quality={100}
        />
      </div>
    </div>
  );
};

export default TourismFuture;
