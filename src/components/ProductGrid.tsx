import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      name: "Jamón Cocido",
      label: "DE PIERNA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzHGJh40hGr2OYfPHW9-6LL7gzAPAc-ESPp61aFTYs6MlfDZXSHRxUBtH84wQtAj-7HyCnMEjU96wUjIEI13LCPczwX12VNPATcqhU-TdWwg7XM4kVXGUy3x4jTDPTT7vSP1d8kd_6G4JZYkAVr0Z5M1ic68tPllAN6U7ew-TyXtQUhxvWutXuTaH3zzg1KIoZmqUfjdbAG8HeZFTRE1UVuLtVMdbBm2_L7WEXAzUIyFfPY-Ug_zkBqHB2yJE2J_738lfgu1m9KDE"
    },
    {
      name: "Pechuga de Pavo",
      label: "EXTRA FINA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPXQ6OXvIGz02TqeAAYzEZDJr0_3moB7-Yo9Jy25BWkTSO9Tg3tF3MnbVEYzEaebwKKKwNJQI-f6u3BMkagX0mHBZGl1P8mF3DtuQOviO9nSg-FH9UyhjAL10QIOitXOqps55xtKpEuV0-WJDL7yS9YvrxNqoZgXris9TxBWbhNNcqg_5hvSIYc2bDomXjGVq-1B9QRV9UtCkZKm8nd_1fSFiJH9MkU8_yw8mn4iQSwhXqHs1_rp49WF1EMPdiTveWwbrcwcElVE"
    },
    {
      name: "Jamón Artesanal",
      label: "ESTILO AHUMADO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP0vZQ-PGdUkCYL-oakKxEM9do29_aT8wmfK44rvYdJPruAK4p7SV7AMvUG1xDa_GbdcpUJiELetD2d06I0C_veOGxWQ4LBDh6DtfrzSyLtl2GdJfRT6_xnzbv5Rxaj2Ku3yNPtzTLf8jlud5n96SS7cuhC2A4U_F5-PyeduS9bsh4lrrM1dswK7rEa4-1xVs5r_BwZeOHykwYjjDTIBrLs9LR1ZkBp1uVc92g0JVJuytAbsm9rQ2hJAbIs3T4MJH9YvqzWXBTlwc"
    }
  ];

  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display-lg text-headline-lg text-primary uppercase mb-4">Nuestros Destacados</h2>
        <div className="h-2 w-48 bg-secondary-fixed mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <div key={index} className="relative group">
            <div className="bg-surface-container p-8 pt-24 rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow relative z-0 mt-20">
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full px-4 z-10 transition-transform duration-500 group-hover:scale-110">
                <img 
                  className="w-full aspect-square object-cover organic-border border-4 border-on-primary shadow-xl" 
                  src={product.image} 
                  alt={product.name}
                />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary uppercase mb-2">{product.name}</h4>
              <p className="text-on-surface-variant font-label-bold mb-6">{product.label}</p>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-bold hover:bg-primary-container transition-colors">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
