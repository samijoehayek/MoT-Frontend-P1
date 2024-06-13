import Image from "next/image";
import React from "react";

const RadialGradientPurple = () => {
  return (
    <div className="absolute right-0 opacity-80" style={{ top: "47%" }}>
      <Image
        src="/images/purple-glow.png"
        alt="Background"
        width={700}
        height={800}
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default RadialGradientPurple;