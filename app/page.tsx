"use client";

import { useEffect, useState } from "react";
import GoldParticles from "./components/GoldParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountdownQuote from "./components/CountdownQuote";
import Achievements from "./components/Achievements";
import Journey from "./components/Journey";
import Gallery from "./components/Gallery";
import VideoMessages from "./components/VideoMessages";
import Wishlist from "./components/Wishlist";
import ClosingTribute from "./components/ClosingTribute";
import Footer from "./components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-900 text-[#F3F4F6] overflow-x-hidden font-sans">
      {/* Dynamic Gold Particles Background */}
      <GoldParticles />

      {/* Sticky Header Navbar */}
      <Navbar scrolled={scrolled} scrollToSection={scrollToSection} />

      {/* Hero / Landing Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* Countdown & Quote Section */}
      <CountdownQuote />

      {/* 40 Achievements Section */}
      <Achievements />

      {/* Journey / Timeline Section */}
      <Journey />

      {/* Gallery Section */}
      <Gallery />

      {/* Video Messages Section */}
      <VideoMessages />

      {/* Wishlist Section */}
      <Wishlist />

      {/* Celebration Quote & Closing Section */}
      <ClosingTribute />
      {/* Footer Section */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
