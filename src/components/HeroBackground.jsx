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
    let packets = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const isMobile = () => window.innerWidth < 768;

    // Configuration
    const maxNodes = isMobile() ? 30 : 75;
    const connectionDist = isMobile() ? 90 : 140;
    const mouse = { x: null, y: null, rx: 0, ry: 0, radius: 180 };
    
    // Initialize nodes
    const initNodes = () => {
      nodes = [];
      packets = [];
      for (let i = 0; i < maxNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          color: Math.random() > 0.8 ? 'rgba(147, 197, 253, 0.8)' : 'rgba(137, 170, 204, 0.5)'
        });
      }
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    // Mouse & Touch Handlers
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Click to spawn interactive burst of nodes
    const handleClick = (e) => {
      const clickX = e.clientX || (e.touches && e.touches[0].clientX);
      const clickY = e.clientY || (e.touches && e.touches[0].clientY);
      if (!clickX || !clickY) return;

      const burstCount = isMobile() ? 4 : 8;
      for (let i = 0; i < burstCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        nodes.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3 + 1.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.05,
          color: 'rgba(168, 85, 247, 0.9)', // Purple burst
          temporary: true,
          life: 1.0 // Fade out life
        });
      }

      // Remove excess nodes to keep performance stable
      if (nodes.length > maxNodes + 20) {
        nodes.splice(0, nodes.length - (maxNodes + 20));
      }
    };

    // Spawn random data packets along connections
    const maybeSpawnPacket = (nodeA, nodeB, dist) => {
      if (packets.length < 15 && Math.random() < 0.002) {
        packets.push({
          x: nodeA.x,
          y: nodeA.y,
          from: nodeA,
          to: nodeB,
          progress: 0,
          speed: (0.01 + Math.random() * 0.015) * (100 / dist)
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly lerp mouse coordinates for parallax/attraction
      if (mouse.x !== null && mouse.y !== null) {
        mouse.rx += (mouse.x - mouse.rx) * 0.08;
        mouse.ry += (mouse.y - mouse.ry) * 0.08;
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        // Handle temporary burst nodes
        if (node.temporary) {
          node.life -= 0.01;
          if (node.life <= 0) {
            nodes.splice(i, 1);
            return;
          }
        }

        // Boundary collision
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction & Parallax
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.rx - node.x;
          const dy = mouse.ry - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            node.x += (dx / dist) * force * 0.8;
            node.y += (dy / dist) * force * 0.8;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = node.temporary || other.temporary 
              ? `rgba(168, 85, 247, ${alpha * 1.5})` 
              : `rgba(137, 170, 204, ${alpha})`;
            ctx.lineWidth = node.temporary || other.temporary ? 1.2 : 0.7;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // Attempt to spawn a data packet along this connection
            maybeSpawnPacket(node, other, dist);
          }
        }

        // Draw node
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.6;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.temporary 
          ? `rgba(168, 85, 247, ${node.life})` 
          : node.color;
        ctx.fill();

        // Subtle outer glow ring for key nodes
        if (i % 7 === 0 && !node.temporary) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(137, 170, 204, ${0.05 + Math.sin(node.pulse) * 0.03})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Update and draw data packets
      packets.forEach((packet, index) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packets.splice(index, 1);
          return;
        }

        // Calculate current position along the line
        const currX = packet.from.x + (packet.to.x - packet.from.x) * packet.progress;
        const currY = packet.from.y + (packet.to.y - packet.from.y) * packet.progress;

        // Draw glowing packet
        ctx.beginPath();
        ctx.arc(currX, currY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#93c5fd';
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur for performance
      });

      // Draw interactive mouse halo
      if (mouse.x !== null && mouse.y !== null) {
        ctx.beginPath();
        ctx.arc(mouse.rx, mouse.ry, 40, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(137, 170, 204, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('click', handleClick);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}