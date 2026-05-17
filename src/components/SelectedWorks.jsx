"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hls from 'hls.js';

const ProjectVideo = ({ src, isHovered }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, [src]);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700"
    />
  );
};

const projects = [
  {
    title: "General AI Agent",
    description: "Multi-agent AI platform with RAG pipelines, workflow orchestration, and local LLM fallback systems.",
    tech: ["Python", "React", "LangGraph", "ChromaDB"],
    size: "md:col-span-2 md:row-span-2",
    video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    title: "Smart Lathe AI",
    description: "Predictive maintenance and machining intelligence system using machine learning analytics.",
    tech: ["Python", "Machine Learning"],
    size: "md:col-span-1 md:row-span-1",
    video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    title: "AI Virtual Assistant",
    description: "Voice-enabled assistant capable of automation, command execution, and scheduling workflows.",
    tech: ["Python", "JavaScript"],
    size: "md:col-span-1 md:row-span-1",
    video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    title: "User Activity Monitoring",
    description: "Secure session tracking and activity monitoring platform with authentication and reporting systems.",
    tech: ["Python", "Session Tracking"],
    size: "md:col-span-2 md:row-span-1",
    video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 0.98 }}
      className={`glass-card rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden ${project.size}`}
    >
      {/* Video Background */}
      <ProjectVideo src={project.video} isHovered={isHovered} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] uppercase tracking-widest text-muted border border-stroke px-2 py-1 rounded-full bg-bg/50 backdrop-blur-sm">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-display italic mb-4">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-12 flex justify-between items-center relative z-10">
        <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:border-accent transition-colors bg-bg/50 backdrop-blur-sm">
          <span className="text-lg">↗</span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted opacity-0 group-hover:opacity-100 transition-opacity">
          Explore Project
        </span>
      </div>
    </motion.div>
  );
};

export default function SelectedWorks() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display italic mb-4">Featured projects</h2>
            <p className="text-muted">A selection of AI systems, automation workflows, and full-stack applications I've developed.</p>
          </div>
          <button className="text-xs uppercase tracking-widest border-b border-stroke pb-1 hover:border-accent transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}