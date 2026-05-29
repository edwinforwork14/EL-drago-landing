"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CATEGORY_GROUPS,
  getCategoryGroupBySlug,
  getProductsByCategorySlug,
  getProductSlug,
  getProductImageUrl,
  CategoryGroup,
} from "@/data/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";

function CategoryContent({ group }: { group: CategoryGroup }) {
  const products = getProductsByCategorySlug(group.slug);
  const otherCategories = CATEGORY_GROUPS.filter((c) => c.slug !== group.slug);

  const getHeroImage = (slug: string) => {
    switch (slug) {
      case "embutidos": return "/Dragitos/DRAGUITO-EMBUTIDOS.png";
      case "ahumados": return "/Dragitos/DRAGUITO-AHUMADOS.png";
      case "frescos": return "/Dragitos/DRAGUITO%20PRINCIPAL.png";
      default: return "/plantilla/imagenes/page-0010.jpg";
    }
  };
  const heroImage = getHeroImage(group.slug);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between overflow-x-hidden">
      <Navbar transparentInitially={false} />

      {/* ─── CATEGORY HERO ─── */}
      <CategoryHero
        eyebrow={"Categoría"}
        preTitle={"Nuestros"}
        accentTitle={group.label}
        subtitle={group.description}
        imageSrc={heroImage}
      />

      <main className="px-6 md:px-12 max-w-7xl mx-auto pb-24 flex-1 w-full pt-12">

        {/* ─── PRODUCTS GRID ─── */}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-[#FCF2E6]/60 rounded-[2.16rem] border border-primary/5">
            <p className="text-primary-dark/40 text-lg font-medium">
              Próximamente más productos en esta categoría.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const slug = getProductSlug(product);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={`/productos/${group.slug}/${slug}`}
                    className="
                      group
                      block
                      bg-[#FCF2E6]/60
                      backdrop-blur-md
                      rounded-[1.8rem]
                      p-5
                      border
                      border-primary/5
                      hover:border-primary/20
                      transition-all
                      duration-500
                      hover:shadow-[0_20px_40px_rgba(196,26,30,0.04)]
                      hover:-translate-y-1
                    "
                  >
                    {/* IMAGE CONTAINER */}
                    <div
                      className="
                        relative
                        aspect-[4/5]
                        overflow-hidden
                        rounded-[1.44rem]
                        bg-white
                        border
                        border-primary/5
                        mb-6
                      "
                    >
                      {/* IMAGE */}
                      <img
                        src={getProductImageUrl(product)}
                        alt={product.name}
                        loading="lazy"
                        className={`
                          w-full
                          h-full
                          object-cover
                          transform
                          transition-transform
                          duration-[900ms]
                          ease-out
                          group-hover:scale-[1.12]
                          origin-center
                          ${i % 3 === 0
                            ? "group-hover:rotate-[-3deg]"
                            : i % 2 === 0
                            ? "group-hover:rotate-[2.5deg]"
                            : "group-hover:rotate-[3deg]"
                          }
                        `}
                      />

                      {/* RED OVERLAY REDUCED 50% */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-primary-dark/40
                          via-primary-dark/10
                          to-transparent
                          pointer-events-none
                        "
                      />

                      {/* TAG */}
                      {product.tag && (
                        <span
                          className="
                            absolute
                            top-4
                            left-4
                            bg-accent
                            text-primary-dark
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-widest
                            px-3.5
                            py-1.5
                            rounded-full
                            shadow-md
                            z-20
                          "
                        >
                          {product.tag}
                        </span>
                      )}

                      {/* CTA WITHOUT BLUR */}
                      <div
                        className="
                          absolute
                          inset-0
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-500
                          flex
                          items-end
                          justify-center
                          p-6
                        "
                      >
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-white
                            text-primary-dark
                            text-[10px]
                            font-black
                            uppercase
                            tracking-wider
                            px-5
                            py-3
                            rounded-full
                            shadow-lg
                            translate-y-4
                            group-hover:translate-y-0
                            transition-transform
                            duration-500
                          "
                        >
                          Ver Detalles

                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-2 pb-2">
                      <h3
                        className="
                          text-primary-dark
                          font-[family-name:var(--font-luckiest-guy)]
                          text-xl
                          sm:text-2xl
                          uppercase
                          tracking-tight
                          group-hover:text-primary
                          transition-colors
                          leading-tight
                          mb-2
                        "
                      >
                        {product.name}
                      </h3>

                      <p
                        className="
                          text-primary-dark/65
                          text-sm
                          font-medium
                          leading-relaxed
                          line-clamp-2
                        "
                      >
                        {product.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ─── EXPLORE OTHER CATEGORIES ─── */}
        <div className="mt-28 pt-16 border-t border-primary/10">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4 block text-center">
            Explora más sabores
          </span>
          <h2 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-3xl md:text-5xl uppercase text-center leading-[0.9] tracking-tight mb-12">
            Otras <span className="text-primary font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.5rem] md:text-[5rem] -rotate-1 inline-block">Categorías</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherCategories.map((cat, idx) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-xl cursor-pointer aspect-[16/10]"
              >
                <Link href={`/productos/${cat.slug}`} className="block w-full h-full relative">
                  <img
                    src={cat.slug === "embutidos" ? "/productos/jamones/page-0003.jpg" : cat.slug === "ahumados" ? "/imagenes/ahumados.jpg" : "/productos/pechugas-cosidas/page-0008.jpg"}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/30 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <span className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1">El Drago</span>
                    <h3 className="text-white font-[family-name:var(--font-luckiest-guy)] text-3xl uppercase leading-none mb-2">
                      {cat.label}
                    </h3>
                    <p className="text-white/70 text-xs font-medium line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CategoriaProductosPage() {
  const params = useParams<{ categoria: string }>();
  const categorySlug = params?.categoria ?? "";
  const group = getCategoryGroupBySlug(categorySlug);

  if (!group) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Navbar transparentInitially={false} />
        <div className="text-center py-40 max-w-md mx-auto px-6">
          <h1 className="text-4xl font-[family-name:var(--font-luckiest-guy)] text-primary-dark uppercase mb-4 leading-none">
            Categoría no encontrada
          </h1>
          <p className="text-primary-dark/65 font-medium mb-8">La categoría que buscas no existe o ha sido movida.</p>
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

  return <CategoryContent group={group} />;
}
