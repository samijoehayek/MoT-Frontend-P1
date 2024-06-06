import Image from "next/image";
import React from "react";

const RadialGradientPurple = () => {
  return (
    <Image
      src="/images/purple-glow.png"
      alt="Background"
      width={700}
      height={800}
      objectFit="cover"
      quality={100}
    />
  );
};

export default RadialGradientPurple;
