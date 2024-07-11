import React from "react";
import Image from "next/image";

const LobbyImage = () => {
  return (
    <div className="flex flex-col max-w-[250px] sm:max-w-[300px] md:max-w-[250px] lg:justify-start lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[700px]">
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
