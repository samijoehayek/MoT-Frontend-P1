import React from "react";
import Image from "next/image";

const BackgroundImage = ({ imageName }) => {
  return (
    <>
      <div className="absolute inset-0 flex items-start justify-start p-20 mt-10 ml-10">
        <div className={`text-white z-10`} style={{ fontFamily: "AlbertFont" }}>
          <h2 className="text-5xl font-bold mb-4">
            Diriyah Digital Marketplace
          </h2>
          <p className="text-5xl font-bold">Journey Begins Here!</p>
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="relative h-full">
          <Image
            src={`/images/${imageName}.png`}
            alt="Background"
            fill={true}
            quality={100}
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundImage;
