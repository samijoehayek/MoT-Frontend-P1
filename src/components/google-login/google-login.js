"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

const GoogleLogin = () => {
  const router = useRouter();
  const redirect = async () => {
    router.push(`${process.env.NEXT_PUBLIC_API_HOST}/auth/oAuth`);
  };
  return (
    <div
      onClick={redirect}
      className="w-100 flex items-center p-2 bg-secondary-dark rounded-lg cursor-pointer border border-gray-300"
    >
      <Image
        width={26}
        height={26}
        alt="google-icon"
        src="/images/googleicon.svg"
      />
      <p className="flex justify-center w-full mb-0 font-normal text-base">
        Log In with Google
      </p>
    </div>
  );
};

export default GoogleLogin;
