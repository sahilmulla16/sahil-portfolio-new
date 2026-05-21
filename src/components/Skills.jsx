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

const skillCategories = [
  {
    title: "AI & Automation",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "n8n", icon: <FaRobot className="text-[#FF6D5B]" /> },
      { name: "Retell.ai", icon: <FaRobot className="text-cyan-400" /> },
      { name: "Machine Learning", icon: <FaRobot className="text-purple-400" /> }
    ]
  },
  {
    title: "Frontend & 3D",
    skills: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Three.js", icon: <SiThreedotjs className="text-white" /> },
      { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
    <section id="skills" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Skills & <span className="accent-gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            A comprehensive suite of tools and frameworks I leverage to build intelligent, high-performance digital solutions.
          </p>
        </div>

        {/* Categorized Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVariants}
              className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-purple-500/20 transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/5">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}