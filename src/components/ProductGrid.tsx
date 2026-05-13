'use client';

import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: "JAMÓN COCIDO DE PIERNA",
    description: "Suave, jugoso y lleno de sabor. Ideal para cualquier momento del día.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzHGJh40hGr2OYfPHW9-6LL7gzAPAc-ESPp61aFTYs6MlfDZXSHRxUBtH84wQtAj-7HyCnMEjU96wUjIEI13LCPczwX12VNPATcqhU-TdWwg7XM4kVXGUy3x4jTDPTT7vSP1d8kd_6G4JZYkAVr0Z5M1ic68tPllAN6U7ew-TyXtQUhxvWutXuTaH3zzg1KIoZmqUfjdbAG8HeZFTRE1UVuLtVMdbBm2_L7WEXAzUIyFfPY-Ug_zkBqHB2yJE2J_738lfgu1m9KDE",
    tag: "Más vendido",
  },
  {
    name: "PECHUGA DE PAVO",
    description: "Ligera, deliciosa y perfecta para una alimentación balanceada.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPXQ6OXvIGz02TqeAAYzEZDJr0_3moB7-Yo9Jy25BWkTSO9Tg3tF3MnbVEYzEaebwKKKwNJQI-f6u3BMkagX0mHBZGl1P8mF3DtuQOviO9nSg-FH9UyhjAL10QIOitXOqps55xtKpEuV0-WJDL7yS9YvrxNqoZgXris9TxBWbhNNcqg_5hvSIYc2bDomXjGVq-1B9QRV9UtCkZKm8nd_1fSFiJH9MkU8_yw8mn4iQSwhXqHs1_rp49WF1EMPdiTveWwbrcwcElVE",
    tag: "Saludable",
  },
  {
    name: "JAMÓN ESTILO ARTESANAL",
    description: "Tradición y sabor en cada rebanada. Perfecto para los amantes del buen jamón.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP0vZQ-PGdUkCYL-oakKxEM9do29_aT8wmfK44rvYdJPruAK4p7SV7AMvUG1xDa_GbdcpUJiELetD2d06I0C_veOGxWQ4LBDh6DtfrzSyLtl2GdJfRT6_xnzbv5Rxaj2Ku3yNPtzTLf8jlud5n96SS7cuhC2A4U_F5-PyeduS9bsh4lrrM1dswK7rEa4-1xVs5r_BwZeOHykwYjjDTIBrLs9LR1ZkBp1uVc92g0JVJuytAbsm9rQ2hJAbIs3T4MJH9YvqzWXBTlwc",
    tag: "Artesanal",
  },
  {
    name: "MÁS PRODUCTOS",
    description: "Descubre nuestra variedad de embutidos y encuentra tu favorito.",
    image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=800",
    tag: "Ver todos",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

const ProductGrid = () => {
  return (
    <section id="productos" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block relative mb-4">
            <div className="absolute -left-8 -top-3 animate-pulse">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#FCD400"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-luckiest-guy)] text-primary uppercase tracking-tight">
              Nuestros Productos
            </h2>
          </div>
          <p className="text-primary font-bold text-base md:text-xl mt-3">
            Calidad que se siente, sabor que enamora.
          </p>
          <div className="mt-5 flex justify-center">
            <svg width="100" height="14" viewBox="0 0 120 15" fill="none">
              <path d="M0 7.5C10 7.5 10 2 20 2C30 2 30 13 40 13C50 13 50 2 60 2C70 2 70 13 80 13C90 13 90 2 100 2C110 2 110 7.5 120 7.5" stroke="#FCD400" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Product Cards — 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-400 flex flex-col border border-gray-100"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-secondary-container text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-primary font-black text-base uppercase tracking-tight mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-5">
                  {product.description}
                </p>
                <button className="w-full bg-primary text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-widest hover:bg-primary/90 hover:shadow-lg transition-all min-h-[48px]">
                  Ver Producto
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 bg-secondary-container text-primary font-black py-4 px-10 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all uppercase tracking-widest text-sm min-h-[56px] w-full sm:w-auto"
          >
            Ver todos los productos
            <span className="text-xl">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
