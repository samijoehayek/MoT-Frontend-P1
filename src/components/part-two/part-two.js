import React from "react";
import Image from "next/image";

const PartTwo = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/circles.png"
          alt="Background"
          layout="fill"
          quality={100}
        />
      </div>
      <div
        className="relative py-16 sm:py-24 lg:py-32 text-white text-center"
        style={{
          fontFamily: "AlbertFont",
          fontSize: "3rem",
          lineHeight: "1.3",
        }}
      >
        <h1 style={{
            paddingTop: "6rem",
        }}>
          Begin a remarkable virtual trip to <br /> Saudi Arabia's enchanting
          tourist
          <br />
          spots, alone or with friends!
        </h1>
      </div>
    </div>
  );
};

export default PartTwo;
