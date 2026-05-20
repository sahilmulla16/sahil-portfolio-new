"use client";

import React, { useEffect, useRef } from 'react';

export default function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let nodes = [];
    const nodeCount = 40;
    const connectionDistance = 100;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.05;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(137, 170, 204, ${0.1 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node
        const size = 2 + Math.sin(node.pulse) * 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(137, 170, 204, ${0.4 + Math.sin(node.pulse) * 0.2})`;
        ctx.fill();
        
        // Energy pulse
        if (Math.random() > 0.99) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(137, 170, 204, 0.2)';
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="w-full h-full glass-card rounded-2xl overflow-hidden relative group">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      <div className="absolute top-6 left-6 z-10">
        <div className="text-[10px] uppercase tracking-[0.2em] text-accent/60 mb-1">Live Learning Simulation</div>
        <div className="text-xs text-muted font-mono">Neural_Mesh_V2_Active</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}