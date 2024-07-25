"use client";
import React from "react";
import RadialGradientPurple from "../radial-gradient-purple/radial-gradient-purple";
import InvestmentOpportunities from "../investment-opportunities/investment-opportunities";
import SofasImage from "../sofas-image/sofas-image";

const BusinessTourism = () => {
  return (
    <div className="flex flex-col pt-40 px-10 sm:justify-center md:items-center md:flex-row md:py-20 md:px-20 md:items-start">
      <RadialGradientPurple />
      <InvestmentOpportunities />
      <div className="order-2 md:min-w-[10px] lg:min-w-[50px] xl:min-w-[100px] 2xl:min-w-[200px]"></div>
      <SofasImage />
    </div>
  );
};

export default BusinessTourism;
