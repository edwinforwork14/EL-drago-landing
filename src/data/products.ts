export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: string;
  category: string;
}

export const CATEGORIES = [
  "Jamones de Cerdo",
  "Jamones de Ave",
  "Embutidos Artesanales",
  "Ahumados",
  "Especialidades Gourmet"
];

export const products: Product[] = [
  // Jamones de Cerdo
  {
    id: "cerdo-1",
    name: "Jamón Cocido de Pierna",
    description: "Suave, jugoso y seleccionado de las mejores piezas. Calidad premium superior.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzHGJh40hGr2OYfPHW9-6LL7gzAPAc-ESPp61aFTYs6MlfDZXSHRxUBtH84wQtAj-7HyCnMEjU96wUjIEI13LCPczwX12VNPATcqhU-TdWwg7XM4kVXGUy3x4jTDPTT7vSP1d8kd_6G4JZYkAVr0Z5M1ic68tPllAN6U7ew-TyXtQUhxvWutXuTaH3zzg1KIoZmqUfjdbAG8HeZFTRE1UVuLtVMdbBm2_L7WEXAzUIyFfPY-Ug_zkBqHB2yJE2J_738lfgu1m9KDE",
    tag: "Premium",
    category: "Jamones de Cerdo"
  },
  {
    id: "cerdo-2",
    name: "Jamón Estilo Artesanal",
    description: "Tradición y sabor en cada rebanada. Receta familiar guardada por generaciones.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP0vZQ-PGdUkCYL-oakKxEM9do29_aT8wmfK44rvYdJPruAK4p7SV7AMvUG1xDa_GbdcpUJiELetD2d06I0C_veOGxWQ4LBDh6DtfrzSyLtl2GdJfRT6_xnzbv5Rxaj2Ku3yNPtzTLf8jlud5n96SS7cuhC2A4U_F5-PyeduS9bsh4lrrM1dswK7rEa4-1xVs5r_BwZeOHykwYjjDTIBrLs9LR1ZkBp1uVc92g0JVJuytAbsm9rQ2hJAbIs3T4MJH9YvqzWXBTlwc",
    tag: "Artesanal",
    category: "Jamones de Cerdo"
  },
  {
    id: "cerdo-3",
    name: "Jamón Virginia",
    description: "Equilibrio perfecto entre dulzura y salinidad. Ideal para sándwiches gourmet.",
    image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=800",
    tag: "Clásico",
    category: "Jamones de Cerdo"
  },
  {
    id: "cerdo-4",
    name: "Jamón Ahumado Premium",
    description: "Ahumado lentamente con maderas nobles para un aroma y sabor inigualables.",
    image: "https://images.unsplash.com/photo-1624246441580-b82b6ac80523?auto=format&fit=crop&q=80&w=800",
    tag: "Ahumado",
    category: "Jamones de Cerdo"
  },

  // Jamones de Ave
  {
    id: "ave-1",
    name: "Pechuga de Pavo",
    description: "Ligera, deliciosa y perfecta para una alimentación balanceada y saludable.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPXQ6OXvIGz02TqeAAYzEZDJr0_3moB7-Yo9Jy25BWkTSO9Tg3tF3MnbVEYzEaebwKKKwNJQI-f6u3BMkagX0mHBZGl1P8mF3DtuQOviO9nSg-FH9UyhjAL10QIOitXOqps55xtKpEuV0-WJDL7yS9YvrxNqoZgXris9TxBWbhNNcqg_5hvSIYc2bDomXjGVq-1B9QRV9UtCkZKm8nd_1fSFiJH9MkU8_yw8mn4iQSwhXqHs1_rp49WF1EMPdiTveWwbrcwcElVE",
    tag: "Saludable",
    category: "Jamones de Ave"
  },
  {
    id: "ave-2",
    name: "Jamón de Pollo Ahumado",
    description: "Sabor suave de pollo con un toque ahumado sutil. Perfecto para ensaladas.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800",
    tag: "Ligero",
    category: "Jamones de Ave"
  },
  {
    id: "ave-3",
    name: "Pechuga de Pavo con Hierbas",
    description: "Seleccionada con finas hierbas para un perfil de sabor mediterráneo.",
    image: "https://images.unsplash.com/photo-1627485750519-9486c449f874?auto=format&fit=crop&q=80&w=800",
    tag: "Nuevo",
    category: "Jamones de Ave"
  },

  // Embutidos Artesanales
  {
    id: "art-1",
    name: "Chorizo Riojano",
    description: "Condimentado con especias tradicionales y curado al aire para un sabor potente.",
    image: "https://images.unsplash.com/photo-1624246441580-b82b6ac80523?auto=format&fit=crop&q=80&w=800",
    tag: "Gourmet",
    category: "Embutidos Artesanales"
  },
  {
    id: "art-2",
    name: "Salchichón de la Casa",
    description: "Textura firme y sabor equilibrado con pimienta negra entera.",
    image: "https://images.unsplash.com/photo-1608475249435-8b91171d2042?auto=format&fit=crop&q=80&w=800",
    tag: "Tradición",
    category: "Embutidos Artesanales"
  },
  {
    id: "art-3",
    name: "Longaniza Especial",
    description: "Preparada con cortes seleccionados de cerdo y un toque de pimentón premium.",
    image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=800",
    tag: "Recomendado",
    category: "Embutidos Artesanales"
  },

  // Ahumados
  {
    id: "ahu-1",
    name: "Tocino Ahumado",
    description: "Crujiente y lleno de aroma. Ahumado naturalmente en madera de nogal.",
    image: "https://images.unsplash.com/photo-1606851682839-019b1aaad7ad?auto=format&fit=crop&q=80&w=800",
    tag: "Ahumado",
    category: "Ahumados"
  },
  {
    id: "ahu-2",
    name: "Chuleta Ahumada",
    description: "Cortes gruesos y jugosos con el sabor ahumado característico de El Drago.",
    image: "https://images.unsplash.com/photo-1624246441580-b82b6ac80523?auto=format&fit=crop&q=80&w=800",
    tag: "Top Ventas",
    category: "Ahumados"
  },

  // Especialidades Gourmet
  {
    id: "spec-1",
    name: "Mix de Carnes Frías",
    description: "La selección perfecta para tus tablas de embutidos y reuniones especiales.",
    image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=800",
    tag: "Gourmet",
    category: "Especialidades Gourmet"
  },
  {
    id: "spec-2",
    name: "Pate de Campaña",
    description: "Textura cremosa y sabor profundo. El acompañamiento ideal para vinos tintos.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800",
    tag: "Especialidad",
    category: "Especialidades Gourmet"
  }
];
