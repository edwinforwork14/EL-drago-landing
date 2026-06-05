"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import Link from 'next/link';
import { getProductSlug, getCategorySlugForProduct, getProductImageUrl } from '@/data/utils';

const MotionImage = motion(Image);

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const slug = getProductSlug(product);
  const category = getCategorySlugForProduct(product) || 'productos';
  return (
    <Link href={`/productos/${category}/${slug}`} className="group block">
      <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[1.44rem] md:rounded-[2.52rem] flex flex-col h-full cursor-pointer overflow-hidden"
    >
      {/* Image Container with rounding fix */}
      <div className="relative aspect-[3/4.5] overflow-hidden rounded-[1.44rem] md:rounded-[1.44rem] bg-[#FCF2E6]/5 border border-white/10 group-hover:border-primary/20 transition-all duration-500">
        <MotionImage
          src={getProductImageUrl(product)}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 scale-[1.02] group-hover:scale-[1.08] group-hover:rotate-3"
        />
        {/* Transparent overlay over the image for rounding adaptivity */}
        <div className="absolute inset-0 pointer-events-none rounded-[1.44rem] md:rounded-[1.44rem] ring-1 ring-inset ring-white/10" />
      </div>
      {/* Shadow under product (Heinz reference) */}
      <div className="mx-auto w-3/4 h-3 blur-[5px] bg-black rounded-[50%] opacity-20 -mt-4" />
      </motion.div>
    </Link>
  );
};

export default ProductCard;
