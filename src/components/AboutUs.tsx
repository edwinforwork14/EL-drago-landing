'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="nosotros" className="relative w-full overflow-hidden bg-[#C41A1E] py-0">

      {/* Top "Carving" Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 1200 160" preserveAspectRatio="none"
          className="relative block w-[120%] h-[80px] md:h-[150px] fill-[#FCF2E6] -left-[10%]">
          <path d="M0,70 C100,20 240,120 360,90 C480,60 600,120 720,90 C840,60 960,120 1080,90 C1140,76 1180,72 1200,70 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="py-16 md:py-28 px-5 md:px-10 lg:px-16 relative z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text — always first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white space-y-4 order-1"
          >
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline-lg text-headline-lg uppercase tracking-tight leading-none">
                Sobre<br />Nosotros
              </h2>
              <svg className="absolute -bottom-2 left-0 w-24 md:w-32" viewBox="0 0 100 20" fill="none">
                <path d="M5 15C20 5 35 25 50 15C65 5 80 25 95 15" stroke="#FCD400" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>

            <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-md pt-3">
              En Embutidos El Drago, llevamos más de 20 años elaborando productos con los más altos estándares de calidad. Seleccionamos cuidadosamente cada ingrediente para ofrecerte lo mejor para tu familia .
            </p>

            {/* Stats row */}
            <div className="flex gap-4 pt-1">
              {[
                { value: '+30', label: 'Productos' },
                { value: '+20', label: 'Años de experiencia' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-secondary-container font-black text-xl md:text-2xl leading-none">{stat.value}</span>
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
            <div className="bg-white p-2 pb-8 shadow-2xl rotate-0 hover:rotate-0 transition-transform duration-500 max-w-xs md:max-w-sm mx-auto lg:ml-auto border-[4px] border-white">
              <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-gray-100">
                <Image 
                  src="/imagenes/1/IMG_0217.PNG" 
                  alt="El Drago Legado" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-yellow-400/80 -rotate-0 flex items-center justify-center font-black text-[9px] uppercase tracking-widest shadow-sm text-yellow-900 z-20">
                El Drago Factory
              </div>
            </div>

            {/* Circular badge */}
            <div className="absolute -bottom-6 -right-3 md:-bottom-8 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center p-2 shadow-xl animate-spin-slow z-20">
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
        <svg viewBox="0 0 1200 160" preserveAspectRatio="none"
          className="relative block w-[120%] h-[80px] md:h-[150px] fill-[#FCF2E6] -left-[10%]">
          <path d="M0,110 C120,80 240,140 360,110 C480,80 600,140 720,110 C840,80 960,140 1080,110 C1140,100 1180,96 1200,110 L1200,160 L0,160 Z" />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
