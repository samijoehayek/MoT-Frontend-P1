import Image from "next/image";
import React from "react";

const RadialGradientGreen = () => {
  return (
    <Image
      src="/images/green-glow.png"
      alt="Background"
      width={700}
      height={800}
      objectFit="cover"
      quality={100}
    />
  );
};

export default RadialGradientGreen;
