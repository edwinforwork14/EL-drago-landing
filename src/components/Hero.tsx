import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center py-4 px-8 md:px-16">
        <div className="w-32 md:w-48 transition-transform duration-300 hover:-translate-y-1 cursor-pointer inline-block">
          <img 
            src="/images/logodrago.png" 
            alt="El Drago Logo" 
            className="w-full h-auto"
          />
        </div>
        <nav className="flex-1 hidden lg:flex justify-center gap-10 text-white uppercase font-bold text-[0.95rem] tracking-widest">
          {[
            { name: 'productos', href: '#productos' },
            { name: 'recetas', href: '#recetas' },
            { name: 'nosotros', href: '#nosotros' },
            { name: 'donde comprar', href: '#donde-comprar' },
            { name: 'contacto', href: '#contacto' },
          ].map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative transition-all duration-300 hover:-translate-y-1 hover:text-secondary-container group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-container transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="w-32 md:w-48 hidden lg:block"></div>
      </header>

      <div className="absolute top-[20%] left-[0%] md:left-[5%] z-10 -rotate-6 flex flex-col items-start select-none">
        <h1 className="font-[family-name:var(--font-luckiest-guy)] text-[4rem] md:text-[8rem] text-white leading-[0.8] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:-translate-y-3 cursor-default inline-block">
          EL SABOR
        </h1>
        <div className="flex items-center -mt-2 md:-mt-6 ml-4 md:ml-8 transition-transform duration-500 hover:-translate-y-3 cursor-default">
          <span className="font-bold text-secondary-fixed text-lg md:text-3xl uppercase mr-2 md:mr-4 -mt-3 md:-mt-5">que</span>
          <h2 className="font-[family-name:var(--font-mr-dafoe)] text-[5rem] md:text-[10rem] text-secondary-fixed -mt-4 md:-mt-8">
            Atrapa
          </h2>
        </div>
        <p className="rotate-6 mt-1 md:mt-2 ml-4 md:ml-12 text-white font-bold text-sm md:text-xl leading-snug drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          <span className="block">Embutidos de calidad, hechos con pasión</span>
          <span className="block">para acompañar tus mejores momentos.</span>
        </p>
        <a
          href="#productos"
          className="rotate-6 mt-4 md:mt-6 ml-4 md:ml-12 inline-flex items-center gap-3 bg-secondary-container text-primary font-extrabold uppercase tracking-widest text-xs md:text-sm px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:brightness-105 hover:scale-105 transition-all duration-200"
        >
          Conoce nuestros productos
          <span className="text-base md:text-lg">→</span>
        </a>

        <div className="rotate-6 mt-20 ml-0 md:ml-2 flex items-center justify-between gap-4 md:gap-12 bg-background p-3 md:p-4 px-8 md:px-12 rounded-full shadow-2xl border border-outline-variant/30 max-w-xl">
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary-container text-2xl md:text-3xl mb-1">workspace_premium</span>
            <div className="font-bold text-primary leading-tight">
              <span className="text-secondary-container text-base md:text-xl block">+20</span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-wider">Productos</span>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-outline-variant/30"></div>
          <div className="flex flex-col items-center text-center px-1">
            <span className="material-symbols-outlined text-primary text-2xl md:text-3xl mb-1">favorite</span>
            <div className="font-bold text-primary leading-tight uppercase text-[8px] md:text-[10px] tracking-wider">
              Hechos<br />con pasión
            </div>
          </div>
          <div className="h-8 w-[1px] bg-outline-variant/30"></div>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-blue-600 text-2xl md:text-3xl mb-1">stars</span>
            <div className="font-bold text-primary leading-tight uppercase text-[8px] md:text-[10px] tracking-wider">
              Calidad<br />que confías
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img 
          alt="El Drago Hero" 
          className="w-full h-auto block" 
          src="/images/hero-el-drago.png"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
