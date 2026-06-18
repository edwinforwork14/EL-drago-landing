'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play on mount (handles autoplay restrictions)
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented — we could show a play button here
      });
    }
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ─── Video Background ─── */}
      <motion.video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-logo/hero-el-drago.png"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <source
          src="/video-hero/hero-video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* ─── Cinematic Overlays ─── */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <div className="absolute bottom-0 left-0 w-full h-[20vh] md:h-20 bg-primary z-20" />

      {/* ─── Brand Separator — Unified Wave ─── */}
      <div className="absolute bottom-[20vh] md:bottom-20 left-0 w-full z-20 h-[160px] md:h-[200px]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Extremos curveados (estilo referencia) + dip cóncavo central */}
          <path
            d="M0,40 C250,80 450,65 509,65 C634,75 634,112 722.5,112 S811,75 931,65 C990,65 1190,80 1440,40 L1440,120 L0,120 Z"
            fill="#C41A1E"
          />
        </svg>

        {/* ─── Scroll Down Indicator ─── */}
        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div
            role="button"
            tabIndex={0}
            onClick={handleScrollDown}
            className="cursor-pointer rounded-full flex justify-center items-center text-white hover:bg-white/10 transition-colors border-2 border-solid bg-transparent border-current w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] animate-bounce"
            aria-label="Scroll to next section"
          >
            <svg
              className="rotate-180 stroke-1 w-16 h-16 lg:w-20 lg:h-20"
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M16 9l-4-4M8 9l4-4"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
