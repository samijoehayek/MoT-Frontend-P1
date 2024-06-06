import React from "react";
import PartThree from "@/components/part-three/part-three";
import Image from "next/image";

const BusinessTourism = () => {
  return (
    <div className="flex md:flex-row px-12">
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
    </div>
  );
};

export default BusinessTourism;
