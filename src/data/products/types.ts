export type Category = 'Ahumados' | 'Frescos' | 'Embutidos';

export type MeatType = 'ave' | 'cerdo' | 'mixto';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string; // filename e.g. `${slug}.png`
  tag?: string;
  category: Category;
  meatType: MeatType;
  [key: string]: unknown;
}

export const CATEGORIES: Category[] = ['Ahumados', 'Frescos', 'Embutidos'];
