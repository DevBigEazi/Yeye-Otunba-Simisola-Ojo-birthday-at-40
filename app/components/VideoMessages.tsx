"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEOS } from "../constants/media";

interface VideoMessage {
  id: string;
  name: string;
  city: string;
  url: string;
}

// -------------------------------------------------------------
// Default Videos Configuration
// -------------------------------------------------------------
const DEFAULT_VIDEOS: Omit<VideoMessage, "url">[] = [
  { id: "vid1", name: "Add Name", city: "City" },
  { id: "vid2", name: "Add Name", city: "City" },
  { id: "vid3", name: "Add Name", city: "City" },
  { id: "vid4", name: "Add Name", city: "City" },
  { id: "vid5", name: "Add Name", city: "City" },
  { id: "vid6", name: "Add Name", city: "City" },
  { id: "vid7", name: "Add Name", city: "City" },
  { id: "vid8", name: "Add Name", city: "City" },
  { id: "vid9", name: "Add Name", city: "City" },
  { id: "vid10", name: "Add Name", city: "City" },
  { id: "vid11", name: "Add Name", city: "City" },
  { id: "vid12", name: "Add Name", city: "City" },
  { id: "vid13", name: "Add Name", city: "City" },
  { id: "vid14", name: "Add Name", city: "City" },
  { id: "vid15", name: "Add Name", city: "City" },
];

export default function VideoMessages() {
  // Map our pre-loaded video resources
  const videoUrls = Object.values(VIDEOS);
  const messages: VideoMessage[] = DEFAULT_VIDEOS.map((item, idx) => ({
    ...item,
    url: videoUrls[idx] || videoUrls[0],
  }));

  const [activePlaybackVideo, setActivePlaybackVideo] = useState<VideoMessage | null>(null);
  const [isAllModalOpen, setIsAllModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync scroll lock when modal or lightbox is active
  useEffect(() => {
    if (isAllModalOpen || activePlaybackVideo !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAllModalOpen, activePlaybackVideo]);

  // Showcase contains first 4 videos
  const showcaseVideos = messages.slice(0, 4);

  return (
    <section id="messages" className="relative bg-dark-800 text-gray-200 px-6 py-12 md:py-32 overflow-hidden border-t border-gray-800/20">
      {/* Soft Gold Background radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,168,128,0.02)_0%,transparent_75%)] pointer-events-none z-0" />

      <div className="w-full max-w-5xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center select-none">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans">
            From Every Corner of the World
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-light tracking-wide">
            Love from Afar
          </h2>
          <div className="w-16 h-[2px] bg-linear-to-r from-transparent via-gold-400 to-transparent mt-5 origin-center" />
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {showcaseVideos.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setActivePlaybackVideo(msg)}
              className="relative group overflow-hidden border border-gray-800/40 bg-dark-900 aspect-video md:aspect-4/3 flex flex-col justify-end transition-all duration-300 hover:border-gold-400/40 cursor-pointer"
            >
              {/* Video Element for Thumbnail Preview */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <video
                  src={msg.url}
                  preload="metadata"
                  className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent group-hover:via-black/10 transition-all duration-300 z-5" />

              {/* Centered Play Indicator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-12 h-12 rounded-full border border-gold-400/40 bg-black/40 backdrop-blur-xs flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gold-400 ml-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Card Footer Text - Only show if not placeholder */}
              {msg.name !== "Add Name" && msg.city !== "City" && (
                <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none select-none">
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
                    {msg.name}
                  </p>
                  <p className="text-[10px] text-gray-400 font-sans tracking-wide mt-0.5">
                    {msg.city}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button
            onClick={() => {
              setIsAllModalOpen(true);
              setVisibleCount(12);
            }}
            className="px-10 py-4 border border-gold-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 hover:bg-gold-500/5 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] transition-all duration-300 rounded-none cursor-pointer font-sans"
          >
            View All Video Messages
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          PLAYBACK LIGHTBOX MODAL
         ------------------------------------------------------------- */}
      <AnimatePresence>
        {activePlaybackVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/98 flex flex-col justify-between p-4 md:p-6"
            onClick={() => setActivePlaybackVideo(null)}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full z-10 px-4 pt-2 select-none" onClick={(e) => e.stopPropagation()}>
              <div className="text-left">
                {activePlaybackVideo.name !== "Add Name" && activePlaybackVideo.city !== "City" && (
                  <>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-400 font-sans">
                      {activePlaybackVideo.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-sans tracking-wide mt-0.5">
                      {activePlaybackVideo.city}
                    </p>
                  </>
                )}
              </div>
              <button
                onClick={() => setActivePlaybackVideo(null)}
                className="p-2 border border-gray-800/80 text-gray-400 hover:text-gold-400 hover:border-gold-400/40 transition-all rounded-none cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Main Body */}
            <div className="flex-1 flex items-center justify-center w-full relative">
              <div className="w-full max-w-4xl max-h-[70vh] flex items-center justify-center px-6" onClick={(e) => e.stopPropagation()}>
                <video
                  src={activePlaybackVideo.url}
                  autoPlay
                  controls
                  className="max-h-[70vh] max-w-full border border-gray-800/60 bg-dark-900 shadow-2xl"
                />
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-6" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------------------------------------------------
          VIEW ALL MODAL (MIRRORS GALLERY VIEW ALL MODAL)
         ------------------------------------------------------------- */}
      <AnimatePresence>
        {isAllModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-900/98 flex items-center justify-center p-4 md:p-6"
            onClick={() => setIsAllModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-6xl bg-dark-800 border border-gray-800/80 rounded-none flex flex-col max-h-[85vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800/60 select-none">
                <div>
                  <h3 className="font-serif text-2xl text-white font-medium tracking-wide">
                    Simi's Video Greetings
                  </h3>
                  <p className="text-[10px] md:text-xs text-gold-400/60 font-sans tracking-widest uppercase mt-0.5">
                    {messages.length} Video Messages &bull; Love from Afar
                  </p>
                </div>
                <button
                  onClick={() => setIsAllModalOpen(false)}
                  className="p-2 border border-gray-800 text-gray-500 hover:text-gold-400 hover:border-gold-400/40 transition-all rounded-none cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Grid Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {messages.slice(0, visibleCount).map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => {
                        setActivePlaybackVideo(msg);
                      }}
                      className="aspect-video md:aspect-4/3 bg-dark-900 border border-gray-800/40 relative overflow-hidden group cursor-pointer hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-end"
                    >
                      {/* Video Element */}
                      <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <video
                          src={msg.url}
                          preload="metadata"
                          className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-5" />

                      {/* Centered Play Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-black/40 backdrop-blur-xs flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-gold-400 ml-0.5"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Info overlay */}
                      {msg.name !== "Add Name" && msg.city !== "City" && (
                        <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none select-none">
                          <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
                            {msg.name}
                          </p>
                          <p className="text-[10px] text-gray-400 font-sans tracking-wide mt-0.5">
                            {msg.city}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Show More Button */}
                {visibleCount < messages.length && (
                  <div className="flex justify-center mt-12 mb-6">
                    <button
                      onClick={() => setVisibleCount((prev) => Math.min(prev + 12, messages.length))}
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
    </section>
  );
}
