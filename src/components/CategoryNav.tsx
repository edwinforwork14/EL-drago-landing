'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/data/products';

interface CategoryNavProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  layout?: 'horizontal' | 'vertical' | 'grid';
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  activeCategory, 
  setActiveCategory,
  layout = 'horizontal' 
}) => {
  const isVertical = layout === 'vertical';
  const isGrid = layout === 'grid';

  return (
    <div className={`relative w-full ${isVertical || isGrid ? 'max-w-2xl' : ''}`}>
      <div className={`w-full ${isVertical || isGrid ? '' : 'py-2 md:py-4'}`}>
        <div className={`
          gap-2 md:gap-3
          ${isVertical ? 'flex flex-col items-start' : ''} 
          ${isGrid ? 'grid grid-cols-2' : ''} 
          ${!isVertical && !isGrid ? 'flex flex-wrap justify-center px-0 md:px-4' : ''}
        `}>
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition-all duration-300 group touch-manipulation text-left w-full"
              >
                <span className={`relative z-10 text-[11px] md:text-[15px] font-[family-name:var(--font-luckiest-guy)] tracking-[0.1em] transition-colors duration-300 uppercase whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-primary-dark group-hover:text-primary'
                }`}>
                  {category}
                </span>
                
                {/* Background pill */}
                {isActive ? (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-xl shadow-md shadow-primary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                ) : (
                  <div className="absolute inset-0 border border-primary/5 rounded-xl group-hover:border-primary/20 transition-colors bg-white/40" />
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
