"use client";

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ["AI", "Full Stack", "Automation", "Frontend"];

export default function Hero() {
  const videoRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'; // Placeholder futuristic stream

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }

    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.3em] uppercase text-muted mb-6"
        >
          AI ENGINEER • FULL STACK DEVELOPER
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight mb-8"
        >
          Sahil Mulla
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-text-primary/80 mb-6"
        >
          A{' '}
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
          {' '}engineer based in Mumbai.
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-muted max-w-md mx-auto mb-12"
        >
          Software Developer specializing in AI systems, automation workflows, and scalable full-stack applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="accent-gradient text-bg font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            View Projects
          </button>
          <button className="border border-stroke hover:border-accent px-8 py-3 rounded-full transition-colors">
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] text-muted uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[scroll-down_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}