"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MotionImage = motion.create(Image);

interface CategoryHeroProps {
  imageSrc: string;
  imageSrcMobile?: string;
}

export default function CategoryHero({ imageSrc, imageSrcMobile }: CategoryHeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen overflow-hidden">
      {/* ─── BANNER IMAGE ─── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop banner — hidden below md */}
        <AnimatePresence>
          {imageSrc && (
            <MotionImage
              key={`desktop-${imageSrc}`}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              src={imageSrc}
              alt="banner"
              fill
              priority
              sizes="100vw"
              className="object-cover hidden md:block"
              quality={100}
            />
          )}
        </AnimatePresence>

        {/* Mobile banner — visible only below md */}
        <AnimatePresence>
          {imageSrcMobile && (
            <motion.div
              key={`mobile-${imageSrcMobile}`}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block md:hidden absolute inset-0"
              role="img"
              aria-label="banner categoría productos"
              style={{
                backgroundImage: `url(${imageSrcMobile})`,
                backgroundSize: '100% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
        </AnimatePresence>

        {/* Subtle golden light leak */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] sm:w-[50%] h-[40%] sm:h-[50%] bg-accent/10 rounded-full blur-[80px] sm:blur-[120px] z-10 animate-pulse" />
      </div>
    </section>
  );
}
