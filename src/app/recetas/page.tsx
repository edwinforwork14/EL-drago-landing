"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { recipes } from "@/data/recipes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCarousel from "@/components/RecipeCarousel";
import RecipeGallery from "@/components/RecipeGallery";

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
            className="relative overflow-hidden shadow-2xl group min-h-[50vh] md:min-h-[85vh] flex flex-col justify-center md:justify-start"
          >
            {/* Background Carousel */}
            <RecipeCarousel recipes={recipes} />

            {/* ─── CONTENT WRAPPER — mismo approach que home Hero ─── */}
            <div className="relative z-20 flex flex-col justify-start min-h-[35vh] md:min-h-[45vh] px-5 sm:px-6 md:px-12 lg:px-24 pb-10 sm:pb-12 md:pb-14 pt-16 sm:pt-24 md:pt-28 lg:pt-40">
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
                    <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.2rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] -rotate-2 inline-block ml-0 sm:ml-2 drop-shadow-lg">
                      Saborear
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-white/80 text-[1.2rem] sm:text-[1.35rem] md:text-2xl font-medium leading-relaxed drop-shadow-sm max-w-2xl mt-4 md:mt-6"
                  >
                    Descubre recetas exclusivas diseñadas por chefs gourmet para elevar cada bocado a una experiencia culinaria inolvidable utilizando el sello de calidad de Embutidos El Drago.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── RECIPE GALLERY — masonry premium ─── */}
        <RecipeGallery />
      </main>

      <Footer />
    </div>
  );
}
