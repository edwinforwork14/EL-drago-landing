'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Also stop loading when window is fully loaded
    const handleLoad = () => {
      setProgress(100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(timer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
          />

          {/* Logo Container */}
          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-32 md:w-48 lg:w-56"
            >
              <img 
                src="/images/logodrago.png" 
                alt="El Drago Logo" 
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(254,199,12,0.3)]"
              />
            </motion.div>
            
            {/* Pulsing Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-accent rounded-full -m-4"
            />
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-secondary-container font-[family-name:var(--font-luckiest-guy)] text-xl tracking-[0.2em] uppercase mb-4">
              Preparando Delicias
            </p>
            
            {/* Progress Bar Container */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <motion.span 
              className="text-white/40 text-[10px] uppercase tracking-widest mt-4 block"
            >
              {progress}%
            </motion.span>
          </motion.div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12 left-0 right-0 text-center">
            <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">
              Tradición que se comparte
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
