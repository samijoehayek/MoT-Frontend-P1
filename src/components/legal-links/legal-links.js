"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../../app/appContext";

const LegalLinks = () => {
  const { english } = useContext(AppContext);
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
          {english ? "Join The Metaverse" : "انضم إلى ميتافيرس"}
        </li>
        <li
          className="px-2 py-2 cursor-pointer"
          onClick={() => {
            router.push("/terms-and-conditions");
          }}
        >
          {english ? "Terms of Use" : "شروط الاستخدام"}
        </li>
        <li
          className="px-2 py-2 cursor-pointer"
          onClick={() => {
            router.push("/privacy-policy");
          }}
        >
          {english ? "Privacy Policy" : "سياسة الخصوصية"}
        </li>
      </ul>
    </div>
  );
};

export default LegalLinks;
