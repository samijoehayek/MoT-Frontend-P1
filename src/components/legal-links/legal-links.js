"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LegalLinks = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col justify-center items-center text-center text-white mb-8 lg:my-0"
      style={{ fontFamily: "AlbertFontNormal" }}
    >
      <ul className="flex flex-col lg:flex-row">
        <li
          className="px-2 py-2 cursor-pointer"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Join The Metaverse
        </li>
        <li
          className="px-2 py-2 cursor-pointer"
          onClick={() => {
            router.push("/terms-and-conditions");
          }}
        >
          Terms of Use
        </li>
        <li
          className="px-2 py-2 cursor-pointer"
          onClick={() => {
            router.push("/privacy-policy");
          }}
        >
          Privacy Policy
        </li>
      </ul>
    </div>
  );
};

export default LegalLinks;
