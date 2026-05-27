'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  return (
    <section className="relative py-5 md:py-7 lg:py-9 bg-[#FCF2E6] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px  from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px from-transparent via-primary/10 to-transparent" />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        {/* DESKTOP: two columns (content left, button right) / MOBILE: stacked */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-7 md:gap-10"
        >
          {/* ─── LEFT: Content ─── */}
          <div className="flex-1 max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4 md:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-primary/60 font-bold text-[9px] uppercase tracking-[0.2em]">
                Selección Premium
              </span>
            </div>

            {/* Main title */}
            <h2 className="font-[family-name:var(--font-luckiest-guy)] text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-primary-dark uppercase tracking-tighter leading-[0.85] mb-3">
              Descubre Nuestra
              <br />
              <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-3xl sm:text-4xl md:text-4xl lg:text-5xl -rotate-2 inline-block mt-1">
                Selección
              </span>
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
              <span className="w-8 h-[2px] bg-primary/20" />
            </div>

            {/* Description */}
            <p className="text-primary-dark/60 font-medium text-sm md:text-base leading-relaxed max-w-2xl">
              Productos artesanales elaborados con los más altos estándares de calidad. 
              Tradición, pasión y excelencia en cada pieza.
            </p>
          </div>

          {/* ─── RIGHT: Button ─── */}
          <div className="md:self-center shrink-0 flex flex-col items-center">
            <Link
              href="/productos"
              className="group relative inline-flex items-center gap-2 bg-primary text-white font-bold uppercase tracking-[0.15em] text-[0.7rem] md:text-[0.75rem] px-7 md:px-8 py-3 rounded-full shadow-[0_10px_20px_rgba(196,26,30,0.25)] hover:shadow-[0_15px_30px_rgba(196,26,30,0.35)] transition-all duration-500 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explorar Catálogo</span>
              <span className="material-symbols-outlined relative z-10 text-base transition-transform duration-500 group-hover:translate-x-1.5">
                arrow_forward
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
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
                  className="w-auto max-w-[230px] md:max-w-[270px] h-auto object-contain"
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
