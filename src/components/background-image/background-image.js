import React from "react";
import Image from "next/image";

const BackgroundImage = ({ imageName }) => {
  return (
    <>

      {/* Background Image Section */}
      <div className="absolute right-0 w-[100%] xl:w-[77%] h-full hidden lg:block">
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
