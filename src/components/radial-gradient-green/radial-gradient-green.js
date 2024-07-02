import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@mui/material";

const RadialGradientGreen = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="absolute left-0 opacity-80" style={{ top: isMobile&&"87%"}}>
      <Image
        src="/images/green-glow.png"
        alt="Background"
        width={isMobile?1900:1000}
        height={800}
        style={{ objectFit: "cover" }}
        quality={100}
      />
    </div>
  );
};

export default RadialGradientGreen;
