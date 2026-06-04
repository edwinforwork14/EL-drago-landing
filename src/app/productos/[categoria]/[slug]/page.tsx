"use client";

import React from "react";
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
} from "@/data/utils";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ProductDetailContent() {
  const params = useParams();

  // ✅ Evita hydration mismatch
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug || "";

  const product = slug ? getProductBySlug(slug) : null;

  // debug removed

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
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
    .slice(0, 3);

  // pairing removed to simplify to Heinz-like layout

  return (
    <div className="min-h-screen bg-[#F4EBDD] flex flex-col justify-between overflow-x-hidden">
      <Navbar transparentInitially={false} />

      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24 flex-1 w-full">
        {/* Back */}
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
            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>

            Volver a productos
          </Link>
        </motion.div>

        {/* MAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* IMAGE: minimal floating product with subtle shadow (Heinz-like) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[680px] flex justify-center items-center">
              <div className="relative w-[77%] md:w-[66%] lg:w-[55%]">
                <motion.div
                  initial={{ y: 0, rotate: 0, scale: 1.1 }}
                  animate={{ y: [0, -12, 0], rotate: [0, 1, -1, 0], scale: [1.1, 1.105, 1.1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative aspect-[4/5] w-full"
                >
                  <Image
                    src={productImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </motion.div>

                {/* breathing shadow under product (scales X and fades) */}
                <motion.div
                  initial={{ scaleX: 1, opacity: 0.12 }}
                  animate={{ scaleX: [1, 0.85, 1], opacity: [0.12, 0.07, 0.12] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-black/10 rounded-full blur-sm"
                />
              </div>
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="text-accent font-bold uppercase tracking-widest mb-4">El Drago</div>

            <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-black text-[#C41A1E] uppercase leading-[0.9] tracking-tight mb-6">
              {product.name}
            </h1>

            <div className="w-20 h-0.5 bg-primary/20 mb-8" />

            <p className="text-primary-dark/70 text-base md:text-lg leading-relaxed font-medium mb-8">
              {product.description}
            </p>

            {/* Sizes and CTA removed per design direction */}
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
          >
            <h2 className="text-primary-dark text-3xl md:text-4xl font-bold uppercase tracking-tight text-center mb-10">
              También te puede interesar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {siblings.map((sibling) => {
                const siblingSlug = getProductSlug(sibling);

                return (
                  <Link
                    key={sibling.id}
                    href={`/productos/${getCategorySlugForProduct(sibling) || "productos"}/${siblingSlug}`}
                    className="group block text-center"
                  >
                    <div className="relative w-full aspect-[4/5] overflow-hidden mb-4">
                      <Image
                        src={getProductImageUrl(sibling)}
                        alt={sibling.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain mx-auto"
                      />
                    </div>

                    <div>
                      <h3 className="text-primary-dark font-bold text-lg mb-1">{sibling.name}</h3>
                      <span className="text-primary-dark/50 text-xs uppercase">{sibling.category}</span>
                    </div>
                  </Link>
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