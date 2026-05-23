"use client";

import React, { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const isMobile = () => window.innerWidth < 768;
    
    // Optimize node count and connection distance based on device
    const nodeCount = isMobile() ? 35 : 90;
    const connectionDistance = isMobile() ? 80 : 120;
    const mouseNode = { x: null, y: null, radius: 150 };

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e) => {
      mouseNode.x = e.clientX;
      mouseNode.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseNode.x = null;
      mouseNode.y = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseNode.x = e.touches[0].clientX;
        mouseNode.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouseNode.x = null;
      mouseNode.y = null;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        // Boundary collision
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction (subtle attraction)
        if (mouseNode.x !== null && mouseNode.y !== null) {
          const dx = mouseNode.x - node.x;
          const dy = mouseNode.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseNode.radius) {
            const force = (mouseNode.radius - dist) / mouseNode.radius;
            node.x += (dx / dist) * force * 0.6;
            node.y += (dy / dist) * force * 0.6;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(137, 170, 204, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node itself with a subtle pulse glow
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(137, 170, 204, ${0.3 + Math.sin(node.pulse) * 0.2})`;
        ctx.fill();
      });

      // Draw connections to mouse
      if (mouseNode.x !== null && mouseNode.y !== null) {
        nodes.forEach((node) => {
          const dx = mouseNode.x - node.x;
          const dy = mouseNode.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseNode.radius) {
            const alpha = (1 - dist / mouseNode.radius) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(137, 170, 204, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouseNode.x, mouseNode.y);
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
}