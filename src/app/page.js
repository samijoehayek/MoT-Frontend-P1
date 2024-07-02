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
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    // The following components are the main components of the page
    // The relative class is used to make the the flow components relative to the parent container
    <div className="flex flex-col min-h-screen bg-[#101010]">
      <Navbar />
      <HeroBackground />
      <HeroSection />
      <Attractions />
      <Circles />
      <LobbyDisplay />
      {/* This component is showing the business network */}
      <BusinessTourism />
      {/* This component is showing the second part of the business network */}
      <TourismFuture />
      <Marketplace />
      <Restaurants />
      <FooterHero />
      <Footer />
    </div>
  );
};

export default Home;
