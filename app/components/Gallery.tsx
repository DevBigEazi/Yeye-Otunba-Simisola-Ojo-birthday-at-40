"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES, IMAGES_LIST } from "../constants/media";

export default function Gallery() {
  // Pre-load showcase images for the 5 grid slots
  const showcaseImages = [
    IMAGES.img_0621f98d_eea1_4751_bf85_b4a24132b6e8,
    IMAGES.img_073395c7_124a_4736_95d7_51b2c15616f7,
    IMAGES.img_11c6f185_0eb7_462d_8d25_4a56f672b2f2,
    IMAGES.img_19758385_b8c0_4fa3_84f5_21285fde6133,
    IMAGES.img_1e056192_911c_4667_9695_5c86c7801189,
  ];

  // Modal and Lightbox states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Trigger lightbox for a showcase image
  const handleCardClick = (src: string) => {
    const idx = (IMAGES_LIST as readonly string[]).indexOf(src);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) => (prev !== null && prev < IMAGES_LIST.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : IMAGES_LIST.length - 1));
      } else if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex]);

  // Load more images in the modal
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 20, IMAGES_LIST.length));
  };

  // Lock body scroll when modal or lightbox is open
  useEffect(() => {
    if (isModalOpen || activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, activeLightboxIndex]);

  return (
    <section id="gallery" className="relative bg-dark-900 text-gray-200 px-6 py-12 md:py-32 overflow-hidden border-t border-gray-800/20">
      {/* Subtle background radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,168,128,0.02)_0%,transparent_75%)] pointer-events-none z-0" />

      <div className="w-full max-w-5xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center select-none">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans">
            A Life In Pictures
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-light tracking-wide">
            Gallery
          </h2>
          <div className="w-16 h-[2px] bg-linear-to-r from-transparent via-gold-400 to-transparent mt-5 origin-center" />
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Left Column (Large Tall Square) */}
          <div
            onClick={() => handleCardClick(showcaseImages[0])}
            className="md:col-span-6 relative group overflow-hidden border border-gray-800/40 bg-dark-800 h-[300px] md:h-[520px] transition-all duration-300 hover:border-gold-400/40 cursor-pointer"
          >
            <img
              src={showcaseImages[0]}
              alt="Gallery memory 1"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold border border-gold-400/30 px-3 py-1.5 bg-black/45 backdrop-blur-xs font-sans">
                Zoom View
              </span>
            </div>
          </div>

          {/* Card 2 & 3: Middle Column (Stacked) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Card 2 */}
            <div
              onClick={() => handleCardClick(showcaseImages[1])}
              className="relative group overflow-hidden border border-gray-800/40 bg-dark-800 h-[248px] transition-all duration-300 hover:border-gold-400/40 cursor-pointer"
            >
              <img
                src={showcaseImages[1]}
                alt="Gallery memory 2"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold border border-gold-400/30 px-3 py-1.5 bg-black/45 backdrop-blur-xs font-sans">
                  Zoom View
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => handleCardClick(showcaseImages[2])}
              className="relative group overflow-hidden border border-gray-800/40 bg-dark-800 h-[248px] transition-all duration-300 hover:border-gold-400/40 cursor-pointer"
            >
              <img
                src={showcaseImages[2]}
                alt="Gallery memory 3"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold border border-gold-400/30 px-3 py-1.5 bg-black/45 backdrop-blur-xs font-sans">
                  Zoom View
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 & 5: Right Column (Stacked) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Card 4: Top card */}
            <div
              onClick={() => handleCardClick(showcaseImages[3])}
              className="relative group overflow-hidden border border-gray-800/20 bg-transparent h-[248px] transition-all duration-300 hover:border-gold-400/30 cursor-pointer"
            >
              <img
                src={showcaseImages[3]}
                alt="Gallery memory 4"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold border border-gold-400/30 px-3 py-1.5 bg-black/45 backdrop-blur-xs font-sans">
                  Zoom View
                </span>
              </div>
            </div>

            {/* Card 5: Bottom card (with custom gold dot indicator on top border) */}
            <div
              onClick={() => handleCardClick(showcaseImages[4])}
              className="relative group overflow-hidden border border-gray-800/40 bg-dark-800 h-[248px] transition-all duration-300 hover:border-gold-400/40 cursor-pointer"
            >
              {/* Decorative Gold Node centered on the top border */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full border border-gold-400/40 bg-dark-900 flex items-center justify-center pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              </div>

              <img
                src={showcaseImages[4]}
                alt="Gallery memory 5"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold border border-gold-400/30 px-3 py-1.5 bg-black/45 backdrop-blur-xs font-sans">
                  Zoom View
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* View All Photos Button */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setVisibleCount(20);
            }}
            className="px-10 py-4 border border-gold-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 hover:bg-gold-500/5 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] transition-all duration-300 rounded-none cursor-pointer font-sans"
          >
            View All Photos
          </button>
        </div>
      </div>

      {/* "View All" Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-900/98 flex items-center justify-center p-4 md:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-6xl bg-dark-800 border border-gray-800/80 rounded-none flex flex-col max-h-[85vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800/60 select-none">
                <div>
                  <h3 className="font-serif text-2xl text-white font-medium tracking-wide">
                    Simi's Album
                  </h3>
                  <p className="text-[10px] md:text-xs text-gold-400/60 font-sans tracking-widest uppercase mt-0.5">
                    {IMAGES_LIST.length} Memories &bull; A life poured out
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 border border-gray-800 text-gray-500 hover:text-gold-400 hover:border-gold-400/40 transition-all rounded-none cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Grid Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {IMAGES_LIST.slice(0, visibleCount).map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                      className="aspect-square bg-dark-900 border border-gray-800/40 relative overflow-hidden group cursor-pointer hover:border-gold-400/40 transition-all duration-300"
                      onClick={() => setActiveLightboxIndex(index)}
                    >
                      <img
                        src={src}
                        alt={`Simi Memory ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold border border-gold-400/30 px-3 py-1.5 bg-black/40 backdrop-blur-xs font-sans">
                          Zoom
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Show More Button */}
                {visibleCount < IMAGES_LIST.length && (
                  <div className="flex justify-center mt-12 mb-6">
                    <button
                      onClick={handleLoadMore}
                      className="px-8 py-3 border border-gold-400/20 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 hover:bg-gold-500/5 hover:border-gold-400/60 transition-all duration-300 rounded-none cursor-pointer font-sans"
                    >
                      Show More
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/98 flex flex-col justify-between p-4 md:p-6"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Top Close Button and Index */}
            <div className="flex items-center justify-between w-full z-10 px-4 pt-2 select-none" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold font-sans">
                {activeLightboxIndex + 1} / {IMAGES_LIST.length}
              </span>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 border border-gray-800/80 text-gray-400 hover:text-gold-400 hover:border-gold-400/40 transition-all rounded-none cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Central Image and Controls */}
            <div className="flex-1 flex items-center justify-between w-full relative">
              {/* Left Arrow Button */}
              <button
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : IMAGES_LIST.length - 1));
                }}
                className="absolute left-2 md:left-6 p-3 border border-gray-800/60 bg-black/40 text-gray-400 hover:text-gold-400 hover:border-gold-400/40 transition-all rounded-none cursor-pointer z-10"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Main Image */}
              <div className="w-full h-full flex items-center justify-center px-12 py-6 select-none" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <img
                  src={IMAGES_LIST[activeLightboxIndex]}
                  alt={`Lightbox Simi Memory ${activeLightboxIndex + 1}`}
                  className="max-h-[75vh] max-w-full object-contain shadow-2xl"
                />
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((prev) => (prev !== null && prev < IMAGES_LIST.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-2 md:right-6 p-3 border border-gray-800/60 bg-black/40 text-gray-400 hover:text-gold-400 hover:border-gold-400/40 transition-all rounded-none cursor-pointer z-10"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Bottom Accent */}
            <div className="h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
