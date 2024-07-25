"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../app/appContext";

const LobbyImage = () => {
  const { english } = useContext(AppContext);

  return (
    <div
      className={`flex flex-col  ${
        english ? "order-3" : "order-1"
      }  max-w-[250px] sm:max-w-[300px] md:max-w-[250px] lg:justify-start lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[700px]`}
    >
      <Image
        src="/images/avatar-visuals.png"
        alt="Background"
        width={450}
        height={400}
        quality={100}
      />
    </div>
  );
};

export default LobbyImage;
