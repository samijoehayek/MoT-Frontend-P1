import React from "react";
import Image from "next/image";

const VillaImage = () => {
  return (
    <div className="flex flex-col justify-center md:justify-start md:flex-[5] lg:pt-8 xl:pt-0 2xl:pb-40">
      <Image
        src="/images/villa.png"
        alt="Background"
        width={700}
        height={500}
        quality={100}
      />
    </div>
  );
};

export default VillaImage;
