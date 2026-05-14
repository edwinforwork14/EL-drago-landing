export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: string;
  category: string;
}

export const CATEGORIES = [
  "Jamones",
  "Pechugas Cocidas",
  "Mortadelas",
  "Fiambres",
  "Tocinetas",
  "Ahumados",
  "Chuletas",
  "Espaldas Ahumadas"
];

export const products: Product[] = [
  // Jamones
  {
    id: "jam-1",
    name: "Jamón Gourmet Selección",
    description: "Nuestra pieza más exclusiva, curada con procesos tradicionales para un sabor inigualable.",
    image: "/productos/jamones/page-0003.jpg",
    tag: "Premium",
    category: "Jamones"
  },
  {
    id: "jam-2",
    name: "Jamón Tradicional",
    description: "Sabor auténtico y textura perfecta para acompañar tus mejores momentos familiares.",
    image: "/productos/jamones/page-0004.jpg",
    category: "Jamones"
  },
  {
    id: "jam-3",
    name: "Jamón Especial El Drago",
    description: "El equilibrio perfecto entre suavidad y carácter artesanal.",
    image: "/productos/jamones/page-0005.jpg",
    category: "Jamones"
  },
  {
    id: "jam-4",
    name: "Jamón Cocido Superior",
    description: "Textura delicada y sabor puro, elaborado con los más altos estándares.",
    image: "/productos/jamones/page-0011.jpg",
    category: "Jamones"
  },

  // Pechugas Cocidas
  {
    id: "pech-1",
    name: "Pechuga de Pavo Especial",
    description: "Seleccionada y cocida lentamente para preservar toda su jugosidad y valor nutricional.",
    image: "/productos/pechugas-cosidas/page-0008.jpg",
    tag: "Saludable",
    category: "Pechugas Cocidas"
  },
  {
    id: "pech-2",
    name: "Pechuga de Pollo Premium",
    description: "Sabor suave y natural, ideal para una alimentación balanceada.",
    image: "/productos/pechugas-cosidas/page-0009.jpg",
    category: "Pechugas Cocidas"
  },
  {
    id: "pech-3",
    name: "Pechuga de Pavo Gourmet",
    description: "Finas lonjas de pechuga seleccionada con el sello de calidad El Drago.",
    image: "/productos/pechugas-cosidas/page-0010.jpg",
    category: "Pechugas Cocidas"
  },

  // Mortadelas
  {
    id: "mort-1",
    name: "Mortadela Especial",
    description: "Clásica receta italiana con el toque único de El Drago.",
    image: "/productos/mortadelas/page-0007.jpg",
    category: "Mortadelas"
  },
  {
    id: "mort-2",
    name: "Mortadela Gourmet",
    description: "Selección de carnes finas condimentadas a la perfección.",
    image: "/productos/mortadelas/page-0012.jpg",
    category: "Mortadelas"
  },

  // Fiambres
  {
    id: "fiam-1",
    name: "Fiambre de la Casa",
    description: "Una mezcla magistral de sabores tradicionales para tus tablas gourmet.",
    image: "/productos/fiambres/page-0013.jpg",
    tag: "Tradicional",
    category: "Fiambres"
  },

  // Tocinetas
  {
    id: "toc-1",
    name: "Tocineta Ahumada",
    description: "Crujiente y aromática, ahumada naturalmente para un sabor intenso.",
    image: "/productos/tocinetas/page-0015.jpg",
    tag: "Favorito",
    category: "Tocinetas"
  },

  // Ahumados
  {
    id: "ahu-1",
    name: "Ahumados Selección",
    description: "La maestría del ahumado natural en cada bocado.",
    image: "/productos/ahumados/page-0017.jpg",
    tag: "Especialidad",
    category: "Ahumados"
  },

  // Chuletas
  {
    id: "chul-1",
    name: "Chuleta Ahumada Premium",
    description: "Carne tierna y jugosa con el aroma inconfundible del ahumado artesanal.",
    image: "/productos/chuletas/page-0018.jpg",
    category: "Chuletas"
  },

  // Espaldas Ahumadas
  {
    id: "esp-1",
    name: "Espalda Ahumada",
    description: "Sabor profundo y textura firme, una delicia para los amantes de lo auténtico.",
    image: "/productos/espaldas-ahumadas/page-0019.jpg",
    category: "Espaldas Ahumadas"
  }
];
