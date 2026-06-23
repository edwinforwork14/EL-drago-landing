"use client";

import React from "react";
import Image from "next/image";
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
    <section className="w-full">
      {/* Preload category images */}
      <div className="hidden" aria-hidden="true">
        {Object.values(categoryImages).map((src) => (
          <Image key={src} src={src} alt="" width={600} height={600} priority />
        ))}
      </div>

      {/* Vertical panels layout */}
      <div className="flex h-[450px] md:h-[600px] w-full overflow-hidden">
        {[{ slug: null as string | null, label: "Todos" }, ...CATEGORY_GROUPS].map((group) => {
          const isActive = activeCategory === group.slug;

          return (
            <button
              key={group.slug ?? "all"}
              onClick={() => onSelect(isActive ? null : group.slug)}
              className="relative flex-1 h-full group overflow-hidden border-r border-white/10 last:border-r-0 transition-all duration-500 cursor-pointer"
            >
              {/* Image: fills the entire vertical panel */}
              {group.slug ? (
                <Image
                  src={categoryImages[group.slug] || "/hero-banners/productos-banner.jpeg"}
                  alt={group.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 25vw, 25vw"
                />
              ) : (
                /* "Todos" — gradient background with plus icon */
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#2a1515] to-primary-dark" />
              )}

              {/* Dark gradient overlay for text readability */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"
                    : "bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90"
                }`}
              />

              {/* Active accent gradient overlay */}
              {isActive && (
                <div className="absolute inset-0 bg-primary/10 transition-opacity duration-500" />
              )}

              {/* "Todos" icon — centered plus sign */}
              {!group.slug && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "border-[#DF2122] bg-[#DF2122] scale-110"
                      : "border-white/40 bg-white/10 group-hover:border-white/70 group-hover:bg-white/20"
                  }`}>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isActive ? "white" : "white"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="md:w-10 md:h-10"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Label at bottom-left */}
              <div className="absolute bottom-6 left-4 md:bottom-10 md:left-8 z-10 text-left">
                <span
                  className={`block text-white font-bold text-2xl md:text-4xl uppercase tracking-wider transition-all duration-500 ${
                    isActive ? "scale-110 origin-left" : "opacity-80 group-hover:opacity-100"
                  }`}
                >
                  {group.label}
                </span>

                {/* Active indicator line */}
                {isActive && (
                  <div className="h-1 w-full bg-[#DF2122] mt-2 rounded-full" />
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
