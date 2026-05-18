'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCarouselProps {
  products: Product[];
  activeCategory: string;
  onProductClick: (product: Product) => void;
}

const AUTO_PLAY_DELAY = 4500;
const RESUME_AFTER_INTERACTION = 5000;

const ProductCarousel = ({
  products,
  activeCategory,
  onProductClick,
}: ProductCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeRef = useRef<NodeJS.Timeout | null>(null);

  // RESET ON CATEGORY CHANGE
  useEffect(() => {
    setCurrent(0);
  }, [activeCategory]);

  // AUTOPLAY
  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();

      if (resumeRef.current) {
        clearTimeout(resumeRef.current);
      }
    };
  }, [current, products]);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const startAutoplay = () => {
    stopAutoplay();

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_DELAY);
  };

  const pauseAndResume = () => {
    stopAutoplay();

    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
    }

    resumeRef.current = setTimeout(() => {
      startAutoplay();
    }, RESUME_AFTER_INTERACTION);
  };

  const nextSlide = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    pauseAndResume();
    nextSlide();
  };

  const handlePrev = () => {
    pauseAndResume();
    prevSlide();
  };

  if (!products || !products.length) return null;
  
  // Safe index check to prevent crashes during category transitions
  const safeIndex = current >= products.length ? 0 : current;
  const currentProduct = products[safeIndex];

  return (
    <div className="relative h-[550px] md:h-[620px] w-full max-w-md mx-auto">
      {/* MAIN SLIDER (Container box removed) */}
      <div className="relative h-full w-full">
        
        {/* LIGHT EFFECT (Subtle glow instead of box) */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentProduct.id}
            initial={{
              opacity: 0,
              x: direction > 0 ? 120 : -120,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -120 : 120,
              scale: 0.96,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex h-full w-full items-center justify-center"
          >
            {/* CLICKABLE AREA - FLEX LAYOUT FOR STABILITY */}
            <button
              onClick={() => onProductClick(currentProduct)}
              className="group relative flex flex-col h-full w-full cursor-pointer items-center p-6 md:p-8"
            >
              {/* PRODUCT IMAGE CONTAINER (More rectangular & rounded) */}
              <div className="w-full aspect-[4/5] md:aspect-[3.5/4.5] relative rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/20 transition-colors duration-500 mx-auto shadow-sm">
                <motion.img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.05]
                    will-change-transform
                  "
                />
              </div>

              {/* PRODUCT INFO - FIXED HEIGHT FOR CONSISTENCY */}
              <div className="w-full pt-8 pb-4 text-center min-h-[140px] md:min-h-[180px] flex flex-col justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="max-w-2xl mx-auto"
                >
                  <h3 className="font-[family-name:var(--font-luckiest-guy)] text-3xl uppercase tracking-tighter text-primary-dark md:text-4xl drop-shadow-sm">
                    {currentProduct.name}
                  </h3>

                  <p className="mt-2 max-w-xl mx-auto text-xs leading-tight text-primary-dark/60 md:text-base font-medium">
                    {currentProduct.description}
                  </p>
                </motion.div>
              </div>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 md:-left-12 md:-right-12 flex justify-between pointer-events-none z-30">
        <button
          onClick={handlePrev}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-primary/10
            bg-white/90
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            hover:bg-primary
            hover:text-white
            text-primary
            active:scale-95
            pointer-events-auto
            shadow-xl
          "
        >
          <span className="material-symbols-outlined text-3xl">
            chevron_left
          </span>
        </button>

        <button
          onClick={handleNext}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-primary/10
            bg-white/90
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            hover:bg-primary
            hover:text-white
            text-primary
            active:scale-95
            pointer-events-auto
            shadow-xl
          "
        >
          <span className="material-symbols-outlined text-3xl">
            chevron_right
          </span>
        </button>
      </div>

      {/* INDICATORS */}
      <div className="absolute -bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              pauseAndResume();
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`
              rounded-full
              transition-all
              duration-500
              ${
                current === index
                  ? 'w-12 h-2 bg-primary'
                  : 'h-2 w-2 bg-primary/20 hover:bg-primary/40'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
