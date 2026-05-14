'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badge */}
        {product.tag && (
          <div className="absolute top-6 left-6">
            <span className="bg-primary text-white text-xs font-[family-name:var(--font-bebas-neue)] tracking-[0.2em] px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
              {product.tag}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-primary-dark font-[family-name:var(--font-bebas-neue)] text-2xl md:text-3xl tracking-[0.05em] mb-2 md:mb-3 leading-none group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed line-clamp-3 mb-4 md:mb-6 font-medium">
            {product.description}
          </p>
        </div>

        {/* Action */}
        <button className="group/btn relative w-full overflow-hidden bg-primary py-3.5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:bg-primary-dark shadow-md hover:shadow-xl">
          <span className="relative z-10 text-white text-base md:text-lg font-[family-name:var(--font-bebas-neue)] tracking-[0.2em] transition-transform duration-300 group-hover/btn:translate-x-1 inline-block">
            Explorar Selección
          </span>
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
        </button>
      </div>

      {/* Decorative Golden Detail */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default ProductCard;
