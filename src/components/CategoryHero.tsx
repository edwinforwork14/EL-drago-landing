"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CategoryHeroProps {
  eyebrow?: string;
  preTitle?: React.ReactNode;
  accentTitle?: React.ReactNode;
  subtitle?: string;
  imageSrc?: string;
}

export default function CategoryHero({ eyebrow, preTitle, accentTitle, subtitle, imageSrc }: CategoryHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 110]);

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
    // replace encoded spaces with hyphen
    list.push(imageSrc.replace(/%20/g, "-").replace(/ /g, "-"));
    // replace hyphens with spaces
    list.push(imageSrc.replace(/-/g, "%20"));
    // folder name variants
    list.push(imageSrc.replace(/Dragitos/gi, "Draguitos"));
    list.push(imageSrc.replace(/Draguitos/gi, "Dragitos"));
    // lowercased
    list.push(imageSrc.toLowerCase());
    // unique
    return Array.from(new Set(list));
  }, [imageSrc]);

  const currentSrc = candidates.length > 0 ? candidates[Math.min(srcIndex, candidates.length - 1)] : undefined;

  const handleImgError = () => {
    if (srcIndex < candidates.length - 1) setSrcIndex((s) => s + 1);
  };

  return (
    <section ref={heroRef} className="group relative min-h-[65vh] md:min-h-[72vh] flex items-center overflow-hidden pt-24 md:pt-28">
      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(254,199,12,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,33,34,0.15),transparent_50%)]" />

        <div className="absolute top-10 right-10 w-[500px] h-[500px] border border-white/5 rounded-full blur-sm" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] border border-white/5 rounded-full" />

        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </motion.div>

      <motion.div style={{ y: heroY }} className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[50%] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/60 via-primary-dark/20 to-transparent z-10" />
        <div className="relative w-full h-[60%] flex items-center justify-center">
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-accent/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
          {currentSrc && (
            <motion.img
              src={currentSrc}
              alt="hero image"
              onError={handleImgError}
              style={{ y: heroY }}
              className="relative z-20 w-[286px] h-[286px] md:w-[462px] md:h-[462px] object-contain rounded-[1.5rem] transition-transform duration-700 transform origin-center group-hover:scale-105 group-hover:rotate-1"
            />
          )}
        </div>
      </motion.div>

      <motion.div style={{ y: heroY }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-3xl lg:max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="hover:text-white transition-colors">{eyebrow ?? ""}</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}>
            <h1 className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] font-[family-name:var(--font-luckiest-guy)] text-white uppercase leading-[0.8] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {preTitle}
              <br />
              <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] -rotate-2 inline-block ml-1 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
                {accentTitle}
              </span>
            </h1>
          </motion.div>

          {subtitle && (
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-white/70 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed font-medium mt-6 md:mt-8">
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
