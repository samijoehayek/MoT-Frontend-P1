import Image from "next/image";
import React from "react";
import GreenGlow from "../../../public/images/green-glow.png";

const RadialGradientGreen = () => {
  return (
    <div className="absolute left-0 opacity-80 w-[100%] h-[180%] lg:h-[100%] lg:w-[40%] lg:mt-40">
      <Image
        src={GreenGlow}
        alt="Background"
        fill
        style={{ objectFit: "fill" }}
        quality={100}
      />
    </div>
  );
};

export default RadialGradientGreen;
