import React from "react";
import FooterJoinTheMetaverse from "../footer-join-the-metaverse/footer-join-the-metaverse";

const FooterActions = () => {
  return (
    <div className="w-full h-[90%] absolute flex flex-col justify-end items-center text-center text-white lg:h-full lg:justify-center">
      <h2
        className="text-4xl lg:text-6xl"
        style={{
          fontFamily: "AlbertFont",
          lineHeight: "1.1",
          paddingBottom: "1rem",
        }}
      >
        Join MT Metaverse Now!
      </h2>
      <p
        className="text-base lg:text-lg"
        style={{
          fontFamily: "AlbertFontNormal",
          lineHeight: "1.2",
          paddingTop: "1.5rem",
        }}
      >
        Meet others interested in Saudi Arabia, tourism and <br /> emerging
        metaverse and AI technology by joining the <br />
        MT Metaverse now!
      </p>
      <FooterJoinTheMetaverse />
    </div>
  );
};

export default FooterActions;
