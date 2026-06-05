import { ahumados } from './products/ahumados';
import { frescos } from './products/frescos';
import { embutidos } from './products/embutidos';

export type { Category, MeatType, Product } from './products/types';
export { CATEGORIES } from './products/types';
export { ahumados, frescos, embutidos };

export const products = [...ahumados, ...frescos, ...embutidos];
