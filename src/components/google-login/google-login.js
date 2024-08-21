"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AppContext } from "../../app/appContext";

const GoogleLogin = () => {
  const router = useRouter();
  const { english } = useContext(AppContext);

  const redirect = async () => {
    router.push(`${process.env.NEXT_PUBLIC_API_HOST}/auth/oAuth`);
  };
  return (
    <div
      onClick={redirect}
      className="w-100 flex items-center justify-center p-2 bg-white rounded-3xl cursor-pointer border border-gray-300 mb-20"
    >
      {english ? (
        <>
          <Image
            width={20}
            height={20}
            alt="google-icon"
            src="/images/googleicon.svg"
            className="mr-2"
          />
          <p
            className="mb-0 font-normal text-base text-gray-500 mt-1"
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            LOG IN WITH GOOGLE
          </p>
        </>
      ) : (
        <>
          <p
            className="mb-0 font-normal text-base text-gray-500 mt-1"
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            تسجيل الدخول عبر جوجل
          </p>
          <Image
            width={20}
            height={20}
            alt="google-icon"
            src="/images/googleicon.svg"
            className="ml-2"
          />
        </>
      )}
    </div>
  );
};

export default GoogleLogin;
