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
    link: "#",
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
    link: "#",
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
    link: "#",
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
    link: "#",
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
    link: "#",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Futuristic motion design elements",
      "Immersive UI interactions",
      "Smooth, non-linear layout transitions",
      "High-end visual storytelling focus"
    ]
  }
];

export default function ClientProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="client-work" className="py-32 px-6 bg-bg relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-display italic mb-6">Client work</h2>
          <p className="text-muted text-lg max-w-2xl">
            Building bespoke digital solutions and high-performance applications for brands and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-[2.5rem] p-10 group cursor-pointer relative overflow-hidden border-stroke hover:border-accent/30 transition-all duration-700"
            >
              {/* Animated Background Glow */}
              <div 
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-25 transition-opacity duration-1000"
                style={{ backgroundColor: project.themeColor }}
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-16">
                  <span 
                    className="text-[11px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full border"
                    style={{ 
                      color: project.themeColor, 
                      borderColor: `${project.themeColor}44`,
                      backgroundColor: `${project.themeColor}11`
                    }}
                  >
                    {project.category}
                  </span>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all duration-500"
                  >
                    <span className="text-xl">↗</span>
                  </motion.div>
                </div>

                <div className="flex-1">
                  <h3 className="text-4xl font-display italic mb-6 group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-10">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-8 border-t border-stroke/50">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-muted/50 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}