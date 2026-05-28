'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Recipe } from '@/data/recipes';

interface RecipeCarouselProps {
  recipes: Recipe[];
}

const AUTO_PLAY_DELAY = 4500;
const RESUME_AFTER_INTERACTION = 5000;

export default function RecipeCarousel({ recipes }: RecipeCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, recipes]);

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => nextSlide(), AUTO_PLAY_DELAY);
  };

  const pauseAndResume = () => {
    stopAutoplay();
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => startAutoplay(), RESUME_AFTER_INTERACTION);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((p) => (p === recipes.length - 1 ? 0 : p + 1));
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrent((p) => (p === 0 ? recipes.length - 1 : p - 1));
  };

  if (!recipes || recipes.length === 0) return null;
  const safeIndex = current >= recipes.length ? 0 : current;
  const item = recipes[safeIndex];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.16rem]">
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons removed per request (autoplay + indicators remain) */}

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {recipes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { pauseAndResume(); setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
              className={`rounded-full transition-all duration-300 ${current === idx ? 'w-10 h-2 bg-primary' : 'w-2 h-2 bg-primary/30 hover:bg-primary/60'}`}
              aria-label={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
