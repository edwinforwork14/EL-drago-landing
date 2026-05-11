import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-primary dark:bg-primary text-on-primary">
      <nav className="flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto">
        <div className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-primary">
          El Drago
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-label-bold text-label-bold text-secondary-fixed border-b-4 border-secondary-fixed pb-1" href="#">Productos</a>
          <a className="font-label-bold text-label-bold text-on-primary opacity-90 hover:opacity-100 transition-opacity hover:text-secondary-fixed" href="#">Recetas</a>
          <a className="font-label-bold text-label-bold text-on-primary opacity-90 hover:opacity-100 transition-opacity hover:text-secondary-fixed" href="#">Nosotros</a>
          <a className="font-label-bold text-label-bold text-on-primary opacity-90 hover:opacity-100 transition-opacity hover:text-secondary-fixed" href="#">Contacto</a>
        </div>
        <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label-bold text-label-bold hover:scale-95 transition-transform">
          Donde Comprar
        </button>
      </nav>
    </header>
  );
};

export default Header;
