"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/hero-section/hero-section";
import PartOne from "@/components/part-one/part-one";
import PartThree from "@/components/part-three/part-three";
import Image from "next/image";
import PartTwo from "@/components/part-two/part-two";
import PartFour from "@/components/part-four/part-four";
import PartFive from "@/components/part-five/part-five";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#101010]">
      <Navbar />
      <div className="flex md:flex-row py-16 px-8">
        <div className="w-full md:w-1/2 flex flex-col px-8 text-white">
          <HeroSection />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 text-white">
          Part 2
        </div>
      </div>
      <div className="flex md:flex-row py-16 px-12">
        <div className="flex-[3] flex flex-col px-8 text-white">
          <PartOne />
        </div>
        <div className="flex-[5] flex flex-col justify-center items-center text-white">
          <Image
            src="/images/map.png"
            alt="Background"
            width={1000}
            height={500}
            quality={100}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex md:flex-row px-12">
        <div className="w-full flex flex-col text-white">
          <PartTwo />
        </div>
      </div>
      <div className="flex md:flex-row px-12">
        <div className="flex-[5] flex flex-col items-center pb-40">
          <Image
            src="/images/sofas-vis.png"
            alt="Background"
            width={600}
            height={500}
            quality={100}
          />
        </div>
        <div className="flex-[4] flex flex-col px-8 text-white justify-center items-center">
          <PartThree />
        </div>
      </div>
      <div className="flex md:flex-row px-12">
        <div className="flex-[5] flex flex-col px-8 text-white justify-center items-center">
          <PartFour />
        </div>
        <div className="flex-[5] flex flex-col items-center">
          <Image
            src="/images/avatar-visuals.png"
            alt="Background"
            width={450}
            height={400}
            quality={100}
          />
        </div>
      </div>
      <div className="flex md:flex-row px-12 pt-20">
        <div className="flex-[5] flex flex-col px-8 text-white justify-center items-center">
          <PartFive />
        </div>
        <div className="flex-[5] flex flex-col items-center pb-40">
          <Image
            src="/images/sofas-v.png"
            alt="Background"
            width={600}
            height={500}
            quality={100}
          />
        </div>
      </div>
      <div className="flex md:flex-row px-12">
        <div className="w-full flex flex-col text-white">
          <PartTwo />
        </div>
      </div>
    </div>
  );
};

export default Home;
