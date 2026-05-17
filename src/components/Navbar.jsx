"use client";

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Resume", to: "resume" }
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="glass-card rounded-full px-6 py-3 flex items-center gap-8">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center cursor-pointer relative group"
        >
          <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="font-display italic text-[13px] relative z-10">SM</span>
        </motion.div>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              className="text-xs uppercase tracking-widest text-muted hover:text-text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        <a 
          href="https://www.linkedin.com/in/sahil-mulla-625364263/" 
          target="_blank" 
          rel="noreferrer"
          className="group relative px-4 py-1.5 rounded-full overflow-hidden block"
        >
          <div className="absolute inset-0 border border-stroke group-hover:border-accent transition-colors duration-300 rounded-full" />
          <span className="text-xs uppercase tracking-widest relative z-10 flex items-center gap-2">
            Let's Connect <span className="text-sm">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}