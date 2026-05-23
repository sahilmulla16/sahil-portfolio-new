"use client";

import React, { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const isMobile = () => window.innerWidth < 768;

    // Configuration
    const particleCount = isMobile() ? 40 : 120;
    const mouse = { x: null, y: null, tx: null, ty: null, radius: 180 };
    
    class Particle {
      constructor() {
        this.reset();
        this.x = Math.random() * width;
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.7 ? '#93c5fd' : '#89aacc';
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.8 + 0.2;
      }

      update() {
        // Flow field math (sine/cosine wave currents)
        const flowAngle = Math.sin(this.x * 0.005) * Math.cos(this.y * 0.005) * Math.PI * 2;
        
        // Smoothly blend flow field force with base velocity
        this.vx += Math.cos(flowAngle) * 0.02;
        this.vy += Math.sin(flowAngle) * 0.02;

        // Mouse magnetic warping
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Create a swirling vortex effect around the mouse
            const angle = Math.atan2(dy, dx) + Math.PI / 2;
            this.vx += Math.cos(angle) * force * 0.15;
            this.vy += Math.sin(angle) * force * 0.15;
          }
        }

        // Apply velocity with speed limit
        const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (currentSpeed > 2) {
          this.vx = (this.vx / currentSpeed) * 2;
          this.vy = (this.vy / currentSpeed) * 2;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen edges
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    // Mouse & Touch Handlers
    const handleMouseMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.tx = null;
      mouse.ty = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.tx = e.touches[0].clientX;
        mouse.ty = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouse.tx = null;
      mouse.ty = null;
    };

    const draw = () => {
      // Create a beautiful trailing effect by drawing a semi-transparent background
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, width, height);

      // Smoothly interpolate mouse position for fluid movement
      if (mouse.tx !== null && mouse.ty !== null) {
        if (mouse.x === null) {
          mouse.x = mouse.tx;
          mouse.y = mouse.ty;
        } else {
          mouse.x += (mouse.tx - mouse.x) * 0.1;
          mouse.y += (mouse.ty - mouse.y) * 0.1;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      // Draw a subtle interactive grid in the background
      const gridSize = isMobile() ? 60 : 100;
      ctx.strokeStyle = 'rgba(137, 170, 204, 0.02)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connections between close particles to form dynamic constellations
      ctx.globalAlpha = 1;
      const maxDist = isMobile() ? 60 : 90;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(137, 170, 204, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}