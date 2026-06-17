import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contacto" className="relative w-full overflow-hidden bg-black py-0">
      {/* Top "Carving" Wave (Continuation from AboutUs) */}
      <div className="absolute top-0 left-0 w-full leading-[0] z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          overflow="visible"
          className="relative block w-[120%] h-[40px] md:h-[60px] fill-[#C41A1E] -left-[10%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] -scale-x-100"
        >
          <path d="M0,20 C200,160 400,-20 600,100 C800,200 1000,-30 1200,20 L1200,0 L0,0 Z"></path>
        </svg>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-logo/cambion-drago.jpg"
          alt="Distribución El Drago"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* Subtle dark gradient: left → center */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <div className="w-full ml-0 pl-6 md:pl-16 pr-5 md:pr-10 pt-[100px] md:pt-[180px] pb-32 md:pb-48 relative z-20">
        <div className="flex flex-col items-start text-left">
          <div className="text-white space-y-5 max-w-3xl w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline-lg text-headline-lg uppercase leading-tight tracking-tight">
              <span className="text-[#FEC70C] font-headline-lg text-headline-lg">¿QUIERES DISTRIBUIR NUESTROS PRODUCTOS?</span>
            </h2>

            <p className="text-base font-bold opacity-90">¡Estamos aquí para ayudarte!</p>

            {/* Contact info — stack vertical on mobile, row on md+ */}
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-3 md:gap-6 w-full">
              {[
                // { icon: 'call', text: '+1 (809) 123-4567' },//
                { icon: 'mail', text: 'mercadeo@embutidoseldrago.com' },
                { icon: 'location_on', text: 'valencia, carabobo' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 group w-full md:w-auto">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-[#FCF2E6]/10 flex items-center justify-center transition-all group-hover:bg-secondary-container group-hover:text-primary group-hover:scale-110">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                  <span className="text-sm font-bold tracking-wide text-left">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA — full width mobile */}
            <div className="pt-2 w-full flex justify-start">
              <a
                href="https://wa.me/18091234567?text=Hola,%20estoy%20interesado%20en%20sus%20productos%20y%20vengo%20de%20la%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-secondary-container text-primary font-black py-3 px-8 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs min-h-[44px]"
              >
                Escríbenos ahora
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom "Carving" Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[120%] h-[40px] md:h-[60px] fill-[#FCF2E6] -left-[10%]"
        >
          <path d="M0,110 C200,0 400,130 600,40 C800,-10 1000,130 1200,110 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
