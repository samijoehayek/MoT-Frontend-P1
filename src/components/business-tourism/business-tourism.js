import React from "react";
import PartThree from "@/components/part-three/part-three";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import RadialGradientPurple from "../radial-gradient-purple/radial-gradient-purple";

const BusinessTourism = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={"flex flex-col md:flex-row md:px-12 relative"}>
      <RadialGradientPurple />
      {isMobile ? (
        <>
          <PartThree />
          <div className="flex flex-col items-center ml-4">
            <Image
              src="/images/sofas-vis.png"
              alt="Background"
              width={420}
              height={500}
              quality={100}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex-[5] flex flex-col items-center pb-40">
            <Image
              src="/images/sofas-vis.png"
              alt="Background"
              width={600}
              height={500}
              quality={100}
            />
          </div>
          <PartThree />
        </>
      )}
    </div>
  );
};

export default BusinessTourism;
