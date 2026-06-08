"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { recipes, getRecipeBySlug } from "@/data/recipes";
import { getAllProductsSlugged, getCategorySlugForProduct } from '@/data/utils';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function RecipeDetailContent() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const recipe = getRecipeBySlug(slug);

  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#FCF2E6] flex flex-col justify-between">
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

  const getFeaturedProductForRecipe = (recipeId: string) => {
    switch (recipeId) {
      case "1":
        return {
          name: "Mortadela Tipo Superior",
          image: "/productos/mortadelas/page-0007.png",
          slug: "mortadela-tipo-superior",
        };
      case "2":
        return {
          name: "Pechuga de Pavo Ahumada",
          image: "/productos/pechugas-cosidas/JAMON(9).png",
          slug: "pechuga-de-pavo-ahumada",
        };
      case "3":
        return {
          name: "Chuleta Ahumada Premium",
          image: "/productos/chuletas/page-0016.jpg",
          slug: "chuleta-ahumada-premium",
        };
      case "4":
        return {
          name: "Jamón Gourmet Selección",
          image: "/productos/jamones/page-0003.jpg",
          slug: "jamon-gourmet-seleccion",
        };
      case "5":
        return {
          name: "Pechuga de Pavo Cocido Superior",
          image: "/productos/pechugas-cosidas/JAMON (2).png",
          slug: "pechuga-de-pavo-cocido-superior",
        };
      case "6":
        return {
          name: "Tocineta Ahumada",
          image: "/productos/tocinetas/page-0015.jpg",
          slug: "tocineta-ahumada",
        };
      default:
        return null;
    }
  };

  const featuredProduct = getFeaturedProductForRecipe(recipe.id);
  const productMatch = featuredProduct
    ? getAllProductsSlugged().find(p => p.slug === featuredProduct.slug)
    : null;
  const productHref = productMatch
    ? `/productos/${getCategorySlugForProduct(productMatch) || 'productos'}/${productMatch.slug}`
    : null;

  return (
    <div className="min-h-screen bg-[#FCF2E6] flex flex-col justify-between">
      <Navbar transparentInitially={false} />

      <main className="pt-8 md:pt-32 flex-1 w-full">
        {/* ─── TOP BAR: breadcrumb + share ─── */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex justify-between items-center h-14 md:h-16">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center">
                <li className="flex items-center">
                  <Link href="/recetas" className="text-primary-dark/50 hover:text-primary text-xs md:text-sm font-bold uppercase tracking-wider transition-colors">
                    Recetas
                  </Link>
                </li>
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-primary-dark/20 mx-2 md:mx-3 text-xs">/</span>
                  <span className="text-primary-dark/40 text-xs md:text-sm font-medium">{recipe.title}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── TWO-COLUMN CONTENT ─── */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 pb-10 md:pb-16">
          <div className="w-full flex flex-col md:flex-row gap-6 lg:gap-8">
            {/* ─── LEFT COLUMN: recipe image (sticky, capped to viewport) ─── */}
            <div className="w-full md:w-[42%] md:min-w-[460px] md:max-w-[620px] md:sticky md:top-32 md:self-start">
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Recipe hero image — aspect ratio on tall screens, capped on short */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full aspect-[5/6] max-h-[calc(100dvh-13rem)] rounded-3xl overflow-hidden"
                >
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Product shopping card */}
                {featuredProduct && productHref && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <Link
                      href={productHref}
                      className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-[#FCF2E6] shrink-0 border border-primary/10 relative">
                        <Image
                          src={featuredProduct.image}
                          alt={featuredProduct.name}
                          fill
                          sizes="80px"
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">
                          Ingrediente Estrella
                        </p>
                        <h3 className="text-primary-dark font-bold text-sm md:text-base leading-tight group-hover:text-primary transition-colors truncate">
                          {featuredProduct.name}
                        </h3>
                        <p className="text-primary-dark/40 text-xs mt-1 font-medium">
                          Ver producto →
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>

            {/* ─── RIGHT COLUMN: recipe info (scrolls, ~70% del ancho) ─── */}
            <div className="w-full md:w-[58%] min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-[3.5rem] font-black text-primary-dark uppercase leading-[0.95] tracking-tight mb-3 md:mb-4 max-w-none">
                  {recipe.title}
                </h1>

                {/* Info row: category · time · difficulty */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pb-3 md:pb-4 border-b border-primary/10 mb-4">
                  <span className="text-primary font-bold text-sm md:text-sm uppercase tracking-wider">{recipe.category}</span>
                  <span aria-hidden="true" className="w-1 h-1 rounded-full bg-primary-dark/20" />
                  <span className="text-primary-dark/60 text-sm md:text-sm font-medium">{recipe.time}</span>
                  <span aria-hidden="true" className="w-1 h-1 rounded-full bg-primary-dark/20" />
                  <span className="text-primary-dark/60 text-sm md:text-sm font-medium">{recipe.difficulty}</span>
                </div>

                {/* Description */}
                <p className="text-primary-dark/70 text-base md:text-base leading-normal mb-4 md:mb-6">
                  {recipe.description}
                </p>
              </motion.div>

              {/* ─── INGREDIENTS + PREPARACIÓN side by side ─── */}
              <div className="md:flex md:flex-row md:gap-6 lg:gap-10">
                {/* INGREDIENTS */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="md:w-1/2 mb-10 md:mb-0"
                >
                  <h2 className="text-xl md:text-2xl font-black text-primary-dark uppercase tracking-tight mb-3 md:mb-4">
                    Ingredientes
                  </h2>
                  <ul className="flex flex-col gap-1.5 md:gap-2">
                    {recipe.ingredients.map((ing, i) => {
                      const checked = checkedIngredients[i] || false;
                      return (
                        <li
                          key={i}
                          onClick={() => toggleIngredient(i)}
                          className="flex items-center gap-2 cursor-pointer select-none group/item"
                        >
                          <span
                            className={`shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              checked
                                ? "bg-primary border-primary"
                                : "border-primary-dark/30 group-hover/item:border-primary"
                            }`}
                          >
                            {checked && (
                              <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                        <span
                          className={`text-sm md:text-base leading-normal transition-all duration-300 ${
                            checked
                              ? "line-through opacity-40 text-primary-dark"
                              : "text-primary-dark/80 group-hover/item:text-primary"
                          }`}
                        >
                          {ing}
                        </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.section>

                {/* PREPARACIÓN */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="md:w-1/2"
                >
                  <h2 className="text-xl md:text-2xl font-black text-primary-dark uppercase tracking-tight mb-3 md:mb-4">
                    Preparación
                  </h2>
                  <ol className="flex flex-col gap-1.5 md:gap-2">
                    {recipe.preparation.map((step, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="shrink-0 w-6 h-6 md:w-7 md:h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs shadow-sm">
                          {i + 1}
                        </span>
                        <p className="text-primary-dark/70 text-sm md:text-sm leading-normal font-medium pt-0.5">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </motion.section>
              </div>
            </div>


          </div>
        </div>

        {/* ─── MORE RECIPES ─── */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="border-t border-primary/10 pt-12 md:pt-16">
            <h2 className="text-2xl md:text-4xl font-black text-primary-dark uppercase tracking-tight text-center mb-10 md:mb-14">
              Descubre más recetas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {recipes
                .filter((r) => r.id !== recipe.id)
                .slice(0, 3)
                .map((r, i) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + 0.1 * i, duration: 0.6 }}
                  >
                    <Link
                      href={`/receta/${r.slug}`}
                      className="group flex flex-col items-center w-full"
                    >
                      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FCF9F0] rounded-2xl after:absolute after:content-[''] after:w-2/4 after:h-[7px] after:bottom-[5%] after:left-0 after:right-0 after:mx-auto after:bg-black/[0.15] after:blur-sm after:rounded-[50%] after:lg:blur-[6px] after:lg:h-[11px]">
                        <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={r.image}
                            alt={r.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center text-center w-full py-4">
                        <h3 className="font-black text-primary-dark uppercase truncate text-ellipsis overflow-hidden max-w-full text-sm md:text-lg">
                          {r.title}
                        </h3>
                        <p className="text-[10px] md:text-xs text-primary-dark/50 uppercase mt-0.5 mb-1 font-bold tracking-wider">
                          {r.category}
                        </p>
                        <p className="text-[10px] md:text-xs text-primary-dark/40">
                          {r.time}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative bg-primary-dark overflow-hidden">
          {/* Wave divider at top — estilo home (AboutUs) */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
            <svg viewBox="0 0 1200 160" preserveAspectRatio="none"
              className="relative block w-[120%] h-[80px] md:h-[150px] fill-[#FCF2E6] -left-[10%]">
              <path d="M0,70 C100,20 240,120 360,90 C480,60 600,120 720,90 C840,60 960,120 1080,90 C1140,76 1180,72 1200,70 L1200,0 L0,0 Z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 text-center py-20 md:py-28 lg:py-32">
            <h3 className="text-accent font-[family-name:var(--font-blacksword)] text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 leading-none">
              ¿Listo para cocinar?
            </h3>
            <p className="text-white/80 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
              Consigue los ingredientes El Drago y prepara estas recetas en casa.
            </p>
            <Link
              href="/productos"
              className="inline-flex items-center gap-3 bg-accent text-primary-dark font-bold uppercase tracking-[0.15em] text-sm md:text-base px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              Ver productos
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function RecetaDetallePage() {
  return <RecipeDetailContent />;
}
