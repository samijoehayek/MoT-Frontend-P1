import React from "react";
import Image from "next/image";

const PartThree = () => {
  return (
    <div className="relative">
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          paddingBottom: "1rem",
        }}
      >
        Business Network
      </p>
      <div className="absolute transform -translate-x-1/3 -translate-y-1/3 z-0 opacity-80">
        <Image
          src="/images/number-2.png"
          alt="Background"
          width={240}
          height={240}
          quality={100}
        />
      </div>
      <h1
        style={{
          fontFamily: "AlbertFont",
          fontSize: "4rem",
          lineHeight: "1.1",
          paddingBottom: "1rem",
        }}
      >
        Unlocking Business <br /> Tourism Investment <br /> Opportunities
      </h1>
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          lineHeight: "1.2",
          paddingTop: "1rem",
        }}
      >
        Explore business tourism in Saudi Arabia, connecting with<br/> fellow
        entrepreneurs to discuss investment prospects and tap<br /> into lucrative
        opportunities.
      </p>
    </div>
  );
};

export default PartThree;
