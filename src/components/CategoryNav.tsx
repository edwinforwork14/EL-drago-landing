'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/data/products';

interface CategoryNavProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="relative w-full">
      {/* Fading indicators for mobile scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />
      
      <div className="w-full overflow-x-auto no-scrollbar py-6 md:py-8 snap-x snap-mandatory scroll-smooth">
        <div className="flex gap-3 md:gap-4 px-12 md:px-4 min-w-max md:justify-center">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all duration-300 group touch-manipulation snap-start"
              >
                <span className={`relative z-10 text-base md:text-lg font-[family-name:var(--font-bebas-neue)] tracking-[0.1em] transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-primary-dark group-hover:text-primary'
                }`}>
                  {category}
                </span>
                
                {/* Background pill */}
                {isActive ? (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                ) : (
                  <div className="absolute inset-0 border border-primary/10 rounded-full group-hover:border-primary/30 transition-colors" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
