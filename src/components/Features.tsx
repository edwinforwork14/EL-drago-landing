import React from 'react';

const Features = () => {
  return (
    <section id="nosotros" className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto -mt-24 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-xl flex flex-col items-center text-center border-b-8 border-secondary-fixed hover:-translate-y-2 transition-transform">
          <span className="material-symbols-outlined text-primary text-6xl mb-4">workspace_premium</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">+20 PRODUCTOS</h3>
          <p className="font-body-md text-on-surface-variant">Variedad excepcional para todos los gustos y momentos del día.</p>
        </div>
        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-xl flex flex-col items-center text-center border-b-8 border-primary hover:-translate-y-2 transition-transform">
          <span className="material-symbols-outlined text-primary text-6xl mb-4">favorite</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">HECHOS CON PASIÓN</h3>
          <p className="font-body-md text-on-surface-variant">Procesos tradicionales que aseguran el sabor más auténtico.</p>
        </div>
        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-xl flex flex-col items-center text-center border-b-8 border-secondary-fixed hover:-translate-y-2 transition-transform">
          <span className="material-symbols-outlined text-primary text-6xl mb-4">verified</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">CALIDAD QUE CONFÍAS</h3>
          <p className="font-body-md text-on-surface-variant">Selección rigurosa de ingredientes para garantizar excelencia.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
