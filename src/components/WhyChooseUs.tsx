'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: 'verified_user',
    title: 'CALIDAD GARANTIZADA',
    description: 'Procesos certificados que aseguran frescura y sabor en cada producto.'
  },
  {
    icon: 'eco',
    title: 'INGREDIENTES SELECCIONADOS',
    description: 'Utilizamos ingredientes de primera calidad para brindarte lo mejor.'
  },
  {
    icon: 'sentiment_satisfied',
    title: 'SABOR QUE ATRAPA',
    description: 'Recetas únicas que hacen de cada bocado una experiencia irresistible.'
  },
  {
    icon: 'group',
    title: 'HECHOS CON PASIÓN',
    description: 'Empresa familiar comprometida con ofrecerte productos que te encanten.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FCF2E6] py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="inline-block relative mb-12"
        >
          <div className="absolute -left-8 -top-4 animate-pulse">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#FCD400"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] text-primary uppercase tracking-tight">
            ¿Por qué elegir El Drago?
          </h2>
          <div className="mt-4 flex justify-center">
            <svg width="100" height="13" viewBox="0 0 120 15" fill="none">
              <path d="M5 10C25 2 40 13 55 7C70 1 85 13 100 7C115 1 125 10 135 5" stroke="#FCD400" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Features — 1 col on mobile with icon-left layout, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left lg:text-center">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-row lg:flex-col items-start lg:items-center gap-5 lg:gap-0 bg-white/60 lg:bg-transparent rounded-2xl lg:rounded-none p-5 lg:p-0"
            >
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 lg:w-20 lg:h-20 lg:mb-5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-5xl lg:text-6xl">{feature.icon}</span>
              </div>
              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-primary font-black text-sm uppercase tracking-wider mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-primary/70 font-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
