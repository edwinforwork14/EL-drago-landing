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
  CategoryGroup,
} from "@/data/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CategoryContent({ group }: { group: CategoryGroup }) {
  const products = getProductsByCategorySlug(group.slug);
  const otherCategories = CATEGORY_GROUPS.filter((c) => c.slug !== group.slug);

  const getHeroImage = (slug: string) => {
    switch (slug) {
      case "embutidos": return "/productos/jamones/page-0003.jpg";
      case "ahumados": return "/productos/ahumados/page-0018.jpg";
      case "frescos": return "/productos/pechugas-cosidas/page-0008.jpg";
      default: return "/plantilla/imagenes/page-0010.jpg";
    }
  };
  const heroImage = getHeroImage(group.slug);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between overflow-x-hidden">
      <Navbar transparentInitially={false} />

      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24 flex-1 w-full">
        {/* ─── CATEGORY HERO SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl group border border-primary/5 min-h-[40vh] md:min-h-[50vh] flex flex-col justify-end p-8 md:p-12 lg:p-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt={group.label} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
          </div>

          <div className="relative z-10 w-full">
            {/* Breadcrumbs and back button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors group/link"
              >
                <span className="material-symbols-outlined text-lg transition-transform group-hover/link:-translate-x-1">arrow_back</span>
                Todos los productos
              </Link>
              <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                <span>/</span>
                <Link href="/productos" className="hover:text-white transition-colors">Productos</Link>
                <span>/</span>
                <span className="text-accent">{group.label}</span>
              </div>
            </div>

            {/* Heading with Brand Luckiest Guy & Mr Dafoe */}
            <div className="max-w-3xl">
              <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-[family-name:var(--font-luckiest-guy)] text-white uppercase leading-[0.85] tracking-tight mb-4 drop-shadow-md">
                Nuestros <br />
                <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] -rotate-1 inline-block drop-shadow-lg">
                  {group.label}
                </span>
              </h1>
              
              <p className="text-white/80 text-base md:text-xl font-medium leading-relaxed drop-shadow-sm mb-8 max-w-2xl">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {group.subcategories.map((sub) => (
                  <span
                    key={sub}
                    className="text-[10px] font-bold uppercase tracking-wider text-primary-dark bg-accent border border-accent/20 px-4 py-2 rounded-full shadow-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── PRODUCTS GRID ─── */}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-[#FCF2E6]/60 rounded-[3rem] border border-primary/5">
            <p className="text-primary-dark/40 text-lg font-medium">Próximamente más productos en esta categoría.</p>
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
                  transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/producto/${slug}`}
                    className="group block bg-[#FCF2E6]/60 backdrop-blur-md rounded-[2.5rem] p-5 border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(196,26,30,0.06)] hover:-translate-y-1.5"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white border border-primary/5 mb-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-108"
                      />
                      {product.tag && (
                        <span className="absolute top-4 left-4 bg-accent text-primary-dark text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                          {product.tag}
                        </span>
                      )}
                      
                      {/* Hover reveal CTA overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 bg-white text-primary-dark text-[10px] font-black uppercase tracking-wider px-5 py-3 rounded-full shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Ver Detalles
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </div>

                    <div className="px-2 pb-2">
                      <h3 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-xl sm:text-2xl uppercase tracking-tight group-hover:text-primary transition-colors leading-tight mb-2">
                        {product.name}
                      </h3>
                      <p className="text-primary-dark/65 text-sm font-medium leading-relaxed line-clamp-2">
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
                className="group relative overflow-hidden rounded-[2.5rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-xl cursor-pointer aspect-[16/10]"
              >
                <Link href={`/productos/${cat.slug}`} className="block w-full h-full relative">
                  <img
                    src={cat.slug === "embutidos" ? "/productos/jamones/page-0003.jpg" : cat.slug === "ahumados" ? "/productos/ahumados/page-0018.jpg" : "/productos/pechugas-cosidas/page-0008.jpg"}
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
