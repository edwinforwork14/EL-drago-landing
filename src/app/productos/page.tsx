"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import {
  getProductSlug,
  getCategorySlugForProduct,
  getProductImageUrl,
  CATEGORY_GROUPS,
} from "@/data/utils";

const HERO_BANNERS: Record<string, { desktop: string; mobile: string }> = {
  productos: {
    desktop: "/hero-banners/productos-banner.jpeg",
    mobile: "/hero-banners/productos-banner-moblie.png",
  },
  embutidos: {
    desktop: "/hero-banners/embutidos-banner.jpeg",
    mobile: "/hero-banners/embutidos-banner-moblie.png",
  },
  ahumados: {
    desktop: "/hero-banners/ahumados-banner.jpeg",
    mobile: "/hero-banners/ahumados-banner-moblie.png",
  },
  frescos: {
    desktop: "/hero-banners/frescos-banner.jpeg",
    mobile: "/hero-banners/frescos-banner-moblie.png",
  },
};
import CategoryFilterCarousel from "@/components/CategoryFilterCarousel";
import CategoryFilterTabs from "@/components/CategoryFilterTabs";
import CategoryHero from "@/components/CategoryHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GROUP_CATEGORIES: Record<string, string[]> = {
  embutidos: ["Embutidos"],
  ahumados: ["Ahumados"],
  frescos: ["Frescos"],
};

