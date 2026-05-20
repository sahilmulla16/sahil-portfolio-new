"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AITerminal from './AITerminal';
import NeuralNetwork from './NeuralNetwork';
import GestureUI from './GestureUI';
import ConceptCard from './ConceptCard';

gsap.registerPlugin(ScrollTrigger);

const concepts = [
  {
    number: "01",
    title: "FoodCal AI",
    description: "AI-powered calorie estimation and nutrition analysis system using food image recognition.",
    features: ["Image-based detection", "Calorie estimation", "Nutrition breakdown", "AI meal tracking"],
    techFeel: "Computer Vision • AI • HealthTech",
    themeColor: "#4ADE80"
  },
  {
    number: "02",
    title: "TreeGuard AI",
    description: "AI system for detecting plant and tree diseases using image classification and predictive analysis.",
    features: ["Leaf disease detection", "Crop health analysis", "AI predictions", "Environmental monitoring"],
    techFeel: "Computer Vision • Agriculture AI",
    themeColor: "#22D3EE"
  },
  {
    number: "03",
    title: "QuantFlow",
    description: "AI-powered stock trend analysis and prediction dashboard with market visualization and forecasting.",
    features: ["Stock trend prediction", "Real-time analytics", "Interactive charts", "Sentiment analysis"],
    techFeel: "FinTech • Predictive Analytics",
    themeColor: "#F472B6"
  }
];

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

      // Parallax for experiment cards (Desktop Only)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
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
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 overflow-hidden bg-bg">
      <div className="max-w-[1200px] mx-auto text-center mb-16 md:mb-24">
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

      {/* Interactive Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 max-w-[1400px] mx-auto px-4 mb-32">
        <div className="experiment-card h-[400px] lg:h-[450px]">
          <AITerminal />
        </div>
        <div className="experiment-card h-[400px] lg:h-[450px] md:mt-24 lg:mt-0">
          <NeuralNetwork />
        </div>
        <div className="experiment-card h-[400px] lg:h-[450px] lg:mt-24">
          <GestureUI />
        </div>
      </div>

      {/* Research & Development Tracks */}
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-display italic mb-4">Research & Development</h3>
          <p className="text-muted">Prototyping future systems at the intersection of AI, Finance, and Sustainability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <ConceptCard key={index} {...concept} />
          ))}
        </div>
      </div>

      {/* Decorative Cinematic Overlay */}
      <div className="mt-32 text-center opacity-20 hidden md:block">
        <div className="text-[100px] md:text-[180px] font-display italic leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden">
          INNOVATION • AUTOMATION • DESIGN • ENGINEERING •
        </div>
      </div>
    </section>
  );
}