"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/hero-section/hero-section";
import Circles from "@/components/circles/circles";
import Restaurants from "@/components/restaurants/restaurants";
import FooterHero from "@/components/footer-hero/footer-hero";
import Footer from "@/components/footer/footer";
import LobbyDisplay from "@/components/lobby-display/lobby-display";
import RadialGradientPurple from "@/components/radial-gradient-purple/radial-gradient-purple";
import RadialGradientGreen from "@/components/radial-gradient-green/radial-gradient-green";
import HeroBackground from "@/components/hero-background/hero-background";
import Attractions from "@/components/attractions/attractions";
import BusinessTourism from "@/components/business-tourism/business-tourism";
import TourismFuture from "@/components/tourism-future/tourism-future";
import Marketplace from "@/components/marketplace/marketplace";

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
      <RadialGradientPurple />
      {/* Enter a radial gradient green here */}
      <RadialGradientGreen />
      {/* This component is showing the second part of the business network */}
      <TourismFuture />
      <Marketplace />
      <Restaurants />
      <FooterHero />
      <div className="flex md:flex-row bg-[#18191C]">
        <div className="w-full flex flex-col justify-center items-center text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
