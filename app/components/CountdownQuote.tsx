"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function CountdownQuote() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      // June 6, 2026 00:00:00 (Nigeria/London Local Time BST/WAT, which is UTC+1)
      const target = new Date("2026-06-06T00:00:00+01:00").getTime();
      const now = new Date().getTime();
      const difference = target - now;

      let time = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return time;
    };

    // Set initial time right away on client mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // elegant custom easeOutExpo
      },
    },
  };

  return (
    <section
      id="countdown"
      className="relative min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-center bg-dark-900 text-gray-200 px-6 py-12 md:py-24 overflow-hidden"
    >
      {/* Soft Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,168,128,0.06)_0%,transparent_75%)] pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10 text-center space-y-16 md:space-y-24"
      >
        {/* Countdown Area */}
        <motion.div variants={slideUpVariants} className="flex flex-col items-center w-full">
          <h3 className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold font-sans mb-8 md:mb-12">
            Counting Down to the Celebration
          </h3>

          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 select-none">
            {/* Days */}
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[100px] md:min-w-[140px]">
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight bg-linear-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                {isMounted ? formatNumber(timeLeft.days) : "00"}
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-400/80 font-medium font-sans mt-2">
                Days
              </span>
            </div>

            {/* Separator */}
            <span className="text-gold-500/30 text-xl sm:text-2xl md:text-3xl self-center -mt-6 sm:-mt-8 md:-mt-10 animate-pulse select-none">
              &bull;
            </span>

            {/* Hours */}
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[100px] md:min-w-[140px]">
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight bg-linear-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                {isMounted ? formatNumber(timeLeft.hours) : "00"}
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-400/80 font-medium font-sans mt-2">
                Hours
              </span>
            </div>

            {/* Separator */}
            <span className="text-gold-500/30 text-xl sm:text-2xl md:text-3xl self-center -mt-6 sm:-mt-8 md:-mt-10 animate-pulse select-none">
              &bull;
            </span>

            {/* Minutes */}
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[100px] md:min-w-[140px]">
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight bg-linear-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                {isMounted ? formatNumber(timeLeft.minutes) : "00"}
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-400/80 font-medium font-sans mt-2">
                Minutes
              </span>
            </div>

            {/* Separator */}
            <span className="text-gold-500/30 text-xl sm:text-2xl md:text-3xl self-center -mt-6 sm:-mt-8 md:-mt-10 animate-pulse select-none">
              &bull;
            </span>

            {/* Seconds */}
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[100px] md:min-w-[140px]">
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight bg-linear-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                {isMounted ? formatNumber(timeLeft.seconds) : "00"}
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-400/80 font-medium font-sans mt-2">
                Seconds
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quote Area */}
        <motion.div variants={slideUpVariants} className="w-full max-w-4xl px-4">
          <p className="font-serif italic text-xl sm:text-2xl md:text-4xl text-gray-200 font-light leading-relaxed sm:leading-relaxed md:leading-loose text-center tracking-wide">
            Forty is not the ceiling &mdash; it is the{" "}
            <span className="text-gold-400 font-normal italic relative group cursor-default">
              altitude
              <span className="absolute left-0 bottom-0 w-full h-px bg-gold-400/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </span>
            .
            <br />
            This is the year she stops climbing and starts{" "}
            <span className="text-gold-400 font-normal italic relative group cursor-default">
              soaring
              <span className="absolute left-0 bottom-0 w-full h-px bg-gold-400/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </span>{" "}
            &mdash;
            <br />
            where every year of grace, courage and love
            <br />
            becomes a thermal lifting her higher than ever before.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
