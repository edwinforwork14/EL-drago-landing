'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, CATEGORIES } from '@/data/products';
import CategoryNav from './CategoryNav';
import ProductCarousel from './ProductCarousel';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="productos" className="relative py-16 md:py-32 bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-0 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative mb-4 md:mb-6"
          >
            <span className="text-accent font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-2 md:mb-4 block">
              Excelencia Artesanal
            </span>
            <h2 className="text-5xl md:text-8xl font-[family-name:var(--font-bebas-neue)] text-primary-dark tracking-[0.05em] leading-[0.9] mb-4 md:mb-6">
              NUESTROS <br className="md:hidden" /> <span className="text-primary italic">PRODUCTOS</span>
            </h2>
            <div className="h-1 w-16 md:w-24 bg-accent mx-auto rounded-full" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-dark/60 font-medium text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Descubre nuestra selección de embutidos premium elaborados con tradición, calidad y el sabor auténtico de El Drago.
          </motion.p>
        </div>

        {/* Categories Navigation */}
        <CategoryNav 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Dynamic Carousel Section */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCarousel products={filteredProducts} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trust Badges / Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/10 pt-16"
        >
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">verified</span>
            </div>
            <h4 className="text-primary-dark font-bold uppercase tracking-widest text-sm mb-2">Calidad Certificada</h4>
            <p className="text-gray-500 text-xs leading-relaxed px-8">Procesos rigurosos para garantizar la excelencia en cada producto.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">restaurant</span>
            </div>
            <h4 className="text-primary-dark font-bold uppercase tracking-widest text-sm mb-2">Sabor Auténtico</h4>
            <p className="text-gray-500 text-xs leading-relaxed px-8">Recetas tradicionales que preservan el legado familiar.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">eco</span>
            </div>
            <h4 className="text-primary-dark font-bold uppercase tracking-widest text-sm mb-2">100% Natural</h4>
            <p className="text-gray-500 text-xs leading-relaxed px-8">Ingredientes seleccionados sin conservantes innecesarios.</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-4 bg-primary text-white font-bold py-5 px-12 rounded-full shadow-2xl hover:bg-primary-dark transition-all uppercase tracking-[0.2em] text-xs"
          >
            Descargar Catálogo Completo
            <span className="text-xl">↓</span>
          </motion.a>
        </div>
      </div>

      {/* Decorative Side Gradients */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default ProductGrid;

