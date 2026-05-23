"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { recipes, Recipe } from "@/data/recipes";

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
      className={`group relative overflow-hidden rounded-[32px] cursor-pointer bg-black ${
        isVertical ? "h-[500px] md:h-full" : "h-[450px] md:h-[300px]"
      } w-full`}
    >
      <Link href={`/receta/${recipe.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Ver receta: {recipe.title}</span>
      </Link>
      <div className="absolute inset-0 z-0 bg-primary/5 flex items-center justify-center">
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>

      <div className={`absolute inset-0 z-10 flex flex-col ${isHovered ? 'justify-center' : 'justify-end'} p-6 md:p-10 transition-all duration-500`}>
        {!isVertical && isHovered ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:grid grid-cols-2 gap-10 items-center h-full"
          >
            {/* Left: Title & Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-white font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tight mb-4">
                {recipe.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                {recipe.description}
              </p>
            </div>
            
            {/* Right: Ingredients & Prep */}
            <div className="flex flex-col justify-center border-l border-white/10 pl-10">
              <div className="pb-2 mb-4">
                <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-3 block">Ingredientes</span>
                <div className="flex flex-wrap gap-2">
                  {recipe.ingredients.map((ing, i) => (
                    <span key={i} className="text-[10px] text-white/70 bg-white/10 px-2 py-1 rounded-md border border-white/10">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-3 block">Preparación</span>
                <ul className="space-y-2">
                  {recipe.preparation.map((step, i) => (
                    <li key={i} className="text-white/70 text-[11px] leading-snug flex gap-2">
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
          <motion.div layout className="mb-4">
            <h3 className="text-white font-[family-name:var(--font-headline)] text-xl md:text-2xl font-bold leading-tight mt-1 uppercase tracking-tight">
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
                <p className="text-white/90 text-xs md:text-sm mb-4 leading-relaxed font-light">
                  {recipe.description}
                </p>
                
                <div className="space-y-6">
                  <div className="mb-4">
                    <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-2 block">Ingredientes</span>
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((ing, i) => (
                        <span key={i} className="text-[10px] text-white/70 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-2 block">Preparación</span>
                    <ul className="space-y-2">
                      {recipe.preparation.map((step, i) => (
                        <li key={i} className="text-white/70 text-[11px] leading-snug flex gap-2">
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
    <section id="recipes" className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12 gap-4 md:gap-5">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[2.75rem] md:text-[5.5rem] font-luckiest-guy text-primary-dark tracking-tight leading-none mb-0 uppercase flex flex-wrap items-center justify-center gap-x-5 md:gap-x-8"
            >
              <span>EL</span> <span>ARTE</span> <span>DE</span> <span className="text-primary font-mr-dafoe normal-case text-[3.85rem] md:text-[7.7rem] -rotate-2 inline-block ml-2">Saborear</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="text-primary-dark/80 font-body text-xl md:text-2xl leading-tight">
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
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
              className="bg-primary hover:bg-primary-dark text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(223,33,34,0.3)] hover:shadow-[0_10px_40px_rgba(223,33,34,0.5)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              aria-label="Recetas anteriores"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-8 z-20 hidden md:block">
            <button 
              onClick={nextPage} 
              className="bg-primary hover:bg-primary-dark text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(223,33,34,0.3)] hover:shadow-[0_10px_40px_rgba(223,33,34,0.5)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              aria-label="Siguientes recetas"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Controles del Slider Mobile */}
        <div className="flex justify-center items-center gap-6 mt-8 md:hidden">
          <button 
            onClick={prevPage} 
            className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
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
            className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 mt-10 md:mt-16">
          {/* Fila 5: CTA Panorámico (Full width) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 flex flex-col md:flex-row items-center justify-between bg-primary-dark rounded-[32px] p-10 md:p-12 text-white group relative overflow-hidden mt-8 min-h-[400px] md:min-h-[auto]"
          >
            {/* Background Accent Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="max-w-2xl relative z-10 text-center md:text-left mb-10 md:mb-0">
              <h4 className="font-[family-name:var(--font-luckiest-guy)] text-4xl md:text-6xl uppercase tracking-tighter mb-4 leading-[0.9]">
                ENVÍANOS TU <br className="md:hidden" /> <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.5rem] md:text-[5.5rem] -rotate-2 inline-block">Receta</span>
              </h4>
              <p className="text-white/60 text-base md:text-xl font-light leading-relaxed max-w-md md:max-w-none mx-auto md:mx-0">
                Comparte tu toque especial. Envíanos tu creación con productos El Drago y forma parte de nuestra selección gourmet.
              </p>
            </div>

            <motion.a
              href="mailto:recetas@eldrago.com?subject=Mi%20Receta%20Gourmet%20-%20El%20Drago&body=Hola%20equipo%20El%20Drago,%0A%0AQuiero%20compartir%20mi%20receta%20utilizando%20sus%20productos.%0A%0ANombre%20de%20la%20receta:%20%0AIngredientes:%20%0APreparación:%20%0A%0A¡Espero%20que%20les%20guste!"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 relative z-10 shadow-2xl w-full md:w-auto"
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
