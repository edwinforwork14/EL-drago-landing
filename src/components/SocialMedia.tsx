import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <section className="py-section-gap px-5 md:px-10 lg:px-16 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-[35%] text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-6 leading-none text-4xl md:text-5xl lg:text-6xl flex flex-col items-center md:items-start">
            <span>Conoce nuestras</span>
            <span className="text-[#FEC70C] font-[family-name:var(--font-mr-dafoe)] normal-case text-[4.15rem] md:text-[5.5rem] lg:text-[6.8rem] -rotate-2 inline-block mt-3">Recetas</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 text-lg md:text-xl">
            Descubre el toque único de El Drago y aprende a crear platos memorables con nuestra selección premium.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link 
              href="/recetas" 
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#FEC70C] text-primary-dark font-black uppercase tracking-widest text-[0.8rem] sm:text-[0.85rem] px-10 py-5 rounded-full shadow-[0_10px_20px_rgba(254,199,12,0.25)] hover:shadow-[0_15px_35px_rgba(254,199,12,0.45)] hover:scale-105 active:scale-95 transition-all duration-500"
            >
              <span className="relative z-10">Explorar Recetas</span>
              <span className="material-symbols-outlined relative z-10 text-[18px] sm:text-[20px] transition-transform duration-500 group-hover:translate-x-2">arrow_forward</span>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[65%] grid grid-cols-2 gap-4">
          <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg rotate-[-2deg]">
            <Image fill src="/imagenes/1/IMG_0205.JPG.jpeg" alt="Receta 1" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg rotate-[3deg]">
            <Image fill src="/imagenes/1/IMG_0208.JPG.jpeg" alt="Receta 2" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg rotate-[-1.5deg]">
            <Image fill src="/imagenes/1/IMG_0211.JPG.jpeg" alt="Receta 3" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg rotate-[1deg]">
            <Image fill src="/imagenes/1/IMG_0209.JPG.jpeg" alt="Receta 4" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
