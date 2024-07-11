import React from "react";
import RadialGradientGreen from "../radial-gradient-green/radial-gradient-green";
import KsaNetwork from "../ksa-network/ksa-network";
import LobbyImage from "../lobby-image/lobby-image";

const TourismFuture = () => {
  return (
    <div className="flex flex-col pt-40 items-center sm:justify-center md:flex-row md:py-20 md:px-20 md:items-start">
      <RadialGradientGreen />
      <KsaNetwork />
      <div className="md:min-w-[60px] lg:min-w-[100px] xl:min-w-[200px] 2xl:min-w-[340px]"></div>
      <LobbyImage />
    </div>
  );
};

export default TourismFuture;
