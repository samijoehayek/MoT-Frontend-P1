"use client";
import React, { useContext } from "react";
import FooterJoinTheMetaverse from "../footer-join-the-metaverse/footer-join-the-metaverse";
import { AppContext } from "../../app/appContext";

const FooterActions = () => {
  const { english } = useContext(AppContext);

  return (
    <div className="w-full h-[90%] absolute flex flex-col justify-end items-center text-center text-white lg:h-full lg:justify-center">
      <h2 className="font-[AlbertFont] leading-[1.1] pb-4 text-[2.25rem] lg:text-[3.75rem]">
        {english ? (
          <>Join MT Metaverse Now!</>
        ) : (
          <> !الآن MT Metaverse انضم إلى</>
        )}
      </h2>
      <p className="font-[AlbertFontNormal] leading-[1.2] pb-4 text-[1rem] lg:text-[1.125rem]">
        {english ? (
          <>
            Meet others interested in Saudi Arabia, tourism and <br /> emerging
            metaverse and AI technology by joining the <br />
            MT Metaverse now!
          </>
        ) : (
          <>
            تعرف على أشخاص آخرين مهتمين بالمملكة العربية السعودية <br /> والسياحة
            وتكنولوجيا Metaverse الناشئة والذكاء الاصطناعي <br /> من خلال الانضمام إلى
            MT Metaverse الآن!
          </>
        )}
      </p>
      <FooterJoinTheMetaverse />
    </div>
  );
};

export default FooterActions;
