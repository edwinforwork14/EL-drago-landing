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
    <section ref={heroRef} className="group relative min-h-[68vh] md:min-h-[72vh] overflow-hidden pt-20 md:pt-28">
      {/* Background */}
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

      {/* Content: text left, image right on all screens */}
      <motion.div style={{ y: heroY }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 flex flex-row items-center gap-4 sm:gap-6 md:gap-10">
        
        {/* TEXT — left side, takes remaining space */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="flex-1 min-w-0"
        >
          <div className="max-w-3xl lg:max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 text-white/50 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 sm:mb-5 md:mb-8">
              <span className="hover:text-white transition-colors">{eyebrow ?? ""}</span>
            </motion.div>

            <h1 className="text-[1.6rem] max-[360px]:text-[1.3rem] max-[400px]:text-[1.4rem] sm:text-[3.5rem] md:text-[7rem] lg:text-[8.5rem] font-[family-name:var(--font-luckiest-guy)] text-white uppercase leading-[0.85] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {preTitle}
              <br />
              <span className="text-accent font-[family-name:var(--font-mr-dafoe)] normal-case text-[1.8rem] max-[360px]:text-[1.5rem] max-[400px]:text-[1.6rem] sm:text-[4.2rem] md:text-[8.5rem] lg:text-[10rem] -rotate-2 inline-block ml-1 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
                {accentTitle}
              </span>
            </h1>

            {subtitle && (
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-white/70 text-xs max-[360px]:text-[10px] sm:text-sm md:text-lg lg:text-xl max-w-xl leading-relaxed font-medium mt-2 sm:mt-4 md:mt-8 hidden sm:block">
                {subtitle}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* IMAGE — right side, fixed size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[70px] h-[70px] max-[360px]:w-[55px] max-[360px]:h-[55px] sm:w-[120px] sm:h-[120px] md:w-[420px] md:h-[420px] bg-accent/15 rounded-full blur-[20px] sm:blur-[40px] md:blur-[120px] animate-pulse" />
            {currentSrc && (
              <motion.img
                src={currentSrc}
                alt="hero image"
                onError={handleImgError}
                className="relative z-20 w-[65px] h-[65px] max-[360px]:w-[50px] max-[360px]:h-[50px] sm:w-[110px] sm:h-[110px] md:w-[440px] md:h-[440px] object-contain rounded-[1.08rem] transition-transform duration-700 transform origin-center group-hover:scale-105 group-hover:rotate-1"
              />
            )}
          </div>
        </motion.div>

      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
