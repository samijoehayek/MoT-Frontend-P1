import React from "react";
import PartOne from "@/components/part-one/part-one";
import Image from "next/image";

const Attractions = () => {
  return (
    <div className="flex md:flex-row py-20 px-12">
      <div className="flex-[3] flex flex-col px-8 py-20 text-white">
        <PartOne />
      </div>
      <div className="flex-[5] flex flex-col">
        <Image
          src="/images/new-map.png"
          alt="Background"
          width={1000}
          height={500}
          quality={100}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Attractions;
