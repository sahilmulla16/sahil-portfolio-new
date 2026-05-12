"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const experiences = [
  {
    date: "NOV 2024 – DEC 2024",
    role: "Freelance Developer",
    company: "Apexxport Pvt. Ltd.",
    description: "Received a Letter of Recommendation for outstanding contributions in front-end development, React, and UI/UX optimization. Improved responsiveness, usability, and overall user experience across modern web interfaces.",
    skills: ["React", "UI/UX", "SEO", "Frontend Optimization"],
    side: "left"
  },
  {
    date: "JUL 2022 – AUG 2022",
    role: "Web Developer Intern",
    company: "A to Z IT Solutions",
    description: "Worked on real-time web development projects using HTML, CSS, and JavaScript. Built responsive interfaces and improved user engagement through optimized UI implementation and debugging workflows.",
    skills: ["Web Development", "Responsive Design", "Debugging", "JavaScript"],
    side: "right"
  }
];

export default function ProfessionalExperience() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline Path Animation
      gsap.fromTo(pathRef.current, 
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      // Orb Path Animation
      gsap.to(orbRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="relative min-h-[150vh] bg-[#050505] py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.12),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[2px] mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-zinc-400 text-lg mt-8 max-w-2xl mx-auto"
          >
            A journey of growth, innovation, and real-world development.
          </motion.p>
        </div>

        <div className="relative">
          {/* SVG Timeline Path */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none" className="h-full w-full">
              <path
                ref={pathRef}
                d="M50,0 Q60,100 40,200 T50,400 Q70,600 30,800 T50,1000"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
                strokeDasharray="1000"
              />
            </svg>
            {/* Glowing Orb */}
            <div 
              ref={orbRef}
              className="absolute top-0 left-0 w-4 h-4 -ml-2 -mt-2 z-20"
            >
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_20px_rgba(96,165,250,0.9),0_0_50px_rgba(96,165,250,0.4)]" />
              <div className="absolute -inset-1 border border-blue-400/30 rounded-full animate-ping" />
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-y-40 relative z-10">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col ${exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12`}>
                <motion.div 
                  initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-[45%]"
                >
                  <div className="glass-card group p-8 md:p-10 rounded-[32px] transition-all duration-500 hover:translate-y-[-8px] hover:border-blue-400/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(96,165,250,0.1)]">
                    <span className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-4 block">
                      {exp.date}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-blue-400 font-semibold text-xl mb-6">
                      {exp.company}
                    </h4>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Spacer for the timeline path */}
                <div className="hidden md:block md:w-[10%]" />
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}