"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getProductBySlug, getAllProductsSlugged, getProductSlug, getCategorySlugForProduct, getProductImageUrl } from "@/data/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ProductDetailContent() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Navbar transparentInitially={false} />
        <div className="text-center py-40 max-w-md mx-auto px-6 flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-[family-name:var(--font-luckiest-guy)] text-primary-dark uppercase mb-4 leading-none">
            Producto no encontrado
          </h1>
          <p className="text-primary-dark/65 font-medium mb-8">El producto que buscas no existe o ha sido modificado.</p>
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

  // Sibling products for "también te puede interesar"
  const siblings = getAllProductsSlugged()
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  // Dynamic Gourmet Pairings based on category
  const getPairingSuggestion = (category: string) => {
    const catLower = category.toLowerCase();
    if (catLower.includes("jamon")) {
      return {
        title: "Maridaje Gourmet",
        desc: "Ideal para servir con melón fresco, higos maduros, nueces crujientes y un vino tinto joven de buen cuerpo. Su sabor curado artesanal se realza sobre una rebanada de pan tostado frotada con tomate fresco y un generoso chorrito de aceite de oliva virgen extra.",
        icon: "wine_bar"
      };
    } else if (catLower.includes("pavo") || catLower.includes("pechuga") || catLower.includes("frescos")) {
      return {
        title: "Sugerencia del Chef",
        desc: "Combina a la perfección con quesos frescos y suaves (como mozzarella de búfala o queso de cabra), finas hierbas, láminas de manzana verde y aderezos de miel y mostaza. Excelente para ensaladas gourmet de temporada o sándwiches elegantes.",
        icon: "restaurant"
      };
    } else if (catLower.includes("ahumad") || catLower.includes("chuleta") || catLower.includes("tocineta")) {
      return {
        title: "Cocina Creativa",
        desc: "Su profundo carácter ahumado natural con leñas finas es ideal para coronar pastas cremosas (como la pasta carbonara de autor), acompañar deliciosos huevos benedictinos o integrar en guisos de legumbres seleccionadas. Excelente con cervezas artesanales rojas.",
        icon: "local_fire_department"
      };
    } else {
      return {
        title: "Sabor Recomendado",
        desc: "Perfecto para diseñar tablas gourmet de embutidos, acompañado de aceitunas aliñadas, frutos secos tostados, galletas saladas y quesos semicurados de tu preferencia. La mejor opción para tus celebraciones y momentos más importantes.",
        icon: "dinner_dining"
      };
    }
  };

  const pairing = getPairingSuggestion(product.category);

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
            href="/productos"
            className="inline-flex items-center gap-2 text-primary-dark/60 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors group"
          >
            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
            Volver a productos
          </Link>
        </motion.div>

        {/* ─── MAIN PRODUCT SECTION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image in dynamic luxury card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Subtle glow behind the image */}
            <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-[80px]" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-[40px] animate-pulse" />

            <div className="relative aspect-[4/5] w-full max-w-[480px] rounded-[2.16rem] overflow-hidden bg-white/40 backdrop-blur-md border border-primary/5 shadow-2xl group">
              <Image
                src={getProductImageUrl(product)}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1s] group-hover:scale-105"
              />
              {product.tag && (
                <span className="absolute top-6 left-6 bg-accent text-primary-dark text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  {product.tag}
                </span>
              )}
            </div>
          </motion.div>

          {/* Right Column: Info block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4 block">
              {product.category}
            </span>

            <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-[family-name:var(--font-luckiest-guy)] text-primary-dark uppercase leading-[0.85] tracking-tight mb-6">
              {product.name}
            </h1>

            <div className="w-20 h-0.5 bg-primary/20 mb-8" />

            <p className="text-primary-dark/70 text-base md:text-lg leading-relaxed font-medium mb-8">
              {product.description}
            </p>

            {/* Dynamic Pairing Gourmet Card */}
            <div className="bg-[#FCF2E6]/50 backdrop-blur-md rounded-[1.44rem] p-6 border border-primary/5 mb-10 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">{pairing.icon}</span>
              </div>
              <div>
                <h4 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] uppercase text-lg mb-2 tracking-wide">
                  {pairing.title}
                </h4>
                <p className="text-primary-dark/65 text-sm leading-relaxed font-medium">
                  {pairing.desc}
                </p>
              </div>
            </div>


          </motion.div>
        </div>

        {/* ─── RECOMMENDATIONS SECTION ─── */}
        {siblings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-32 border-t border-primary/10 pt-20"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4 block text-center">
              Recomendación Gourmet
            </span>
            <h2 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-3xl md:text-5xl uppercase tracking-tight text-center mb-12">
              También te <span className="text-primary font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.5rem] md:text-[5rem] -rotate-1 inline-block">puede interesar</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {siblings.map((sibling, i) => {
                const siblingSlug = getProductSlug(sibling);
                return (
                  <motion.div
                    key={sibling.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + 0.05 * i }}
                  >
                        <Link
                          href={`/productos/${getCategorySlugForProduct(sibling) || 'productos'}/${siblingSlug}`}
                      className="group block bg-[#FCF2E6]/60 backdrop-blur-md rounded-[1.8rem] p-5 border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.44rem] bg-white border border-primary/5 mb-6">
                        <Image
                          src={getProductImageUrl(sibling)}
                          alt={sibling.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={`object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.12] ${
                            i % 3 === 0
                              ? 'group-hover:rotate-[-3deg]'
                              : i % 2 === 0
                              ? 'group-hover:rotate-[2.5deg]'
                              : 'group-hover:rotate-[3deg]'
                          }`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6 backdrop-blur-[2px]">
                          <span className="inline-flex items-center gap-2 bg-white text-primary-dark text-[9px] font-black uppercase tracking-wider px-4 py-2.5 rounded-full shadow-md translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                            Descubrir
                            <span className="material-symbols-outlined text-xs">arrow_forward</span>
                          </span>
                        </div>
                      </div>

                      <div className="px-2">
                        <h3 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-xl sm:text-2xl uppercase tracking-tight group-hover:text-primary transition-colors leading-tight mb-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full" title={sibling.name}>
                          {sibling.name}
                        </h3>
                        <span className="text-primary-dark/45 text-[10px] font-bold uppercase tracking-wider block">
                          {sibling.category}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function ProductoDetallePage() {
  return <ProductDetailContent />;
}
