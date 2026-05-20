"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GestureUI() {
  const buttonRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCoords({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div className="w-full h-full glass-card rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden group">
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-12 absolute top-8">Interactive Gestures</div>
      
      {/* Magnetic Button */}
      <motion.button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: coords.x, y: coords.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative px-8 py-4 rounded-full border border-stroke bg-surface/50 backdrop-blur-md group/btn overflow-hidden"
      >
        <div className="absolute inset-0 accent-gradient opacity-0 group-hover/btn:opacity-10 transition-opacity" />
        <span className="text-xs uppercase tracking-widest relative z-10">Magnetic Interaction</span>
      </motion.button>

      {/* Liquid Animation Effect */}
      <div className="mt-12 flex gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, borderRadius: "30%" }}
            className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-500"
          >
            0{i}
          </motion.div>
        ))}
      </div>

      {/* Ambient background interaction */}
      <div className="absolute bottom-6 text-[9px] uppercase tracking-[0.3em] text-muted/40 font-mono">
        Motion_Engine_Active
      </div>
    </div>
  );
}