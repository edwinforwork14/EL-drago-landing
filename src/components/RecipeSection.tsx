"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { recipes, Recipe } from "@/data/recipes";

const MotionImage = motion(Image);

const RecipeCard = ({ recipe, isVertical, index }: { recipe: Recipe; isVertical?: boolean; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-[1.08rem] cursor-pointer bg-black ${
        isVertical ? "h-[380px] md:h-full" : "h-[320px] md:h-[220px]"
      } w-full`}
    >
      <Link href={`/receta/${recipe.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Ver receta: {recipe.title}</span>
      </Link>
      <div className="absolute inset-0 z-0 bg-primary/5 flex items-center justify-center">
        <MotionImage
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>

      <div className={`absolute inset-0 z-10 flex flex-col ${isHovered ? 'justify-center' : 'justify-end'} p-4 md:p-6 transition-all duration-500`}>
        {!isVertical && isHovered ? (            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:grid grid-cols-2 gap-6 items-center h-full"
          >
            {/* Left: Title & Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-white font-[family-name:var(--font-headline)] text-xl md:text-2xl font-bold leading-tight uppercase tracking-tight mb-3">
                {recipe.title}
              </h3>
              <p className="text-white/80 text-xs leading-relaxed font-light">
                {recipe.description}
              </p>
            </div>
            
            {/* Right: Ingredients & Prep */}
            <div className="flex flex-col justify-center border-l border-white/10 pl-6">
              <div className="pb-1 mb-2">
                <span className="text-accent text-[9px] tracking-widest uppercase font-bold mb-2 block">Ingredientes</span>
                <div className="flex flex-wrap gap-1.5">
                  {recipe.ingredients.map((ing, i) => (
                    <span key={i} className="text-[9px] text-white/70 bg-[#FCF2E6]/10 px-2 py-0.5 rounded-md border border-white/10">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-accent text-[9px] tracking-widest uppercase font-bold mb-2 block">Preparación</span>
                <ul className="space-y-1">
                  {recipe.preparation.map((step, i) => (
                    <li key={i} className="text-white/70 text-[10px] leading-snug flex gap-1.5">
                      <span className="text-accent font-bold">{i + 1}.</span> {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Default View (Always visible on Mobile, or when not hovered, or for Vertical cards) */}
        <div className={!isVertical && isHovered ? "md:hidden" : ""}>
          <motion.div layout className="mb-2">
            <h3 className="text-white font-[family-name:var(--font-headline)] text-base md:text-lg font-bold leading-tight uppercase tracking-tight">
              {recipe.title}
            </h3>
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="pr-2"
              >
                <p className="text-white/90 text-[11px] md:text-xs mb-2 leading-relaxed font-light">
                  {recipe.description}
                </p>
                
                <div className="space-y-3">
                  <div className="mb-2">
                    <span className="text-accent text-[9px] tracking-widest uppercase font-bold mb-1 block">Ingredientes</span>
                    <div className="flex flex-wrap gap-1.5">
                      {recipe.ingredients.map((ing, i) => (
                        <span key={i} className="text-[9px] text-white/70 bg-[#FCF2E6]/5 px-1.5 py-0.5 rounded-md border border-white/10">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-accent text-[9px] tracking-widest uppercase font-bold mb-1 block">Preparación</span>
                    <ul className="space-y-1">
                      {recipe.preparation.map((step, i) => (
                        <li key={i} className="text-white/70 text-[10px] leading-snug flex gap-1.5">
                          <span className="text-accent font-bold">{i + 1}.</span> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const RecipeSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === 0 ? 1 : 0));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? 0 : 1));
  };

  const visibleRecipes = currentPage === 0 ? recipes.slice(0, 3) : recipes.slice(3, 6);

  return (
    <section id="recipes" className="pt-4 md:pt-6 pb-8 md:pb-10 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-8 gap-3 md:gap-4">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[2.2rem] md:text-[3.8rem] font-headline-lg text-headline-lg text-primary-dark tracking-tight leading-none mb-0 uppercase flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6"
            >
              <span>EL</span> <span>ARTE</span> <span>DE</span> <span className="text-[#FEC70C] font-mr-dafoe normal-case text-[2.8rem] md:text-[5rem] -rotate-2 inline-block ml-1">Saborear</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="text-primary-dark/80 font-body text-sm md:text-base leading-tight">
              "Descubre recetas exclusivas diseñadas por nuestros maestros para elevar cada bocado a una experiencia editorial."
            </p>
          </motion.div>
        </div>

        {/* Dynamic Bento Grid Slider */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
            >
              {/* H1 (Col 1-2) */}
              <div className="md:col-span-2">
                <RecipeCard recipe={visibleRecipes[0]} index={0} />
              </div>
              {/* V1 (Col 3, Row 1-2) */}
              <div className="md:col-span-1 md:row-span-2">
                <RecipeCard recipe={visibleRecipes[1]} isVertical index={1} />
              </div>

              {/* H2 (Col 1-2) */}
              <div className="md:col-span-2">
                <RecipeCard recipe={visibleRecipes[2]} index={2} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles del Slider Desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 lg:-left-8 z-20 hidden md:block">
            <button 
              onClick={prevPage} 
              className="bg-primary hover:bg-primary-dark text-white p-2.5 md:p-3 rounded-full shadow-[0_10px_30px_rgba(223,33,34,0.3)] hover:shadow-[0_10px_40px_rgba(223,33,34,0.5)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              aria-label="Recetas anteriores"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-8 z-20 hidden md:block">
            <button 
              onClick={nextPage} 
              className="bg-primary hover:bg-primary-dark text-white p-2.5 md:p-3 rounded-full shadow-[0_10px_30px_rgba(223,33,34,0.3)] hover:shadow-[0_10px_40px_rgba(223,33,34,0.5)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              aria-label="Siguientes recetas"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Controles del Slider Mobile */}
        <div className="flex justify-center items-center gap-4 mt-5 md:hidden">
          <button 
            onClick={prevPage} 
            className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === 0 ? 'bg-primary scale-125' : 'bg-primary/30'}`} />
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === 1 ? 'bg-primary scale-125' : 'bg-primary/30'}`} />
          </div>
          <button 
            onClick={nextPage} 
            className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 mt-6 md:mt-10">
          {/* Fila 5: CTA Panorámico (Full width) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 flex flex-col md:flex-row items-center justify-between bg-primary-dark rounded-[1.08rem] p-6 md:p-8 text-white group relative overflow-hidden mt-5 min-h-[320px] md:min-h-[auto]"
          >
            {/* Background Accent Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="max-w-2xl relative z-10 text-center md:text-left mb-10 md:mb-0">
              <h4 className="font-headline-lg text-headline-lg text-3xl md:text-4xl uppercase tracking-tighter mb-3 leading-[0.9]">
                ENVÍANOS TU <br className="md:hidden" /> <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.2rem] md:text-[3.8rem] -rotate-2 inline-block">Receta</span>
              </h4>
              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-md md:max-w-none mx-auto md:mx-0">
                Comparte tu toque especial. Envíanos tu creación con productos El Drago y forma parte de nuestra selección gourmet.
              </p>
            </div>

            <motion.a
              href="mailto:recetas@eldrago.com?subject=Mi%20Receta%20Gourmet%20-%20El%20Drago&body=Hola%20equipo%20El%20Drago,%0A%0AQuiero%20compartir%20mi%20receta%20utilizando%20sus%20productos.%0A%0ANombre%20de%20la%20receta:%20%0AIngredientes:%20%0APreparación:%20%0A%0A¡Espero%20que%20les%20guste!"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary-dark px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[0.75rem] md:text-[0.8rem] hover:bg-[#FCF2E6] transition-all duration-300 flex items-center justify-center gap-2 relative z-10 shadow-2xl w-full md:w-auto"
            >
              <span className="material-symbols-outlined">mail</span>
              Enviar por Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
