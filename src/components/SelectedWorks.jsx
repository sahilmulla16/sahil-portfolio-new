"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
    paper: "https://docs.google.com/document/d/12NF2QdIQ8arRhDX1HMTNnRjr4H0TDo0U/edit?usp=sharing",
    themeColor: "#a855f7"
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
    link: "https://drive.google.com/file/d/1_a1ZZ1SedLEIguJCsoHzwGvtF3OHOcGA/view?usp=sharing",
    themeColor: "#06b6d4"
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
    link: "https://github.com/sahilmulla16/Jarvis",
    themeColor: "#ec4899"
  },
  {
    title: "User Activity Monitoring",
    description: "Secure session tracking and activity monitoring platform with authentication and reporting systems.",
    longDescription: "Developed a robust platform for monitoring user activity and managing secure sessions. The system provides detailed reporting and analytics on user behavior while ensuring data integrity through advanced authentication mechanisms.",
    features: [
      "Secure session management and authentication",
      "Real-time activity tracking and logging",
      "Comprehensive reporting and analytics dashboard",
      "Scalable architecture for high-concurrency environments"
    ],
    tech: ["Python", "Session Tracking"],
    size: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1600",
    link: "https://github.com/sahilmulla16",
    themeColor: "#3b82f6"
  }
];

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">Featured Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Architecting <span className="accent-gradient-text">Intelligence</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-base sm:text-lg">
              A curated selection of AI systems, automation workflows, and full-stack applications pushing the boundaries of technology.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`glass-card rounded-[2rem] p-8 flex flex-col justify-between group relative overflow-hidden cursor-pointer border border-white/5 hover:border-purple-500/30 transition-all duration-500 ${project.size}`}
            >
              {/* Glowing background accent */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: project.themeColor }}
              />

              <div className="space-y-6 relative z-10">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span 
                      key={t} 
                      className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-12 flex justify-between items-center relative z-10 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                  <FaArrowRight className="text-gray-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-purple-400 transition-colors">
                  Explore Project
                </span>
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