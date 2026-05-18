'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Productos', href: '#productos' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Dónde comprar', href: '#donde-comprar' },
  { name: 'Contacto', href: '#contacto' },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative bg-primary overflow-hidden min-h-[85vh] md:min-h-[90vh]">

      {/* ─── NAVBAR ─── */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between py-2 md:py-3 px-5 md:px-10 lg:px-16">
        {/* Logo */}
        <a href="#" className="w-24 md:w-36 lg:w-44 shrink-0 transition-transform duration-300 hover:-translate-y-1 inline-block">
          <img src="/hero-logo/logodrago.png" alt="El Drago Logo" className="w-full h-auto" />
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex flex-1 justify-center gap-10 text-white uppercase font-bold text-[0.9rem] tracking-widest -translate-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-secondary-container group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-container transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Spacer to balance logo on desktop */}
        <div className="hidden lg:block w-44" />

        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 z-50 relative"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-4 h-0.5 bg-white rounded-full self-end" />
        </button>
      </header>

      {/* ─── SIDEBAR MOBILE ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.aside
              key="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[320px] bg-[#7a0019] z-50 flex flex-col px-8 py-10 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end mb-12 text-white/60 hover:text-white transition-colors"
                aria-label="Cerrar menú"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Logo inside sidebar */}
              <img src="/hero-logo/logodrago.png" alt="El Drago" className="w-28 mb-10 opacity-90" />

              {/* Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.15 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-white font-bold text-2xl tracking-tight py-3 border-b border-white/10 hover:text-secondary-container transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* CTA in sidebar */}
              <a
                href="https://wa.me/18091234567?text=Hola,%20estoy%20interesado%20en%20sus%20productos%20y%20vengo%20de%20la%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-secondary-container text-primary font-black uppercase tracking-widest text-sm py-4 px-6 rounded-full text-center shadow-lg"
              >
                Escríbenos ahora →
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ─── HERO IMAGE — Mobile: right-focus, Desktop: full ─── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src="/hero-logo/hero-el-drago.png"
          alt="El Drago Hero"
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />
        {/* Bottom fade into background color */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FCF2E6] to-transparent z-10" />
        
        {/* Subtle Light Leak */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] z-10 animate-pulse" />
      </div>

      {/* ─── HERO CONTENT ─── */}
      <div className="relative z-20 flex flex-col justify-end min-h-[85vh] md:min-h-[90vh] px-6 md:px-12 lg:px-24 pb-4 md:pb-6">
        <div className="max-w-4xl md:max-w-2xl lg:max-w-3xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Headline Composition */}
          <div className="relative mb-6 md:mb-8">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-luckiest-guy)] text-[4.5rem] sm:text-[6.5rem] md:text-[7rem] lg:text-[8.5rem] text-white leading-[0.75] uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] tracking-tighter -rotate-6"
            >
              EL SABOR
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center md:justify-start gap-4 -mt-4 sm:-mt-8 md:-mt-10 relative z-10 md:ml-12"
            >
              <span className="font-black text-accent text-xl md:text-2xl uppercase leading-none tracking-tighter bg-primary/40 backdrop-blur-sm px-3 py-1 rounded-sm">que</span>
              <span className="font-[family-name:var(--font-mr-dafoe)] text-[4.8rem] sm:text-[6.5rem] md:text-[7.5rem] lg:text-[9.5rem] text-accent leading-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                Atrapa
              </span>
            </motion.div>
          </div>

          {/* Description Block */}
          <div className="max-w-[300px] sm:max-w-md lg:max-w-lg mb-8 md:mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-white/90 font-medium text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-sm"
            >
              Maestría artesanal en cada pieza. Descubre la excelencia de embutidos creados para los paladares más exigentes.
            </motion.p>
          </div>

          {/* CTAs with Enhanced Polish (15% Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#productos"
              className="group relative overflow-hidden flex items-center justify-center gap-3 bg-accent text-primary-dark font-black uppercase tracking-[0.15em] text-[0.7rem] md:text-[0.75rem] px-8 md:px-10 py-4 md:py-5 rounded-full shadow-[0_15px_30px_rgba(254,199,12,0.2)] hover:shadow-[0_20px_40px_rgba(254,199,12,0.35)] transition-all duration-500 active:scale-95"
            >
              <span className="relative z-10">Explorar Productos</span>
              <span className="material-symbols-outlined relative z-10 text-[18px] transition-transform duration-500 group-hover:translate-x-2">arrow_forward</span>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </a>
            
            <a
              href="#nosotros"
              className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold uppercase tracking-[0.15em] text-[0.7rem] md:text-[0.75rem] px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500 active:scale-95"
            >
              Nuestra Historia
            </a>
          </motion.div>

          {/* Floating Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center justify-center md:justify-start gap-8 mt-10 md:mt-12 overflow-x-auto no-scrollbar"
          >
            {[
              { icon: 'verified', label: 'Certificación de Calidad' },
              { icon: 'temp_preferences_custom', label: 'Curación Artesanal' },
              { icon: 'restaurant', label: 'Sabor Auténtico' },
            ].map((badge, i) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 shrink-0 group"
              >
                <span className="material-symbols-outlined text-accent text-xl md:text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">{badge.icon}</span>
                <span className="text-white/60 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-white">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
