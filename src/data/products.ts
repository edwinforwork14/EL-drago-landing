export type Category = 'Ahumados' | 'Frescos' | 'Embutidos';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string; // filename e.g. `${slug}.png`
  tag?: string;
  category: Category;
  [key: string]: unknown;
}

export const CATEGORIES: Category[] = ['Ahumados', 'Frescos', 'Embutidos'];

export const products: Product[] = [
  // Ahumados (formerly Jamones, Tocinetas, Chuletas, Espaldas Ahumadas)
  {
    id: 'jam-1',
    name: 'Jamón Gourmet Selección',
    description: 'Nuestra pieza más exclusiva, curada con procesos tradicionales para un sabor inigualable.',
    image: 'page-0003.png',
    tag: 'Premium',
    category: 'Ahumados',
    peso: '1.2 kg',
    caducidad: '12 meses',
  },
  {
    id: 'jam-2',
    name: 'Jamón Tradicional',
    description: 'Sabor auténtico y textura perfecta para acompañar tus mejores momentos familiares.',
    image: 'page-0004.png',
    category: 'Ahumados',
    peso: '1 kg',
    caducidad: '12 meses',
  },
  {
    id: 'jam-3',
    name: 'Jamón Especial El Drago',
    description: 'El equilibrio perfecto entre suavidad y carácter artesanal.',
    image: 'page-0005.png',
    category: 'Ahumados',
    peso: '900 g',
    caducidad: '10 meses',
  },
  {
    id: 'jam-4',
    name: 'Jamón Cocido Superior',
    description: 'Textura delicada y sabor puro, elaborado con los más altos estándares.',
    image: 'page-0011.png',
    category: 'Ahumados',
    peso: '1 kg',
    caducidad: '12 meses',
  },
  // Frescos (formerly Pechugas Cocidas)
  {
    id: 'pech-1',
    name: 'Pechuga de Pavo Especial',
    description: 'Seleccionada y cocida lentamente para preservar toda su jugosidad y valor nutricional.',
    image: 'page-0008.png',
    tag: 'Saludable',
    category: 'Frescos',
    peso: '500 g',
    caducidad: '30 días (refrigerado)',
  },
  {
    id: 'pech-2',
    name: 'Pechuga de Pollo Premium',
    description: 'Sabor suave y natural, ideal para una alimentación balanceada.',
    image: 'page-0009.png',
    category: 'Frescos',
    peso: '400 g',
    caducidad: '30 días (refrigerado)',
  },
  {
    id: 'pech-3',
    name: 'Pechuga de Pavo Gourmet',
    description: 'Finas lonjas de pechuga seleccionada con el sello de calidad El Drago.',
    image: 'page-0010.png',
    category: 'Frescos',
    peso: '500 g',
    caducidad: '30 días (refrigerado)',
  },
  // Embutidos (formerly Mortadelas, Fiambres)
  {
    id: 'mort-1',
    name: 'Mortadela Especial',
    description: 'Clásica receta italiana con el toque único de El Drago.',
    image: 'page-0007.png',
    category: 'Embutidos',
    peso: '250 g',
    caducidad: '9 meses',
  },
  {
    id: 'mort-2',
    name: 'Mortadela Gourmet',
    description: 'Selección de carnes finas condimentadas a la perfección.',
    image: 'page-0012.png',
    category: 'Embutidos',
    peso: '250 g',
    caducidad: '9 meses',
  },
  {
    id: 'fiam-1',
    name: 'Fiambre de la Casa',
    description: 'Una mezcla magistral de sabores tradicionales para tus tablas gourmet.',
    image: 'page-0013.png',
    tag: 'Tradicional',
    category: 'Embutidos',
    peso: '300 g',
    caducidad: '9 meses',
  },
  // Additional PNG products (mapped to appropriate categories)
  {
    id: 'jam-5',
    name: 'Jamón de Espalda Cocido Estándar',
    description: 'Jamón cocido de excelente calidad, preparado con un proceso que conserva su sabor natural y su textura tierna en cada rebanada.',
    image: 'JAMON (1).png',
    category: 'Ahumados',
    peso: '1 kg',
    caducidad: '12 meses',
  },
  {
    id: 'jam-6',
    name: 'Jamón Cocido Superior',
    description: 'Jamón premium elaborado con cortes seleccionados, de sabor delicado y textura suave. Ideal para quienes buscan calidad y frescura.',
    image: 'JAMON.png',
    category: 'Ahumados',
    peso: '1.1 kg',
    caducidad: '12 meses',
  },
  {
    id: 'fiam-2',
    name: 'Fiambre de Cerdo',
    description: 'Fiambre elaborado con carne de cerdo seleccionada, de textura suave y sabor equilibrado. Perfecto para sándwiches, desayunos y picaderas.',
    image: 'JAMON (5).png',
    category: 'Embutidos',
    peso: '300 g',
    caducidad: '9 meses',
  },
  {
    id: 'esp-2',
    name: 'Espalda de Cerdo Ahumada',
    description: 'Corte de cerdo cuidadosamente ahumado para lograr un sabor intenso, jugoso y tradicional. Ideal para acompañar comidas familiares y recetas especiales.',
    image: 'JAMON (6).png',
    category: 'Ahumados',
    peso: '1.3 kg',
    caducidad: '12 meses',
  },
  {
    id: 'mort-3',
    name: 'Mortadela Extra',
    description: 'Mortadela de sabor tradicional y textura cremosa, preparada con ingredientes cuidadosamente seleccionados para un gusto auténtico.',
    image: 'JAMON (4).png',
    category: 'Embutidos',
    peso: '250 g',
    caducidad: '9 meses',
  },
  {
    id: 'mort-4',
    name: 'Mortadela Tipo Superior',
    description: 'Versión superior de mortadela, con una receta especial que ofrece mayor suavidad, sabor y calidad en cada porción.',
    image: 'page-0007.png',
    category: 'Embutidos',
    peso: '250 g',
    caducidad: '9 meses',
  },
  {
    id: 'pech-4',
    name: 'Pechuga de Pavo Cocido Superior',
    description: 'Pechuga de pavo cocida de alta calidad, baja en grasa y con un sabor suave y delicioso. Perfecta para comidas ligeras y saludables.',
    image: 'JAMON (2).png',
    category: 'Frescos',
    peso: '700 g',
    caducidad: '30 días (refrigerado)',
  },
  {
    id: 'pech-5',
    name: 'Pechuga de Pollo Cocido',
    description: 'Pechuga de pollo cocida y lista para disfrutar, con textura tierna y sabor natural. Ideal para sándwiches, ensaladas y recetas rápidas.',
    image: 'JAMON (3).png',
    category: 'Frescos',
    peso: '400 g',
    caducidad: '30 días (refrigerado)',
  },
  {
    id: 'pech-6',
    name: 'Pechuga de Pavo Ahumada',
    description: 'Pechuga de pavo con un delicado toque ahumado que resalta su sabor y aroma. Una opción deliciosa y versátil para cualquier ocasión.',
    image: 'JAMON(9).png',
    category: 'Frescos',
    peso: '500 g',
    caducidad: '30 días (refrigerado)',
  },
];
