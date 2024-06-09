import React from "react";
import Image from "next/image";
import PartFive from "@/components/part-five/part-five";

const Marketplace = () => {
  return (
    <div className="flex md:flex-row px-12 py-20">
      <div className="flex-[4] flex flex-col px-8 text-white justify-center items-center">
        <PartFive />
      </div>
      <div className="flex-[5] flex flex-col items-center pb-48">
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
