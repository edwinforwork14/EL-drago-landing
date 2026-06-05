"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MotionImage = motion(Image);

interface CategoryHeroProps {
  imageSrc: string;
}

export default function CategoryHero({ imageSrc }: CategoryHeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-28">
      {/* ─── BANNER IMAGE ─── */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <MotionImage
            key={imageSrc}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={imageSrc}
            alt="banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={100}
          />
        </AnimatePresence>
        {/* Subtle golden light leak */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] sm:w-[50%] h-[40%] sm:h-[50%] bg-accent/10 rounded-full blur-[80px] sm:blur-[120px] z-10 animate-pulse" />
      </div>
    </section>
  );
}
