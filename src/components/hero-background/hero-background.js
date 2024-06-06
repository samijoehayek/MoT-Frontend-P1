import React from "react";
import Image from "next/image";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/hero-background.jpg"
        alt="Background"
        height={1080}
        width={1920}
        quality={100}
      />
    </div>
  );
};

export default HeroBackground;
