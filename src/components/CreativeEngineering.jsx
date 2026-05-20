"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AITerminal from './AITerminal';
import NeuralNetwork from './NeuralNetwork';
import GestureUI from './GestureUI';

gsap.registerPlugin(ScrollTrigger);

export default function CreativeEngineering() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        italic: false,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1
        }
      });

      // Cinematic parallax for experiment cards
      gsap.utils.toArray('.experiment-card').forEach((item, i) => {
        gsap.to(item, {
          y: (i % 2 === 0 ? -60 : 60),
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 overflow-hidden bg-bg">
      <div className="max-w-[1200px] mx-auto text-center mb-24">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-display italic mb-8">
          Creative Engineering
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Interactive experiments combining high-performance motion design, AI orchestration simulations, and cinematic web interfaces.
        </p>
        
        <div className="flex justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Core Active</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent/50" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">60 FPS Render</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-4">
        {/* Experiment 01: AI Terminal */}
        <div className="experiment-card h-[400px] lg:h-[450px]">
          <AITerminal />
        </div>

        {/* Experiment 02: Neural Visualization */}
        <div className="experiment-card h-[400px] lg:h-[450px] md:mt-24 lg:mt-0">
          <NeuralNetwork />
        </div>

        {/* Experiment 03: Gesture UI */}
        <div className="experiment-card h-[400px] lg:h-[450px] lg:mt-24">
          <GestureUI />
        </div>
      </div>

      {/* Decorative Cinematic Overlay */}
      <div className="mt-32 text-center opacity-20">
        <div className="text-[100px] md:text-[180px] font-display italic leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden">
          INNOVATION • AUTOMATION • DESIGN • ENGINEERING •
        </div>
      </div>
    </section>
  );
}