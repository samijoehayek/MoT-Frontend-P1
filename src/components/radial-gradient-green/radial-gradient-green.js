import Image from "next/image";
import React from "react";

const RadialGradientGreen = () => {
  return (
    <div className="absolute left-0 opacity-80" style={{ top: "59%" }}>
      <Image
        src="/images/green-glow.png"
        alt="Background"
        width={720}
        height={800}
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default RadialGradientGreen;
