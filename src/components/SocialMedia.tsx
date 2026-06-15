import React from 'react';
import Image from 'next/image';

const SocialMedia = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-6 leading-tight text-4xl md:text-5xl lg:text-6xl">
            Únete a nuestra <br /> <span className="text-secondary-fixed-dim">Comunidad</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 text-xl md:text-2xl">Síguenos para tips, promociones exclusivas y más delicias diarias.</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform" href="https://www.instagram.com/eldrago.ca?igsh=MXZsbTkxNWQ0c3ZsOA==" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform" href="https://www.linkedin.com/company/embutidos-el-drago/" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.18h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.33 5.98 7.66V24h-5V15.5c0-2.03-.04-4.65-2.83-4.65-2.84 0-3.27 2.22-3.27 4.51V24h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg rotate-[-2deg]">
            <Image fill src="/imagenes/1/IMG_0205.JPG.jpeg" alt="Social 1" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg rotate-[3deg]">
            <Image fill src="/imagenes/1/IMG_0208.JPG.jpeg" alt="Social 2" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg rotate-[-1.5deg]">
            <Image fill src="/imagenes/1/IMG_0211.JPG.jpeg" alt="Social 4" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg rotate-[1deg]">
            <Image fill src="/imagenes/1/IMG_0209.JPG.jpeg" alt="Social 3" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
