"use client";

import { motion } from "framer-motion";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center z-10 pt-20 pb-16 md:pb-36">


      {/* Ambient Gold Radial Glow (Overhead Wash) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(197,168,128,0.15)_0%,rgba(197,168,128,0.02)_60%,transparent_90%)] pointer-events-none z-0" />

      {/* Hero Content Overlay */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center z-10 space-y-6 md:space-y-8">
        {/* Subtitle Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans"
        >
          6th June 2026 &bull; A Milestone Most Magnificent
        </motion.p>

        {/* Script Name "Simi" */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-script text-8xl md:text-[11rem] bg-linear-to-br from-gold-200 via-gold-400 to-[#A37F1A] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(197,168,128,0.2)] select-none leading-none py-4"
        >
          Simi
        </motion.h1>

        {/* Core Title with "40" centered behind it */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full flex flex-col items-center py-8"
        >
          {/* Giant Outlined 40 right behind the text */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[180px] md:text-[280px] leading-none select-none pointer-events-none z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(197, 168, 128, 0.2)",
            }}
          >
            40
          </div>

          <h2 className="relative font-serif text-3xl md:text-5xl font-light tracking-wide text-gray-200 z-10">
            Yeye Otunba Simisola Ojo
          </h2>
          <p className="relative text-xs md:text-sm uppercase tracking-[0.3em] text-gold-400 font-semibold font-sans z-10 mt-3">
            Soaring at Forty
          </p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 pt-6"
        >
          <button
            onClick={() => scrollToSection("achievements")}
            className="px-8 py-3.5 border border-gold-400/30 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-gold-400 hover:bg-gold-500/5 hover:border-gold-400 transition-all duration-300 rounded-none cursor-pointer font-sans"
          >
            HER 40 ACHIEVEMENTS
          </button>
          <button
            onClick={() => scrollToSection("wishlist")}
            className="px-8 py-3.5 bg-gold-400 text-dark-900 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-all duration-300 rounded-none cursor-pointer font-sans flex items-center justify-center gap-2"
          >
            🎁 GIFT HER
          </button>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 cursor-pointer group z-10"
        onClick={() => scrollToSection("countdown")}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 group-hover:text-gold-400 transition-colors duration-300 font-sans">
          Scroll
        </span>
        <div className="relative w-px h-16 bg-gray-800 overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
