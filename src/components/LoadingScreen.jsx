"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Build", "Automate", "Innovate"];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const duration = 2700;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    const wordTimer = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 900);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12"
    >
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xs text-muted uppercase tracking-[0.3em]"
        >
          Sahil Mulla
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display tabular-nums text-text-primary">
          {String(Math.floor(count)).padStart(3, "0")}
        </div>
        
        <div className="w-full md:w-64 h-[1px] bg-stroke relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 accent-gradient"
            style={{ width: `${count}%`, boxShadow: '0 0 20px rgba(137, 170, 204, 0.35)' }}
          />
        </div>
      </div>
    </motion.div>
  );
}