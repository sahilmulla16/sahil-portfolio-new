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
    skills: ["React", "UI/UX", "SEO", "Frontend"],
    side: "left",
    top: "120px"
  },
  {
    date: "JUL 2022 – AUG 2022",
    role: "Web Developer Intern",
    company: "A to Z IT Solutions",
    description: "Worked on real-time web development projects using HTML, CSS, and JavaScript. Built responsive interfaces and improved user engagement through optimized UI implementation and debugging workflows.",
    skills: ["JavaScript", "Responsive Design", "Debugging", "Web Development"],
    side: "right",
    top: "450px"
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

      // Path drawing animation
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

      // Moving ball animation
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
    <section ref={sectionRef} id="experience" className="relative min-h-[1200px] bg-[#050505] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Professional Experience</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A journey of growth, innovation, and real-world development.
          </p>
        </div>

        <div className="relative max-w-[1200px] h-[900px] mx-auto">
          {/* SVG Curved Path */}
          <svg className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[300px] z-10 pointer-events-none" viewBox="0 0 300 800" preserveAspectRatio="none">
            <path
              ref={pathRef}
              id="timelinePath"
              d="M150 50 C 250 150, 50 250, 150 350 S 250 550, 150 700"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="3"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_rgba(99,102,241,0.15)]"
            />
          </svg>

          {/* Moving Glow Ball (Digital Core) */}
          <div 
            ref={ballRef}
            className="absolute w-14 h-14 z-20 rounded-full p-1 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(96,165,250,0.25),0_0_60px_rgba(96,165,250,0.08)]"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="fill-none stroke-blue-400/25 stroke-[1.5]" cx="50" cy="50" r="30" />
              <circle className="fill-none stroke-blue-400/25 stroke-[1.5]" cx="50" cy="50" r="20" />
              <circle className="fill-blue-400 drop-shadow-[0_0_10px_#60a5fa] animate-[pulse_3s_ease-in-out_infinite]" cx="50" cy="50" r="8" />
              
              <g className="origin-center animate-[spin_8s_linear_infinite]">
                <circle className="fill-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" cx="80" cy="50" r="3" />
              </g>
              <g className="origin-center animate-[spin_10s_linear_infinite_reverse]">
                <circle className="fill-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" cx="50" cy="20" r="3" />
              </g>
              <g className="origin-center animate-[spin_12s_linear_infinite]">
                <circle className="fill-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" cx="20" cy="50" r="3" />
              </g>
            </svg>
          </div>

          {/* Experience Cards */}
          <div className="relative h-full w-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute w-full md:w-[420px] p-8 rounded-[28px] glass-card group transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-400/35 hover:shadow-[0_0_30px_rgba(96,165,250,0.18),0_15px_60px_rgba(0,0,0,0.45)] z-10
                  ${exp.side === 'left' ? 'md:right-[58%] text-right' : 'md:left-[58%] text-left'}
                `}
                style={{ top: exp.top }}
              >
                {/* Connector Dot */}
                <div className={`absolute w-3.5 h-3.5 bg-[#050505] border-[3px] border-blue-400 rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_18px_rgba(96,165,250,0.8)] hidden md:block
                  ${exp.side === 'left' ? '-right-[7px]' : '-left-[7px]'}
                `} />

                <div className="text-[0.85rem] tracking-[0.2em] uppercase text-zinc-500 font-semibold mb-4">
                  {exp.date}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <div className="text-blue-400 text-xl font-semibold mb-5">
                  {exp.company}
                </div>
                <p className="text-zinc-400 leading-relaxed text-[0.96rem]">
                  {exp.description}
                </p>

                <div className={`mt-6 flex flex-wrap gap-3 ${exp.side === 'left' ? 'justify-end' : 'justify-start'}`}>
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[0.82rem] transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-400/10 hover:text-white hover:-translate-y-0.5"
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

      {/* Mobile Styles Override */}
      <style>{`
        @media (max-width: 768px) {
          #experience .relative.max-w-\\[1200px\\] {
            height: auto;
            padding-left: 60px;
          }
          #experience svg.absolute {
            left: 25px;
            transform: none;
          }
          #experience .absolute.w-14 {
            left: 25px;
            transform: translate(-50%, -50%);
          }
          #experience .absolute.w-full.md\\:w-\\[420px\\] {
            position: relative;
            top: auto !important;
            left: 0 !important;
            right: 0 !important;
            text-align: left;
            margin-bottom: 3rem;
          }
          #experience .justify-end {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}