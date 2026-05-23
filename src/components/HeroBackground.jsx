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
    const particleCount = isMobile() ? 80 : 220;
    const mouse = { x: null, y: null, rx: 0, ry: 0, radius: 150 };
    let time = 0;

    class Particle {
      constructor() {
        this.reset();
        // Randomize initial positions fully across screen
        this.x = Math.random() * width;
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * 0.8 + 0.4;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.02 - 0.01;
        // Aesthetic tech colors (blues, purples, cyans)
        const colors = [
          'rgba(137, 170, 204, 0.6)', // Accent blue
          'rgba(147, 197, 253, 0.4)', // Light blue
          'rgba(168, 85, 247, 0.4)',  // Purple
          'rgba(34, 211, 238, 0.4)'   // Cyan
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        // Flow field math using sine/cosine waves over space and time
        const flowAngle = Math.sin(this.x * 0.005 + time) * Math.cos(this.y * 0.005 + time) * Math.PI * 2;
        
        // Blend natural flow with particle's own angle
        this.angle += this.spin;
        const vx = Math.cos(flowAngle) * this.speed * 0.7 + Math.cos(this.angle) * this.speed * 0.3;
        const vy = Math.sin(flowAngle) * this.speed * 0.7 + Math.sin(this.angle) * this.speed * 0.3;

        this.x += vx;
        this.y += vy;

        // Mouse interaction: Swirling gravity vortex
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.rx - this.x;
          const dy = mouse.ry - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Pull towards mouse
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
            
            // Add a swirling orbital force
            this.x += (-dy / dist) * force * 2;
            this.y += (dx / dist) * force * 2;
          }
        }

        // Reset if out of bounds
        if (this.x < -20 || this.x > width + 20 || this.y < -20 || this.y > height + 20) {
          this.reset();
          if (Math.random() > 0.5) {
            this.x = Math.random() > 0.5 ? -10 : width + 10;
          } else {
            this.y = Math.random() > 0.5 ? -10 : height + 10;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
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

    // Click shockwave interaction
    const handleClick = (e) => {
      const clickX = e.clientX || (e.touches && e.touches[0].clientX);
      const clickY = e.clientY || (e.touches && e.touches[0].clientY);
      if (!clickX || !clickY) return;

      particles.forEach(p => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          const force = (250 - dist) / 250;
          p.x += (dx / dist) * force * 50;
          p.y += (dy / dist) * force * 50;
        }
      });
    };

    const draw = () => {
      // Create a beautiful trailing effect by drawing a semi-transparent background
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, width, height);

      time += 0.002;

      // Smoothly lerp mouse coordinates
      if (mouse.x !== null && mouse.y !== null) {
        mouse.rx += (mouse.x - mouse.rx) * 0.08;
        mouse.ry += (mouse.y - mouse.ry) * 0.08;
      }

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw subtle interactive glow under the cursor
      if (mouse.x !== null && mouse.y !== null) {
        const gradient = ctx.createRadialGradient(mouse.rx, mouse.ry, 0, mouse.rx, mouse.ry, mouse.radius);
        gradient.addColorStop(0, 'rgba(137, 170, 204, 0.04)');
        gradient.addColorStop(1, 'rgba(137, 170, 204, 0)');
        ctx.beginPath();
        ctx.arc(mouse.rx, mouse.ry, mouse.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}