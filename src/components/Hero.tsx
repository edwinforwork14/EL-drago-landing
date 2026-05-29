'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const MotionImage = motion(Image);

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh]">
      <Navbar transparentInitially={true} />

      {/* ─── HERO IMAGE — Mobile: right-focus, Desktop: full ─── */}
      <div className="absolute inset-0 overflow-hidden">
        <MotionImage
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src="/hero-logo/hero-el-drago.png"
          alt="El Drago Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />
        {/* Bottom fade into background color */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#FCF2E6] to-transparent z-10" />
        
        {/* Subtle Light Leak */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] sm:w-[50%] h-[40%] sm:h-[50%] bg-accent/10 rounded-full blur-[80px] sm:blur-[120px] z-10 animate-pulse" />
      </div>

      {/* ─── HERO CONTENT ─── */}
      <div className="relative z-20 flex flex-col justify-end min-h-[50vh] md:min-h-[60vh] px-5 sm:px-6 md:px-12 lg:px-24 pb-12 sm:pb-16 md:pb-20 pt-24 sm:pt-28">
        <div className="w-full max-w-4xl md:max-w-2xl lg:max-w-3xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start md:translate-y-0">
          
          {/* Headline Composition */}
          <div className="relative mb-6 sm:mb-6 md:mb-8 lg:mt-16">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-luckiest-guy)] text-[3.5rem] max-[400px]:text-[3rem] max-[360px]:text-[2.6rem] sm:text-[5.98rem] md:text-[6.44rem] lg:text-[7.82rem] text-white leading-[0.75] uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] tracking-tighter -rotate-3 sm:-rotate-6"
            >
              EL SABOR
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 -mt-3 sm:-mt-8 md:-mt-10 relative z-10 md:ml-12"
            >
              <span className="font-black text-accent text-[2rem] max-[400px]:text-[1.8rem] max-[360px]:text-[1.5rem] sm:text-[2.15rem] md:text-[2.38rem] uppercase leading-none tracking-tighter px-2 sm:px-3 pt-6 sm:pt-8">que</span>
              <span className="font-[family-name:var(--font-mr-dafoe)] text-[4rem] max-[400px]:text-[3.5rem] max-[360px]:text-[3rem] sm:text-[5.98rem] md:text-[6.9rem] lg:text-[8.74rem] text-accent leading-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                Atrapa
              </span>
            </motion.div>
          </div>

          {/* Description Block */}
          <div className="w-full max-w-[300px] sm:max-w-md lg:max-w-lg mb-6 sm:mb-8 md:mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-white/90 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-sm"
            >
              Maestría artesanal en cada pieza. Descubre la excelencia de embutidos creados para los paladares más exigentes.
            </motion.p>
          </div>

          {/* CTAs with Enhanced Polish (15% Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              href="/productos"
              className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-accent text-primary-dark font-black uppercase tracking-[0.15em] text-[0.75rem] max-[360px]:text-[0.7rem] sm:text-[0.7rem] md:text-[0.75rem] px-7 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 rounded-full shadow-[0_15px_30px_rgba(254,199,12,0.2)] hover:shadow-[0_20px_40px_rgba(254,199,12,0.35)] transition-all duration-500 active:scale-95"
            >
              <span className="relative z-10">Explorar Productos</span>
              <span className="material-symbols-outlined relative z-10 text-[18px] sm:text-[18px] transition-transform duration-500 group-hover:translate-x-2">arrow_forward</span>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </Link>
            
            <Link
              href="/#nosotros"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold uppercase tracking-[0.15em] text-[0.75rem] max-[360px]:text-[0.7rem] sm:text-[0.7rem] md:text-[0.75rem] px-7 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500 active:scale-95"
            >
              Nuestra Historia
            </Link>
          </motion.div>

          {/* Floating Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center justify-center md:justify-start gap-5 sm:gap-8 mt-8 sm:mt-10 md:mt-12 overflow-x-auto no-scrollbar w-full"
          >
            {[
              { icon: 'verified', label: 'Certificación de Calidad' },
              { icon: 'temp_preferences_custom', label: 'Curación Artesanal' },
              { icon: 'restaurant', label: 'Sabor Auténtico' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 sm:gap-3 shrink-0 group"
              >
                <span className="material-symbols-outlined text-accent text-xl sm:text-xl md:text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">{badge.icon}</span>
                <span className="text-white/60 font-bold text-[8px] max-[360px]:text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors duration-300 group-hover:text-white whitespace-nowrap">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
