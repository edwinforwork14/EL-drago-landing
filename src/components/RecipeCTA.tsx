"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const RecipeCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-accent py-0">
      {/* Top "Carving" Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
          className="relative block w-[120%] h-[80px] md:h-[120px] fill-[#FCF2E6] -left-[10%]">
          <path d="M0,60 C150,150 350,0 600,80 C850,160 1050,0 1200,60 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="py-24 md:py-32 px-5 md:px-10 lg:px-16 relative z-0">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1.5fr] items-center justify-items-center lg:justify-items-stretch gap-8 lg:gap-12 p-2 md:p-10 text-primary-dark group relative"
          >
            
            {/* 1. Título y texto */}
            <div className="relative z-10 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <h2 className="font-headline-lg text-headline-lg text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter mb-4 leading-[0.9] text-primary-dark">
                ÚNETE A NUESTRA <br className="lg:hidden" /> <span className="text-[#C41A1E] font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] -rotate-2 inline-block md:ml-2">Comunidad</span>
              </h2>
              <p className="text-primary-dark/85 text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Síguenos para tips, recetas exclusivas, promociones y más delicias diarias de Embutidos El Drago.
              </p>
            </div>

            {/* 2. Imagen del Draguito (Tamaño original restaurado) */}
            <div className="relative z-10 flex justify-center items-center">
              <Image
                src="/dragitos/draguito-principal.png"
                alt="Mascota El Drago"
                width={224}
                height={160}
                className="w-80 h-40 md:w-48 md:h-68 lg:w-56 lg:h-70 object-contain"
              />
            </div>

            {/* 3. Botón 1 y Botón 2 (Lado a lado en pantallas sm+) */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 relative z-10 w-full justify-center lg:justify-end items-center">
              <a
                href="https://www.instagram.com/eldrago.ca?igsh=MXZsbTkxNWQ0c3ZsOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#DF2122] hover:text-[#FEC70C] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(196,26,30,0.25)] shrink-0 whitespace-nowrap"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/embutidos-el-drago/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#DF2122] hover:text-[#FEC70C] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(196,26,30,0.25)] shrink-0 whitespace-nowrap"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.18h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.33 5.98 7.66V24h-5V15.5c0-2.03-.04-4.65-2.83-4.65-2.84 0-3.27 2.22-3.27 4.51V24h-5V8z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default RecipeCTA;
