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
    <section id="productos" className="relative pt-6 md:pt-10 pb-2 md:pb-4 bg-[#FCF2E6] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          
          {/* LEFT BLOCK: Header & Categories */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-8 md:mb-12"
            >
              <h2 className="text-[3.5rem] md:text-[5rem] font-[family-name:var(--font-luckiest-guy)] text-primary-dark tracking-normal leading-[0.9] mb-6 uppercase">
                NUESTROS <br /> 
                <span className="text-primary font-[family-name:var(--font-mr-dafoe)] normal-case text-[4rem] md:text-[6rem] -rotate-2 inline-block">Productos</span>
              </h2>
              
              <p className="text-primary-dark/70 font-medium text-lg md:text-xl leading-relaxed mb-10">
                Excelencia artesanal en cada rebanada. Selecciona una categoría para explorar nuestro catálogo premium.
              </p>

              {/* Categories Navigation - 2 Columns Grid */}
              <CategoryNav 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
                layout="grid"
              />
            </motion.div>
          </div>

          {/* RIGHT BLOCK: Dynamic Carousel */}
          <div className="w-full lg:w-[55%] min-h-[500px] pt-4 md:pt-8">
            <ProductCarousel 
              products={filteredProducts} 
              activeCategory={activeCategory}
              onProductClick={(product) => setSelectedProduct(product)}
            />
          </div>
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-xl"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-0 right-0 md:-top-16 md:-right-16 text-white hover:text-primary transition-all p-4 bg-white/10 rounded-full backdrop-blur-md"
                  onClick={() => setSelectedProduct(null)}
                >
                  <span className="material-symbols-outlined text-4xl">close</span>
                </button>
                
                <div className="relative w-full h-[70vh] flex items-center justify-center">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="max-w-full max-h-full object-contain rounded-[3rem] drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)]"
                  />
                </div>

                <div className="mt-12 text-center max-w-3xl">
                  <h3 className="text-white font-[family-name:var(--font-luckiest-guy)] text-5xl md:text-7xl tracking-wide uppercase mb-4">{selectedProduct.name}</h3>
                  <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                  <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">{selectedProduct.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/10 pt-16">
          {[
            { icon: 'verified', title: 'Calidad Certificada', desc: 'Procesos rigurosos para garantizar la excelencia en cada producto.' },
            { icon: 'restaurant', title: 'Sabor Auténtico', desc: 'Recetas tradicionales que preservan el legado familiar.' },
            { icon: 'eco', title: '100% Natural', desc: 'Ingredientes seleccionados sin conservantes innecesarios.' }
          ].map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">{badge.icon}</span>
              </div>
              <h4 className="text-primary-dark font-[family-name:var(--font-luckiest-guy)] uppercase tracking-widest text-xl mb-3">{badge.title}</h4>
              <p className="text-primary-dark/60 text-sm leading-relaxed px-6 font-medium">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;