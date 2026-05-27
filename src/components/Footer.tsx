import React from 'react';
import Link from 'next/link';

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
            <img 
              src="/hero-logo/logodrago.png" 
              alt="El Drago" 
              className="w-32 md:w-36 h-auto"
            />
            <p className="font-medium text-xs md:text-sm leading-relaxed max-w-[180px]">
              El sabor que atrapa,<br />
              la calidad que confías.
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
                <i className="fa-brands fa-instagram"></i>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/eldrago.embutidos" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#9a0021] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/eldrago_embutidos" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#9a0021] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z"></path>
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
