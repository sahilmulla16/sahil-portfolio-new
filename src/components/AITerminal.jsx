"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const logs = [
  { text: "[✓] Neural Mesh Initialized", type: "success" },
  { text: "[i] Booting Multi-Agent Orchestrator...", type: "info" },
  { text: "[✓] Vector DB Connection Stable (12ms)", type: "success" },
  { text: "[>] Routing query through LangGraph...", type: "cmd" },
  { text: "[i] Agent 'Research' assigned to task: 4F2A", type: "info" },
  { text: "[✓] Contextual Retrieval Complete", type: "success" },
  { text: "[!] High confidence threshold achieved", type: "warn" },
  { text: "[✓] Automation Workflow Active", type: "success" },
  { text: "[>] Executing Tool: Python Interpreter", type: "cmd" },
  { text: "[✓] Result validated by Critic Agent", type: "success" }
];

export default function AITerminal() {
  const [activeLogs, setActiveLogs] = useState([]);
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (index < logs.length) {
      const timer = setTimeout(() => {
        setActiveLogs(prev => [...prev, logs[index]]);
        setIndex(prev => prev + 1);
      }, 800 + Math.random() * 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setActiveLogs([]);
        setIndex(0);
      }, 3000);
    }
  }, [index]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeLogs]);

  return (
    <div className="w-full h-full bg-[#050505] rounded-2xl border border-stroke p-6 font-mono text-[11px] md:text-xs overflow-hidden flex flex-col relative group">
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 border-b border-stroke pb-3 opacity-50">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <div className="uppercase tracking-[0.2em] text-[9px]">Agent_Kernel_v2.0</div>
      </div>

      {/* Logs Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 scrollbar-hide">
        <AnimatePresence>
          {activeLogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`
                ${log.type === 'success' ? 'text-green-400/80' : ''}
                ${log.type === 'info' ? 'text-blue-400/80' : ''}
                ${log.type === 'cmd' ? 'text-purple-400/80' : ''}
                ${log.type === 'warn' ? 'text-yellow-400/80' : ''}
              `}
            >
              <span className="opacity-40 mr-2">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
              {log.text}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div 
          animate={{ opacity: [0, 1] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-1.5 h-4 bg-accent/50 inline-block align-middle"
        />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none group-hover:opacity-20 transition-opacity" />
    </div>
  );
}