"use client";
import React from "react";
import Image from "next/image";
import Login from "@/components/login/login";
import localFont from "next/font/local";

const albertFont = localFont({
  src: "../../public/FSAlbertArabic-Bold.ttf",
  display: "swap",
});

const Home = () => {
  return (
    <div className="flex h-screen bg-[#1A1B22]">
      {/* Login Form Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        <Login />
      </div>

      {/* Image Section */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 flex items-start justify-start p-20 mt-10 ml-10">
          <div className={`${albertFont.className} text-white z-10`}>
            <h2 className="text-5xl font-bold mb-4">
              Diriyah Digital Marketplace
            </h2>
            <p className="text-5xl font-bold">Journey Begins Here!</p>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="relative h-full">
            <Image
              src="/images/login-bg4.png"
              alt="Background"
              fill={true}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

