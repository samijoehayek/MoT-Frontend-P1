import React from "react";
import Image from "next/image";

const PartFive = () => {
  return (
    <div className="relative">
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          paddingBottom: "1rem",
        }}
      >
        Marketplace
      </p>
      <div
        className="absolute transform -translate-x-1/3 -translate-y-1/3 z-0 opacity-80"
        style={{ top: "-12%", left: "35%" }}
      >
        <Image
          src="/images/number-3.png"
          alt="Background"
          width={260}
          height={240}
          quality={100}
        />
      </div>
      <h1
        style={{
          fontFamily: "AlbertFont",
          fontSize: "3.5rem",
          lineHeight: "1.1",
          paddingBottom: "1rem",
        }}
      >
        Join our Bustling <br /> Virtual Marketplace!
      </h1>
      <p
        style={{
          fontFamily: "AlbertFontNormal",
          fontSize: "1.15rem",
          lineHeight: "1.2",
          paddingTop: "1rem",
        }}
      >
        Explore Bujairi Terrace to find out more about its world class <br />{" "}
        dining locations while admiring the beauty and heritage of <br />{" "}
        Diriyah and At-Turaif.
      </p>
    </div>
  );
};

export default PartFive;
