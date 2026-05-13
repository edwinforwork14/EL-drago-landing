import React from 'react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="relative w-full overflow-hidden bg-[#9a0021] py-0">
      {/* Top "Carving" Wave - Background color cut-out */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[120%] h-[120px] md:h-[220px] fill-[#FCF2E6] -left-[10%]"
        >
          <path d="M0,60 C150,150 350,0 600,80 C850,160 1050,0 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="py-32 md:py-48 px-6 md:px-12 relative z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 pt-12 md:pt-0">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-luckiest-guy)] uppercase tracking-tight">
                Sobre Nosotros
              </h2>
              <svg className="absolute -bottom-4 left-0 w-32" viewBox="0 0 100 20" fill="none">
                <path d="M5 15C20 5 35 25 50 15C65 5 80 25 95 15" stroke="#FCD400" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl pt-4">
              En Embutidos El Drago, llevamos más de 20 años elaborando productos con los más altos estándares de calidad. Seleccionamos cuidadosamente cada ingrediente para ofrecerte embutidos deliciosos, nutritivos y en los que puedes confiar.
            </p>
          </div>

          <div className="relative pt-12 md:pt-0">
            <div className="bg-white p-3 pb-12 shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-500 max-w-md mx-auto border-8 border-white relative z-10">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="material-symbols-outlined text-6xl">factory</span>
                </div>
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-yellow-400/60 -rotate-2 flex items-center justify-center font-bold text-[10px] uppercase tracking-tighter shadow-sm z-20">
                EL DRAGO FACTORY
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full flex items-center justify-center p-2 shadow-xl animate-spin-slow hidden md:flex z-20">
               <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[10px] font-bold uppercase tracking-widest fill-primary">
                  <textPath xlinkHref="#circlePath">Hechos con pasión • Tradición • </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom "Carving" Wave - Background color cut-out */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[120%] h-[120px] md:h-[220px] fill-[#FCF2E6] -left-[10%]"
        >
          <path d="M0,80 C200,0 400,120 600,60 C800,0 1000,120 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
