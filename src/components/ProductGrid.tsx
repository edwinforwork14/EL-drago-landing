'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, CATEGORIES, Product } from '@/data/products';
import CategoryNav from './CategoryNav';
import ProductCarousel from './ProductCarousel';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="productos" className="relative py-10 md:py-16 bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-0 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative mb-4 md:mb-6"
          >

            <h2 className="text-[3.5rem] md:text-[5.5rem] font-[family-name:var(--font-luckiest-guy)] text-primary-dark tracking-normal leading-[0.9] mb-4 md:mb-6 uppercase">
              NUESTROS <br className="md:hidden" /> <span className="text-primary font-[family-name:var(--font-mr-dafoe)] normal-case text-[4rem] md:text-[6rem] -rotate-2 inline-block">Productos</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-dark/60 font-medium text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Haz clic en cualquier imagen para ver los detalles del catálogo en pantalla completa.
          </motion.p>
        </div>

        {/* Categories Navigation */}
        <CategoryNav 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Dynamic Carousel Section */}
        <div className="mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCarousel 
                products={filteredProducts} 
                onProductClick={(product) => setSelectedProduct(product)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-0 right-0 md:-top-10 md:-right-10 text-white hover:text-accent transition-colors p-2"
                  onClick={() => setSelectedProduct(null)}
                >
                  <span className="material-symbols-outlined text-4xl">close</span>
                </button>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-white font-[family-name:var(--font-luckiest-guy)] text-4xl md:text-5xl tracking-wide uppercase">{selectedProduct.name}</h3>
                  <p className="text-white/60 text-base mt-2 max-w-lg mx-auto font-medium">{selectedProduct.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges / Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-primary/10 pt-10"
        >
          <div className="text-center group">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">verified</span>
            </div>
            <h4 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] uppercase tracking-widest text-lg mb-2">Calidad Certificada</h4>
            <p className="text-gray-500 text-[11px] leading-relaxed px-8 font-medium">Procesos rigurosos para garantizar la excelencia en cada producto.</p>
          </div>
          <div className="text-center group">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">restaurant</span>
            </div>
            <h4 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] uppercase tracking-widest text-lg mb-2">Sabor Auténtico</h4>
            <p className="text-gray-500 text-[11px] leading-relaxed px-8 font-medium">Recetas tradicionales que preservan el legado familiar.</p>
          </div>
          <div className="text-center group">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">eco</span>
            </div>
            <h4 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] uppercase tracking-widest text-lg mb-2">100% Natural</h4>
            <p className="text-gray-500 text-[11px] leading-relaxed px-8 font-medium">Ingredientes seleccionados sin conservantes innecesarios.</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-primary-dark transition-all uppercase tracking-[0.2em] text-[10px]"
          >
            Descargar Catálogo Completo
            <span className="text-lg">↓</span>
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

