"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORY_GROUPS } from "@/data/utils";
import CategoryCard from "@/components/CategoryCard";
import CategoryHero from "@/components/CategoryHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductosPage() {
  

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar transparentInitially={true} />

      {/* ─── HERO SECTION ─── */}
      <CategoryHero
        eyebrow={"Productos"}
        preTitle={"Nuestros"}
        accentTitle={"Productos"}
        subtitle={"Selección premium de embutidos artesanales, ahumados con leñas finas y productos frescos. Tradición familiar que se sirve en cada mesa."}
        imageSrc={'/Dragitos/DRAGUITO%20PRINCIPAL.png'}
      />

      {/* ─── INTRO TEXT ─── */}
      <section className="relative z-10 -mt-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-bold text-sm md:text-base uppercase tracking-[0.3em] mb-4 block">
              Explora nuestras categorías
            </span>
            <h2 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-6">
              El sabor que
              <br />
              <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.5rem] md:text-[6.5rem] -rotate-1 inline-block ml-1">
                atrapa
              </span>
            </h2>
            <p className="text-primary-dark/60 text-lg md:text-xl leading-relaxed font-medium max-w-xl mx-auto">
              Cada categoría ha sido curada para ofrecerte la mejor experiencia gastronómica.
              Selecciona y descubre nuestra variedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORY CARDS GRID ─── */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {CATEGORY_GROUPS.map((group, i) => (
              <CategoryCard key={group.slug} group={group} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative w-full overflow-hidden bg-primary-dark py-0">
        {/* Top "Carving" Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
            className="relative block w-[120%] h-[80px] md:h-[120px] fill-[#FCF2E6] -left-[10%]">
            <path d="M0,60 C150,150 350,0 600,80 C850,160 1050,0 1200,60 L1200,0 L0,0 Z" />
          </svg>
        </div>

        <div className="py-20 md:py-24 px-5 md:px-10 lg:px-16 relative z-0">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full p-2 md:p-8 overflow-hidden"
            >
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-accent/5 rounded-full blur-[80px] -ml-24 -mb-24 pointer-events-none" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                  ¿Listo para descubrir?
                </span>
                <h3 className="text-white font-[family-name:var(--font-luckiest-guy)] text-3xl md:text-5xl uppercase leading-[0.9] tracking-tight mb-6">
                  Encuentra tu
                  <br />
                  <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-[2.7rem] md:text-[4.4rem] -rotate-1 inline-block">
                    sabor ideal
                  </span>
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8 font-medium">
                  Contáctanos para conocer más sobre nuestros productos o realizar tu pedido.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-3 bg-accent text-primary-dark font-bold uppercase tracking-[0.15em] text-xs px-5 py-2.5 md:px-6 md:py-3 rounded-[0.72rem] hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_12px_24px_rgba(254,199,12,0.18)]"
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

        {/* Bottom "Carving" Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
            className="relative block w-[120%] h-[80px] md:h-[120px] fill-[#FCF2E6] -left-[10%]">
            <path d="M0,80 C200,0 400,120 600,60 C800,0 1000,120 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>
      <Footer />
    </div>
  );
}
