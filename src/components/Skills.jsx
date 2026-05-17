"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaDatabase, FaBootstrap, 
  FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaRobot
} from 'react-icons/fa';
import { 
  SiThreedotjs, SiGreensock, SiFirebase, 
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
  { name: "n8n", icon: <FaRobot className="text-[#FF6D5B]" /> },
  { name: "Retell.ai", icon: <FaRobot className="text-accent" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
  { name: "Replit", icon: <SiReplit className="text-[#F26207]" /> },
  { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
  { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
  { name: "MS Office", icon: <SiMicrosoftoffice className="text-[#D83B01]" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-bg">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display italic mb-2">Skills</h2>
          <p className="text-muted uppercase tracking-[0.2em] text-[10px]">I constantly try to improve</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {skillGroups.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass-card rounded-xl p-3 md:p-4 flex flex-col items-center justify-center gap-2 group relative overflow-hidden border border-stroke hover:border-accent/20 transition-all duration-300"
            >
              <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="text-xl md:text-2xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              
              <span className="text-[9px] md:text-[10px] font-medium tracking-wider uppercase text-muted group-hover:text-text-primary transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}