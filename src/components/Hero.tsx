'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionImage = motion(Image);

const Hero = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  useEffect(() => {
    const measure = () => {
      const h = navRef.current?.offsetHeight ?? 0;
      setNavHeight(h);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 768) setBreakpoint('mobile');
      else if (w < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">

      <div ref={navRef}></div>

      {/* ─── HERO IMAGE — tamaño natural en escritorio, alto mínimo en celular ─── */}
      <MotionImage
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        src="/hero-logo/hero-el-drago3.jpg"
        alt="El Drago Hero"
        width={1536}
        height={555}
        priority
        sizes="100vw"
        className="w-full h-[540px] md:h-auto md:aspect-[1536/660] object-cover block"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />



      {/* ─── TOP WAVE — complemento del VideoHero ─── */}
      <div className="absolute top-0 left-0 w-full z-30 h-[50px] md:h-[80px] pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.45))' }}
        >
          <path
            d="M0,0 L1440,0 L1440,25 C1190,60 990,45 931,45 C811,52 811,85 722.5,85 S634,52 509,45 C450,45 250,60 0,25 L0,0 Z"
            fill="#C41A1E"
          />
        </svg>
      </div>

      {/* ─── HERO CONTENT ─── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-24 pt-12 sm:pt-14 md:pt-24 pb-10 sm:pb-12 md:pb-14">
        <div className="w-full max-w-4xl md:max-w-2xl lg:max-w-3xl xl:scale-110 2xl:scale-125 origin-left mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Headline Composition */}
          <div className="relative mb-4 md:mb-5">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-headline-lg text-headline-lg text-[clamp(2rem,4.5vw,5.5rem)] text-white leading-[0.75] uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] tracking-tighter scale-90"
            >
              <span className="whitespace-nowrap">Nuestra</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 -mt-1 sm:-mt-2 md:-mt-4 relative z-10 md:ml-12"
            >
              <span className="font-[family-name:var(--font-mr-dafoe)] text-[clamp(2.4rem,5.2vw,6.8rem)] text-accent leading-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] ml-4 sm:ml-8 md:ml-12">
                selección
              </span>
            </motion.div>
          </div>

          {/* Trust Checkpoints as Body Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center md:items-start gap-2 mb-5 md:mb-6 md:ml-16 text-left"
          >
            {[
              { icon: 'verified', label: 'Certificación de Calidad' },
              { icon: 'temp_preferences_custom', label: '100% Nacional' },
              { icon: 'restaurant', label: 'Sabor Auténtico' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-accent text-xl transition-all duration-300 group-hover:scale-110">
                  {badge.icon}
                </span>
                <span className="text-white/80 font-light text-sm sm:text-base tracking-wide uppercase font-body">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs with Enhanced Polish (15% Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col w-full sm:w-auto md:ml-16"
          >
            <Link
              href="/productos"
              className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-accent text-primary-dark font-black uppercase tracking-[0.15em] text-[0.75rem] max-[360px]:text-[0.7rem] sm:text-[0.7rem] md:text-[0.75rem] px-7 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 rounded-full shadow-[0_15px_30px_rgba(254,199,12,0.2)] hover:shadow-[0_20px_40px_rgba(254,199,12,0.35)] transition-all duration-500 active:scale-95"
            >
              <span className="relative z-10">Explorar Catálogo</span>
              <span className="material-symbols-outlined relative z-10 text-[18px] sm:text-[18px] transition-transform duration-500 group-hover:translate-x-2">arrow_forward</span>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </Link>
          </motion.div>
        </div>
      </div>
      {/* ─── BOTTOM WAVE — transición fluida a la siguiente sección (estilo recetas) ─── */}
      <div 
        className="absolute bottom-[-2px] left-0 w-full z-30 pointer-events-none"
        style={{ filter: 'drop-shadow(0px -6px 10px rgba(0,0,0,0.12))' }}
      >
        <div className="w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[120%] h-[55px] md:h-[90px] fill-[#FCF2E6] -left-[10%]"
          >
            <path d="M0,80 C200,0 400,120 600,60 C800,0 1000,120 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
