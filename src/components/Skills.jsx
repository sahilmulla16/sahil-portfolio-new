"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaDatabase, FaBootstrap, 
  FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaRobot
} from 'react-icons/fa';
import { 
  SiThreedotjs, SiGreensock, SiFirebase, 
  SiVisualstudiocode, SiReplit, SiNetlify
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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-bg">
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display italic mb-3">Technical Arsenal</h2>
          <p className="text-muted uppercase tracking-[0.3em] text-[10px] opacity-60">Continuous Learning & Evolution</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        >
          {skillGroups.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="glass-card rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center gap-3 group relative overflow-hidden border border-stroke hover:border-accent/40 transition-colors duration-500"
            >
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110 relative z-10">
                {skill.icon}
              </div>
              
              <span className="text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-muted group-hover:text-text-primary transition-colors text-center relative z-10">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}