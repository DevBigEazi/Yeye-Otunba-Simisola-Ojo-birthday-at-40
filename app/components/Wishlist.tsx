"use client";

import React, { useState } from "react";
import { WISHLIST_ITEMS as initialItems, WishlistItem } from "../constants/wishlist";

export default function Wishlist() {
  const [items] = useState<WishlistItem[]>(initialItems);
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'BEAUTY' | 'FASHION & BAGS' | 'ACCESSORIES' | 'STILL AVAILABLE'>('STILL AVAILABLE');

  // Derived statistics
  const availableItems = items.filter(item => !item.received);
  const receivedItems = items.filter(item => item.received);
  
  const availableCount = availableItems.length;
  const receivedCount = receivedItems.length;
  const totalRemaining = availableItems.reduce((acc, item) => acc + item.price, 0);

  // Min and Max prices for available items
  const prices = availableItems.map(item => item.price);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  // Filter logic
  const filteredItems = items.filter(item => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'STILL AVAILABLE') return !item.received;
    return item.category === selectedFilter;
  });

  // Homepage Preview Items
  // On mobile (screen < 768px) display exactly 4 items, on desktop display all items.
  const visibleItems = filteredItems;

  const handleViewAndGift = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleViewFullWishlist = () => {
    window.open("https://www.wishlist.com/wishlist/simi-ojo/simis-wishlist/ld1jOl", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="wishlist" className="relative bg-dark-900 text-gray-200 px-6 py-12 md:py-32 overflow-hidden border-t border-gray-800/20">
      {/* Background wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,168,128,0.02)_0%,transparent_75%)] pointer-events-none z-0" />

      <div className="w-full max-w-5xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center select-none">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans">
            Grant A Wish
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-light tracking-wide">
            Her Wish List
          </h2>
          <div className="w-16 h-[2px] bg-linear-to-r from-transparent via-gold-400 to-transparent mt-5 origin-center" />
        </div>

        {/* Filter Tabs directly on Homepage */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
          {(['ALL', 'BEAUTY', 'FASHION & BAGS', 'ACCESSORIES', 'STILL AVAILABLE'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 rounded-none cursor-pointer border ${
                selectedFilter === filter
                  ? "border-gold-400 text-gold-400 bg-gold-400/5 shadow-[0_0_10px_rgba(197,168,128,0.15)]"
                  : "border-gray-800/60 text-gray-500 hover:text-gray-300 hover:border-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Filter Description text */}
        <div className="text-center mb-8 select-none flex flex-col items-center gap-2">
          <p className="text-gray-400 font-serif italic text-sm max-w-2xl leading-relaxed">
            "Your love and presence mean everything to me. But if you insist on spoiling me — here's a little inspiration!" 🖤
          </p>
          <p className="text-[10px] text-gray-500 tracking-wide max-w-xl leading-relaxed">
            To grant a wish, click the button on any item. Kindly let us know once a wish has been granted so we can update the list for others.
          </p>
        </div>

        {/* Grid of filtered items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {visibleItems.map((item, idx) => (
            <div
              key={item.id}
              className={`border border-gray-800/40 bg-dark-800/50 flex flex-col justify-between transition-all duration-300 group ${
                item.received ? "opacity-75 hover:border-gray-800/50" : "hover:border-gold-400/30"
              } ${idx >= 4 ? "hidden md:flex" : "flex"}`}
            >
              {/* Image box (White background to display products cleanly) */}
              <div className="aspect-square w-full bg-white relative overflow-hidden flex items-center justify-center p-6 border-b border-gray-900/10 select-none">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                {/* Received Overlay Badge */}
                {item.received && (
                  <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center">
                    <span className="px-3 py-1.5 border border-gold-400/40 text-[9px] uppercase tracking-widest text-gold-400 font-semibold bg-dark-900/90 font-sans">
                      Received
                    </span>
                    {item.receivedBy && (
                      <p className="text-[10px] text-gray-300 font-serif mt-2 italic">
                        Gifted by {item.receivedBy}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold-400 font-semibold font-sans block mb-2 select-none">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base text-gray-100 font-medium tracking-wide line-clamp-2 leading-relaxed mb-3">
                    {item.name}
                  </h4>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-800/20 flex flex-col gap-3">
                  <span className="font-serif text-lg text-gold-400/90 font-medium select-none">
                    £{item.price.toFixed(2)}
                  </span>
                  {item.received ? (
                    <button
                      disabled
                      className="w-full py-2.5 border border-gray-850 text-[10px] font-semibold uppercase tracking-widest text-gray-600 bg-transparent rounded-none cursor-not-allowed text-center select-none"
                    >
                      Gifted &bull; Thank You
                    </button>
                  ) : (
                    <button
                      onClick={() => handleViewAndGift(item.buyUrl)}
                      className="w-full py-2.5 border border-gold-400/20 text-[10px] font-semibold uppercase tracking-widest text-gold-400 hover:bg-gold-500/5 hover:border-gold-400/60 hover:text-gold-300 transition-all duration-300 rounded-none cursor-pointer text-center"
                    >
                      View & Gift &rarr;
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {visibleItems.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500 font-serif italic select-none">
              No items found matching the selected filter.
            </div>
          )}
        </div>
        <div className="flex justify-center mt-16">
          <button
            onClick={handleViewFullWishlist}
            className="px-10 py-4 border border-gold-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 hover:bg-gold-500/5 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(197,168,128,0.15)] transition-all duration-300 rounded-none cursor-pointer font-sans"
          >
            View Full Wish List &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
