import React from "react";
import VirtualMarketplace from "../virtual-marketplace/virtual-marketplace";
import VillaImage from "../villa-image/villa-image";

const Marketplace = () => {

  return (
    <div className="flex flex-col pt-40 sm:justify-center sm:items-center md:flex-row md:py-20 md:px-20 md:items-start">
      <VirtualMarketplace />
      <div className="order-2 md:min-w-[10px] lg:min-w-[50px] xl:min-w-[100px] 2xl:min-w-[200px]"></div>
      <VillaImage />
    </div>
  );
};

export default Marketplace;
