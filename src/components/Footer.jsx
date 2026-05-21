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
    <footer className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Marquee */}
      <div className="relative z-10 py-8 md:py-12 border-y border-stroke bg-bg/50 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-3xl md:text-6xl font-display italic mx-4 md:mx-8 text-muted/30">
              AI • AUTOMATION • FULL STACK • INNOVATION •
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-20">
        <h2 className="text-4xl md:text-8xl font-display italic mb-10 md:mb-12 max-w-3xl">Let's Build Something Intelligent</h2>
        <a 
          href="mailto:sahilmulla9152@gmail.com"
          className="group relative w-20 h-20 md:w-32 md:h-32 rounded-full border border-stroke flex items-center justify-center hover:border-accent transition-colors duration-500"
        >
          <div className="absolute inset-2 rounded-full border border-accent/20 group-hover:scale-110 transition-transform duration-500" />
          <span className="text-[10px] uppercase tracking-widest">Email</span>
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-stroke bg-bg/95">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest text-muted">Available for AI projects</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {["GitHub", "LinkedIn", "Email"].map(link => (
            <a key={link} href="#" className="text-[9px] uppercase tracking-widest text-muted hover:text-text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="text-[9px] uppercase tracking-widest text-muted text-center">
          © {new Date().getFullYear()} Sahil Mulla
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}