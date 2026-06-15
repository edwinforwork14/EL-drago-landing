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

      {/* ─── Brand Separator with Concave Curve ─── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[55px] md:h-[70px]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Main curved band — concave top */}
          <path
            d="M0,0 C360,70 1080,70 1440,0 L1440,120 L0,120 Z"
            fill="#C41A1E"
          />
          {/* Golden accent line at base */}
          <line
            x1="0"
            y1="119"
            x2="1440"
            y2="119"
            stroke="#FEC70C"
            strokeWidth="3"
          />
        </svg>

        {/* ─── Scroll Indicator ─── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <button
            onClick={handleScrollDown}
            className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/25 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg group"
            aria-label="Scroll down para descubrir"
          >
            <motion.svg
              className="w-4 h-4 md:w-5 md:h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95],
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
