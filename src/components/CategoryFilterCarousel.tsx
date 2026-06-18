"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORY_GROUPS } from "@/data/utils";

const categoryImages: Record<string, string> = {
  embutidos: "/filtros/embutidos.jpg",
  ahumados: "/filtros/ahumados.jpg",
  frescos: "/filtros/frescos1.jpg",
};

interface CategoryFilterCarouselProps {
  activeCategory: string | null;
  onSelect: (slug: string | null) => void;
}

export default function CategoryFilterCarousel({ activeCategory, onSelect }: CategoryFilterCarouselProps) {
  return (
    <section className="w-full pt-8 pb-10 md:pt-10 md:pb-12">
      {/* Preload draguitos images */}
      <div className="hidden" aria-hidden="true">
        {Object.values(categoryImages).map((src) => (
          <Image key={src} src={src} alt="" width={252} height={252} priority />
        ))}
      </div>
      <div className="max-w-[1600px] mx-auto  px-5 md:px-8 lg:px-12">
        <div className="overflow-x-auto md:overflow-x-visible no-scrollbar">
          <div className="grid grid-cols-2 gap-6 md:flex md:gap-16 md:justify-center pt-2 md:pt-4 place-items-center">
            {/* "Todos" bubble — shown by default */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => onSelect(null)}
                className="group flex flex-col items-center gap-3 md:gap-5 w-full md:w-[312px] cursor-pointer"
              >
                <div className="relative w-[140px] h-[140px] md:w-[252px] md:h-[252px]">
                  {/* Selected ring */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-[3px] transition-all duration-500 z-10 pointer-events-none ${
                      activeCategory === null
                        ? "border-primary"
                        : "border-primary/20 group-hover:border-primary/50"
                    }`}
                  />
                  {/* Inner shape with all-icon */}
                  <div
                    className={`absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center ${
                      activeCategory === null
                        ? "bg-primary"
                        : "bg-black/5"
                    }`}
                  >
                    <svg
                      width="32"
                      height="32"
                      fill="none"
                      stroke={activeCategory === null ? "white" : "currentColor"}
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      className={`${activeCategory === null ? "" : "text-primary-dark/60"} md:w-12 md:h-12`}
                    >
                      <g strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </g>
                    </svg>
                  </div>
                  {/* Checkmark on selected */}
                  {activeCategory === null && (
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center z-20">
                      <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
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
                className="group flex flex-col items-center gap-3 md:gap-5 w-full md:w-[312px] cursor-pointer"
              >
                <div className="relative w-[140px] h-[140px] md:w-[252px] md:h-[252px]">
                      {/* Outer ring — selected vs unselected */}
                      <div
                        className={`absolute inset-0 rounded-2xl border-[3px] transition-all duration-500 z-10 pointer-events-none ${
                          isActive
                            ? "border-primary"
                            : "border-primary/20 group-hover:border-primary/50"
                        }`}
                      />
                      {/* Inner padding shape with image */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-transparent">
                        <div className="relative w-full h-full transition-transform duration-700 scale-100 group-hover:scale-105">
                          <Image
                            src={categoryImages[group.slug] || "/hero-banners/productos-banner.jpeg"}
                            alt={group.label}
                            fill
                            sizes="(max-width: 768px) 216px, 252px"
                            className="object-cover"
                            loading="eager"
                          />
                        </div>
                      </div>
                      {/* Checkmark on selected */}
                      {isActive && (
                        <div className="absolute top-0 right-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center z-20">
                          <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
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
