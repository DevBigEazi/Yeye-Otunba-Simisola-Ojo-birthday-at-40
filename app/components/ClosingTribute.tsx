"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

export default function ClosingTribute() {
  return (
    <section className="relative bg-dark-900 text-gray-200 px-6 py-14 md:py-36 overflow-hidden border-t border-gray-800/10 select-none">
      {/* Soft Ambient Radial Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,168,128,0.04)_0%,transparent_75%)] pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center z-10 relative text-center space-y-12 md:space-y-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold font-sans mb-3">
            A Celebration
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight">
            Happy 40th, Simi
          </h2>
        </motion.div>

        {/* Narrative Summary Paragraph */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed sm:leading-loose md:leading-loose max-w-3xl mx-auto"
        >
          She moved countries alone, married her Freshers&apos; night match, raised three
          extraordinary children, qualified as a nurse, built homes in Haiti, built
          schools in the DR, sponsored 50 children through school, founded a registered
          charity, received a chieftaincy, became{" "}
          <span className="text-gold-400 font-normal italic relative group cursor-default">
            Yeye Otunba
            <span className="absolute left-0 bottom-0 w-full h-px bg-gold-400/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>
          , pivoted careers twice, backpacked 9 countries in a week, swam with dolphins,
          stood at six world wonders, and still showed up to win the parents&apos; sports day race.
        </motion.p>

        {/* Closing Quotation */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed sm:leading-relaxed"
        >
          &apos;That is not a life lived — that is a life{" "}
          <span className="text-gold-400 font-normal italic relative group cursor-default">
            poured out, soared through, and magnificently owned
            <span className="absolute left-0 bottom-0 w-full h-px bg-gold-400/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>
          .&apos;
        </motion.p>

        {/* Timeline Divider Node & Connector */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          {/* Custom Timeline Dot */}
          <div className="w-3.5 h-3.5 rounded-full border border-gold-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
          </div>
          {/* Connector Line */}
          <div className="w-px h-16 bg-linear-to-b from-gold-400 to-transparent mt-3" />
        </motion.div>

        {/* Closing Signature Area */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-2 select-none">
          <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold-400 font-normal tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.1)]">
            Soaring at Forty
          </h3>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-gold-400/70 font-medium font-sans">
            And the whole sky still ahead
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
