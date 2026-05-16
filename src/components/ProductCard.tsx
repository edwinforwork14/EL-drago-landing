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
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[4rem] md:rounded-[6rem] flex flex-col h-full cursor-pointer overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4.5] overflow-hidden p-6 md:p-10">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 rounded-[4rem] scale-[0.92] group-hover:scale-[0.95]"
        />
      </div>
    </motion.div>
  );
};

export default ProductCard;
