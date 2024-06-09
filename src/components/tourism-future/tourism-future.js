import React from "react";
import Image from "next/image";
import PartFour from "@/components/part-four/part-four";

const TourismFuture = () => {
  return (
    <div className="flex md:flex-row px-12 pb-40">
      <div className="flex-[5] flex flex-col px-8 text-white justify-center items-center">
        <PartFour />
      </div>
      <div className="flex-[5] flex flex-col items-center">
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
