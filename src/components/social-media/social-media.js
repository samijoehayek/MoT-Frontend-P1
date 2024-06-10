import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const SocialMedia = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="w-full flex flex-row">
      <div className="flex flex-col justify-center items-center px-1">
        <Image
          src="/images/facebook-footer.png"
          alt="STC Logo"
          width={isMobile?34:24}
          height={10}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-1">
        <Image
          src="/images/instagram-footer.png"
          alt="STC Logo"
          width={isMobile?34:24}
          height={10}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-1">
        <Image
          src="/images/twitter-footer.png"
          alt="STC Logo"
          width={isMobile?34:24}
          height={10}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-1">
        <Image
          src="/images/linkedin-footer.png"
          alt="STC Logo"
          width={isMobile?34:24}
          height={10}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
