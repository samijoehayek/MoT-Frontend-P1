import React from "react";
import VirtualMarketplace from "../virtual-marketplace/virtual-marketplace";
import VillaImage from "../villa-image/villa-image";

const Marketplace = () => {

  return (
    <div className="flex flex-col py-20 md:flex-row md:px-20 xl:pl-40 xl:pr-30">
      <VirtualMarketplace />
      <VillaImage />
    </div>
  );
};

export default Marketplace;
