'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    type: 'image' as const,
    src: '/productos/frescos/pechuga-pollo-cocido.png',
    alt: 'Pechuga de Pollo Cocido',
    title: 'Frescos',
    gradient: 'from-[#DF2122]/70 to-[#C41A1E]/70',
  },
  {
    type: 'image' as const,
    src: '/productos/ahumados/espalda-de-cerdo-ahumada.png',
    alt: 'Espalda de Cerdo Ahumada',
    title: 'Ahumados',
    gradient: 'from-[#C41A1E]/70 to-[#9E1518]/70',
  },
  {
    type: 'image' as const,
    src: '/productos/embutidos/mortadela-extra.png',
    alt: 'Mortadela Extra',
    title: 'Embutidos',
    gradient: 'from-[#A81518]/70 to-[#7A0F11]/70',
  },
  { type: 'special' as const, product: null },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 320 : -320,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -320 : 320,
    opacity: 0,
    scale: 0.92,
  }),
};

const ProductGrid = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goTo = (index: number) => {
    setSlideIndex(index);
  };

  const getStackPosition = (index: number) => {
    const relative = (index - slideIndex + slides.length) % slides.length;

    const positions = [
      {
        zIndex: 40,
        rotate: '-4deg',
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
      },
      {
        zIndex: 30,
        rotate: '4deg',
        scale: 0.96,
        x: 10,
        y: -4,
        opacity: 1,
      },
      {
        zIndex: 20,
        rotate: '-2deg',
        scale: 0.92,
        x: -10,
        y: 4,
        opacity: 1,
      },
      {
        zIndex: 10,
        rotate: '3deg',
        scale: 0.88,
        x: 12,
        y: 8,
        opacity: 1,
      },
    ];

    return positions[relative];
  };

  return (
    <section className="relative py-8 md:py-2 lg:py-2 bg-[#FCF2E6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-1 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
        >
          {/* ─── LEFT COLUMN: Content + Button ─── */}
          <div className="flex-[1.6] max-w-none order-1 md:order-1 px-10 md:px-10 lg:px-20">
            {/* Eyebrow badge removed per request */}

            {/* Main title */}
            <h2 className="font-headline-lg text-headline-lg text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-primary-dark uppercase tracking-tighter leading-[0.85] mb-3">
              Descubre Nuestra
              <br />
              <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-5xl sm:text-6xl md:text-6xl lg:text-7xl -rotate-2 inline-block mt-1">
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
            <p className="text-primary-dark/60 font-medium text-lg md:text-xl leading-relaxed max-w-2xl mb-6 md:mb-8">
              Productos artesanales elaborados con los más altos estándares de calidad.
              Tradición, pasión y excelencia en cada pieza.
            </p>

            {/* Button moved below text */}
            <Link
              href="/productos"
              className="group relative inline-flex items-center gap-2 bg-primary text-white font-bold uppercase tracking-[0.15em] text-base md:text-lg px-8 md:px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(196,26,30,0.25)] hover:shadow-[0_15px_30px_rgba(196,26,30,0.35)] transition-all duration-500 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explorar Catálogo</span>
              <span className="material-symbols-outlined relative z-10 text-base transition-transform duration-500 group-hover:translate-x-1.5">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* ─── RIGHT COLUMN: Carrusel ─── */}
          <div className="pt-4 flex-[0.9] w-full md:w-[380px] lg:w-[380px] order-2 md:order-2 shrink-0">
            <div className="relative">
              {/* Carousel card (stacked) */}
              <div className=" ptrelative aspect-[3/4] rounded-[1.5rem] overflow-visible shadow-none bg-[#FCF2E6]">
                {slides.map((slide, index) => {
                  const position = getStackPosition(index);

                  return (
                    <motion.div
                      key={`slide-${index}`}
                      initial={false}
                      animate={{ x: position.x, y: position.y, rotate: position.rotate, scale: position.scale, opacity: position.opacity }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                      style={{ zIndex: position.zIndex }}
                      onClick={() => {
                        if (position.zIndex === 40) {
                          next();
                        }
                      }}
                    >
{slide.type === 'image' && (
                        <div className="block w-full h-full group">
                          <div className="relative w-full h-full rounded-[1.5rem] bg-accent/80 backdrop-blur-lg flex flex-col items-center justify-center p-6 overflow-hidden border-2 border-primary/40">
                            {/* Dots pattern for texture */}
                            <div className="absolute inset-0 opacity-[0.04]">
                              <div
                                className="w-full h-full"
                                style={{
                                  backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                                  backgroundSize: '30px 30px',
                                }}
                              />
                            </div>

                            {/* Product image - inner red container */}
                            <div className="relative w-4/5 h-3/5 md:h-4/5 rounded-xl shadow-2xl bg-primary p-2">
                              <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <Image
                                  src={slide.src}
                                  alt={slide.alt}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 380px"
                                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              </div>
                            </div>

                            {/* Category title */}
                            <h3 className="text-primary-dark font-[family-name:var(--font-mr-dafoe)] text-4xl md:text-5xl text-center leading-tight mt-3 relative z-10">
                              {slide.title}
                            </h3>
                          </div>
                        </div>
                      )}

                      {slide.type === 'special' && (
                        <Link href="/productos" className="block w-full h-full group">
                          <div className="relative w-full h-full rounded-[1.5rem] bg-gradient-to-br from-primary/90 to-primary-dark flex flex-col items-center justify-center p-6">
                            <div className="absolute inset-0 opacity-[0.04]">
                              <div
                                className="w-full h-full"
                                style={{
                                  backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                                  backgroundSize: '30px 30px',
                                }}
                              />
                            </div>

                            <motion.div
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.1, rotate: 90 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-accent/50 flex items-center justify-center mb-4 backdrop-blur-sm"
                            >
                              <span className="material-symbols-outlined text-accent text-3xl md:text-4xl">add</span>
                            </motion.div>

                            <h3 className="text-accent font-[family-name:var(--font-mr-dafoe)] text-4xl md:text-5xl text-center leading-tight drop-shadow-[0_2px_6px_rgba(254,199,12,0.25)]">Ver Más</h3>
                            <p className="text-white/60 text-sm text-center mt-2 max-w-[200px]">Explora nuestro catálogo</p>
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation arrows removed (stacked interaction handles navigation) */}

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Ir al slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === slideIndex
                        ? 'w-6 bg-primary'
                        : 'w-1.5 bg-primary/20 hover:bg-primary/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
