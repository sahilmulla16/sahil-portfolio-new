"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaDatabase, FaBootstrap, 
  FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaRobot
} from 'react-icons/fa';
import { 
  SiThreedotjs, SiGreensock, SiFirebase, SiN8N, 
  SiVisualstudiocode, SiReplit, SiNetlify, SiCanva, SiMicrosoftoffice 
} from 'react-icons/si';

const skillGroups = [
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Three.js", icon: <SiThreedotjs className="text-white" /> },
  { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
  { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "n8n", icon: <SiN8N className="text-[#FF6D5B]" /> },
  { name: "Retell.ai", icon: <FaRobot className="text-accent" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
  { name: "Replit", icon: <SiReplit className="text-[#F26207]" /> },
  { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
  { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
  { name: "Microsoft Office", icon: <SiMicrosoftoffice className="text-[#D83B01]" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display italic mb-4">Skills</h2>
          <p className="text-muted uppercase tracking-widest text-xs">I constantly try to improve</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillGroups.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group relative overflow-hidden border border-stroke hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              
              <span className="text-xs font-medium tracking-widest uppercase text-muted group-hover:text-text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}