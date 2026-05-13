import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      name: "JAMÓN COCIDO DE PIERNA",
      description: "Suave, jugoso y lleno de sabor. Ideal para cualquier momento del día.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzHGJh40hGr2OYfPHW9-6LL7gzAPAc-ESPp61aFTYs6MlfDZXSHRxUBtH84wQtAj-7HyCnMEjU96wUjIEI13LCPczwX12VNPATcqhU-TdWwg7XM4kVXGUy3x4jTDPTT7vSP1d8kd_6G4JZYkAVr0Z5M1ic68tPllAN6U7ew-TyXtQUhxvWutXuTaH3zzg1KIoZmqUfjdbAG8HeZFTRE1UVuLtVMdbBm2_L7WEXAzUIyFfPY-Ug_zkBqHB2yJE2J_738lfgu1m9KDE",
      buttonText: "VER PRODUCTO"
    },
    {
      name: "PECHUGA DE PAVO",
      description: "Ligera, deliciosa y perfecta para una alimentación balanceada sin perder el sabor.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPXQ6OXvIGz02TqeAAYzEZDJr0_3moB7-Yo9Jy25BWkTSO9Tg3tF3MnbVEYzEaebwKKKwNJQI-f6u3BMkagX0mHBZGl1P8mF3DtuQOviO9nSg-FH9UyhjAL10QIOitXOqps55xtKpEuV0-WJDL7yS9YvrxNqoZgXris9TxBWbhNNcqg_5hvSIYc2bDomXjGVq-1B9QRV9UtCkZKm8nd_1fSFiJH9MkU8_yw8mn4iQSwhXqHs1_rp49WF1EMPdiTveWwbrcwcElVE",
      buttonText: "VER PRODUCTO"
    },
    {
      name: "JAMÓN ESTILO ARTESANAL",
      description: "Tradición y sabor en cada rebanada. Perfecto para los amantes del buen jamón.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP0vZQ-PGdUkCYL-oakKxEM9do29_aT8wmfK44rvYdJPruAK4p7SV7AMvUG1xDa_GbdcpUJiELetD2d06I0C_veOGxWQ4LBDh6DtfrzSyLtl2GdJfRT6_xnzbv5Rxaj2Ku3yNPtzTLf8jlud5n96SS7cuhC2A4U_F5-PyeduS9bsh4lrrM1dswK7rEa4-1xVs5r_BwZeOHykwYjjDTIBrLs9LR1ZkBp1uVc92g0JVJuytAbsm9rQ2hJAbIs3T4MJH9YvqzWXBTlwc",
      buttonText: "VER PRODUCTO"
    },
    {
      name: "MÁS PRODUCTOS",
      description: "Descubre nuestra variedad de embutidos y encuentra tu favorito.",
      image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=800",
      buttonText: "VER TODOS"
    }
  ];

  return (
    <section id="productos" className="py-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            {/* Sparkle decorative element */}
            <div className="absolute -left-10 -top-4 animate-pulse">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#FCD400"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-luckiest-guy)] text-primary uppercase tracking-tight">Nuestros Productos</h2>
          </div>
          <p className="text-primary font-bold mt-4 text-lg md:text-xl">Calidad que se siente, sabor que enamora.</p>
          <div className="mt-6 flex justify-center">
            {/* Wavy separator */}
            <svg width="120" height="15" viewBox="0 0 120 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.5C10 7.5 10 2 20 2C30 2 30 13 40 13C50 13 50 2 60 2C70 2 70 13 80 13C90 13 90 2 100 2C110 2 110 7.5 120 7.5" stroke="#FCD400" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-6 snap-x no-scrollbar md:grid md:grid-cols-4 md:overflow-visible">
          {products.map((product, index) => (
            <div key={index} className="min-w-[300px] md:min-w-0 snap-center bg-background rounded-3xl p-6 shadow-xl flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-square relative mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-primary font-black text-xl mb-2 uppercase tracking-tight">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>
              <button className="bg-[#9a0021] text-white font-black py-2.5 px-8 rounded-xl text-xs hover:brightness-125 hover:shadow-lg transition-all uppercase tracking-widest mt-auto">
                {product.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-secondary-container text-primary font-black py-5 px-12 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-4 mx-auto uppercase tracking-widest text-sm border-2 border-white">
            Ver todos los productos
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
