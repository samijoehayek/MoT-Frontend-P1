"use client";
import React from "react";
import Image from "next/image";
import VirtualMarketplace from "../virtual-marketplace/virtual-marketplace";

const Marketplace = () => {

  return (
    <div className="flex flex-col py-20 md:flex-row md:px-12">
      <VirtualMarketplace />
      <div className="flex flex-col items-center md:flex-[5] md:pb-48">
        <Image
          src="/images/villa.png"
          alt="Background"
          width={700}
          height={500}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Marketplace;
