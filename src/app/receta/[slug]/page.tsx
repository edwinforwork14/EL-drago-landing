"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { recipes, getRecipeBySlug, Recipe } from "@/data/recipes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function RecipeDetailContent() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const recipe = getRecipeBySlug(slug);

  // State to track checked ingredients for interactive kitchen mode
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Navbar transparentInitially={false} />
        <div className="text-center py-40 max-w-md mx-auto px-6 flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-[family-name:var(--font-luckiest-guy)] text-primary-dark uppercase mb-4 leading-none">
            Receta no encontrada
          </h1>
          <p className="text-primary-dark/65 font-medium mb-8">La receta que buscas no existe o ha sido modificada.</p>
          <Link
            href="/recetas"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg"
          >
            Ver todas las recetas
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Featured Product mapping based on recipe id
  const getFeaturedProductForRecipe = (recipeId: string) => {
    switch (recipeId) {
      case "1": // Milanesas de Mortadela
        return {
          name: "Mortadela Tipo Superior",
          desc: "Nuestra mortadela premium de textura cremosa y sabor tradicional condimentado con finas especias. Elevada calidad artesanal en cada rebanada.",
          image: "/productos/mortadelas/JAMON (8).png",
          slug: "mortadela-tipo-superior",
        };
      case "2": // Bruschettas de Pavo Ahumado
        return {
          name: "Pechuga de Pavo Ahumada",
          desc: "Pechuga seleccionada baja en grasa con un delicado ahumado natural con leñas finas que potencia su aroma y jugosidad.",
          image: "/productos/pechugas-cosidas/JAMON(9).png",
          slug: "pechuga-de-pavo-ahumada",
        };
      case "3": // Chuletas Ahumadas Glaseadas
        return {
          name: "Chuleta Ahumada Premium",
          desc: "Exquisitos cortes de cerdo jugosos y tiernos, ahumados con un método tradicional lento para asegurar un aroma profundo e inconfundible.",
          image: "/productos/chuletas/page-0016.jpg",
          slug: "chuleta-ahumada-premium",
        };
      case "4": // Arroz Salteado con Jamón Ahumado
        return {
          name: "Jamón Gourmet Selección",
          desc: "Elaborado con cortes de cerdo de calidad superior y ahumado natural. La joya de la corona en sabor tradicional y consistencia.",
          image: "/productos/jamones/page-0003.jpg",
          slug: "jamon-gourmet-seleccion",
        };
      case "5": // Rollitos de Pavo y Crema de Ajoporro
        return {
          name: "Pechuga de Pavo Cocido Superior",
          desc: "Pechuga magra y saludable cocida lentamente para preservar su suavidad, jugosidad natural y altos estándares nutricionales.",
          image: "/productos/pechugas-cosidas/JAMON (2).png",
          slug: "pechuga-de-pavo-cocido-superior",
        };
      case "6": // Pasta Carbonara El Drago
        return {
          name: "Tocineta Ahumada",
          desc: "Tocineta de cerdo seleccionada con un ahumado natural intenso y la proporción perfecta de carne y grasa para lograr un crocante único.",
          image: "/productos/tocinetas/page-0015.jpg",
          slug: "tocineta-ahumada",
        };
      default:
        return null;
    }
  };

  const featuredProduct = getFeaturedProductForRecipe(recipe.id);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between overflow-x-hidden">
      <Navbar transparentInitially={false} />

      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24 flex-1 w-full">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            href="/recetas"
            className="inline-flex items-center gap-2 text-primary-dark/60 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors group"
          >
            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
            Todas las recetas
          </Link>
        </motion.div>

        {/* ─── RECIPE HERO BANNER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/10] md:aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl group border border-primary/5"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-black/35 to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-accent text-primary-dark text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                {recipe.category}
              </span>
              <span className="text-white/80 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-accent">schedule</span>
                {recipe.time}
              </span>
              <span className="text-white/80 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-accent">signal_cellular_alt</span>
                {recipe.difficulty}
              </span>
            </div>
            
            <h1 className="text-white font-[family-name:var(--font-luckiest-guy)] text-3xl md:text-5xl lg:text-6xl uppercase leading-none tracking-wide drop-shadow-md">
              {recipe.title}
            </h1>
          </div>
        </motion.div>

        {/* ─── RECIPE DETAILS SPREAD ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Ingredients Column (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#FCF2E6]/60 backdrop-blur-md rounded-[2.5rem] p-8 border border-primary/5 shadow-xl sticky top-28">
              <span className="text-primary font-bold text-[9px] uppercase tracking-[0.25em] mb-2 block">
                Paso a Paso
              </span>
              <h2 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-3xl uppercase tracking-tight mb-6">
                Ingredientes
              </h2>
              
              <ul className="space-y-4">
                {recipe.ingredients.map((ing, i) => {
                  const checked = checkedIngredients[i] || false;
                  return (
                    <li
                      key={i}
                      onClick={() => toggleIngredient(i)}
                      className="flex items-center gap-3.5 text-primary-dark/80 font-medium cursor-pointer select-none group/item py-1"
                    >
                      <span className="material-symbols-outlined text-2xl transition-colors duration-300 shrink-0 text-primary">
                        {checked ? "check_circle" : "radio_button_unchecked"}
                      </span>
                      <span className={`text-base leading-relaxed transition-all duration-300 ${
                        checked ? "line-through opacity-40 text-primary-dark" : "group-hover/item:text-primary"
                      }`}>
                        {ing}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* featured product element */}
              {featuredProduct && (
                <div className="mt-8 pt-8 border-t border-primary/10">
                  <span className="text-primary font-bold text-[8px] uppercase tracking-[0.25em] mb-3 block">
                    Ingrediente Estrella
                  </span>
                  <Link
                    href={`/producto/${featuredProduct.slug}`}
                    className="group/prod flex items-center gap-4 bg-white/40 p-3.5 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-primary/5 flex items-center justify-center p-1">
                      <img
                        src={featuredProduct.image}
                        alt={featuredProduct.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/prod:scale-108"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] uppercase text-sm leading-tight group-hover/prod:text-primary transition-colors truncate">
                        {featuredProduct.name}
                      </h4>
                      <p className="text-primary-dark/60 text-[10px] font-medium leading-tight line-clamp-2 mt-0.5">
                        {featuredProduct.desc}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-base transition-transform group-hover/prod:translate-x-1 shrink-0">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>

          {/* Preparation Column (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-8"
          >
            <span className="text-primary font-bold text-[9px] uppercase tracking-[0.25em] mb-2 block">
              En la Cocina
            </span>
            <h2 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-3xl uppercase tracking-tight mb-8">
              Preparación
            </h2>
            
            <div className="space-y-10 relative pl-4 md:pl-8 before:absolute before:top-2 before:bottom-2 before:left-[1.2rem] md:before:left-[2.2rem] before:w-[1px] before:bg-primary/10">
              {recipe.preparation.map((step, i) => (
                <div key={i} className="flex gap-6 relative group/step">
                  <span className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary text-white border border-primary/15 rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-md relative z-10 transition-transform duration-300 group-hover/step:scale-110">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <p className="text-primary-dark/70 text-base md:text-lg leading-relaxed font-medium transition-colors duration-300 group-hover/step:text-primary-dark">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Share & WhatsApp feedback */}
            <div className="mt-16 pt-10 border-t border-primary/10">
              <h3 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-lg uppercase tracking-wide mb-3">
                ¿Preparaste esta deliciosa receta?
              </h3>
              <p className="text-primary-dark/60 text-sm font-medium mb-6 leading-relaxed">
                ¡Compártenos tu experiencia! Escríbenos para contarnos qué tal te quedó o consultarnos cualquier duda culinaria.
              </p>

            </div>
          </motion.div>
        </div>

        {/* ─── MORE RECIPES SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-32 border-t border-primary/10 pt-20"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4 block text-center">
            Inspiración Culinaria
          </span>
          <h2 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-3xl md:text-5xl uppercase tracking-tight text-center mb-12">
            Descubre <span className="text-primary font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.5rem] md:text-[5rem] -rotate-1 inline-block">Más Recetas</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes
              .filter((r) => r.id !== recipe.id)
              .slice(0, 3)
              .map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + 0.05 * i }}
                >
                  <Link
                    href={`/receta/${r.slug}`}
                    className="group block bg-[#FCF2E6]/60 backdrop-blur-md rounded-[2.5rem] p-5 border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] rounded-[2rem] overflow-hidden border border-primary/5 mb-6 relative">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      {/* Hover reveal CTA overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 bg-white text-primary-dark text-[9px] font-black uppercase tracking-wider px-4 py-2.5 rounded-full shadow-md translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                          Ver Receta
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                    <div className="px-2">
                      <h3 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-lg uppercase tracking-tight group-hover:text-primary transition-colors leading-tight mb-2">
                        {r.title}
                      </h3>
                      <div className="flex items-center gap-3 text-primary-dark/45 text-[10px] font-bold uppercase tracking-wider">
                        <span className="text-accent">{r.category}</span>
                        <span>•</span>
                        <span>{r.time}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default function RecetaDetallePage() {
  return <RecipeDetailContent />;
}
