"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import PlexusBackground from './PlexusBackground';

const roles = ["Freelancer", "Coder", "Developer", "AI & ML", "Researcher"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Interactive Plexus Background */}
      <PlexusBackground opacity={0.4} />
      
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg pointer-events-none z-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[9px] md:text-xs tracking-[0.3em] uppercase text-muted mb-4 md:mb-6"
        >
          AI ENGINEER • FULL STACK DEVELOPER
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.95] tracking-tight mb-6 md:mb-8"
        >
          Sahil Mulla
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-4xl h-10 md:h-12 flex items-center justify-center mb-4 md:mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-display italic text-accent"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[13px] md:text-base text-muted max-w-[280px] md:max-w-md mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          Software Developer specializing in AI systems, automation workflows, and scalable full-stack applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={800}
            className="accent-gradient text-bg font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto text-sm"
          >
            View Projects
          </ScrollLink>
          <a 
            href="/Resume.pdf" 
            download="Sahil_Mulla_Resume.pdf"
            className="border border-stroke hover:border-accent px-8 py-3 rounded-full transition-colors w-full sm:w-auto text-sm"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[8px] tracking-[0.3em] text-muted uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[scroll-down_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}