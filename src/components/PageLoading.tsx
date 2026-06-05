"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PageLoading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]"
      />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-10"
      >
        <div className="w-28 md:w-40">
          <Image
            src="/hero-logo/logodrago.png"
            alt="El Drago"
            width={224}
            height={80}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Spinner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full"
        />
        <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold">
          Cargando...
        </p>
      </motion.div>
    </div>
  );
}
