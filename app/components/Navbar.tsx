"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrolled, scrollToSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    }
  } as const;

  const containerVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: { 
      x: "100%",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { opacity: 0, x: 30, transition: { duration: 0.2 } }
  } as const;

  return (
    <>
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

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gold-400 hover:text-gold-200 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md md:hidden flex justify-end"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Drawer Content */}
            <motion.div
              variants={containerVariants}
              className="w-full max-w-[300px] h-full bg-dark-950 border-l border-gold-500/10 shadow-2xl flex flex-col justify-between p-6 relative bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05)_0%,transparent_60%)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button & Header */}
              <div className="flex items-center justify-between border-b border-gold-500/5 pb-6">
                <span className="font-script text-3xl bg-linear-to-br from-gold-200 via-gold-400 to-[#A37F1A] bg-clip-text text-transparent">
                  Simi
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gold-400 hover:text-gold-200 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 my-auto font-sans">
                {["achievements", "journey", "gallery", "messages"].map((item) => (
                  <motion.button
                    key={item}
                    variants={itemVariants}
                    onClick={() => handleMobileNavClick(item)}
                    className="text-left text-sm uppercase tracking-widest text-gray-400 hover:text-gold-300 active:text-gold-200 transition-colors duration-300 font-medium py-2 border-b border-white/5 cursor-pointer"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>

              {/* CTA Button at Bottom */}
              <motion.div variants={itemVariants} className="pt-6 border-t border-gold-500/5">
                <button
                  onClick={() => handleMobileNavClick("wishlist")}
                  className="w-full px-5 py-3 rounded-none border border-gold-500/40 text-xs font-semibold tracking-widest uppercase text-gold-200 hover:bg-gold-500/10 hover:border-gold-500 hover:text-gold-100 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)] cursor-pointer text-center"
                >
                  Gift Her 🎁
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}