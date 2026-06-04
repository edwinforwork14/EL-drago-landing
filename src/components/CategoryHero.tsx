"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

interface CategoryHeroProps {
  eyebrow?: string;
  preTitle?: React.ReactNode;
  accentTitle?: React.ReactNode;
  subtitle?: string;
  imageSrc?: string;
}

export default function CategoryHero({ eyebrow, preTitle, accentTitle, subtitle, imageSrc }: CategoryHeroProps) {

  const [srcIndex, setSrcIndex] = useState(0);

  const candidates = useMemo(() => {
    if (!imageSrc) return [];
    const list = [imageSrc];
    try {
      const decoded = decodeURIComponent(imageSrc);
      if (decoded !== imageSrc) list.push(decoded);
    } catch (e) {
      // ignore
    }
    list.push(imageSrc.replace(/%20/g, "-").replace(/ /g, "-"));
    list.push(imageSrc.replace(/-/g, "%20"));
    list.push(imageSrc.replace(/Dragitos/gi, "Draguitos"));
    list.push(imageSrc.replace(/Draguitos/gi, "Dragitos"));
    list.push(imageSrc.toLowerCase());
    return Array.from(new Set(list));
  }, [imageSrc]);

  const currentSrc = candidates.length > 0 ? candidates[Math.min(srcIndex, candidates.length - 1)] : undefined;

  const handleImgError = () => {
    if (srcIndex < candidates.length - 1) setSrcIndex((s) => s + 1);
  };

  return (
    <section className="group relative min-h-[68vh] md:min-h-[72vh] overflow-hidden pt-20 md:pt-28">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Solid background (removed gradient) */}
        <div className="absolute inset-0 bg-primary-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(254,199,12,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,33,34,0.15),transparent_50%)]" />
        <div className="absolute top-10 right-10 w-[500px] h-[500px] border border-white/5 rounded-full blur-sm" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] border border-white/5 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content: text on mobile → side-by-side on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-16 md:py-24 flex flex-col md:flex-row items-center gap-6 sm:gap-6 md:gap-10">
        
        {/* TEXT — full width on mobile, left half on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <div className="max-w-3xl lg:max-w-2xl mx-auto md:mx-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-center md:justify-start gap-3 text-white/50 text-[10px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 sm:mb-5 md:mb-8">
              <span className="hover:text-white transition-colors">{eyebrow ?? ""}</span>
            </motion.div>

            <h1 className="text-[3.3rem] max-[360px]:text-[2.7rem] max-[400px]:text-[3rem] sm:text-[5.25rem] md:text-[7rem] lg:text-[8.5rem] font-[family-name:var(--font-luckiest-guy)] text-white uppercase leading-[0.85] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {preTitle}
              <br />
              <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[3.9rem] max-[360px]:text-[3rem] max-[400px]:text-[3.6rem] sm:text-[4.2rem] md:text-[8.5rem] lg:text-[10rem] -rotate-2 inline-block ml-1 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
                {accentTitle}
              </span>
            </h1>

            {subtitle && (
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-white/70 text-xs max-[360px]:text-[10px] sm:text-sm md:text-lg lg:text-xl max-w-xl leading-relaxed font-medium mt-3 sm:mt-4 md:mt-8 mx-auto md:mx-0">
                {subtitle}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* IMAGE — full width below text on mobile, right half on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center w-[270px] h-[270px] max-[360px]:w-[210px] max-[360px]:h-[210px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px]">
            <div className="absolute w-[300px] h-[300px] max-[360px]:w-[240px] max-[360px]:h-[240px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] bg-accent/15 rounded-full blur-[40px] sm:blur-[60px] md:blur-[120px] animate-pulse" />
            {currentSrc && (
              <MotionImage
                src={currentSrc}
                alt="hero image"
                onError={handleImgError}
                fill
                priority
                sizes="(max-width: 360px) 210px, (max-width: 640px) 270px, (max-width: 768px) 360px, 440px"
                className="z-20 object-contain transition-transform duration-700 transform origin-center group-hover:scale-105 group-hover:rotate-1"
              />
            )}
          </div>
        </motion.div>

      </div>

      {/* bottom fade removed per design request */}
    </section>
  );
}