export default function ProductosPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("todos");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Read ?categoria from URL on mount (from redirect)
  useEffect(() => {
    const catFromUrl = searchParams.get("categoria");
    if (catFromUrl && GROUP_CATEGORIES[catFromUrl]) {
      setActiveCategory(catFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by meat type (ave / cerdo)
    if (activeTab === "ave") {
      filtered = filtered.filter((p) => p.meatType === "ave");
    } else if (activeTab === "cerdo") {
      filtered = filtered.filter((p) => p.meatType === "cerdo");
    }

    // Filter by category (from carousel)
    if (activeCategory) {
      const categories = GROUP_CATEGORIES[activeCategory];
      if (categories) {
        filtered = filtered.filter((p) => categories.includes(p.category));
      }
    }

    return filtered;
  }, [activeCategory, activeTab]);

  const handleCategorySelect = (slug: string | null) => {
    setActiveCategory(slug);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "todos") {
      setActiveCategory(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF2E6] overflow-x-hidden">
      <Navbar appearOnScroll={true} />

      {/* Preload all category banners for instant hero transitions */}
      <div className="hidden" aria-hidden="true">
        {Object.values(HERO_BANNERS).flatMap((b) => [b.desktop, b.mobile]).map((src) => (
          <Image key={src} src={src} alt="" width={2560} height={1440} priority />
        ))}
      </div>

      {/* ─── HERO BANNER — cambia según filtro activo ─── */}
      <CategoryHero
        imageSrc={
          (activeCategory ? HERO_BANNERS[activeCategory] : HERO_BANNERS.productos).desktop
        }
        imageSrcMobile={
          (activeCategory ? HERO_BANNERS[activeCategory] : HERO_BANNERS.productos).mobile
        }
      />

      {/* ─── FILTER TABS ─── */}
      <CategoryFilterTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* ─── CATEGORY FILTER CAROUSEL ─── */}
      <CategoryFilterCarousel
        activeCategory={activeCategory}
        onSelect={handleCategorySelect}
      />

      {/* ─── PRODUCTS COUNT ─── */}
      <section className="pb-4 md:pb-6">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between border-b border-primary/10 pb-4">
            <p className="text-primary-dark/50 text-sm font-medium">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "producto" : "productos"}
              {activeCategory && (
                <span className="text-primary">
                  {" "}— {CATEGORY_GROUPS.find((g) => g.slug === activeCategory)?.label}
                </span>
              )}
            </p>
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="text-primary-dark/40 hover:text-primary text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Limpiar filtro
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="pb-24 md:pb-32 pt-6 md:pt-10 relative">
        <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-primary-dark/40 text-lg font-medium">
                No hay productos en esta categoría.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-10 md:gap-y-16">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => {
                  const slug = getProductSlug(product);
                  const categorySlug = getCategorySlugForProduct(product) || "productos";
                  const imageUrl = getProductImageUrl(product);

                  return (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={`/productos/${categorySlug}/${slug}`}
                        className="group flex flex-col items-center w-full h-auto"
                      >
                        {/* IMAGE CONTAINER — Heinz-style */}
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FCF2E6]/10 rounded-2xl">
                          {/* Hover background */}
                          <div className="h-full w-full transition-all duration-300 ease-default group-hover:bg-[#C41A1E] p-4 md:p-6 rounded-2xl">
                            <div className="relative w-full h-full">
                              <Image
                                src={imageUrl}
                                alt={product.name}
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className="object-contain transition-transform duration-300 ease-default group-hover:-rotate-12"
                              />
                              {/* Shadow overlay */}
                              <div className="absolute left-0 right-0 flex justify-center pointer-events-none" style={{ top: '90%' }}>
                                <div className="w-3/4 h-4 blur-[6px] bg-black rounded-[50%] opacity-20" />
                              </div>
                            </div>
                          </div>
                          {/* Shopping bag CTA */}
                          <div className="absolute right-0 bottom-0 mb-2 mr-[8.5px] md:mb-6 md:mr-6">
                            <div className="flex items-center justify-center rounded-full h-10 w-10 md:h-12 md:w-12 bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-lg cursor-pointer">
                              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="md:w-5 md:h-5">
                                <path d="M6.08637 8.21387H17.9136C18.2144 8.21383 18.5117 8.27884 18.785 8.40443C19.0583 8.53003 19.3012 8.71324 19.4971 8.94151C19.6929 9.16978 19.8371 9.4377 19.9197 9.72692C20.0024 10.0161 20.0215 10.3198 19.9758 10.6171L18.6667 19.1201C18.5531 19.8591 18.1786 20.5329 17.6111 21.0196C17.0436 21.5064 16.3206 21.7739 15.573 21.7737H8.42595C7.6785 21.7736 6.95574 21.506 6.38847 21.0193C5.8212 20.5326 5.44689 19.8589 5.33328 19.1201L4.02424 10.6171C3.97852 10.3198 3.99763 10.0161 4.08026 9.72692C4.16289 9.4377 4.30708 9.16978 4.50295 8.94151C4.69882 8.71324 4.94173 8.53003 5.21504 8.40443C5.48835 8.27884 5.78559 8.21383 6.08637 8.21387Z" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.87061 11.3445V6.12918C8.87061 5.29927 9.20029 4.50335 9.78712 3.91652C10.374 3.32968 11.1699 3 11.9998 3C12.8297 3 13.6256 3.32968 14.2125 3.91652C14.7993 4.50335 15.129 5.29927 15.129 6.12918V11.3445" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* TEXT SECTION */}
                        <div className="flex flex-col items-center text-center w-full h-auto py-3 md:py-5">
                          <p className="text-accent font-[family-name:var(--font-blacksword)] text-sm md:text-lg uppercase tracking-widest mb-1">
                            El Drago
                          </p>
                          <p className="text-primary-dark font-bold text-sm md:text-xl mb-1 leading-tight line-clamp-1">
                            {product.name}
                          </p>
                          <p className="text-primary-dark/50 text-[10px] md:text-xs capitalize">
                            {(product as any).peso || "—"}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative w-full overflow-hidden bg-primary-dark py-0">
        {/* Top wave — -top-[2px] overlap + translate-y to kill seam */}
        <div className="absolute -top-[2px] left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
            className="block w-full h-[80px] md:h-[120px] fill-[#FCF2E6] translate-y-[1px]">
            <path d="M0,60 C150,150 350,0 600,80 C850,160 1050,0 1200,60 L1200,0 L0,0 Z" />
          </svg>
        </div>

        <div className="py-16 md:py-24 px-5 md:px-10 lg:px-16 relative z-0">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full p-2 md:p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-accent/5 rounded-full blur-[80px] -ml-24 -mb-24 pointer-events-none" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h3 className="text-white font-[family-name:var(--font-luckiest-guy)] text-2xl md:text-5xl uppercase leading-[0.9] tracking-tight mb-6">
                  Encuentra tu
                  <br />
                  <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-[2rem] md:text-[4.4rem] -rotate-1 inline-block">
                    sabor ideal
                  </span>
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8 font-medium">
                  Contáctanos para conocer más sobre nuestros productos o realizar tu pedido.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-3 bg-accent text-primary-dark font-bold uppercase tracking-[0.15em] text-xs px-5 py-2.5 md:px-6 md:py-3 rounded-[0.72rem] hover:bg-[#FCF2E6] hover:text-primary transition-all duration-300 shadow-[0_12px_24px_rgba(254,199,12,0.18)]"
                  >
                    <span className="material-symbols-outlined">mail</span>
                    Contáctanos
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors"
                  >
                    Volver al inicio
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
            className="block w-full h-[80px] md:h-[120px] fill-[#FCF2E6]">
            <path d="M0,80 C200,0 400,120 600,60 C800,0 1000,120 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>
      <Footer />
    </div>
  );
}
