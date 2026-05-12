"use client";

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, []);

  return (
    <footer className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Marquee */}
      <div className="relative z-10 py-12 border-y border-stroke bg-bg/50 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-[gradient-shift_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-display italic mx-8 text-muted/30">
              AI • AUTOMATION • FULL STACK • INNOVATION •
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-display italic mb-12">Let's Build Something Intelligent</h2>
        <a 
          href="mailto:sahilmulla9152@gmail.com"
          className="group relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-stroke flex items-center justify-center hover:border-accent transition-colors duration-500"
        >
          <div className="absolute inset-2 rounded-full border border-accent/20 group-hover:scale-110 transition-transform duration-500" />
          <span className="text-xs uppercase tracking-widest">Email</span>
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-stroke bg-bg/80">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-muted">Available for freelance & AI projects</span>
        </div>

        <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Portfolio", "Email"].map(link => (
            <a key={link} href="#" className="text-[10px] uppercase tracking-widest text-muted hover:text-text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="text-[10px] uppercase tracking-widest text-muted">
          © {new Date().getFullYear()} Sahil Mulla
        </div>
      </div>
    </footer>
  );
}