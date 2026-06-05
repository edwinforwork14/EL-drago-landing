"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORY_GROUPS } from "@/data/utils";

const categoryImages: Record<string, string> = {
  embutidos: "/hero-banners/embutidos-banner.jpeg",
  ahumados: "/hero-banners/ahumados-banner.jpeg",
  frescos: "/hero-banners/frescos-banner.jpeg",
};

interface CategoryFilterCarouselProps {
  activeCategory: string | null;
  onSelect: (slug: string | null) => void;
}

export default function CategoryFilterCarousel({ activeCategory, onSelect }: CategoryFilterCarouselProps) {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-10 md:gap-16 justify-center">
            {/* "Todos" bubble — shown by default */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => onSelect(null)}
                className="group flex flex-col items-center gap-5 w-[264px] md:w-[312px] cursor-pointer"
              >
                <div className="relative w-[216px] h-[216px] md:w-[252px] md:h-[252px]">
                  {/* Selected ring */}
                  <div
                    className={`absolute inset-0 rounded-full border-[3px] transition-all duration-500 ${
                      activeCategory === null
                        ? "border-primary"
                        : "border-primary/20 group-hover:border-primary/50"
                    }`}
                  />
                  {/* Inner circle with all-icon */}
                  <div className="absolute inset-[4px] rounded-full border border-primary/10 overflow-hidden bg-[#FCF2E6] flex items-center justify-center">
                    <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-primary-dark/60">
                      <g strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z" />
                      </g>
                    </svg>
                  </div>
                  {/* Checkmark on selected */}
                  {activeCategory === null && (
                    <div className="absolute -top-2 -right-2 w-9 h-9 bg-primary rounded-full flex items-center justify-center z-20">
                      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
                </div>
                <span
                  className={`font-bold text-lg md:text-2xl uppercase tracking-wider text-center transition-colors duration-300 ${
                    activeCategory === null
                      ? "text-primary"
                      : "text-primary-dark group-hover:text-primary"
                  }`}
                >
                  Todos
                </span>
              </button>
            </motion.div>

            {CATEGORY_GROUPS.map((group, i) => {
              const isActive = activeCategory === group.slug;
              return (
                <motion.div
                  key={group.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (i + 1), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => onSelect(isActive ? null : group.slug)}
                    className="group flex flex-col items-center gap-5 w-[264px] md:w-[312px] cursor-pointer"
                  >
                    <div className="relative w-[216px] h-[216px] md:w-[252px] md:h-[252px]">
                      {/* Outer ring — selected vs unselected */}
                      <div
                        className={`absolute inset-0 rounded-full border-[3px] transition-all duration-500 ${
                          isActive
                            ? "border-primary"
                            : "border-primary/20 group-hover:border-primary/50"
                        }`}
                      />
                      {/* Inner padding ring with image */}
                      <div className="absolute inset-[4px] rounded-full border border-primary/10 overflow-hidden">
                        <Image
                          src={categoryImages[group.slug] || "/hero-banners/productos-banner.jpeg"}
                          alt={group.label}
                          fill
                          sizes="(max-width: 768px) 216px, 252px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      {/* Checkmark on selected */}
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-20">
                          <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
                    </div>

                    <span
                      className={`font-bold text-lg md:text-2xl uppercase tracking-wider text-center transition-colors duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-primary-dark group-hover:text-primary"
                      }`}
                    >
                      {group.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
