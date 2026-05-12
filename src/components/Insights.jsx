"use client";

import React from 'react';

const entries = [
  { title: "Building Multi-Agent AI Systems", date: "2024", category: "AI Architecture" },
  { title: "Designing Better AI Interfaces", date: "2024", category: "UI/UX" },
  { title: "LangGraph Workflow Architecture", date: "2023", category: "Automation" },
  { title: "Scaling Automation Pipelines", date: "2023", category: "Engineering" }
];

export default function Insights() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display italic mb-4">Recent thoughts & experiments</h2>
          <p className="text-muted">Exploring AI systems, automation workflows, and scalable software architecture.</p>
        </div>

        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div 
              key={index}
              className="glass-card rounded-full px-8 py-6 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs text-muted tabular-nums">{entry.date}</span>
                <h3 className="text-lg md:text-xl font-medium group-hover:text-accent transition-colors">{entry.title}</h3>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted border border-stroke px-3 py-1 rounded-full mt-4 md:mt-0">
                {entry.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}