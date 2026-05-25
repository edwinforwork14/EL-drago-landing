'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="nosotros" className="relative w-full overflow-hidden bg-[#C41A1E] py-0">

      {/* Top "Carving" Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
          className="relative block w-[120%] h-[80px] md:h-[160px] fill-[#FCF2E6] -left-[10%]">
          <path d="M0,60 C150,150 350,0 600,80 C850,160 1050,0 1200,60 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="py-24 md:py-40 px-5 md:px-10 lg:px-16 relative z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text — always first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white space-y-6 order-1"
          >
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-luckiest-guy)] uppercase tracking-tight leading-none">
                Sobre<br />Nosotros
              </h2>
              <svg className="absolute -bottom-3 left-0 w-28 md:w-36" viewBox="0 0 100 20" fill="none">
                <path d="M5 15C20 5 35 25 50 15C65 5 80 25 95 15" stroke="#FCD400" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>

            <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-md pt-4">
              En Embutidos El Drago, llevamos más de 20 años elaborando productos con los más altos estándares de calidad. Seleccionamos cuidadosamente cada ingrediente para ofrecerte embutidos deliciosos, nutritivos y en los que puedes confiar.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 pt-2">
              {[
                { value: '+20', label: 'Años de experiencia' },
                { value: '+30', label: 'Productos' },
                { value: '100%', label: 'Artesanal' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-secondary-container font-black text-2xl md:text-3xl leading-none">{stat.value}</span>
                  <span className="text-white/60 text-[10px] uppercase tracking-wider mt-1 leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image placeholder — second on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2"
          >
            <div className="bg-white p-3 pb-10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 max-w-sm md:max-w-md mx-auto lg:ml-auto border-[6px] border-white">
              <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-gray-100">
                <img 
                  src="/imagenes/1/IMG_0217.PNG" 
                  alt="El Drago Legado" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-9 bg-yellow-400/80 -rotate-1 flex items-center justify-center font-black text-[10px] uppercase tracking-widest shadow-sm text-yellow-900 z-20">
                El Drago Factory
              </div>
            </div>

            {/* Circular badge */}
            <div className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center p-2 shadow-xl animate-spin-slow z-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text fontSize="9" fontWeight="bold" fill="#C41A1E" letterSpacing="2">
                  <textPath xlinkHref="#circlePath2">Hechos con pasión • Tradición •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom "Carving" Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
          className="relative block w-[120%] h-[80px] md:h-[160px] fill-[#FCF2E6] -left-[10%]">
          <path d="M0,80 C200,0 400,120 600,60 C800,0 1000,120 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
