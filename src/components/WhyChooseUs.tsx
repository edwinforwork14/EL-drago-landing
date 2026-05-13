import React from 'react';

const WhyChooseUs = () => {
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
      description: 'Somos una empresa familiar comprometida con ofrecerte productos que te encanten.'
    }
  ];

  return (
    <section className="bg-[#FCF2E6] py-8 md:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="inline-block relative mb-12">
          {/* Sparkle decorative element */}
          <div className="absolute -left-10 -top-6 animate-pulse">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#FCD400"/>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-luckiest-guy)] text-primary uppercase tracking-tight">
            ¿POR QUÉ ELEGIR EL DRAGO?
          </h2>
          
          {/* Yellow squiggle divider */}
          <div className="mt-6 flex justify-center">
            <svg width="120" height="15" viewBox="0 0 120 15" fill="none">
              <path d="M5 10C25 2 40 13 55 7C70 1 85 13 100 7C115 1 125 10 135 5" stroke="#FCD400" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-3">
              <div className="w-24 h-24 mb-8 flex items-center justify-center text-primary relative">
                 <span className="material-symbols-outlined text-6xl md:text-7xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </span>
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
              
              <h3 className="text-primary font-black text-base md:text-lg uppercase tracking-wider mb-5 leading-tight max-w-[200px]">
                {feature.title}
              </h3>
              
              <p className="text-primary/80 font-medium text-sm md:text-base leading-relaxed max-w-[240px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
