"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { recipes, Recipe } from "@/data/recipes";

const galleryRecipes = recipes.slice(0, 6);

type CardVariant = "small" | "medium" | "large" | "xlarge";

const variantHeights: Record<CardVariant, string> = {
  small: "min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]",
  medium: "min-h-[280px] sm:min-h-[330px] lg:min-h-[380px]",
  large: "min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]",
  xlarge: "min-h-[440px] sm:min-h-[520px] lg:min-h-[580px]",
};

// ── Masonry pattern (desktop 3 col) ──
//  Col 1: [0‑M]  [3‑XL]
//  Col 2: [1‑XL] [4‑L]
//  Col 3: [2‑M]  [5‑S]
const cardVariants: CardVariant[] = [
  "medium", // 0
  "xlarge", // 1
  "medium", // 2
  "xlarge", // 3
  "large",  // 4
  "small",  // 5
];

function GalleryCard({
  recipe,
  index,
  variant = "medium",
}: {
  recipe: Recipe;
  index: number;
  variant?: CardVariant;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: 0.08 * index,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/receta/${recipe.slug}`} className="group block w-full">
        <figure
          className={`relative overflow-hidden w-full rounded-3xl transition-all duration-500 lg:group-hover:scale-[1.02] ease-out ${variantHeights[variant]}`}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <figcaption className="flex flex-row items-end w-full overflow-hidden break-words px-5 py-6 gap-3 lg:px-7 lg:py-8 absolute bottom-0 left-0 right-0 justify-between rounded-b-3xl bg-gradient-to-t from-black/85 via-black/40 to-transparent">
            <div className="max-w-[75%] flex flex-col gap-2">
              <span className="text-accent/90 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest font-[family-name:var(--font-luckiest-guy)]">
                {recipe.category}
              </span>
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-[family-name:var(--font-luckiest-guy)] uppercase leading-tight tracking-wide group-hover:text-accent transition-colors duration-300">
                {recipe.title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-medium line-clamp-1 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-6 transition-all duration-500">
                {recipe.description}
              </p>
            </div>

            <div className="border-2 border-white/90 text-white/90 rounded-full flex items-center justify-center bg-clip-padding h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12 hover:bg-white hover:text-primary transition-all duration-300 flex-shrink-0 group/arrow">
              <svg
                className="rotate-90"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 15 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </figcaption>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s] ease-in-out pointer-events-none rounded-3xl" />
        </figure>
      </Link>
    </motion.div>
  );
}

export default function RecipeGallery() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:gap-12 py-14 lg:py-20 bg-primary w-full">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center gap-3 px-4 max-w-3xl"
      >
        <span className="text-accent text-base sm:text-lg lg:text-xl font-bold uppercase tracking-[0.25em] font-[family-name:var(--font-luckiest-guy)]">
          Galería Culinaria
        </span>
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-luckiest-guy)] uppercase leading-[0.9] tracking-tight">
          RECETAS QUE
          <br />
          <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-5xl sm:text-6xl lg:text-7xl -rotate-1 inline-block mt-1">
            Inspiran
          </span>
        </h2>
        <p className="text-white/70 text-sm sm:text-base lg:text-lg font-medium max-w-xl leading-relaxed">
          Descubre creaciones culinarias diseñadas para convertir cada comida
          en una experiencia gourmet con el sello de calidad El Drago.
        </p>
        {/* Decorative line */}
        <div className="w-16 h-0.5 bg-accent/60 rounded-full mt-1" />
      </motion.div>

      {/* ── Masonry Gallery ── */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1360px] mx-auto">
        {/* ===== Mobile: single column, natural order ===== */}
        <div className="flex flex-col gap-4 sm:hidden">
          {galleryRecipes.map((recipe, i) => (
            <GalleryCard
              key={recipe.id}
              recipe={recipe}
              index={i}
              variant={cardVariants[i]}
            />
          ))}
        </div>

        {/* ===== Tablet: 2-column CSS Grid ===== */}
        <ul className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-5">
          {/* Col 1: cards 0, 2, 4 */}
          <li className="flex flex-col gap-5">
            <GalleryCard recipe={galleryRecipes[0]} index={0} variant="medium" />
            <GalleryCard recipe={galleryRecipes[2]} index={2} variant="medium" />
            <GalleryCard recipe={galleryRecipes[4]} index={4} variant="large" />
          </li>
          {/* Col 2: cards 1, 3, 5 */}
          <li className="flex flex-col gap-5">
            <GalleryCard recipe={galleryRecipes[1]} index={1} variant="xlarge" />
            <GalleryCard recipe={galleryRecipes[3]} index={3} variant="xlarge" />
            <GalleryCard recipe={galleryRecipes[5]} index={5} variant="small" />
          </li>
        </ul>

        {/* ===== Desktop: 3-column CSS Grid masonry ===== */}
        <ul className="hidden lg:grid lg:grid-cols-3 gap-6">
          {/* Col 1: Card 0 (M) + Card 3 (XL) */}
          <li className="flex flex-col gap-6">
            <GalleryCard recipe={galleryRecipes[0]} index={0} variant="medium" />
            <GalleryCard recipe={galleryRecipes[3]} index={3} variant="xlarge" />
          </li>
          {/* Col 2: Card 1 (XL) + Card 4 (L) */}
          <li className="flex flex-col gap-6">
            <GalleryCard recipe={galleryRecipes[1]} index={1} variant="xlarge" />
            <GalleryCard recipe={galleryRecipes[4]} index={4} variant="large" />
          </li>
          {/* Col 3: Card 2 (M) + Card 5 (S) */}
          <li className="flex flex-col gap-6">
            <GalleryCard recipe={galleryRecipes[2]} index={2} variant="medium" />
            <GalleryCard recipe={galleryRecipes[5]} index={5} variant="small" />
          </li>
        </ul>
      </div>
    </section>
  );
}
