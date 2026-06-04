import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#FCF2E6] text-[#9a0021] pt-14 pb-6 overflow-hidden">
      {/* Top Red Wavy Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[120%] h-[40px] fill-[#9a0021] -left-[10%]"
        >
          <path d="M0,0 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Logo & Slogan — full width on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <Image 
              src="/hero-logo/logodrago.png" 
              alt="El Drago" 
              width={144}
              height={50}
              className="w-32 md:w-36 h-auto"
            />
            <p className="font-medium text-xl md:text-sm leading-relaxed max-w-[180px]">
              El favorito de todos
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold uppercase tracking-widest text-[10px] mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-0.5 font-medium text-xs w-full">
              <li><Link href="/productos" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Productos</Link></li>
              <li><Link href="/recetas" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Recetas</Link></li>
              <li><Link href="/#nosotros" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Nosotros</Link></li>
              <li><Link href="/#contacto" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Dónde comprar</Link></li>
              <li><Link href="/#contacto" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Contacto</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold uppercase tracking-widest text-[10px] mb-3">Categorías</h3>
            <ul className="space-y-0.5 font-medium text-xs w-full">
              <li><Link href="/productos/ahumados" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Jamón Cocido</Link></li>
              <li><Link href="/productos/frescos" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Pechuga de Pavo</Link></li>
              <li><Link href="/productos/ahumados" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Jamón Artesanal</Link></li>
              <li><Link href="/productos/embutidos" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-1.5"><span className="text-[6px]">●</span> Otros Embutidos</Link></li>
            </ul>
          </div>

          {/* Column 4: Social — full-width on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="font-bold uppercase tracking-widest text-[10px] mb-3">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/eldrago.embutidos/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#9a0021] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#9a0021] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.18h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.33 5.98 7.66V24h-5V15.5c0-2.03-.04-4.65-2.83-4.65-2.84 0-3.27 2.22-3.27 4.51V24h-5V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#9a0021]/10 pt-4 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-center gap-2">
          <p>© 2024 Embutidos El Drago. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <span className="text-purple-500">💜</span> por{' '}
            <a 
              href="https://untitledtechcompany.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline transition-all"
            >
              UNTITLED TECH COMPANY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
