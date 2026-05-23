"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const experiences = [
  {
    date: "SEP 2025 – FEB 2026",
    role: "Full Stack Developer Intern",
    company: "Toujours Pret Management Consultancy Pvt. Ltd.",
    description: "Contributed to the development of modern full-stack digital solutions with a focus on responsive UI engineering, scalable workflows, and performance optimization. Collaborated on real-world production systems while enhancing frontend experiences and development efficiency.",
    skills: ["Full Stack", "UI Engineering", "Workflows", "Performance"],
    side: "right",
    top: "100px"
  },
  {
    date: "NOV 2024 – DEC 2024",
    role: "Freelance Developer",
    company: "Apexxport Pvt. Ltd.",
    description: "Received a Letter of Recommendation for outstanding contributions in front-end development, React, and UI/UX optimization. Improved responsiveness, usability, and overall user experience across modern web interfaces.",
    skills: ["React", "UI/UX", "SEO", "Frontend"],
    side: "left",
    top: "450px"
  },
  {
    date: "JUL 2022 – AUG 2022",
    role: "Web Developer Intern",
    company: "A to Z IT Solutions",
    description: "Worked on real-time web development projects using HTML, CSS, and JavaScript. Built responsive interfaces and improved user engagement through optimized UI implementation and debugging workflows.",
    skills: ["JavaScript", "Responsive Design", "Debugging", "Web Development"],
    side: "right",
    top: "800px"
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
    <section ref={sectionRef} id="experience" className="relative min-h-[1400px] bg-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-4">Professional Experience</h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto px-4">
            A journey of growth, innovation, and real-world development.
          </p>
        </div>

        <div className="relative max-w-[800px] h-[1100px] mx-auto">
          {/* SVG Curved Path */}
          <svg className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[600px] z-10 pointer-events-none" viewBox="0 0 600 1100" preserveAspectRatio="none">
            <path
              ref={pathRef}
              id="timelinePath"
              d="M300,0 Q150,183 300,366 Q450,550 300,733 Q150,916 300,1100"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-stroke opacity-30"
            />
          </svg>

          {/* Moving Glow Ball (Digital Core) */}
          <div 
            ref={ballRef}
            className="absolute w-12 h-12 z-20 rounded-full p-1 bg-surface/50 backdrop-blur-xl border border-stroke shadow-lg"
          >
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <ellipse className="fill-none stroke-accent opacity-20 stroke-[1]" cx="50" cy="50" rx="45" ry="20" />
              <ellipse className="fill-none stroke-accent opacity-20 stroke-[1]" cx="50" cy="50" rx="20" ry="45" />
              <ellipse className="fill-none stroke-accent opacity-20 stroke-[1]" cx="50" cy="50" rx="35" ry="35" />
              <circle className="fill-accent drop-shadow-[0_0_6px_#60a5fa] animate-[pulse_3s_ease-in-out_infinite]" cx="50" cy="50" r="10" />
              
              <g className="origin-center animate-[spin_8s_linear_infinite]">
                <circle className="fill-accent drop-shadow-[0_0_4px_#60a5fa]" cx="50" cy="5" r="4" />
              </g>
              <g className="origin-center animate-[spin_10s_linear_infinite_reverse]">
                <circle className="fill-accent drop-shadow-[0_0_4px_#60a5fa]" cx="15" cy="50" r="3" />
              </g>
              <g className="origin-center animate-[spin_12s_linear_infinite]">
                <circle className="fill-accent drop-shadow-[0_0_4px_#60a5fa]" cx="80" cy="50" r="3.5" />
              </g>
            </svg>
          </div>

          {/* Experience Cards */}
          <div className="relative h-full w-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "power3.out" }}
                className={`absolute w-full md:w-[420px] p-6 md:p-8 rounded-[28px] glass-card group transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 z-10
                  ${exp.side === 'left' ? 'md:right-[58%] text-right' : 'md:left-[58%] text-left'}
                `}
                style={{ top: exp.top }}
              >
                {/* Connector Dot */}
                <div className={`absolute w-3 h-3 bg-bg border-2 border-accent rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(96,165,250,0.6)] hidden md:block
                  ${exp.side === 'left' ? '-right-[6px]' : '-left-[6px]'}
                `} />

                <div className="text-[0.85rem] tracking-[0.2em] uppercase text-muted font-semibold mb-2">
                  {exp.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-1 leading-tight group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <div className="text-accent text-lg font-semibold mb-4">
                  {exp.company}
                </div>
                <p className="text-muted leading-relaxed text-[0.95rem] mb-6">
                  {exp.description}
                </p>

                <div className={`flex flex-wrap gap-2 ${exp.side === 'left' ? 'justify-end' : 'justify-start'}`}>
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 rounded-full bg-surface/50 border border-stroke text-muted text-[0.8rem] transition-all hover:border-accent/30 hover:text-text-primary"
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
          #experience .relative.max-w-[800px] {
            height: auto;
            padding-left: 40px;
            padding-right: 10px;
          }
          #experience svg.absolute {
            left: 20px;
            transform: none;
            width: 100px;
          }
          #experience .absolute.w-12 {
            left: 20px;
            transform: translate(-50%, -50%);
          }
          #experience .absolute.w-full.md\\:w-\\[420px\\] {
            position: relative;
            top: auto !important;
            left: 0 !important;
            right: 0 !important;
            text-align: left;
            margin-bottom: 2.5rem;
          }
          #experience .flex.flex-wrap {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}