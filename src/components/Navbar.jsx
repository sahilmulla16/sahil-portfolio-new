"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] md:w-auto transition-all duration-500 ${scrolled ? 'top-4' : ''}`}>
      <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between md:justify-start gap-8 relative overflow-hidden border border-white/10 shadow-2xl">
        {/* Logo */}
        <ScrollLink 
          to="home" 
          smooth={true} 
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer relative group shrink-0"
        >
          <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="font-bold text-sm relative z-10 text-white">SM</span>
        </ScrollLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <a 
          href="https://www.linkedin.com/in/sahil-mulla-625364263/" 
          target="_blank" 
          rel="noreferrer"
          className="hidden md:flex group relative px-6 py-2.5 rounded-full overflow-hidden items-center gap-2"
        >
          <div className="absolute inset-0 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-widest relative z-10 flex items-center gap-1.5 text-white">
            Connect <span className="text-sm">↗</span>
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none rounded-full bg-white/5 border border-white/10"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden glass-card rounded-3xl p-6 flex flex-col gap-6 items-center border border-white/10 shadow-2xl"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="h-[1px] w-12 bg-white/10" />
            <a 
              href="https://www.linkedin.com/in/sahil-mulla-625364263/" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400"
            >
              Let's Connect ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}