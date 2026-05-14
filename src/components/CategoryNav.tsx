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
      <div className="w-full py-2 md:py-4">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all duration-300 group touch-manipulation snap-start"
              >
                <span className={`relative z-10 text-xl md:text-2xl font-[family-name:var(--font-luckiest-guy)] tracking-wider transition-colors duration-300 ${
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
