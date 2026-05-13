import React from 'react';

const BrandPillars = () => {
  const pillars = [
    {
      eyebrow: "TRADICIÓN",
      title: "Legado & Familia",
      description: "Creamos sabores que acompañan los momentos más importantes.",
      image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1200",
      icon: "restaurant"
    },
    {
      eyebrow: "ARTESANÍA",
      title: "Transparencia",
      description: "Calidad real desde el origen hasta tu mesa.",
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=1200",
      icon: "content_cut"
    },
    {
      eyebrow: "CALIDAD",
      title: "Excelencia",
      description: "Cada pieza refleja nuestro estándar de excelencia.",
      image: "https://images.unsplash.com/photo-1621510456681-23701353d94a?auto=format&fit=crop&q=80&w=1200",
      icon: "workspace_premium"
    }
  ];

  return (
    <section className="bg-[#111111] text-[#E5E2DC] py-32 px-6 md:px-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-secondary-container font-[family-name:var(--font-sans-modern)] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            Nuestra Esencia
          </span>
          <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-serif)] mb-8 leading-tight">
            Los pilares que definen El Drago
          </h2>
          <p className="text-lg md:text-xl font-[family-name:var(--font-sans-modern)] opacity-70 leading-relaxed max-w-2xl mx-auto">
            Cada producto refleja nuestra tradición, honestidad y compromiso con la excelencia.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative flex flex-col h-full cursor-default">
              {/* Image Container with Hover Effects */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-8 shadow-2xl">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Floating Icon over Image */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#E5E2DC]/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-secondary-container group-hover:text-[#111111]">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-2">
                <span className="text-secondary-container/80 font-[family-name:var(--font-sans-modern)] font-bold tracking-widest uppercase text-[10px] mb-4">
                  {pillar.eyebrow}
                </span>
                <h3 className="text-3xl font-[family-name:var(--font-serif)] mb-4 group-hover:text-secondary-container transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-base font-[family-name:var(--font-sans-modern)] opacity-60 leading-relaxed">
                  {pillar.description}
                </p>
                
                {/* Bottom decorative line */}
                <div className="w-12 h-px bg-secondary-container/30 mt-8 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
