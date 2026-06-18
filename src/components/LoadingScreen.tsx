'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';

// ─── Imágenes esenciales del HOME PAGE (solo lo visible al scrollear) ───
const CRITICAL_IMAGES = [
  // Navbar + Loading screen
  '/hero-logo/logodrago.png',
  // VideoHero poster
  '/hero-logo/hero-el-drago.png',
  // Hero background
  '/hero-logo/hero-el-drago3.jpg',
  // RecipeCTA
  '/dragitos/draguito-principal.png',
  // AboutUs
  '/imagenes/1/IMG_0217.PNG',
  // Contact background
  '/hero-logo/cambion-drago.jpg',
  // Footer
  '/logos/logo.rojo.png',
  // SocialMedia - 4 recipe cards
  '/imagenes/1/IMG_0205.JPG.jpeg',
  '/imagenes/1/IMG_0208.JPG.jpeg',
  '/imagenes/1/IMG_0209.JPG.jpeg',
  '/imagenes/1/IMG_0211.JPG.jpeg',
];

interface LoadingScreenProps {
  customImages?: string[];
  title?: string;
  subtitle?: string;
  /** Reducir timeout para secciones con prioridad (e.g. /productos) */
  priority?: boolean;
}

const MIN_DISPLAY_MS = 800;    // tiempo mínimo visible para evitar flash
const DEFAULT_TIMEOUT_MS = 10000;
const PRIORITY_TIMEOUT_MS = 5000;

const LoadingScreen = ({
  customImages,
  title = "Preparando Delicias",
  subtitle = "Tradición que se comparte",
  priority = false,
}: LoadingScreenProps) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const mountedRef = useRef(true);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();
    return () => { mountedRef.current = false; };
  }, []);

  // Efecto separado para ocultar el loading cuando se cumplan las condiciones
  useEffect(() => {
    if (!allLoaded) return;
    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
    const timer = setTimeout(() => {
      if (mountedRef.current) setLoading(false);
    }, remaining);
    return () => clearTimeout(timer);
  }, [allLoaded]);

  useEffect(() => {
    let completed = 0;
    let isCancelled = false;
    const imagesToLoad = customImages || CRITICAL_IMAGES;
    const total = imagesToLoad.length;

    if (total === 0) {
      setProgress(100);
      setAllLoaded(true);
      return;
    }

    // Actualizar progreso basado en cuántas imágenes han cargado
    const updateProgress = () => {
      if (isCancelled) return;
      completed++;
      const pct = Math.min(Math.round((completed / total) * 100), 100);
      if (mountedRef.current) setProgress(pct);
      if (completed >= total) {
        if (mountedRef.current) {
          setProgress(100);
          setAllLoaded(true);
        }
      }
    };

    // Precargar cada imagen usando new Image()
    imagesToLoad.forEach((url) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // contar errores también para no bloquear
      img.src = url;
    });

    // Timeout de seguridad: si no ha terminado, salir igual
    const timeoutMs = priority ? PRIORITY_TIMEOUT_MS : DEFAULT_TIMEOUT_MS;
    const timeout = setTimeout(() => {
      if (!isCancelled && mountedRef.current) {
        setProgress(100);
        setAllLoaded(true);
      }
    }, timeoutMs);

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [customImages, priority]);

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
              {title}
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
              {subtitle}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
