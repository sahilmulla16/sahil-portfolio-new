"use client";

import React from 'react';

const stats = [
  { label: "AI & Web Projects", value: "10+" },
  { label: "CGPA", value: "9.10" },
  { label: "Focus", value: "Multi-Agent Systems" }
];

export default function Stats() {
  return (
    <section className="py-24 px-6 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl md:text-7xl font-display italic mb-4 accent-gradient-text">{stat.value}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}