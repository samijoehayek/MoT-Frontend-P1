import Image from "next/image";
import React from "react";
import PurpleGlow from "../../../public/images/purple-glow.png";

const RadialGradientPurple = () => {

  return (
    <div className="absolute right-0 opacity-80 w-[100%] h-[180%] lg:h-[100%] lg:w-[40%] lg:mt-80">
      <Image
        src={PurpleGlow}
        alt="Background"
        fill
        style={{ objectFit: "fill" }}
        quality={100}
      />
    </div>
  );
};

export default RadialGradientPurple;
