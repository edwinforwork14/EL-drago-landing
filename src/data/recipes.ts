export interface Recipe {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  time: string;
  difficulty: string;
  description: string;
  ingredients: string[];
  preparation: string[];
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Milanesas de Mortadela",
    slug: "milanesas-de-mortadela",
    category: "Almuerzo Crujiente",
    image: "/imagenes/IMG_0125.PNG",
    time: "20 min",
    difficulty: "Fácil",
    description: "Una receta diferente, crujiente y perfecta para cualquier almuerzo. El sabor de nuestra Mortadela Tipo Superior elevado al máximo.",
    ingredients: ["Mortadela El Drago", "Pan rallado", "Queso parmesano", "Huevos", "Orégano"],
    preparation: [
      "Mezcla el pan rallado con queso parmesano y orégano.",
      "Pasa cada rebanada de Mortadela El Drago por huevo batido.",
      "Cubre con la mezcla de pan rallado.",
      "Fríe hasta que estén doradas y crujientes.",
    ],
  },
  {
    id: "2",
    title: "Bruschettas de Pavo Ahumado",
    slug: "bruschettas-de-pavo-ahumado",
    category: "Snack Gourmet",
    image: "/imagenes/IMG_0126.PNG",
    time: "15 min",
    difficulty: "Fácil",
    description: "Un snack sencillo y visualmente irresistible con el toque ahumado de nuestra pechuga de pavo premium.",
    ingredients: ["Pavo Ahumado El Drago", "Baguette", "Tomates Cherry", "Ajo", "Aceite de oliva"],
    preparation: [
      "Hornea los tomates con ajo y aceite de oliva hasta que estén suaves.",
      "Tuesta las rebanadas de pan.",
      "Unta queso crema si deseas.",
      "Coloca una lonja de Pechuga de Pavo Ahumada El Drago sobre el pan.",
      "Termina con los tomates horneados.",
    ],
  },
  {
    id: "3",
    title: "Chuletas Ahumadas Glaseadas",
    slug: "chuletas-ahumadas-glaseadas",
    category: "Cena Premium",
    image: "/imagenes/IMG_0127.PNG",
    time: "25 min",
    difficulty: "Media",
    description: "El equilibrio perfecto entre el sabor ahumado y el dulzor del papelón y limón. Una experiencia agridulce única.",
    ingredients: ["Chuletas El Drago", "Papelón rallado", "Limón", "Mantequilla", "Agua"],
    preparation: [
      "Cocina las Chuletas Ahumadas El Drago hasta que estén doradas.",
      "Mezcla el papelón, el agua y el limón hasta formar un melao espeso.",
      "Agrega la mantequilla para dar brillo y textura.",
      "Vierte la salsa sobre las chuletas y cocina por 2 minutos más.",
    ],
  },
  {
    id: "4",
    title: "Arroz Salteado con Jamón Ahumado",
    slug: "arroz-salteado-con-jamon-ahumado",
    category: "Plato Principal",
    image: "/imagenes/IMG_0128.PNG",
    time: "30 min",
    difficulty: "Media",
    description: "Una mezcla de vegetales y arroz con el sabor protagonista del Jamón Ahumado El Drago. Nutritivo y delicioso.",
    ingredients: ["Jamón Ahumado El Drago", "Arroz blanco", "Pimentón", "Zanahoria", "Salsa de soya"],
    preparation: [
      "Corta el jamón y los vegetales en cubos pequeños.",
      "Sofríe los vegetales hasta que estén ligeramente dorados.",
      "Agrega el Jamón Ahumado El Drago y cocina por unos minutos.",
      "Incorpora el arroz y mezcla bien con salsa de soya.",
    ],
  },
  {
    id: "5",
    title: "Rollitos de Pavo y Crema de Ajoporro",
    slug: "rollitos-de-pavo-y-crema-de-ajoporro",
    category: "Entrante Ligero",
    image: "/imagenes/IMG_0129.PNG",
    time: "20 min",
    difficulty: "Fácil",
    description: "Una opción fresca, ligera y elegante para compartir. Rollitos rellenos de una suave crema de ajoporro y queso.",
    ingredients: ["Jamón de Pavo El Drago", "Queso crema", "Ajoporro", "Cebollín", "Pimienta"],
    preparation: [
      "Pica el ajoporro finamente y sofríelo hasta que esté suave.",
      "Mezcla el ajoporro con el queso crema y la pimienta.",
      "Extiende las lonjas de Jamón de Pavo El Drago.",
      "Coloca una cucharada del relleno y enrolla cuidadosamente.",
    ],
  },
  {
    id: "6",
    title: "Pasta Carbonara El Drago",
    slug: "pasta-carbonara-el-drago",
    category: "Clásico Italiano",
    image: "/imagenes/IMG_0130.PNG",
    time: "25 min",
    difficulty: "Media",
    description: "Receta cremosa y llena de sabor usando el toque ahumado y crocante de nuestra Tocineta premium.",
    ingredients: ["Tocineta El Drago", "Pasta larga", "Yemas de huevo", "Queso parmesano", "Pimienta negra"],
    preparation: [
      "Corta la Tocineta El Drago en trozos y cocínala hasta que esté dorada.",
      "Mezcla las yemas, el queso parmesano y la pimienta negra.",
      "Une la pasta caliente con la tocineta.",
      "Agrega la mezcla de huevo y queso revolviendo rápidamente.",
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRecipeSlug(title: string): string {
  return title
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
