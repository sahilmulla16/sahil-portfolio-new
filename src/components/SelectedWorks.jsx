"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "General AI Agent",
    description: "Multi-agent AI system capable of reasoning, workflow orchestration, and contextual retrieval using RAG pipelines.",
    longDescription: "Developed a sophisticated multi-agent AI system designed to handle complex reasoning tasks and workflow orchestration. The system leverages Retrieval-Augmented Generation (RAG) to provide contextually accurate responses by querying large-scale vector databases.",
    features: [
      "Multi-agent orchestration for complex task handling",
      "RAG pipelines using vector databases for semantic search",
      "Local LLM support for improved privacy and reliability",
      "Published research paper at SmartSSD–2026 conference"
    ],
    tech: ["Python", "React", "LangGraph", "ChromaDB"],
    size: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    link: "https://github.com/sahilmulla16/DEV-Hackathon.git",
    paper: "https://docs.google.com/document/d/12NF2QdIQ8arRhDX1HMTNnRjr4H0TDo0U/edit?usp=sharing"
  },
  {
    title: "Smart Lathe AI",
    description: "AI-driven predictive maintenance solution for machining operations, enhancing precision and automation.",
    longDescription: "Designed and implemented an AI-driven solution for predictive maintenance in industrial machining. By analyzing real-time sensor data, the system can predict potential failures before they occur, significantly reducing downtime and improving operational efficiency.",
    features: [
      "Real-time sensor data analysis and monitoring",
      "Predictive failure modeling using machine learning",
      "Automated alerts and maintenance scheduling",
      "Reduced dependency on manual supervision"
    ],
    tech: ["Python", "Machine Learning"],
    size: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    link: "https://drive.google.com/file/d/1_a1ZZ1SedLEIguJCsoHzwGvtF3OHOcGA/view?usp=sharing"
  },
  {
    title: "AI Virtual Assistant",
    description: "Voice-enabled assistant capable of executing commands, scheduling automation, and retrieving real-time info.",
    longDescription: "Built a comprehensive voice-enabled virtual assistant that integrates speech recognition with task automation. The assistant can process natural language commands to manage schedules, retrieve information, and control connected devices.",
    features: [
      "Advanced speech recognition and NLP processing",
      "Real-time command execution and task scheduling",
      "Productivity enhancement through automated workflows",
      "Responsive web-based interface for visual feedback"
    ],
    tech: ["Python", "JavaScript", "Bootstrap"],
    size: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1600",
    link: "https://github.com/sahilmulla16/Jarvis"
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      onClick={() => onClick(project)} 
      whileHover={{ scale: 0.985 }} 
      className={`glass-card rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden cursor-pointer ${project.size}`} 
    >
      {/* Background Image with Desaturation */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-700" 
        />
      </div>

      {/* Premium Monochrome Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      
      {/* Interactive Border Glow */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-500 z-10 pointer-events-none" />

      <div className="relative z-20">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] uppercase tracking-widest text-muted border border-stroke px-2 py-1 rounded-full bg-bg/50 backdrop-blur-sm">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-display italic mb-4 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed group-hover:text-muted/80 transition-colors">{project.description}</p>
      </div>
      
      <div className="mt-12 flex justify-between items-center relative z-20">
        <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:border-white/40 transition-colors bg-bg/50 backdrop-blur-sm">
          <span className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          Explore Project
        </span>
      </div>
    </motion.div>
  );
};

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display italic mb-4">Featured projects</h2>
            <p className="text-muted">A selection of AI systems, automation workflows, and full-stack applications I've developed.</p>
          </div>
          <a 
            href="https://github.com/sahilmulla16" 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs uppercase tracking-widest border-b border-stroke pb-1 hover:border-accent transition-colors"
          >
            View All Projects
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={(p) => setSelectedProject(p)} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}