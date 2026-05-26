'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-[#FCF2E6] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* DESKTOP: two columns (content left, button right) / MOBILE: stacked */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16"
        >
          {/* ─── LEFT: Content ─── */}
          <div className="flex-1 max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 md:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-primary/60 font-bold text-[10px] uppercase tracking-[0.2em]">
                Selección Premium
              </span>
            </div>

            {/* Main title */}
            <h2 className="font-[family-name:var(--font-luckiest-guy)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-dark uppercase tracking-tighter leading-[0.85] mb-6">
              Descubre Nuestra
              <br />
              <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-6xl sm:text-7xl md:text-8xl lg:text-9xl -rotate-2 inline-block mt-2">
                Selección
              </span>
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-primary/20" />
              <span className="w-2 h-2 rounded-full bg-primary/30" />
              <span className="w-12 h-[2px] bg-primary/20" />
            </div>

            {/* Description */}
            <p className="text-primary-dark/60 font-medium text-base md:text-lg leading-relaxed max-w-2xl">
              Productos artesanales elaborados con los más altos estándares de calidad. 
              Tradición, pasión y excelencia en cada pieza.
            </p>
          </div>

          {/* ─── RIGHT: Button ─── */}
          <div className="md:self-center shrink-0 flex flex-col items-center">
            <Link
              href="/productos"
              className="group relative inline-flex items-center gap-3 bg-primary text-white font-bold uppercase tracking-[0.15em] text-[0.75rem] md:text-[0.8rem] px-10 md:px-12 py-5 rounded-full shadow-[0_15px_30px_rgba(196,26,30,0.25)] hover:shadow-[0_25px_50px_rgba(196,26,30,0.35)] transition-all duration-500 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explorar Catálogo</span>
              <span className="material-symbols-outlined relative z-10 text-lg transition-transform duration-500 group-hover:translate-x-1.5">
                arrow_forward
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mt-0 md:mt-0 w-full"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-[60px] scale-150 pointer-events-none" />
                <img
                  src="/Dragitos/DRAGUITO%20CATEGORIAS.png"
                  alt="Mascota El Drago"
                  className="w-auto max-w-[340px] md:max-w-[380px] h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── DRAGUITO IMAGE PLACEHOLDER ─── */}
        {/*
          ================================================================
          INSTRUCCIONES PARA LA IMAGEN DEL "DRAGUITO":
          ================================================================
          1. Coloca la imagen en: /public/imagenes/draguito.png (o la ruta que prefieras)
          2. Reemplaza `src="/imagenes/draguito.png"` con la ruta correcta
          3. Ajusta las dimensiones (max-w-[180px], etc.) según el tamaño deseado
          4. La imagen se muestra centrada debajo de todo el contenido
          ================================================================
        */}
        
      </div>
    </section>
  );
};

export default ProductGrid;
