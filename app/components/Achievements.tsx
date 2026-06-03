"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

interface AchievementItem {
  number: string;
  emoji: string;
  title: string;
  description: string;
}

const achievementsData: AchievementItem[] = [
  {
    number: "01",
    emoji: "🌅",
    title: "Born on a Bright Friday",
    description: "6th June 1986 — the only daughter, the last child, lovingly named Aramide by her mother. Born into protection, purpose, and a name full of meaning."
  },
  {
    number: "02",
    emoji: "🏢",
    title: "Lagos to Ibadan",
    description: "Her earliest years in Lagos, then on to historic Ibadan — navigating day school and boarding school, building independence chapter by chapter."
  },
  {
    number: "03",
    emoji: "✈️",
    title: "The Great Leap to the UK",
    description: "Made the bold, life-defining move across the ocean to settle and build a future in the UK. She arrived — and the UK was never quite the same."
  },
  {
    number: "04",
    emoji: "🎓",
    title: "Conquered A-Levels & University",
    description: "Navigated the rigours of A-Levels, then walked onto campus ready to carve out her own legacy."
  },
  {
    number: "05",
    emoji: "❤️",
    title: "Met Him on Freshers' Night",
    description: "A wonderfully persistent man on her very first evening at university refused to let her go. Two weeks later she said yes. A full-circle love story began."
  },
  {
    number: "06",
    emoji: "📻",
    title: "University Christian Radio Station",
    description: "Ran the university's Christian radio station, filling every Friday night with faith, community, and the absolute best jams."
  },
  {
    number: "07",
    emoji: "🕯️",
    title: "Student Union Welfare Officer",
    description: "Took a transformative gap year to serve selflessly as Student Union Welfare Officer — her first formal act of servant leadership."
  },
  {
    number: "08",
    emoji: "🏠",
    title: "Built Homes in Haiti",
    description: "Spearheaded a charity drive to raise vital funds for building homes for families in one of the world's most vulnerable nations."
  },
  {
    number: "09",
    emoji: "🏛️",
    title: "Solo Mission to the DR",
    description: "Journeyed entirely on her own to the Dominican Republic to physically help build schools for children in need. No entourage. Just courage."
  },
  {
    number: "10",
    emoji: "🎓",
    title: "Graduated — First Degree",
    description: "Stood tall, crossed the stage, and collected her hard-earned first university degree. The foundation of everything that followed."
  },
  {
    number: "11",
    emoji: "💍",
    title: "Married Her Freshers' Match",
    description: "Walked down the aisle to marry the exact same man she met on her very first night at university."
  },
  {
    number: "12",
    emoji: "👶",
    title: "Welcomed Eri — First Testimony",
    description: "Her beautiful princess arrived in September 2013 — her biggest testimony and the spark that would ignite a new calling."
  },
  {
    number: "13",
    emoji: "🩺",
    title: "Qualified as a Paediatric Nurse",
    description: "Inspired by Eri's birth, returned to university after maternity leave and qualified in Paediatric Nursing in 2016 — with a young child in tow."
  },
  {
    number: "14",
    emoji: "🤱",
    title: "The Ultimate Juggle",
    description: "Nursing shifts, nappies, lectures, and love — all at once. Superhuman, and she made it look effortless."
  },
  {
    number: "15",
    emoji: "📜",
    title: "Two Degrees & a Diploma",
    description: "A first degree, a Postgraduate Diploma, and a Paediatric Nursing qualification. A relentless, lifelong commitment to learning."
  },
  {
    number: "16",
    emoji: "👥",
    title: "Completed the Family of Five",
    description: "Prince in April 2017. Her fierce youngest in August 2019. Three extraordinary children — each one a daily lesson in love."
  },
  {
    number: "17",
    emoji: "⚓",
    title: "The Anchoring Partner",
    description: "Selflessly adjusted her nursing hours to support her husband's startup travel schedule, steadying the family while holding everything together."
  },
  {
    number: "18",
    emoji: "🌺",
    title: "Installed as Yeye Otunba",
    description: "When her husband was made Otunba Gbadero of Iroko Ekiti in 2021, she was installed beside him as Yeye Otunba Gbadero. Royalty earned through grace."
  },
  {
    number: "19",
    emoji: "⚡",
    title: "Pivoted into Engineering",
    description: "Boldly stepped out of her comfort zones and into the technical world of Engineering — because she was never content standing still."
  },
  {
    number: "20",
    emoji: "🛠️",
    title: "Pivoted into Operations",
    description: "Threw herself into the family business and discovered a deep, unexpected passion for execution and workflow."
  },
  {
    number: "21",
    emoji: "🇳🇬",
    title: "A Call to Action in Owo",
    description: "Turned a pandemic-era family trip to Nigeria into a profound mission of hope — and came home knowing a foundation had to be built."
  },
  {
    number: "22",
    emoji: "📋",
    title: "Founded the Aramide Ojo Foundation",
    description: "Officially founded and registered the Foundation as a licensed charity — cementing a lifetime of service into something permanent and growing."
  },
  {
    number: "23",
    emoji: "🤲",
    title: "Fed & Clothed 200 Families",
    description: "Mobilised resources to feed and clothe over 200 vulnerable families. Practical, dignified, unconditional love in action."
  },
  {
    number: "24",
    emoji: "🎓",
    title: "Sponsored 50 Children Through School",
    description: "Committed to fully sponsoring 50 children — covering school fees and uniforms, removing every barrier between them and their future."
  },
  {
    number: "25",
    emoji: "💻",
    title: "ICT Classes, Meals & Amusement Parks",
    description: "Launched digital skills classes, fed every child attending, and took them on unforgettable trips. Education, nourishment and joy — all together."
  },
  {
    number: "26",
    emoji: "🐣",
    title: "Easter Eggs to Hospital Wards",
    description: "Spent two consecutive years personally delivering Easter eggs to children's wards in local hospitals. Because every child deserves a moment of magic."
  },
  {
    number: "27",
    emoji: "🎄",
    title: "Five Years of the Magical Christmas",
    description: "Created the inaugural Owo Magical Christmas and hosted it year after year — because joy should never be a one-time thing."
  },
  {
    number: "28",
    emoji: "🌴",
    title: "Took Her Parents on a 5-Star Holiday",
    description: "Fulfilled a lifelong dream — a luxury holiday abroad for her parents that remains her children's all-time favourite vacation."
  },
  {
    number: "29",
    emoji: "🎒",
    title: "Backpacked 9 Countries in 1 Week",
    description: "December 2021 — strapped on a backpack and crossed nine European countries in seven days. Solo. Fearless. Soaring before she knew that was the theme."
  },
  {
    number: "30",
    emoji: "🐬",
    title: "Swam with Dolphins in Dubai",
    description: "Dove into the Arabian waters and swam alongside dolphins. Because of course she did."
  },
  {
    number: "31",
    emoji: "🎯",
    title: "Hit the Bull's Eye",
    description: "First time at a shooting range. One shot. Bull's eye. When Simi aims at something, she does not miss."
  },
  {
    number: "32",
    emoji: "🎰",
    title: "Played Casino & Won",
    description: "Read the room, played her hand, and walked away with the money. A metaphor for her entire life."
  },
  {
    number: "33",
    emoji: "🧵",
    title: "Learned to Sew During Covid",
    description: "When the world stopped, she created. Taught herself to sew and designed beautiful clothes for her whole family — from scratch."
  },
  {
    number: "34",
    emoji: "🏆",
    title: "Won the Parents' Sports Day Race",
    description: "Showed up, showed out, and took the trophy. The children were proud. The other parents were warned."
  },
  {
    number: "35",
    emoji: "🌎",
    title: "Six Wonders of the World",
    description: "Pyramids of Giza. The Colosseum. Leaning Tower of Pisa. Sistine Chapel. Stonehenge. Taj Mahal. She has stood before six of humanity's greatest works."
  },
  {
    number: "36",
    emoji: "👰",
    title: "A Love Story for the Ages",
    description: "From a Freshers' night meeting to a royal marriage — one of the most beautiful love stories ever written, and still in its finest chapters."
  },
  {
    number: "37",
    emoji: "🏡",
    title: "Spread Love in Essex & Owo",
    description: "Brought the philanthropic heart home to Essex and back to Owo — five years of spreading dignity and joy in two countries simultaneously."
  },
  {
    number: "38",
    emoji: "🚀",
    title: "Startup Wife & Co-Architect",
    description: "The unsung co-architect behind a growing business — present, steady, and indispensable at every stage, while building her own career in parallel."
  },
  {
    number: "39",
    emoji: "👑",
    title: "The Name She Carries",
    description: "Aramide. Yeye Otunba. Chief. Mum of three. Founder. Nurse. Engineer. Operator. Every title earned. None given. All worn with quiet magnificence."
  },
  {
    number: "40",
    emoji: "🦅",
    title: "Soaring at Forty",
    description: "Forty achievements. One extraordinary woman. And at forty, with the whole sky still ahead — she is only just beginning."
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

export default function Achievements() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(achievementsData.length / ITEMS_PER_PAGE);
  const displayedAchievements = isMobile
    ? achievementsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    : achievementsData;

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section
      id="achievements"
      className="relative bg-dark-900 text-gray-200 px-6 py-12 md:py-32 overflow-hidden border-t border-gray-800/20"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,168,128,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        {/* Header Title Area */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans"
          >
            Four Decades of Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-3 font-light tracking-wide"
          >
            40 Achievements
          </motion.h2>
        </div>

        {/* Seamless Grid Container with key to re-trigger animation on pagination change */}
        <div
          key={isMobile ? currentPage : "desktop"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-800/40 border border-gray-800/40"
        >
          {displayedAchievements.map((item, index) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (index % 5) * 0.05 }}
              className="relative group bg-dark-900 p-6 md:p-8 flex flex-col justify-start min-h-[220px] md:min-h-[270px] h-full overflow-hidden transition-colors duration-500 hover:bg-dark-800/40"
            >
              {/* Premium Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-gold-500/40 via-gold-400/10 to-transparent opacity-75 group-hover:opacity-100 group-hover:from-gold-500 group-hover:via-gold-400/30 transition-all duration-500" />

              {/* Hover Ambient Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(197,168,128,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Elegant Watermark Background Number */}
              <span className="absolute top-4 right-4 text-5xl md:text-6xl font-serif text-gold-400/8 group-hover:text-gold-400/15 group-hover:scale-105 transition-all duration-500 select-none pointer-events-none font-light">
                {item.number}
              </span>

              {/* Content Layout */}
              <div className="flex flex-col h-full justify-between z-10 relative">
                {/* Emoji / Icon */}
                <div className="text-2xl mb-5 flex items-center justify-start drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                  {item.emoji}
                </div>

                {/* Text Elements */}
                <div>
                  <h3 className="font-sans text-[11px] md:text-xs font-semibold tracking-wider text-gold-400 uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-[13px] text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Pagination Controls */}
        {isMobile && (
          <div className="flex flex-col items-center gap-4 mt-10">
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-6 py-2.5 border border-gold-400/35 text-[10px] md:text-xs font-medium uppercase tracking-[0.15em] text-gold-400 disabled:opacity-20 disabled:pointer-events-none hover:bg-gold-500/5 hover:border-gold-400 transition-all duration-300 rounded-none cursor-pointer"
              >
                &larr; Prev
              </button>
              <span className="font-serif text-sm text-gold-400 tracking-wide select-none">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-6 py-2.5 border border-gold-400/35 text-[10px] md:text-xs font-medium uppercase tracking-[0.15em] text-gold-400 disabled:opacity-20 disabled:pointer-events-none hover:bg-gold-500/5 hover:border-gold-400 transition-all duration-300 rounded-none cursor-pointer"
              >
                Next &rarr;
              </button>
            </div>

            {/* Pagination dots/pills */}
            <div className="flex gap-2 justify-center mt-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === i + 1 ? "w-5 bg-gold-400" : "w-1.5 bg-gray-800 hover:bg-gray-700"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
