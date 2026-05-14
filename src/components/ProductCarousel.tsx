'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, onProductClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, products.length]);

  // Handle manual navigation arrows
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div 
      className="relative w-full py-8 md:py-16 touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="max-w-full overflow-hidden">
        <motion.div
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            const swipeThreshold = 50;
            const velocityThreshold = 500;
            
            if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
              nextSlide();
            } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
              prevSlide();
            }
          }}
          // Displacement for Center Mode:
          // x = (Center of Viewport) - (Active Item Start Position) - (Half of Active Item Width)
          animate={{ x: `calc(50% - (var(--card-w) / 2) - (${currentIndex} * (var(--card-w) + var(--gap))))` }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="flex gap-[var(--gap)] cursor-grab active:cursor-grabbing 
            [--gap:16px] [--card-w:80vw]
            sm:[--gap:20px] sm:[--card-w:40vw]
            lg:[--gap:32px] lg:[--card-w:22vw]"
        >
          {products.map((product, index) => {
            const isActive = currentIndex === index;
            return (
              <motion.div 
                key={product.id} 
                animate={{ 
                  scale: isActive ? 1.05 : 0.9,
                  opacity: isActive ? 1 : 0.4,
                  filter: isActive ? 'blur(0px)' : 'blur(2px)'
                }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-[var(--card-w)]"
                onClick={() => {
                  if (isActive) {
                    onProductClick?.(product);
                  } else {
                    setCurrentIndex(index);
                  }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:px-12 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-gray-100 flex items-center justify-center shadow-xl pointer-events-auto hover:bg-primary hover:text-white transition-all group"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-gray-100 flex items-center justify-center shadow-xl pointer-events-auto hover:bg-primary hover:text-white transition-all group"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentIndex === index ? 'w-12 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
