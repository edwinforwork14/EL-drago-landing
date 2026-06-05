"use client";

import React from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: "tipo",
    label: "Tipo",
    description: "Filtrar por categoría de producto",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="inline mr-2">
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 19h18M3 11h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v0ZM9 8V5M12 5v3M15 5v3" />
        </g>
      </svg>
    ),
  },
  {
    id: "todos",
    label: "Todos",
    description: "Ver todos los productos",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="inline mr-2">
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z" />
        </g>
      </svg>
    ),
  },
];

interface CategoryFilterTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function CategoryFilterTabs({ activeTab, onTabChange }: CategoryFilterTabsProps) {
  return (
    <section className="w-full py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="relative">
          {/* "Filter by" label — positioned absolute on desktop */}
          <h2 className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 text-primary-dark/50 font-bold text-xs uppercase tracking-[0.2em]">
            Filtrar por
          </h2>

          {/* Tab list */}
          <div className="flex justify-center lg:pl-28" role="tablist" aria-orientation="horizontal" aria-label="Filtrar por">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  title={tab.description}
                  onClick={() => onTabChange(tab.id)}
                  className="px-5 lg:px-7 pb-3 relative outline-none cursor-pointer"
                >
                  <span
                    className={`flex items-center text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-primary-dark/40 hover:text-primary-dark/70"
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-primary-dark/30"
                      }`}
                    >
                      {tab.icon}
                    </span>
                    {tab.label}
                  </span>

                  {/* Active indicator — bottom border */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Thin separator line below tabs */}
        <div className="w-full h-px bg-primary/5 -mt-px" />
      </div>
    </section>
  );
}
