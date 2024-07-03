import React from "react";
import Image from "next/image";

const BackgroundImage = ({ imageName }) => {
  return (
    <>
      <div className="absolute right-0 w-[77%] h-full hidden md:block">
        <Image
          src={`/images/${imageName}.png`}
          alt="Background"
          fill={true}
          quality={100}
        />
      </div>
    </>
  );
};

export default BackgroundImage;
