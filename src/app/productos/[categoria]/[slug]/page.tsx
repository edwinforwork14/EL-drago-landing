"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  getProductBySlug,
  getAllProductsSlugged,
  getProductSlug,
  getCategorySlugForProduct,
  getProductImageUrl,
  recipes,
} from "@/data/utils";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ProductDetailContent() {
  const params = useParams();
  const carouselRef = useRef<HTMLOListElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // ✅ Evita hydration mismatch
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug || "";

  const product = slug ? getProductBySlug(slug) : null;

  // debug removed

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FCF2E6] flex flex-col justify-between">
        <Navbar transparentInitially={false} />

        <div className="text-center py-40 max-w-md mx-auto px-6 flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-[family-name:var(--font-luckiest-guy)] text-primary-dark uppercase mb-4 leading-none">
            Producto no encontrado
          </h1>

          <p className="text-primary-dark/65 font-medium mb-8">
            El producto que buscas no existe o ha sido modificado.
          </p>

          <Link
            href="/productos"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg"
          >
            Ver todos los productos
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const productImage = getProductImageUrl(product);

  // Productos relacionados
  const siblings = getAllProductsSlugged()
    .filter(
      (p) => p.id !== product.id && p.category === product.category
    )
    .slice(0, 4);

  // pairing removed to simplify to Heinz-like layout

  return (
    <div className="min-h-screen bg-[#F4EBDD] flex flex-col justify-between">
      <Navbar transparentInitially={false} />

      <main className="pt-24 md:pt-32 px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto pb-24 flex-1 w-full">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-primary-dark/60 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors group"
          >
            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>

            Volver a productos
          </Link>
        </motion.div>

        {/* MAIN — Heinz-inspired product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          {/* IMAGE: Sticky product — grid item stretches full row height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="lg:sticky lg:top-50">
              <div className="relative w-full min-h-[18rem] md:min-h-[25rem] flex justify-center items-center">
                <div className="relative w-[77%] md:w-[66%] lg:w-[55%]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={productImage}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  {/* Shadow under product (Heinz reference) */}
                <div
                  className="mx-auto w-56 h-3 blur-[5px] bg-black rounded-[50%] opacity-20 absolute left-0 right-0"
                  style={{ top: '105%' }}
                />
                </div>
              </div>
            </div>
          </motion.div>

          {/* INFO — Heinz-inspired layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-start gap-4 lg:gap-5"
          >
            {/* Brand name (subhead) */}
            <h2 className="text-accent text-[1.6875rem] font-bold uppercase tracking-widest">El Drago</h2>

            {/* Product name */}
            <h1 className="font-headline-lg text-display-lg font-black text-[#C41A1E] uppercase leading-[0.9] tracking-tight">
              {product.name}
            </h1>

            {/* Weight / Size selector (Heinz-style) */}
            <div className="w-full">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-primary-dark font-bold text-sm uppercase tracking-wider">Peso disponible:</span>
                <span className="text-primary-dark/60 text-sm font-medium">{(product as any).peso || "—"}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="px-5 py-2 rounded-full border-2 border-primary text-primary font-bold text-sm bg-white/80 cursor-default">
                  {(product as any).peso || "—"}
                </div>
              </div>
            </div>

            {/* Buy Online button (Heinz-style with location icon) */}
            <div>
              <div className="text-primary-dark font-bold text-sm uppercase tracking-wider mb-1">Contacto</div>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-3 bg-[#5a0f12] text-white font-bold px-8 py-4 rounded-full hover:bg-[#7a1518] transition-all duration-300 shadow-md w-full lg:w-auto lg:self-start text-sm lg:text-base"
              >
                <span>CONTACTANOS</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <g strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z" />
                  </g>
                </svg>
              </Link>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-primary-dark font-bold text-sm uppercase tracking-wider mb-1">Description</h4>
              <p className="text-primary-dark/70 text-base md:text-lg leading-normal font-medium">
                {product.description}
              </p>
            </div>

            {/* Accordion sections (Heinz reference) */}
            <div className="w-full">
              <hr className="border-t-2 border-primary/10" />
              <AccordionItem label="Información del producto">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-primary-dark/60 text-sm">Peso</span>
                    <span className="text-primary-dark font-semibold text-sm">{(product as any).peso || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-dark/60 text-sm">Caducidad</span>
                    <span className="text-primary-dark font-semibold text-sm">{(product as any).caducidad || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-dark/60 text-sm">Categoría</span>
                    <span className="text-primary-dark font-semibold text-sm">{product.category}</span>
                  </div>
                </div>
              </AccordionItem>
              <hr className="border-t-2 border-primary/10" />
              <AccordionItem label="Cómo usar">
                <p className="text-primary-dark/60 text-sm leading-relaxed">
                  Disfruta nuestros productos directamente en tablas gourmet, sándwiches, ensaladas o como ingrediente estrella en tus recetas favoritas.
                </p>
              </AccordionItem>
              <hr className="border-t-2 border-primary/10" />
            </div>
          </motion.div>
        </div>

        {/* RELATED PRODUCTS: simplified catalog grid (image, name, category) */}
        {siblings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mt-32 pt-20"
          >                <h2 className="text-primary-dark text-2xl md:text-4xl font-bold uppercase tracking-tight text-center mb-10">
              También te puede interesar
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {siblings.map((sibling, i) => {
                const siblingSlug = getProductSlug(sibling);

                return (
                  <Link
                    key={sibling.id}
                    href={`/productos/${getCategorySlugForProduct(sibling) || "productos"}/${siblingSlug}`}
                    className="group block text-center bg-[#FCF2E6] hover:bg-[#C41A1E] transition-colors duration-700 p-6 rounded-lg overflow-hidden"
                  >
                    {/* IMAGE AREA */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden mb-4">
                      <div className="relative w-full h-full transform transition-transform duration-700 ease-in-out group-hover:scale-[1.15] group-hover:rotate-[10deg]">
                        <Image
                          src={getProductImageUrl(sibling)}
                          alt={sibling.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain mx-auto"
                        />
                      </div>
                    </div>

                    {/* INFO */}
                    <div>
                      <h3 className="text-primary-dark font-bold text-lg mb-1 transition-colors duration-700 group-hover:text-white">
                        {sibling.name}
                      </h3>

                      <span className="text-primary-dark/50 text-xs uppercase transition-colors duration-700 group-hover:text-white">
                        {sibling.category}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* RECIPES CAROUSEL — Heinz Cook With Us style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-24"
        >
          <div className="pl-4 md:pl-8 xl:pl-10 py-8 md:py-14">
            {/* Title + arrows */}
            <div className="pb-6 md:pb-8 xl:pb-10 flex justify-between items-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-dark uppercase tracking-tight">
                Nuestras recetas
              </h2>
              <div className="flex space-x-2 md:space-x-4 pr-4 md:pr-8 xl:pr-10">
                <button
                  onClick={() => scrollCarousel("left")}
                  className="flex items-center justify-center rounded-full h-11 w-11 md:h-12 md:w-12 bg-white/80 border-2 border-gray-300 text-[#1D1D1D] hover:bg-[#FCF9F0] transition-all duration-300 cursor-pointer"
                  aria-label="Anterior"
                >
                  <svg className="-rotate-90" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m6 15 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollCarousel("right")}
                  className="flex items-center justify-center rounded-full h-11 w-11 md:h-12 md:w-12 bg-white/80 border-2 border-gray-300 text-[#1D1D1D] hover:bg-[#FCF9F0] transition-all duration-300 cursor-pointer"
                  aria-label="Siguiente"
                >
                  <svg className="rotate-90" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m6 15 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div>
              <ol
                ref={carouselRef}
                className="flex gap-2 md:gap-4 xl:gap-5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 no-scrollbar"
              >
                {recipes.map((recipe) => (
                  <li key={recipe.id} className="snap-start shrink-0">
                    <Link
                      href={`/receta/${recipe.slug}`}
                      className="group flex flex-col items-center w-[165px] md:w-[342px] lg:w-[437px]"
                    >
                      {/* Image with Heinz shadow */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FCF9F0] after:absolute after:content-[''] after:w-2/4 after:h-[7px] after:bottom-[5%] after:left-0 after:right-0 after:mx-auto after:bg-black/[0.15] after:blur-sm after:rounded-[50%] after:lg:blur-[6px] after:lg:h-[11px]">
                        <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            sizes="(max-width: 768px) 165px, (max-width: 1024px) 342px, 437px"
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Text section */}
                      <div className="flex flex-col items-center text-center w-full h-auto py-4 lg:p-5">
                        <h3 className="font-black text-primary-dark uppercase truncate text-ellipsis overflow-hidden max-w-full text-sm md:text-lg lg:text-xl">
                          {recipe.title}
                        </h3>
                        <p className="text-[10px] md:text-xs text-primary-dark/50 uppercase mt-0.5 mb-2 font-bold tracking-wider">
                          Recetas
                        </p>
                        <p className="text-[10px] md:text-xs text-primary-dark/40 capitalize flex items-center justify-center flex-wrap">
                          <span>{recipe.time}</span>
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

function AccordionItem({ label, children, defaultOpen = false }: { label: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3 text-left"
      >
        <span className="text-primary-dark font-bold text-sm uppercase tracking-wider">{label}</span>
        <span
          className={`w-8 h-8 flex items-center justify-center border border-primary/20 rounded-full transition-transform duration-300 ${open ? "rotate-45 bg-primary/5" : ""}`}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function ProductoDetallePage() {
  return <ProductDetailContent />;
}