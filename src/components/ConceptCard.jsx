"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ConceptCard({ number, title, description, features, techFeel, themeColor }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card rounded-[2rem] p-8 relative overflow-hidden border-stroke hover:border-accent/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Background Glow */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-10"
        style={{ backgroundColor: themeColor }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className="text-4xl font-display italic opacity-20">{number}</span>
          <span className="text-[10px] uppercase tracking-widest text-accent border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
            Concept
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display italic mb-4">{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-8">{description}</p>

        <div className="space-y-3 mb-8 flex-grow">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4">Core Features</h4>
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-[11px] text-text-primary/70">
              <div className="w-1 h-1 rounded-full bg-accent" />
              {feature}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-stroke/50">
          <div className="text-[9px] uppercase tracking-[0.3em] text-muted mb-2">Tech Architecture</div>
          <div className="text-[11px] font-mono text-accent/80">{techFeel}</div>
        </div>
      </div>
    </motion.div>
  );
}