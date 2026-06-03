"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "1986",
    title: "A Blessed Beginning",
    description: "Born on 6th June in Lagos — the only daughter, the last child, lovingly named Aramide. The world became better that day."
  },
  {
    year: "Early 2000s",
    title: "The Great Leap to the UK",
    description: "Made the bold, life-defining move across the ocean. Conquered A-Levels. Walked onto university campus ready to see what the world had to offer."
  },
  {
    year: "Freshers' Night",
    title: "A Fateful Meeting",
    description: "A wonderfully persistent man on her very first evening at university refused to let her go. Two weeks later she said yes. She never looked back."
  },
  {
    year: "University Years",
    title: "Service, Radio & Haiti",
    description: "Student Union Welfare Officer. University Christian Radio. Solo mission to build schools in the DR. Charity drive for Haiti. A servant-leader from the start."
  },
  {
    year: "Marriage",
    title: "Married Her Freshers' Match",
    description: "Walked down the aisle to marry the exact same man she met on her very first night at university. A full-circle love story."
  },
  {
    year: "2013 - 2019",
    title: "Mum of Three",
    description: "Eri in September 2013. Prince in April 2017. Her fierce youngest in August 2019. Three extraordinary children — each one a daily lesson in love."
  },
  {
    year: "2016",
    title: "Qualified Paediatric Nurse",
    description: "Inspired by Eri's birth, she returned to university and qualified as a Paediatric Nurse — with a young child in tow. Superhuman."
  },
  {
    year: "2021",
    title: "Crowned Yeye Otunba",
    description: "Installed as Yeye Otunba Gbadero of Iroko Ekiti alongside her husband. Royalty earned through grace, service and character."
  },
  {
    year: "2021 - Present",
    title: "The Aramide Ojo Foundation",
    description: "Founded a registered charity. Fed and clothed 200 families. Sponsored 50 children through school. Five years of changing lives — and still going."
  },
  {
    year: "2026",
    title: "Forty & Soaring",
    description: "Arrived at this altitude whole, radiant, and with the entire sky still ahead. The best chapter is the one she is writing right now."
  }
];

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.1
    }
  }
};

const cardVariants = (index: number, isMobile: boolean): Variants => {
  const isLeft = index % 2 === 0;
  return {
    hidden: {
      opacity: 0,
      x: isMobile ? 30 : (isLeft ? -40 : 40),
      y: isMobile ? 15 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
};

export default function Journey() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position to draw the active timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative bg-dark-900 text-gray-200 px-6 py-12 md:py-32 overflow-hidden border-t border-gray-800/20"
    >
      {/* Soft Ambient Radial Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,168,128,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="w-full max-w-5xl mx-auto z-10 relative">
        
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-28 flex flex-col items-center select-none">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans"
          >
            The Story So Far
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-3 font-light tracking-wide"
          >
            Life in Chapters
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[2px] bg-linear-to-r from-transparent via-gold-400 to-transparent mt-5 origin-center"
          />
        </div>

        {/* Timeline Component Container */}
        <div className="relative">
          {/* Background Timeline Track */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-7 bottom-7 w-[2px] bg-gray-800/40 pointer-events-none" />

          {/* Active Growing Timeline Line */}
          <motion.div
            style={{ height: heightTransform }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-7 w-[2px] bg-linear-to-b from-gold-400 via-gold-500 to-gold-600 shadow-[0_0_8px_rgba(212,175,55,0.5)] origin-top pointer-events-none"
          />

          {/* Chapters Loop */}
          <div className="space-y-4">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-16 items-start pb-16 md:pb-24 last:pb-0 pl-10 md:pl-0"
                >
                  {/* Glowing Custom Node (Dot) */}
                  <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 top-[22px] md:top-[26px] z-10 pointer-events-none">
                    <motion.div
                      variants={dotVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-gold-500 border-2 md:border-4 border-dark-900 ring-1 md:ring-2 ring-gold-400/50 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                    />
                  </div>

                  {/* Narrative Card */}
                  <motion.div
                    variants={cardVariants(index, isMobile)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full flex flex-col ${
                      isLeft
                        ? "text-left md:text-right items-start md:items-end md:pr-12 md:col-start-1 md:col-end-2"
                        : "text-left items-start md:pl-12 md:col-start-2 md:col-end-3"
                    }`}
                  >
                    <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-medium mt-1.5 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
