'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Recipe } from '@/data/recipes';

interface RecipeCarouselProps {
  recipes: Recipe[];
}

const AUTO_PLAY_DELAY = 4500;
const RESUME_AFTER_INTERACTION = 5000;

export default function RecipeCarousel({ recipes }: RecipeCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [stableIdx, setStableIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const goToSlide = useCallback((idx: number) => {
    if (idx === current) return;
    setIsTransitioning(true);
    setCurrent(idx);
  }, [current]);

  const nextSlide = useCallback(() => {
    const next = current === recipes.length - 1 ? 0 : current + 1;
    goToSlide(next);
  }, [current, recipes.length, goToSlide]);

  const handleTransitionComplete = useCallback(() => {
    setStableIdx(current);
    setIsTransitioning(false);
  }, [current]);

  if (!recipes || recipes.length === 0) return null;
  const safeCurrent = current >= recipes.length ? 0 : current;
  const safeStable = stableIdx >= recipes.length ? 0 : stableIdx;

  return (
    <>
      {/* Preload all images for instant transitions */}
      <div className="hidden" aria-hidden="true">
        {recipes.map((r) => (
          <Image key={r.id} src={r.image} alt="" width={1920} height={1080} priority />
        ))}
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Stable background image — always visible, no animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={recipes[safeStable].image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          </div>

          {/* Transitioning foreground image — slides in on top */}
          <AnimatePresence mode="wait">
            {isTransitioning && (
              <motion.div
                key={safeCurrent}
                initial={{ opacity: 0, x: 140 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={handleTransitionComplete}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={recipes[safeCurrent].image}
                  alt={recipes[safeCurrent].title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                {/* Subtle dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {recipes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { pauseAndResume(); goToSlide(idx); }}
                className={`rounded-full transition-all duration-300 ${current === idx ? 'w-10 h-2 bg-primary' : 'w-2 h-2 bg-primary/30 hover:bg-primary/60'}`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
