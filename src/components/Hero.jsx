"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import PlexusBackground from './PlexusBackground';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const roles = [
  "AI Systems Architect",
  "Full-Stack Developer",
  "Automation Engineer",
  "Machine Learning Researcher"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-12">
      {/* Interactive Plexus Background */}
      <PlexusBackground opacity={0.3} />
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />
      <div className="absolute inset-0 cyber-grid-glow pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Actions */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">Available for Freelance & Full-Time</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none"
            >
              Crafting the <br />
              <span className="accent-gradient-text">Future of AI</span>
            </motion.h1>

            <div className="h-12 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-3xl font-medium text-purple-400/90"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Hi, I'm <strong className="text-white">Sahil Mulla</strong>. I build high-performance multi-agent AI systems, immersive 3D interactive web applications, and scalable automation pipelines.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              className="accent-gradient text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2 cursor-pointer group"
            >
              Explore My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
            
            <a 
              href="/Resume.pdf" 
              download="Sahil_Mulla_Resume.pdf"
              className="px-8 py-4 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/5 text-white font-semibold transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 pt-4 text-gray-400 text-xl"
          >
            <a href="https://github.com/sahilmulla16" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sahil-mulla-625364263/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Cybernetic HUD Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block perspective-1000"
        >
          <div className="glass-card rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-700 shadow-2xl shadow-purple-500/5">
            {/* Glowing background accent */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700" />

            {/* HUD Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-widest">SYSTEM_STATUS: ACTIVE</span>
            </div>

            {/* HUD Content */}
            <div className="space-y-6 font-mono text-sm text-gray-300">
              <div className="space-y-2">
                <p className="text-xs text-purple-400">> INITIALIZING NEURAL MESH</p>
                <p className="text-xs text-cyan-400">> CONNECTING TO VECTOR DB... SUCCESS</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Model Accuracy</span>
                  <span className="text-white font-bold">98.4%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "98.4%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">CGPA (B.Tech CSE)</span>
                  <span className="text-white font-bold">9.10 / 10</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "91%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-white/5">
                <span>LATENCY: 12ms</span>
                <span>FPS: 60.0</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[8px] tracking-[0.3em] text-gray-500 uppercase">Scroll Down</span>
        <div className="w-[1px] h-10 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-purple-500 animate-[scroll-down_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}