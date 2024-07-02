import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@mui/material";

const RadialGradientPurple = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="absolute right-0 opacity-80" style={{ top: isMobile?"39%":"44%" }}>
      <Image
        src="/images/purple-glow.png"
        alt="Background"
        width={isMobile?1900:900}
        height={800}
        quality={100}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default RadialGradientPurple;
