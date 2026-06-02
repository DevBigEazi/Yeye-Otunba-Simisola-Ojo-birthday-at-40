"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for the actual mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics configs for smooth lag/inertia effect
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 250 });

  const dotX = useSpring(cursorX, { damping: 30, stiffness: 350 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 350 });

  useEffect(() => {
    // Only show custom cursor on devices that support a fine pointer (desktops)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      document.documentElement.classList.remove("custom-cursor-ready");
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer" ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Schedule state change asynchronously to avoid synchronous setState inside render/mount effect (satisfies ESLint rule)
    const initTimer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // Handle document class list toggling once initialized, to prevent cursor loss prior to rendering
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (isVisible && mediaQuery.matches) {
      document.documentElement.classList.add("custom-cursor-ready");
    } else {
      document.documentElement.classList.remove("custom-cursor-ready");
    }

    return () => {
      document.documentElement.classList.remove("custom-cursor-ready");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-gold-400/40 rounded-full pointer-events-none z-9999 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(212, 175, 55, 0.8)" : "rgba(197, 168, 128, 0.4)",
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.08)" : "rgba(212, 175, 55, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-gold-400 rounded-full pointer-events-none z-9999 shadow-[0_0_8px_#D4AF37] flex items-center justify-center"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? "#FAF5EB" : "#D4AF37",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </>
  );
}
