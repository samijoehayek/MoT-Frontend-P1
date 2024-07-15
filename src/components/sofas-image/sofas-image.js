import React from "react";
import Image from "next/image";

const SofasImage = () => {
  return (
    <div className="flex flex-col justify-start order-3 sm:max-w-[400px] md:order-1 md:max-w-[330px] lg:justify-start lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[700px]">
      <Image
        src="/images/sofas-vis.png"
        alt="Background"
        width={700}
        height={500}
        quality={100}
      />
    </div>
  );
};

export default SofasImage;
