"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const clientProjects = [
  {
    title: "Panache",
    description: "Luxury ethnic fashion and clothing website featuring modern product showcases and premium visual aesthetics.",
    longDescription: "A high-end fashion e-commerce platform designed for Panache. The project focuses on luxury visual storytelling, utilizing smooth GSAP animations and a highly responsive React architecture to provide a seamless shopping experience that mirrors the brand's premium identity.",
    category: "Fashion E-Commerce",
    tech: ["React", "Tailwind CSS", "GSAP", "Responsive UI"],
    themeColor: "#C084FC",
    link: "https://panache-web.vercel.app/",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Modern product showcases with elegant UI",
      "GSAP-powered smooth scrolling and entrance animations",
      "Premium visual aesthetics inspired by global fashion brands",
      "Fully optimized mobile shopping experience"
    ]
  },
  {
    title: "DE Elite",
    description: "Modern premium business landing page built with sleek animations and glassmorphism UI.",
    longDescription: "DE Elite is a professional business landing page that emphasizes authority and modern digital presence. It utilizes glassmorphism effects and sophisticated motion design to create a trustworthy yet innovative brand experience.",
    category: "Business / Agency",
    tech: ["React", "GSAP", "Framer Motion", "Tailwind"],
    themeColor: "#60A5FA",
    link: "https://de-elite-eta.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Glassmorphism UI components",
      "Cinematic scrolling interactions",
      "Responsive layout for digital-first brands",
      "Integrated performance optimization"
    ]
  },
  {
    title: "Mystery Web",
    description: "Interactive modern website with immersive animations and cinematic transitions.",
    longDescription: "A unique digital storytelling experience created with Three.js and heavy GSAP sequencing. Mystery Web pushes the boundaries of traditional web design with immersive user interactions and cinematic transitions that keep users engaged.",
    category: "Interactive Experience",
    tech: ["JavaScript", "GSAP", "Three.js", "CSS Animations"],
    themeColor: "#F472B6",
    link: "https://mystery-web-ochre.vercel.app/",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
    features: [
      "3D immersive environments using Three.js",
      "Story-driven user navigation",
      "Cinematic motion design and transitions",
      "Engaging micro-interactions"
    ]
  },
  {
    title: "PrepMind AI",
    description: "AI-powered educational platform focused on smart learning and intelligent study workflows.",
    longDescription: "PrepMind AI is an educational technology solution that integrates AI APIs to personalize the learning experience. It features intelligent study workflows and a productivity-focused interface designed to help students maximize their learning efficiency.",
    category: "AI Education Platform",
    tech: ["React", "AI APIs", "Tailwind CSS", "Firebase"],
    themeColor: "#22D3EE",
    link: "https://prepmind-ai-six.vercel.app/",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600",
    features: [
      "AI-driven study plan generation",
      "Real-time intelligent feedback systems",
      "Clean, productivity-enhancing UI",
      "Firebase backend integration for data persistence"
    ]
  },
  {
    title: "Sorin Web",
    description: "Premium futuristic portfolio experience featuring advanced motion design and immersive UI.",
    longDescription: "Sorin Web is a creative portfolio project that showcases high-end motion design and futuristic UI patterns. It focuses on advanced Framer Motion usage and complex layout transitions to create a memorable personal brand identity.",
    category: "Creative Portfolio",
    tech: ["React", "GSAP", "Framer Motion", "Modern UI"],
    themeColor: "#F59E0B",
    link: "https://sorin-web.vercel.app/",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Futuristic motion design elements",
      "Immersive UI interactions",
      "Smooth, non-linear layout transitions",
      "High-end visual storytelling focus"
    ]
  }
];

// Duplicate projects for seamless loop
const duplicatedProjects = [...clientProjects, ...clientProjects];

export default function ClientProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="client-work" className="py-24 bg-bg/50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-display italic mb-4">Client work</h2>
        <p className="text-muted">Delivering bespoke digital solutions and high-performance experiences for global brands.</p>
      </div>

      {/* Sliding Container */}
      <div 
        className="relative flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 px-6"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-[2rem] p-8 group cursor-pointer relative overflow-hidden border-stroke hover:border-accent/20 transition-all duration-500 w-[350px] md:w-[400px] shrink-0"
            >
              {/* Colored Glow Accent */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: project.themeColor }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span 
                    className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-stroke"
                    style={{ color: project.themeColor, borderColor: `${project.themeColor}33` }}
                  >
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center group-hover:border-accent transition-colors">
                    <span className="text-sm">↗</span>
                  </div>
                </div>

                <h3 className="text-3xl font-display italic mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[9px] uppercase tracking-widest text-muted/60">
                      {t} {i < project.tech.slice(0, 3).length - 1 ? "•" : ""}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}