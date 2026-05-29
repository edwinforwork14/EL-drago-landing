"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  transparentInitially?: boolean;
}

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Recetas", href: "/recetas" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
];

export default function Navbar({ transparentInitially = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!transparentInitially) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check immediately on mount in case the page was already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentInitially]);

  const activeBg = !transparentInitially || isScrolled;

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    // We check if href is a hash link or standard path
    if (href.startsWith("/#")) {
      return false; // hash links shouldn't mark as active path in main navbar
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2 md:py-3 px-6 md:px-10 lg:px-16 transition-all duration-500 ${
          activeBg
            ? "bg-[#FCF2E6]/95 backdrop-blur-xl border-b border-primary/5 shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="w-20 md:w-24 lg:w-28 shrink-0 transition-transform duration-300 hover:-translate-y-0.5 inline-block"
        >
          <Image
            src="/hero-logo/logodrago.png"
            alt="El Drago Logo"
            width={112}
            height={40}
            priority
            className="w-full h-auto"
          />
        </Link>

        {/* Desktop nav — centered */}
        <nav
          className={`hidden lg:flex flex-1 justify-center gap-8 font-bold text-xs uppercase tracking-widest transition-colors duration-500 ${
            activeBg ? "text-primary-dark/80" : "text-white"
          }`}
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition-colors duration-300 py-2 hover:text-[#FEC70C] ${
                  active ? "text-[#FEC70C] font-black" : ""
                } ${!active && activeBg ? "text-primary-dark/80 hover:text-[#FEC70C]" : ""} ${
                  !active && !activeBg ? "text-white/90 hover:text-[#FEC70C]" : ""
                }`}
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FEC70C]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!active && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FEC70C] transition-all duration-300 hover:w-full group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>



        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 z-50 relative"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${
              activeBg ? "bg-primary-dark" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${
              activeBg ? "bg-primary-dark" : "bg-white"
            }`}
          />
          <span
            className={`block w-4 h-0.5 rounded-full self-end transition-colors duration-300 ${
              activeBg ? "bg-primary-dark" : "bg-white"
            }`}
          />
        </button>
      </header>

      {/* ─── SIDEBAR MOBILE ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[320px] bg-primary-dark z-[101] flex flex-col px-8 py-10 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end mb-12 text-white/60 hover:text-white transition-colors"
                aria-label="Cerrar menú"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Logo inside sidebar */}
              <Image
                src="/hero-logo/logodrago.png"
                alt="El Drago"
                width={112}
                height={40}
                className="w-28 mb-10 opacity-90 h-auto"
              />

              {/* Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.15 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-bold text-2xl tracking-tight py-3 border-b border-white/10 transition-colors block ${
                          active ? "text-[#FEC70C]" : "text-white hover:text-[#FEC70C]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>


            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
