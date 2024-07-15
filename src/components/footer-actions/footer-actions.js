import React from "react";
import FooterJoinTheMetaverse from "../footer-join-the-metaverse/footer-join-the-metaverse";

const FooterActions = () => {
  return (
    <div className="w-full h-[90%] absolute flex flex-col justify-end items-center text-center text-white lg:h-full lg:justify-center">
      <h2 className="font-[AlbertFont] leading-[1.1] pb-4 text-[2.25rem] lg:text-[3.75rem]">
        Join MT Metaverse Now!
      </h2>
      <p className="font-[AlbertFontNormal] leading-[1.2] pb-4 text-[1rem] lg:text-[1.125rem]">
        Meet others interested in Saudi Arabia, tourism and <br /> emerging
        metaverse and AI technology by joining the <br />
        MT Metaverse now!
      </p>
      <FooterJoinTheMetaverse />
    </div>
  );
};

export default FooterActions;
