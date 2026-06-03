"use client";

import { motion } from "framer-motion";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="relative bg-dark-900 text-gray-400 py-16 px-6 border-t border-gray-800/20 select-none">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,168,128,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-6 relative z-10">
        
        {/* Name in script font */}
        <motion.h4
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-400 font-normal tracking-wide drop-shadow-[0_2px_8px_rgba(212,175,55,0.05)]"
        >
          Yeye Otunba Simisola Ojo
        </motion.h4>

        {/* Dedication Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-gray-500 font-medium leading-relaxed max-w-xl"
        >
          Soaring at Forty &bull; June 6th 2026 &bull; With Love from Everyone Who Adores You 🖤
        </motion.p>

        {/* Wishlist Link */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => scrollToSection("wishlist")}
          className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 hover:text-gold-200 transition-colors duration-300 flex items-center gap-2 cursor-pointer mt-2 group relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gold-400 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
        >
          Wishlist &rarr;
        </motion.button>

      </div>
    </footer>
  );
}
