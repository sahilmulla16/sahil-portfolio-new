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
    <nav className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] md:w-auto transition-all duration-500 ${scrolled ? 'top-4' : ''}`}>
      <div className="glass-card rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between md:justify-start gap-4 md:gap-8 relative overflow-hidden">
        {/* Logo */}
        <ScrollLink 
          to="home" 
          smooth={true} 
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-stroke flex items-center justify-center cursor-pointer relative group shrink-0 overflow-hidden p-1"
        >
          <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <img 
            src="/favicon.png" 
            alt="Sahil Mulla Logo" 
            className="w-full h-full object-contain relative z-10 rounded-full"
          />
        </ScrollLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              className="text-[10px] uppercase tracking-widest text-muted hover:text-text-primary transition-colors cursor-pointer"
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
          className="hidden md:flex group relative px-5 py-2 rounded-full overflow-hidden items-center gap-2"
        >
          <div className="absolute inset-0 border border-stroke group-hover:border-accent transition-colors duration-300 rounded-full" />
          <span className="text-[10px] uppercase tracking-widest relative z-10 flex items-center gap-1.5">
            Connect <span className="text-sm">↗</span>
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center text-text-primary focus:outline-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden glass-card rounded-3xl p-6 flex flex-col gap-6 items-center border border-stroke shadow-2xl"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-[0.3em] text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="h-[1px] w-12 bg-stroke" />
            <a 
              href="https://www.linkedin.com/in/sahil-mulla-625364263/" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-accent font-semibold"
            >
              Let's Connect ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}