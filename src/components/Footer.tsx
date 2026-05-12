import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary mt-12">
      <div id="donde-comprar" className="hidden"></div>
      <div className="w-full rounded-t-xl bg-surface-container-lowest border-t-2 border-outline-variant flex flex-col md:flex-row justify-between items-center py-base px-margin-mobile max-w-container-max mx-auto py-12">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="font-headline-md text-headline-md text-primary mb-4">El Drago</div>
          <div className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            © 2024 El Drago. Delicias que atrapan. <br />
            Hecho con orgullo y tradición.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="font-label-bold text-label-bold uppercase opacity-50 mb-2">Compañía</span>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors" href="#">Privacidad</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors" href="#">Términos</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors" href="#">Soporte</a>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="font-label-bold text-label-bold uppercase opacity-50 mb-2">Productos</span>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors" href="#">Embutidos</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors" href="#">Quesos</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors" href="#">Especialidades</a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-secondary-container rounded-full flex items-center justify-center border-4 border-dashed border-primary mb-4 floating">
            <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
          </div>
          <p className="font-label-bold text-center text-xs uppercase tracking-widest text-primary">Calidad Certificada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
