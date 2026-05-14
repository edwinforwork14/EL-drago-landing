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
      className="relative w-full overflow-hidden px-4 py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{ x: `-${currentIndex * (100 / (products.length > 4 ? 4 : products.length))}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex gap-6"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 lg:px-12">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 flex items-center justify-center shadow-lg pointer-events-auto hover:bg-primary hover:text-white transition-all group"
        >
          <svg className="w-6 h-6 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 flex items-center justify-center shadow-lg pointer-events-auto hover:bg-primary hover:text-white transition-all group"
        >
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
