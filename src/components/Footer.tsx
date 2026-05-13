import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#FCF2E6] text-[#9a0021] pt-20 pb-8 overflow-hidden">
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo & Slogan — full width on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <img 
              src="/images/logodrago.png" 
              alt="El Drago Logo" 
              className="w-28 md:w-36 h-auto"
            />
            <p className="font-medium text-sm md:text-base leading-relaxed max-w-[200px]">
              El sabor que atrapa,<br />
              la calidad que confías.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-1 font-medium text-sm w-full">
              <li><a href="#productos" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Productos</a></li>
              <li><a href="#recetas" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Recetas</a></li>
              <li><a href="#nosotros" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Nosotros</a></li>
              <li><a href="#donde-comprar" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Dónde comprar</a></li>
              <li><a href="#contacto" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Categorías</h3>
            <ul className="space-y-1 font-medium text-sm w-full">
              <li><a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Jamón Cocido</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Pechuga de Pavo</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Jamón Artesanal</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-2 py-2"><span className="text-[6px]">●</span> Otros Embutidos</a></li>
            </ul>
          </div>

          {/* Column 4: Social — full-width on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#9a0021] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <i className="fa-brands fa-instagram"></i>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#9a0021] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#9a0021] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.032 2.617-.023 3.91-.006 1.36.016 2.71.049 4.06.103 1.34.054 2.63.153 3.67.433 1.04.28 1.88.731 2.54 1.391.66.66 1.111 1.5 1.391 2.54.28 1.04.379 2.33.433 3.67.054 1.35.087 2.7.103 4.06.017 1.293.026 2.6.006 3.91-.02 1.31-.023 2.617-.006 3.91.016 1.36.049 2.71.103 4.06.054 1.34.153 2.63.433 3.67.28 1.04.731 1.88 1.391 2.54.66.66 1.5 1.111 2.54 1.391 1.04.28 2.33.379 3.67.433 1.35.054 2.7.087 4.06.103 1.293.017 2.6.026 3.91.006 1.31-.02 2.617-.023 3.91-.006 1.36.016 2.71.049 4.06.103 1.34.054 2.63.153 3.67.433 1.04.28 1.88.731 2.54 1.391.66.66 1.111 1.5 1.391 2.54.28 1.04.379 2.33.433 3.67.054 1.35.087 2.7.103 4.06.017 1.293.026 2.6.006 3.91-.02-1.31z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#9a0021]/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 text-center gap-3">
          <p>© 2024 Embutidos El Drago. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">Diseñado con <span className="text-red-600">❤</span> para nuestros clientes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
