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

  const currentProduct = products[current];

  return (
    <div className="relative h-[550px] md:h-[620px] w-full max-w-md mx-auto">
      {/* MAIN SLIDER */}
      <div className="relative h-full overflow-hidden rounded-[6rem] border border-primary/5 bg-white shadow-2xl">
        
        {/* SOFT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-[#fcf2e6]/30" />

        {/* LIGHT EFFECT */}
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

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
            {/* CLICKABLE AREA */}
            <button
              onClick={() => onProductClick(currentProduct)}
              className="group relative flex h-full w-full cursor-pointer items-center justify-center p-8 md:p-12"
            >
              {/* PRODUCT IMAGE */}
              <motion.img
                src={currentProduct.image}
                alt={currentProduct.name}
                initial={{ scale: 1.00 }}
                animate={{ scale: 0.92 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative z-10
                  h-full
                  w-full
                  object-contain
                  drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]
                  transition-transform
                  duration-700
                  group-hover:scale-[0.95]
                  will-change-transform
                "
              />

              {/* PRODUCT INFO - PREMIUM OVERLAY */}
              <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent px-8 pb-10 pt-24 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="max-w-2xl"
                >
                  <h3 className="font-[family-name:var(--font-luckiest-guy)] text-2xl uppercase tracking-wider text-white md:text-3xl">
                    {currentProduct.name}
                  </h3>

                  <p className="mt-2 max-w-xl text-[10px] leading-relaxed text-white/80 md:text-sm font-medium">
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
