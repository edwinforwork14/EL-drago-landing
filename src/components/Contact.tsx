import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="relative w-full overflow-hidden bg-primary py-0">
      {/* Top "Carving" Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[120%] h-[80px] md:h-[120px] fill-[#FCF2E6] -left-[10%]"
        >
          <path d="M0,40 C150,100 350,0 600,60 C850,120 1050,0 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-0">
        <div className="flex flex-col items-center text-center">
          
          {/* Info Section - Centered */}
          <div className="text-white space-y-8 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] uppercase leading-tight tracking-tight mt-8">
              ¿TIENES DUDAS O QUIERES <br className="hidden md:block" />
              <span className="text-secondary-container">DISTRIBUIR NUESTROS PRODUCTOS?</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl font-bold opacity-90">¡Estamos aquí para ayudarte!</p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all group-hover:bg-secondary-container group-hover:text-primary group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <span className="text-lg font-bold tracking-wide">+1 (809) 123-4567</span>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all group-hover:bg-secondary-container group-hover:text-primary group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <span className="text-lg font-bold tracking-wide">info@eldrago.ca</span>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all group-hover:bg-secondary-container group-hover:text-primary group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <span className="text-lg font-bold tracking-wide">Montreal, Canadá</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <a 
                href="https://wa.me/18091234567?text=Hola,%20estoy%20interesado%20en%20sus%20productos%20y%20vengo%20de%20la%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-container text-primary font-black py-4 px-12 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-3 uppercase tracking-widest text-sm"
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
          className="relative block w-[120%] h-[80px] md:h-[120px] fill-[#FCF2E6] -left-[10%]"
        >
          <path d="M0,80 C200,30 400,120 600,70 C800,20 1000,110 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
