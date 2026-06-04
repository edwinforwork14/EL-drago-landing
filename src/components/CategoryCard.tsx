"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CategoryGroup } from "@/data/utils";

interface CategoryCardProps {
  group: CategoryGroup;
  index: number;
  image?: string;
}

// CategoryCard: display image + category name

const placeholderImages: Record<string, string> = {
  embutidos: "/imagenes/jamon.jpg",
  ahumados: "/imagenes/ahumados.jpg",
  frescos: "/imagenes/frescos.jpg",
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  group,
  index,
  image,
}) => {
  const imgSrc = image || placeholderImages[group.slug] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: index === 1 ? 3 : -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: 0.15 * index,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        h-[360px]
        sm:h-[400px]
        md:h-[440px]
        lg:h-[480px]
        w-full
        overflow-hidden
        rounded-lg
        md:rounded-xl
        cursor-pointer
        border-2
        border-transparent
        hover:border-accent/40
        shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
        hover:shadow-[0_0_30px_rgba(254,199,12,0.15)]
        transition-all
        duration-700
      "
    >
      {/* Inner Glow Ring */}
      <div className="absolute inset-1.5 md:inset-2 rounded-md md:rounded-lg border border-white/5 pointer-events-none z-20 group-hover:border-accent/20 transition-colors duration-700" />

      <Link href={`/productos/${group.slug}`} className="block h-full w-full">
        {/* Background image (fills the card and is clipped to the same border radius) */}
        <div className="absolute inset-0 bg-primary-dark/90 rounded-lg md:rounded-xl overflow-hidden transition-colors duration-500">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={group.label}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3"
            />
          )}
        </div>

        {/* Gradient overlay for legibility (darker at bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-[#0a0a0a]/40 to-transparent rounded-lg md:rounded-xl pointer-events-none" />
        <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 z-10">
          <h2
            className="
              text-white
              font-bold
              uppercase
              leading-[0.95]
              tracking-tight
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]
              text-[clamp(1rem,2.2vw,1.5rem)]
              md:text-[clamp(1.25rem,2.0vw,1.9rem)]
            "
            title={group.label}
          >
            {group.label}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;