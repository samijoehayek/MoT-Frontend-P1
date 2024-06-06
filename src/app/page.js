"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/hero-section/hero-section";
import Image from "next/image";
import Circles from "@/components/circles/circles";
import PartFour from "@/components/part-four/part-four";
import PartFive from "@/components/part-five/part-five";
import Restaurants from "@/components/restaurants/restaurants";
import VideoRecorder from "@/components/video-recorder/video-recorder";
import FooterHero from "@/components/footer-hero/footer-hero";
import Footer from "@/components/footer/footer";
import LobbyDisplay from "@/components/lobby-display/lobby-display";
import RadialGradientPurple from "@/components/radial-gradient-purple/radial-gradient-purple";
import RadialGradientGreen from "@/components/radial-gradient-green/radial-gradient-green";
import HeroBackground from "@/components/hero-background/hero-background";
import Attractions from "@/components/attractions/attractions";
import BusinessTourism from "@/components/business-tourism/business-tourism";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] relative">
      <HeroBackground />
      <Navbar />
      <HeroSection />
      <Attractions />
      <Circles />
      <LobbyDisplay />
      {/* This component is showing the besiness network */}
      <BusinessTourism />
      {/* Enter a radial gradient purple here */}
      <div className="absolute right-0 opacity-80" style={{ top: "47%" }}>
        <RadialGradientPurple />
      </div>
      <div className="absolute left-0 opacity-80" style={{ top: "59%" }}>
        <RadialGradientGreen />
      </div>
      {/* This component is showing the second part of the business network */}
      <div className="flex md:flex-row px-12 pb-40">
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
      <div className="flex md:flex-row px-12 py-20">
        <div className="flex-[4] flex flex-col px-8 text-white justify-center items-center">
          <PartFive />
        </div>
        <div className="flex-[5] flex flex-col items-center pb-48">
          <Image
            src="/images/villa.png"
            alt="Background"
            width={700}
            height={500}
            quality={100}
          />
        </div>
      </div>
      <div className="flex md:flex-row px-12">
        <div className="w-full flex flex-col justify-center items-center text-white relative">
          <VideoRecorder />
          <Restaurants />
        </div>
      </div>
      <div className="flex md:flex-row ">
        <div className="w-full flex flex-col justify-center items-center text-white">
          <FooterHero />
        </div>
      </div>
      <div className="flex md:flex-row bg-[#18191C]">
        <div className="w-full flex flex-col justify-center items-center text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
