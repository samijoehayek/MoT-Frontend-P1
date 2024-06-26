import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const SocialMedia = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="w-full flex flex-row">
      <div className="flex flex-col justify-center items-center px-1 cursor-pointer" onClick={() => {router.push('https://www.facebook.com/Saudi.MT/')}}>
        <Image
          src="/images/facebook-footer.png"
          alt="STC Logo"
          width={isMobile?34:24}
          height={10}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-1 cursor-pointer" onClick={() => {router.push('https://www.instagram.com/saudi.mt?igshid=9u48aa5ai2t1')}}>
        <Image
          src="/images/instagram-footer.png"
          alt="STC Logo"
          width={isMobile?34:24}
          height={10}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-1 cursor-pointer" onClick={() => {router.push('https://x.com/Saudi_MT')}}>
        <Image
          src="/images/twitter-footer.png"
          alt="STC Logo"
          width={isMobile?34:24}
          height={10}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-1 cursor-pointer" onClick={() => {router.push('https://www.linkedin.com/company/ministry-of-tourism-of-saudi-arabia/')}}>
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
