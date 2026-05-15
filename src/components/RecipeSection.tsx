"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Recipe {
  id: string;
  title: string;
  category: string;
  image: string;
  time: string;
  difficulty: string;
  description: string;
  ingredients: string[];
  preparation: string[];
}

const recipes: Recipe[] = [
  {
    id: "1",
    title: "Milanesas de Mortadela",
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
      "Fríe hasta que estén doradas y crujientes."
    ],
  },
  {
    id: "2",
    title: "Bruschettas de Pavo Ahumado",
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
      "Termina con los tomates horneados."
    ],
  },
  {
    id: "3",
    title: "Chuletas Ahumadas Glaseadas",
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
      "Vierte la salsa sobre las chuletas y cocina por 2 minutos más."
    ],
  },
  {
    id: "4",
    title: "Arroz Salteado con Jamón Ahumado",
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
      "Incorpora el arroz y mezcla bien con salsa de soya."
    ],
  },
  {
    id: "5",
    title: "Rollitos de Pavo y Crema de Ajoporro",
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
      "Coloca una cucharada del relleno y enrolla cuidadosamente."
    ],
  },
  {
    id: "6",
    title: "Pasta Carbonara El Drago",
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
      "Agrega la mezcla de huevo y queso revolviendo rápidamente."
    ],
  },
];

const RecipeCard = ({ recipe, isVertical, index }: { recipe: Recipe; isVertical?: boolean; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-[32px] cursor-pointer bg-black ${
        isVertical ? "h-[500px] md:h-full" : "h-[450px] md:h-[300px]"
      } w-full`}
    >
      <div className="absolute inset-0 z-0 bg-primary/5 flex items-center justify-center">
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onError={(e) => {
            console.error("Fallo al cargar imagen:", recipe.image);
          }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>

      <div className={`absolute inset-0 z-10 flex flex-col ${isHovered ? 'justify-center' : 'justify-end'} p-6 md:p-10 transition-all duration-500`}>
        {!isVertical && isHovered ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:grid grid-cols-2 gap-10 items-center h-full"
          >
            {/* Left: Title & Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-white font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tight mb-4">
                {recipe.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                {recipe.description}
              </p>
            </div>
            
            {/* Right: Ingredients & Prep */}
            <div className="flex flex-col justify-center border-l border-white/10 pl-10">
              <div className="pb-2 mb-4">
                <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-3 block">Ingredientes</span>
                <div className="flex flex-wrap gap-2">
                  {recipe.ingredients.map((ing, i) => (
                    <span key={i} className="text-[10px] text-white/70 bg-white/10 px-2 py-1 rounded-md border border-white/10">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-3 block">Preparación</span>
                <ul className="space-y-2">
                  {recipe.preparation.map((step, i) => (
                    <li key={i} className="text-white/70 text-[11px] leading-snug flex gap-2">
                      <span className="text-accent font-bold">{i + 1}.</span> {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Default View (Always visible on Mobile, or when not hovered, or for Vertical cards) */}
        <div className={!isVertical && isHovered ? "md:hidden" : ""}>
          <motion.div layout className="mb-4">
            <h3 className="text-white font-[family-name:var(--font-headline)] text-xl md:text-2xl font-bold leading-tight mt-1 uppercase tracking-tight">
              {recipe.title}
            </h3>
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="pr-2"
              >
                <p className="text-white/90 text-xs md:text-sm mb-4 leading-relaxed font-light">
                  {recipe.description}
                </p>
                
                <div className="space-y-6">
                  <div className="mb-4">
                    <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-2 block">Ingredientes</span>
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((ing, i) => (
                        <span key={i} className="text-[10px] text-white/70 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-accent text-[10px] tracking-widest uppercase font-bold mb-2 block">Preparación</span>
                    <ul className="space-y-2">
                      {recipe.preparation.map((step, i) => (
                        <li key={i} className="text-white/70 text-[11px] leading-snug flex gap-2">
                          <span className="text-accent font-bold">{i + 1}.</span> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const RecipeSection = () => {
  return (
    <section id="recipes" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-dark font-body text-sm md:text-base uppercase tracking-[0.3em] font-bold block mb-4"
            >
              Inspiración Gourmet
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[4.5rem] md:text-[9rem] font-luckiest-guy text-primary-dark tracking-tighter leading-[0.8] mb-4 md:mb-6 uppercase"
            >
              EL ARTE DE <br /> <span className="text-primary font-mr-dafoe normal-case text-[5.5rem] md:text-[11rem] -rotate-2 inline-block md:-mt-4">Saborear</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xs"
          >
            <p className="text-primary-dark/60 text-lg font-light leading-relaxed mb-6">
              Descubre recetas exclusivas diseñadas por nuestros maestros para elevar cada bocado a una experiencia editorial.
            </p>
            <div className="h-[2px] w-24 bg-primary" />
          </motion.div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {/* Fila 1: H1 (Col 1-2), V1 (Col 3, Row 1-2) */}
          <div className="md:col-span-2">
            <RecipeCard recipe={recipes[0]} index={0} />
          </div>
          <div className="md:col-span-1 md:row-span-2">
            <RecipeCard recipe={recipes[1]} isVertical index={1} />
          </div>

          {/* Fila 2: H2 (Col 1-2) */}
          <div className="md:col-span-2">
            <RecipeCard recipe={recipes[2]} index={2} />
          </div>

          {/* Fila 3: V2 (Col 1, Row 3-4), H3 (Col 2-3, Row 3) */}
          <div className="md:col-span-1 md:row-span-2">
            <RecipeCard recipe={recipes[3]} isVertical index={3} />
          </div>
          <div className="md:col-span-2">
            <RecipeCard recipe={recipes[4]} index={4} />
          </div>
          
          {/* Fila 4: H4 (Col 2-3, Row 4) */}
          <div className="md:col-span-2">
            <RecipeCard recipe={recipes[5]} index={5} />
          </div>

          {/* Fila 5: CTA Panorámico (Full width) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 flex flex-col md:flex-row items-center justify-between bg-primary-dark rounded-[32px] p-8 md:p-12 text-white group relative overflow-hidden mt-4"
          >
            {/* Background Accent Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="max-w-2xl relative z-10 text-center md:text-left mb-8 md:mb-0">
              <h4 className="font-[family-name:var(--font-luckiest-guy)] text-3xl md:text-6xl uppercase tracking-tighter mb-4 leading-none">
                ENVÍANOS TU <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.5rem] md:text-[5.5rem] -rotate-2 inline-block">Receta</span>
              </h4>
              <p className="text-white/60 text-sm md:text-xl font-light mb-0">
                Comparte tu toque especial. Envíanos tu creación con productos El Drago y forma parte de nuestra selección gourmet.
              </p>
            </div>

            <motion.a
              href="mailto:recetas@eldrago.com?subject=Mi%20Receta%20Gourmet%20-%20El%20Drago&body=Hola%20equipo%20El%20Drago,%0A%0AQuiero%20compartir%20mi%20receta%20utilizando%20sus%20productos.%0A%0ANombre%20de%20la%20receta:%20%0AIngredientes:%20%0APreparación:%20%0A%0A¡Espero%20que%20les%20guste!"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white transition-all duration-300 flex items-center gap-3 relative z-10 shadow-xl"
            >
              <span className="material-symbols-outlined">mail</span>
              Enviar por Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
