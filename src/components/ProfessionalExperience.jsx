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
    description: "Received a Letter of Recommendation for outstanding contributions in front-end development, React, and UI/UX optimization. Improved responsiveness and usability across modern web interfaces.",
    skills: ["React", "UI/UX", "SEO", "Frontend"],
    side: "left",
    top: "100px"
  },
  {
    date: "JUL 2022 – AUG 2022",
    role: "Web Developer Intern",
    company: "A to Z IT Solutions",
    description: "Worked on real-time web development projects using HTML, CSS, and JavaScript. Built responsive interfaces and improved user engagement through optimized UI implementation.",
    skills: ["JavaScript", "Responsive", "Debugging", "Web Dev"],
    side: "right",
    top: "420px"
  }
];

export default function ProfessionalExperience() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      });

      gsap.to(ballRef.current, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5]
        },
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative min-h-[1100px] bg-[#050505] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Professional Experience</h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto px-4">
            A journey of growth, innovation, and real-world development.
          </p>
        </div>

        <div className="relative max-w-[1100px] h-[800px] mx-auto">
          {/* SVG Curved Path */}
          <svg className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[200px] md:w-[300px] z-10 pointer-events-none" viewBox="0 0 300 800" preserveAspectRatio="none">
            <path
              ref={pathRef}
              id="timelinePath"
              d="M150 50 C 250 150, 50 250, 150 350 S 250 550, 150 700"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(99,102,241,0.1)]"
            />
          </svg>

          {/* Moving Glow Ball */}
          <div 
            ref={ballRef}
            className="absolute w-10 h-10 md:w-12 md:h-12 z-20 rounded-full p-1 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(96,165,250,0.2)]"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="fill-none stroke-blue-400/20 stroke-[2]" cx="50" cy="50" r="35" />
              <circle className="fill-blue-400 drop-shadow-[0_0_8px_#60a5fa]" cx="50" cy="50" r="10" />
              <g className="origin-center animate-[spin_6s_linear_infinite]">
                <circle className="fill-cyan-400" cx="85" cy="50" r="4" />
              </g>
            </svg>
          </div>

          {/* Experience Cards */}
          <div className="relative h-full w-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className={`absolute w-full md:w-[380px] p-6 md:p-8 rounded-[24px] glass-card group transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 z-10
                  ${exp.side === 'left' ? 'md:right-[56%] text-right' : 'md:left-[56%] text-left'}
                `}
                style={{ top: exp.top }}
              >
                {/* Connector Dot */}
                <div className={`absolute w-3 h-3 bg-[#050505] border-2 border-blue-400 rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(96,165,250,0.6)] hidden md:block
                  ${exp.side === 'left' ? '-right-[6px]' : '-left-[6px]'}
                `} />

                <div className="text-[0.75rem] tracking-[0.15em] uppercase text-zinc-500 font-semibold mb-3">
                  {exp.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <div className="text-blue-400 text-lg font-semibold mb-4">
                  {exp.company}
                </div>
                <p className="text-zinc-400 leading-relaxed text-[0.9rem]">
                  {exp.description}
                </p>

                <div className={`mt-5 flex flex-wrap gap-2 ${exp.side === 'left' ? 'justify-end' : 'justify-start'}`}>
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[0.75rem] transition-colors hover:border-blue-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .relative.max-w-\\[1100px\\] {
            height: auto;
            padding-left: 40px;
            padding-right: 10px;
          }
          #experience svg.absolute {
            left: 20px;
            transform: none;
            width: 100px;
          }
          #experience .absolute.w-10 {
            left: 20px;
            transform: translate(-50%, -50%);
          }
          #experience .absolute.w-full.md\\:w-\\[380px\\] {
            position: relative;
            top: auto !important;
            left: 0 !important;
            right: 0 !important;
            text-align: left;
            margin-bottom: 2.5rem;
          }
          #experience .justify-end {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}