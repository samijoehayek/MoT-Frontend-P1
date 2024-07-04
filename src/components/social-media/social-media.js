"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: "/images/facebook-footer.png",
    url: "https://www.facebook.com/Saudi.MT/",
  },
  {
    name: "Instagram",
    icon: "/images/instagram-footer.png",
    url: "https://www.instagram.com/saudi.mt?igshid=9u48aa5ai2t1",
  },
  {
    name: "Twitter",
    icon: "/images/twitter-footer.png",
    url: "https://x.com/Saudi_MT",
  },
  {
    name: "LinkedIn",
    icon: "/images/linkedin-footer.png",
    url: "https://www.linkedin.com/company/ministry-of-tourism-of-saudi-arabia/",
  },
];

const SocialMedia = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="flex flex-row justify-center">
      {socialMediaLinks.map((link) => (
        <div
          key={link.name}
          className="flex flex-col justify-center items-center px-1 cursor-pointer"
          onClick={() => router.push(link.url)}
        >
          <Image
            src={link.icon}
            alt={`${link.name} Logo`}
            width={isMobile ? 34 : 30}
            height={10}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
