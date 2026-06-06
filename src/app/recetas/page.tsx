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
        className="group block relative overflow-hidden rounded-[1.8rem] bg-[#FCF2E6] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl aspect-[16/11]"
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

      <main className="flex-1 w-full">
        {/* ─── RECIPES HERO — estructura como el home Hero ─── */}
        <section className="w-full bg-primary">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden shadow-2xl group min-h-[50vh] md:min-h-[85vh] flex flex-col justify-start"
          >
            {/* Background Carousel */}
            <RecipeCarousel recipes={recipes} />

            {/* ─── CONTENT WRAPPER — mismo approach que home Hero ─── */}
            <div className="relative z-20 flex flex-col justify-start min-h-[35vh] md:min-h-[45vh] px-5 sm:px-6 md:px-12 lg:px-24 pb-10 sm:pb-12 md:pb-14 pt-20 sm:pt-24 md:pt-28">
              <div className="w-full max-w-4xl md:max-w-2xl lg:max-w-3xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 md:mb-8 w-full">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors group/link"
                  >
                    <span className="material-symbols-outlined text-base sm:text-lg transition-transform group-hover/link:-translate-x-1">arrow_back</span>
                    Volver al inicio
                  </Link>
                  <div className="flex items-center gap-2 text-white/60 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">
                    <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                    <span>/</span>
                    <span className="text-accent">Recetas Culinarias</span>
                  </div>
                </div>

                {/* Heading */}
                <div className="relative">
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] font-[family-name:var(--font-luckiest-guy)] text-white uppercase leading-[0.85] tracking-tight drop-shadow-md"
                  >
                    El arte de <br className="hidden sm:block" />
                    <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.2rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] -rotate-2 inline-block ml-1 sm:ml-2 drop-shadow-lg">
                      Saborear
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-white/80 text-sm sm:text-base md:text-xl font-medium leading-relaxed drop-shadow-sm max-w-2xl mt-4 md:mt-6"
                  >
                    Descubre recetas exclusivas diseñadas por chefs gourmet para elevar cada bocado a una experiencia culinaria inolvidable utilizando el sello de calidad de Embutidos El Drago.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── RECIPES GRID — con bg rojo ─── */}
        <section className="bg-[#C41A1E] w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recipes.map((recipe, i) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
