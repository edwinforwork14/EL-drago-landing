"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CategoryGroup } from "@/data/utils";

interface CategoryCardProps {
  group: CategoryGroup;
  index: number;
  image?: string;
}

const categoryIcons: Record<string, string> = {
  embutidos: "restaurant_menu",
  ahumados: "whatshot",
  frescos: "ac_unit",
};

const placeholderImages: Record<string, string> = {
  embutidos: "/productos/jamones/page-0003.jpg",
  ahumados: "/productos/ahumados/page-0018.jpg",
  frescos: "/productos/pechugas-cosidas/page-0008.jpg",
};

const CategoryCard: React.FC<CategoryCardProps> = ({ group, index, image }) => {
  const imgSrc = image || placeholderImages[group.slug] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: index === 1 ? 3 : -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: 0.15 * index,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ rotate: index === 1 ? -1.5 : 1.5 }}
      className="group relative h-[45vh] min-h-[320px] md:min-h-[400px] lg:min-h-[460px] w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer border-2 border-transparent hover:border-accent/40 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(254,199,12,0.15)] transition-all duration-700"
    >
      {/* Inner Glow Ring */}
      <div className="absolute inset-2 md:inset-3 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 pointer-events-none z-20 group-hover:border-accent/20 transition-colors duration-700" />
      <Link href={`/productos/${group.slug}`} className="block h-full w-full">
        {/* ─── Background Image ─── */}
        <div className="absolute inset-0 bg-primary-dark/90 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          <img
            src={imgSrc}
            alt={group.label}
            className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110 rounded-[2rem] md:rounded-[2.5rem]"
          />
        </div>

        {/* ─── Gradient Overlays ─── */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent transition-opacity duration-700 group-hover:via-[#0a0a0a]/60 rounded-[2rem] md:rounded-[2.5rem]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] md:rounded-[2.5rem]" />

        {/* ─── Decorative light leak ─── */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        {/* ─── Content ─── */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
          {/* Top icon */}
          <div className="absolute top-8 md:top-12 right-8 md:right-12">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl md:text-4xl">
                {categoryIcons[group.slug] || "category"}
              </span>
            </div>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="overflow-hidden mb-3">
              <span className="block text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                Categoría
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white font-[family-name:var(--font-luckiest-guy)] text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:text-accent transition-colors duration-500">
              {group.label}
            </h2>

            {/* Description */}
            <div className="max-w-lg mb-6 overflow-hidden">
              <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium transform transition-all duration-500 line-clamp-2">
                {group.description}
              </p>
            </div>

            {/* Subcategories + CTA row */}
            <div className="flex flex-col gap-3">
              {/* Subcategory tags */}
              <div className="flex flex-wrap gap-2">
                {group.subcategories.slice(0, 3).map((sub) => (
                  <span
                    key={sub}
                    className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 px-2.5 py-1.5 rounded-full"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-2">
                <span className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] px-6 py-3 md:px-8 md:py-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-primary-dark">
                  Ver productos
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Shine overlay on hover ─── */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out pointer-events-none rounded-[2rem] md:rounded-[2.5rem]" />
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
