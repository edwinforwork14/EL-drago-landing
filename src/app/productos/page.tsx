"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CATEGORY_GROUPS } from "@/data/utils";
import CategoryCard from "@/components/CategoryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar transparentInitially={true} />

      {/* ─── HERO SECTION ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden pt-24 md:pt-28"
      >
        {/* Background */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          {/* Dark premium background with subtle texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(254,199,12,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,33,34,0.15),transparent_50%)]" />

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-[500px] h-[500px] border border-white/5 rounded-full blur-sm" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] border border-white/5 rounded-full" />

          {/* Floating particles */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        </motion.div>

        {/* Future image/video placeholder */}
        {/* Beautiful floating product composition */}
        <motion.div
          style={{ y: heroY }}
          className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[50%] overflow-hidden flex items-center justify-center pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/60 via-primary-dark/20 to-transparent z-10" />
          <div className="relative w-full h-[60%] flex items-center justify-center">
            {/* Subtle light glow behind */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-accent/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />


          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: heroY }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24"
        >
          <div className="max-w-3xl lg:max-w-2xl">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="text-accent">Productos</span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] font-[family-name:var(--font-luckiest-guy)] text-white uppercase leading-[0.8] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                Nuestros
                <br />
                <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] -rotate-2 inline-block ml-1 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
                  Productos
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/70 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed font-medium mt-6 md:mt-8"
            >
              Selección premium de embutidos artesanales, ahumados con leñas finas y productos frescos.
              Tradición familiar que se sirve en cada mesa.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6 md:gap-10 mt-10 md:mt-12"
            >
              {[
                { icon: "verified", label: "Calidad Premium" },
                { icon: "history", label: "Tradición Artesanal" },
                { icon: "eco", label: "Ingredientes Selectos" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2.5 group">
                  <span className="material-symbols-outlined text-accent text-xl md:text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {badge.icon}
                  </span>
                  <span className="text-white/60 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] group-hover:text-white transition-colors">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ─── INTRO TEXT ─── */}
      <section className="relative z-10 -mt-1">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
              Explora nuestras categorías
            </span>
            <h2 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-6">
              El sabor que
              <br />
              <span className="text-primary font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.5rem] md:text-[5.5rem] -rotate-1 inline-block ml-1">
                atrapa
              </span>
            </h2>
            <p className="text-primary-dark/60 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto">
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
      <section className="relative pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-primary-dark rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 lg:p-20 overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -ml-32 -mb-32" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                ¿Listo para descubrir?
              </span>
              <h3 className="text-white font-[family-name:var(--font-luckiest-guy)] text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-6">
                Encuentra tu
                <br />
                <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.5rem] md:text-[5.5rem] -rotate-1 inline-block">
                  sabor ideal
                </span>
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8 font-medium">
                Contáctanos para conocer más sobre nuestros productos o realizar tu pedido.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-3 bg-primary text-white font-bold uppercase tracking-[0.15em] text-xs px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl"
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
      </section>
      <Footer />
    </div>
  );
}
