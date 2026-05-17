"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaPython, FaJava, FaReact, FaDatabase, FaBootstrap, 
  FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, 
  FaMicrosoft 
} from 'react-icons/fa';
import { 
  SiVisualstudiocode, SiFirebase, SiNetlify, 
  SiReplit, SiCanva, SiThreedotjs, SiGreensock 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Programming & Frontend",
    skills: [
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Three.js", icon: <SiThreedotjs />, color: "#FFFFFF" },
      { name: "GSAP", icon: <SiGreensock />, color: "#88CE02" },
      { name: "SQL", icon: <FaDatabase />, color: "#4479A1" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    ]
  },
  {
    title: "AI / Automation",
    skills: [
      { name: "n8n", icon: <span className="text-2xl">⚙️</span>, color: "#FF6D5A" },
      { name: "Retell.ai", icon: <span className="text-2xl">🤖</span>, color: "#60A5FA" },
    ]
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
      { name: "Replit", icon: <SiReplit />, color: "#F26207" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
      { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
      { name: "Microsoft Office", icon: <FaMicrosoft />, color: "#D83B01" },
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const orbRef1 = useRef(null);
  const orbRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating orbs animation
      gsap.to([orbRef1.current, orbRef2.current], {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
      });

      // Section reveal
      gsap.from(".skills-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="relative min-h-screen bg-[#050505] py-24 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating Orbs */}
        <div 
          ref={orbRef1}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <div 
          ref={orbRef2}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="skills-header text-center mb-20">
          <h2 className="text-[clamp(3rem,7vw,5rem)] font-extrabold text-white tracking-tighter leading-none mb-4">
            Skills
          </h2>
          <p className="text-xl text-zinc-400 font-medium">
            I constantly try to improve
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[24px] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"
              />
              
              <div className="relative h-full bg-white/[0.04] backdrop-blur-[18px] border border-white/[0.08] rounded-[24px] p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                {/* Skill Icon */}
                <div 
                  className="text-4xl transition-all duration-500 group-hover:scale-115 group-hover:rotate-6"
                  style={{ 
                    color: skill.color,
                    filter: `drop-shadow(0 0 10px ${skill.color}66)`
                  }}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-[24px] border border-transparent [mask-image:linear-gradient(white,white)] before:absolute before:inset-0 before:rounded-[24px] before:border before:border-white/10 before:content-[''] group-hover:before:border-blue-500/50 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}