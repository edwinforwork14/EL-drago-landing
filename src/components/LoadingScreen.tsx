'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';

// Lista de imágenes críticas a precargar antes de ocultar el loading screen
const CRITICAL_IMAGES = [
  '/hero-logo/logodrago.png',
  '/hero-logo/hero-el-drago.png',
  '/Dragitos/DRAGUITO-EMBUTIDOS.png',
  '/Dragitos/DRAGUITO-AHUMADOS.png',
  '/Dragitos/DRAGUITO%20PRINCIPAL.png',
  '/Dragitos/DRAGUITO%20CATEGORIAS.png',
  '/productos/page-0003.png',
  '/productos/page-0004.png',
  '/productos/page-0005.png',
  '/productos/page-0007.png',
  '/productos/page-0008.png',
  '/productos/page-0009.png',
  '/productos/page-0010.png',
  '/productos/page-0011.png',
  '/productos/page-0012.png',
  '/productos/page-0013.png',
  '/productos/JAMON%20(1).png',
  '/productos/JAMON.png',
  '/productos/JAMON%20(5).png',
  '/productos/JAMON%20(6).png',
  '/productos/JAMON%20(4).png',
  '/productos/JAMON%20(2).png',
  '/productos/JAMON%20(3).png',
  '/productos/JAMON(9).png',
];

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    let completed = 0;
    let isCancelled = false;
    const total = CRITICAL_IMAGES.length;

    // Actualizar progreso basado en cuántas imágenes han cargado
    const updateProgress = () => {
      if (isCancelled) return;
      completed++;
      const pct = Math.min(Math.round((completed / total) * 100), 100);
      if (mountedRef.current) setProgress(pct);
      if (completed >= total) {
        setTimeout(() => {
          if (mountedRef.current) setLoading(false);
        }, 400);
      }
    };

    // Precargar cada imagen usando new Image()
    CRITICAL_IMAGES.forEach((url) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // contar errores también para no bloquear
      img.src = url;
    });

    // Timeout de seguridad: si después de 6s no ha terminado, salir igual
    const timeout = setTimeout(() => {
      if (!isCancelled && mountedRef.current) {
        setProgress(100);
        setTimeout(() => {
          if (mountedRef.current) setLoading(false);
        }, 400);
      }
    }, 6000);

    // También escuchar el evento load global de la ventana
    const handleWindowLoad = () => {
      if (mountedRef.current) setProgress(100);
    };
    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
      window.removeEventListener('load', handleWindowLoad);
    };
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
              <NextImage
                src="/hero-logo/logodrago.png"
                alt="El Drago"
                width={224}
                height={80}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
            
            {/* Pulsing Ring (border removed) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-transparent rounded-full -m-4"
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
            <div className="w-64 h-1 bg-[#FCF2E6]/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
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
