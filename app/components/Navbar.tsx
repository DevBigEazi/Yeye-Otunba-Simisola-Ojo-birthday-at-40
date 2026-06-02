"use client";

import { motion } from "framer-motion";

interface NavbarProps {
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrolled, scrollToSection }: NavbarProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-md py-4 border-gold-400/10 shadow-lg shadow-black/20"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-script text-3xl bg-linear-to-br from-gold-200 via-gold-400 to-[#A37F1A] bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
            Simi
          </span>
        </motion.div>

        {/* Navigation Links & Gift CTA on the right */}
        <div className="hidden md:flex items-center gap-8 font-sans">
          {["achievements", "journey", "gallery", "messages"].map((item, idx) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => scrollToSection(item)}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-gold-300 transition-colors duration-300 font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gold-400/80 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
            >
              {item}
            </motion.button>
          ))}

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => scrollToSection("wishlist")}
            className="px-5 py-2.5 rounded-none border border-gold-500/40 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-gold-200 hover:bg-gold-500/10 hover:border-gold-500 hover:text-gold-100 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)] cursor-pointer"
          >
            Gift Her 🎁
          </motion.button>
        </div>
      </div>
    </header>
  );
}