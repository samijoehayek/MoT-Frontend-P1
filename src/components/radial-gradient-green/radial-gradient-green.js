import Image from "next/image";
import React from "react";

const RadialGradientGreen = () => {
  return (
    <div className="absolute left-0 opacity-80 w-[100%] h-[180%]">
      <Image
        src="/images/green-glow.png"
        alt="Background"
        fill
        style={{ objectFit: "fill" }}
        quality={100}
      />
    </div>
  );
};

export default RadialGradientGreen;
