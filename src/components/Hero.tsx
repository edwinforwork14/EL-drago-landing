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
    <section className="relative bg-primary overflow-hidden min-h-svh">

      {/* ─── NAVBAR ─── */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between py-4 px-5 md:px-10 lg:px-16">
        {/* Logo */}
        <a href="#" className="w-24 md:w-36 lg:w-44 shrink-0 transition-transform duration-300 hover:-translate-y-1 inline-block">
          <img src="/images/logodrago.png" alt="El Drago Logo" className="w-full h-auto" />
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex flex-1 justify-center gap-10 text-white uppercase font-bold text-[0.9rem] tracking-widest">
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
              <img src="/images/logodrago.png" alt="El Drago" className="w-28 mb-10 opacity-90" />

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
      <div className="absolute inset-0">
        <img
          src="/images/hero-el-drago.png"
          alt="El Drago Hero"
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Gradient overlay — reduced opacity, lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent" />
        {/* Bottom fade — thinner */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ─── HERO CONTENT ─── */}
      <div className="relative z-10 flex flex-col justify-end min-h-svh px-5 pb-12 md:px-10 md:pb-20 lg:px-16 lg:pb-24 pt-28">
        <div className="max-w-lg lg:max-w-2xl">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1 className="font-[family-name:var(--font-luckiest-guy)] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] text-white leading-[0.9] uppercase drop-shadow-xl mb-2 transition-transform duration-500 hover:-translate-y-3 cursor-default inline-block">
              EL SABOR
            </h1>
            <div className="flex items-end gap-3 mb-6">
              <span className="font-bold text-white/70 text-xl md:text-2xl uppercase leading-none -mb-2">que</span>
              <span className="font-[family-name:var(--font-mr-dafoe)] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] text-secondary-container leading-none drop-shadow-xl transition-transform duration-500 hover:-translate-y-3 cursor-default inline-block">
                Atrapa
              </span>
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-white/80 font-medium text-base md:text-lg leading-relaxed mb-8 max-w-sm"
          >
            Embutidos premium elaborados con pasión y tradición para acompañar tus mejores momentos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#productos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary-container text-primary font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full shadow-lg hover:brightness-105 hover:scale-[1.02] transition-all duration-200 min-h-[56px]"
            >
              Conoce nuestros productos
              <span className="text-lg">→</span>
            </a>
            <a
              href="#nosotros"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 min-h-[56px]"
            >
              Nuestra historia
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center gap-6 mt-8 overflow-x-auto no-scrollbar pb-1"
          >
            {[
              { icon: 'workspace_premium', label: '+20 Productos' },
              { icon: 'favorite', label: 'Hechos con pasión' },
              { icon: 'stars', label: 'Calidad premium' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 shrink-0 group cursor-default transition-transform duration-300 hover:-translate-y-2"
              >
                <span className="material-symbols-outlined text-secondary-container text-xl transition-transform duration-300 group-hover:scale-110">{badge.icon}</span>
                <span className="text-white/70 font-medium text-xs uppercase tracking-wider whitespace-nowrap group-hover:text-white/90 transition-colors duration-300">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
