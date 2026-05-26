import { products, Product, CATEGORIES } from "./products";
import { recipes, Recipe, getRecipeBySlug } from "./recipes";

// ─── URL Slug Generation ────────────────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúñü\s-]/g, "")
    .replace(/[á]/g, "a")
    .replace(/[é]/g, "e")
    .replace(/[í]/g, "i")
    .replace(/[ó]/g, "o")
    .replace(/[ú]/g, "u")
    .replace(/[ñ]/g, "n")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function getProductSlug(product: Product): string {
  return slugify(product.name);
}

// ─── Category URL Mapping ───────────────────────────────────────────

export interface CategoryGroup {
  slug: string;
  label: string;
  description: string;
  subcategories: string[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    slug: "embutidos",
    label: "Embutidos",
    description: "Nuestra selección de embutidos tradicionales con recetas artesanales.",
    subcategories: ["Embutidos", "Jamones", "Mortadelas", "Fiambres"],
  },
  {
    slug: "ahumados",
    label: "Ahumados",
    description: "Productos ahumados con leñas finas para un sabor inconfundible.",
    subcategories: ["Ahumados", "Tocinetas", "Chuletas", "Espaldas Ahumadas"],
  },
  {
    slug: "frescos",
    label: "Frescos",
    description: "Pechugas cocidas y productos frescos para tu mesa.",
    subcategories: ["Frescos", "Pechugas Cocidas"],
  },
];

export function getCategoryGroupBySlug(slug: string): CategoryGroup | undefined {
  return CATEGORY_GROUPS.find((g) => g.slug === slug);
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  const group = getCategoryGroupBySlug(categorySlug);
  if (!group) return [];
  return products.filter((p) => group.subcategories.includes(p.category));
}

export function getAllProductsSlugged(): Array<Product & { slug: string }> {
  const slugMap = new Map<string, number>();
  return products.map((p) => {
    let slug = getProductSlug(p);
    if (slugMap.has(slug)) {
      const count = slugMap.get(slug)! + 1;
      slugMap.set(slug, count);
      slug = `${slug}-${count}`;
    } else {
      slugMap.set(slug, 0);
    }
    return { ...p, slug };
  });
}

export function getProductBySlug(slug: string): (Product & { slug: string }) | undefined {
  return getAllProductsSlugged().find((p) => p.slug === slug);
}

export function getCategorySlugForProduct(product: Product): string | undefined {
  const group = CATEGORY_GROUPS.find((g) => g.subcategories.includes(product.category));
  return group?.slug;
}

// ─── Re-export for convenience ──────────────────────────────────────

export { products, CATEGORIES, recipes, getRecipeBySlug };
export type { Product, Recipe };
