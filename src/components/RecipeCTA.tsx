"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const RecipeCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-primary-dark py-0">
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
            className="w-full flex flex-col md:flex-row items-center justify-between p-2 md:p-10 text-white group relative overflow-hidden"
          >
            {/* Background Accent Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="max-w-3xl relative z-10 text-center md:text-left mb-10 md:mb-0">
              <h2 className="font-[family-name:var(--font-luckiest-guy)] text-4xl md:text-6xl lg:text-[5.5rem] uppercase tracking-tighter mb-4 leading-[0.9]">
                EL ARTE DE <br className="md:hidden" /> <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] -rotate-2 inline-block md:ml-2">Saborear</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                Descubre recetas exclusivas diseñadas por nuestros maestros para elevar cada bocado a una experiencia editorial inolvidable.
              </p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto shrink-0 relative z-10">
              <Image
                src="/Dragitos/DRAGUITO%20PRINCIPAL.png"
                alt="Mascota El Drago"
                width={224}
                height={160}
                className="w-80 h-40 md:w-48 md:h-68 lg:w-56 lg:h-70 object-contain"
              />

              <Link
                href="/recetas"
                className="bg-accent text-primary-dark px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(254,199,12,0.2)] w-full md:w-auto"
              >
                Conoce nuestras recetas
                <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span>
              </Link>
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
  );
};

export default RecipeCTA;
