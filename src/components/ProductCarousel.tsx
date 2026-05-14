'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

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
      className="relative w-full py-8 md:py-12 touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto overflow-visible px-4 md:px-0">
        <motion.div
          drag="x"
          dragElastic={0.1}
          dragConstraints={{ left: 0, right: 0 }} // We handle constraints via index
          onDragEnd={(_, info) => {
            const swipeThreshold = 50;
            const velocityThreshold = 500;
            
            if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
              nextSlide();
            } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
              prevSlide();
            }
          }}
          animate={{ x: `-${currentIndex * (100 / (products.length > 4 ? 4 : products.length))}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows - Hidden on Mobile */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between pointer-events-none px-4 lg:px-12">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-gray-100 flex items-center justify-center shadow-xl pointer-events-auto hover:bg-primary hover:text-white transition-all group"
        >
          <svg className="w-6 h-6 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-gray-100 flex items-center justify-center shadow-xl pointer-events-auto hover:bg-primary hover:text-white transition-all group"
        >
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-500 rounded-full ${
              currentIndex === index ? 'w-10 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
