"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CreativeEngineering() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.parallax-item').forEach((item, i) => {
        gsap.to(item, {
          y: (i % 2 === 0 ? -100 : 100),
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-display italic mb-6">Creative Engineering</h2>
        <p className="text-muted max-w-xl mx-auto mb-8">Interactive experiments combining frontend motion design, AI systems, and immersive UI experiences.</p>
        <button className="text-xs uppercase tracking-widest border border-stroke px-8 py-3 rounded-full hover:border-accent transition-colors">
          Explore Experiments
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="parallax-item aspect-[3/4] glass-card rounded-2xl flex items-center justify-center">
            <div className="text-muted text-[10px] uppercase tracking-widest">Experiment 0{i}</div>
          </div>
        ))}
      </div>
    </section>
  );
}