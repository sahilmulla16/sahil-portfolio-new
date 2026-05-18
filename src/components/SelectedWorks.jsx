"use client"; import React, { useEffect, useRef, useState } from 'react'; import { motion } from 'framer-motion'; import Hls from 'hls.js'; import ProjectModal from './ProjectModal'; const ProjectVideo = ({ src, isHovered }) => { const videoRef = useRef(null); useEffect(() => { const video = videoRef.current; if (!video || !src) return; if (Hls.isSupported()) { const hls = new Hls(); hls.loadSource(src); hls.attachMedia(video); } else if (video.canPlayType('application/vnd.apple.mpegurl')) { video.src = src; } }, [src]); useEffect(() => { if (videoRef.current) { if (isHovered) { videoRef.current.play().catch(e => { // Handle autoplay restriction gracefully console.error("Autoplay prevented:", e); }); } else { videoRef.current.pause(); videoRef.current.currentTime = 0; } } }, [isHovered]); return ( <video ref={videoRef} muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700" /> ); }; const projects = [ { title: "General AI Agent", description: "Multi-agent AI system capable of reasoning, workflow orchestration, and contextual retrieval using RAG pipelines.", longDescription: "Developed a sophisticated multi-agent AI system designed to handle complex reasoning tasks and workflow orchestration. The system leverages Retrieval-Augmented Generation (RAG) to provide contextually accurate responses by querying large-scale vector databases.", features: [ "Multi-agent orchestration for complex task handling", "RAG pipelines using vector databases for semantic search", "Local LLM support for improved privacy and reliability", "Published research paper at SmartSSD–2026 conference" ], tech: ["Python", "React", "LangGraph", "ChromaDB"], size: "md:col-span-2 md:row-span-2", video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600", link: "https://github.com/sahilmulla16/DEV-Hackathon.git", paper: "https://docs.google.com/document/d/12NF2QdIQ8arRhDX1HMTNnRjr4H0TDo0U/edit?usp=sharing" }, { title: "Smart Lathe AI", description: "AI-driven predictive maintenance solution for machining operations, enhancing precision and automation.", longDescription: "Designed and implemented an AI-driven solution for predictive maintenance in industrial machining. By analyzing real-time sensor data, the system can predict potential failures before they occur, significantly reducing downtime and improving operational efficiency.", features: [ "Real-time sensor data analysis and monitoring", "Predictive failure modeling using machine learning", "Automated alerts and maintenance scheduling", "Reduced dependency on manual supervision" ], tech: ["Python", "Machine Learning"], size: "md:col-span-1 md:row-span-1", video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600", link: "https://drive.google.com/file/d/1_a1ZZ1SedLEIguJCsoHzwGvtF3OHOcGA/view?usp=sharing" }, { title: "AI Virtual Assistant", description: "Voice-enabled assistant capable of executing commands, scheduling automation, and retrieving real-time info.", longDescription: "Built a comprehensive voice-enabled virtual assistant that integrates speech recognition with task automation. The assistant can process natural language commands to manage schedules, retrieve information, and control connected devices.", features: [ "Advanced speech recognition and NLP processing", "Real-time command execution and task scheduling", "Productivity enhancement through automated workflows", "Responsive web-based interface for visual feedback" ], tech: ["Python", "JavaScript", "Bootstrap"], size: "md:col-span-1 md:row-span-1", video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1600", link: "https://github.com/sahilmulla16/Jarvis" }, { title: "User Activity Monitoring", description: "Secure session tracking and activity monitoring platform with authentication and reporting systems.", longDescription: "Developed a robust platform for monitoring user activity and managing secure sessions. The system provides detailed reporting and analytics on user behavior while ensuring data integrity through advanced authentication mechanisms.", features: [ "Secure session management and authentication", "Real-time activity tracking and logging", "Comprehensive reporting and analytics dashboard", "Scalable architecture for high-concurrency environments" ], tech: ["Python", "Session Tracking"], size: "md:col-span-2 md:row-span-1", video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1600", link: "https://github.com/sahilmulla16" } ]; const ProjectCard = ({ project, onClick }) => { const [isHovered, setIsHovered] = useState(false); return ( <motion.div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => onClick(project)} whileHover={{ scale: 0.98 }} className={`glass-card rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden cursor-pointer ${project.size}`} > {/* Video Background */} <ProjectVideo src={project.video} isHovered={isHovered} /> {/* Gradient Overlay */} <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" /> <div className="relative z-10"> <div className="flex flex-wrap gap-2 mb-6"> {project.tech.map(t => ( <span key={t} className="text-[10px] uppercase tracking-widest text-muted border border-stroke px-2 py-1 rounded-full bg-bg/50 backdrop-blur-sm"> {t} </span> ))} </div> <h3 className="text-2xl md:text-3xl font-display italic mb-4">{project.title}</h3> <p className="text-sm text-muted leading-relaxed">{project.description}</p> </div> <div className="mt-12 flex justify-between items-center relative z-10"> <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:border-accent transition-colors bg-bg/50 backdrop-blur-sm"> <span className="text-lg">↗</span> </div> <span className="text-[10px] uppercase tracking-widest text-muted opacity-0 group-hover:opacity-100 transition-opacity"> Explore Project </span> </div> </motion.div> ); }; export default function SelectedWorks() { const [selectedProject, setSelectedProject] = useState(null); return ( <section id="projects" className="py-24 px-6 bg-bg"> <div className="max-w-[1200px] mx-auto"> <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"> <div className="max-w-xl"> <h2 className="text-4xl md:text-5xl font-display italic mb-4">Featured projects</h2> <p className="text-muted">A selection of AI systems, automation workflows, and full-stack applications I've developed.</p> </div> <button className="text-xs uppercase tracking-widest border-b border-stroke pb-1 hover:border-accent transition-colors"> View All Projects </button> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {projects.map((project, index) => ( <ProjectCard key={index} project={project} onClick={(p) => setSelectedProject(p)} /> ))} </div> </div> <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} /> </section> ); } ＜/dyad-write>

＜dyad-write path="src/components/ClientProjects.jsx" description="Fix video play promise handling and add smooth animation">
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
    <section id="client-work" className="py-24 px-6 bg-bg/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display italic mb-4">Client work</h2>
          <p className="text-muted">Delivering bespoke digital solutions and high-performance experiences for global brands.</p>
        </div>

        {/* Animated container for client projects */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clientProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-[2rem] p-8 group cursor-pointer relative overflow-hidden border-stroke hover:border-accent/20 transition-all duration-500"
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
                <p className="text-sm text-muted leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] uppercase tracking-widest text-muted/60">
                      {t} {index < project.tech.slice(0, 3).length - 1 ? "•" : ""}
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