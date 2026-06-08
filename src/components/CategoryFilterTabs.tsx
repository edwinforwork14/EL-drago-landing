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
    id: "todos",
    label: "Todos",
    description: "Ver todos los productos",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="inline mr-2">
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </g>
      </svg>
    ),
  },
  {
    id: "ave",
    label: "Ave",
    description: "Filtrar productos de ave (pollo, pavo)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="inline mr-2">
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 7C13.5 5 8 6 8 10c0 1.5.5 3 2.5 4.5C12 16 12 18 11 20" />
          <path d="M16 7c2-1 5-.5 5 2 0 3-3 4-6 4" />
          <path d="M12 4V2" />
          <path d="M10 4c-.5-1-1-1.5-2-2" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    id: "cerdo",
    label: "Cerdo",
    description: "Filtrar productos de cerdo",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="inline mr-2">
        <g strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="13" rx="7" ry="4" />
          <path d="M5 13c0 2 1.5 4 7 4s7-2 7-4" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="8.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="15.5" cy="10.5" r="1" fill="currentColor" />
          <path d="M12 7V4M10 4l2-2 2 2" />
          <path d="M3 15c-1 0-2-.5-2-1.5S2 12 3 12" />
          <path d="M21 15c1 0 2-.5 2-1.5S22 12 21 12" />
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
          <div className="flex justify-center lg:pl-28 gap-1" role="tablist" aria-orientation="horizontal" aria-label="Filtrar por">
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
