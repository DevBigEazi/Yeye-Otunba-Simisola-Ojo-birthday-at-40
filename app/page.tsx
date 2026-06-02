"use client";

import { useEffect, useState } from "react";
import GoldParticles from "./components/GoldParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountdownQuote from "./components/CountdownQuote";
import Achievements from "./components/Achievements";
import Journey from "./components/Journey";

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
    <div className="relative min-h-screen bg-dark-900 text-[#F3F4F6] overflow-x-hidden font-sans select-none">
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
      <div id="gallery" className="min-h-screen flex items-center justify-center bg-dark-900">
        <span className="text-gray-600 font-serif">Gallery Section Placeholder</span>
      </div>
      <div id="messages" className="min-h-screen flex items-center justify-center bg-dark-800">
        <span className="text-gray-600 font-serif">Messages Section Placeholder</span>
      </div>
      <div id="wishlist" className="min-h-screen flex items-center justify-center bg-dark-900">
        <span className="text-gray-600 font-serif">Wishlist Section Placeholder</span>
      </div>
    </div>
  );
}
