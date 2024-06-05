import React from "react";
import Image from "next/image";

const LobbyDisplay = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/lobby-bg.png"
        alt="Background"
        width={1920}
        height={1080}
        quality={100}
        style={{ height: '90%' }}
      />
      <div className="absolute inset-0 flex flex-col text-white text-left mt-24 ml-24">
        <h2
          style={{
            fontFamily: "AlbertFont",
            fontSize: "4.5rem",
            lineHeight: "1.1",
            paddingBottom: "1rem",
          }}
        >
          Plan your trip <br /> with ease!
        </h2>
        <p
          style={{
            fontFamily: "AlbertFontNormal",
            fontSize: "1.15rem",
            lineHeight: "1.3",
            paddingTop: "1rem",
          }}
        >
          Engage with our Ai powered assistant <br /> to help plan your trip and learn
          more <br /> about your destination.
        </p>
      </div>
    </div>
  );
};

export default LobbyDisplay;
