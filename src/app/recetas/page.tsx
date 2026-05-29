"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { recipes, Recipe } from "@/data/recipes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCarousel from "@/components/RecipeCarousel";

function RecipeCard({ recipe, index }: { recipe: Recipe; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/receta/${recipe.slug}`}
        className="group block relative overflow-hidden rounded-[1.8rem] bg-white border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl aspect-[16/11]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-accent text-[9px] font-bold uppercase tracking-widest bg-black/40 border border-white/10 px-3 py-1 rounded-full">
              {recipe.category}
            </span>
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-accent">schedule</span>
              <span className="material-symbols-outlined text-sm text-accent">signal_cellular_alt</span>
              {recipe.difficulty}
            </span>
          </div>

          <h3 className="text-white font-[family-name:var(--font-luckiest-guy)] text-2xl uppercase leading-none group-hover:text-accent transition-colors tracking-wide">
            {recipe.title}
          </h3>
          <p className="text-white/70 text-xs font-medium line-clamp-2 mt-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-12 transition-all duration-500 ease-in-out">
            {recipe.description}
          </p>
        </div>
        
        {/* Subtle shine on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
      </Link>
    </motion.div>
  );
}

export default function RecetasPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between overflow-x-hidden">
      <Navbar transparentInitially={false} />

      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24 flex-1 w-full">
        {/* ─── RECIPES HERO SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.16rem] overflow-hidden mb-16 shadow-2xl group border border-primary/5 min-h-[40vh] md:min-h-[50vh] flex flex-col justify-end p-8 md:p-12 lg:p-16"
        >
              {/* Background Carousel */}
              <RecipeCarousel recipes={recipes} />

          <div className="relative z-10 w-full">
            {/* Breadcrumbs and back button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors group/link"
              >
                <span className="material-symbols-outlined text-lg transition-transform group-hover/link:-translate-x-1">arrow_back</span>
                Volver al inicio
              </Link>
              <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-accent">Recetas Culinarias</span>
              </div>
            </div>

            {/* Heading with Brand Luckiest Guy & Mr Dafoe */}
            <div className="max-w-3xl">
              <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-[family-name:var(--font-luckiest-guy)] text-white uppercase leading-[0.85] tracking-tight mb-4 drop-shadow-md">
                El arte de <br />
                <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] -rotate-2 inline-block ml-2 drop-shadow-lg">
                  Saborear
                </span>
              </h1>

              <p className="text-white/80 text-base md:text-xl font-medium leading-relaxed drop-shadow-sm max-w-2xl">
                Descubre recetas exclusivas diseñadas por chefs gourmet para elevar cada bocado a una experiencia culinaria inolvidable utilizando el sello de calidad de Embutidos El Drago.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─── RECIPES GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, i) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={i} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
