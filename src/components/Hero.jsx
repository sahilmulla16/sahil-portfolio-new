import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "Sahilmulla9152@gmail.com";

  const texts = ["Web Designer", "Freelancer", "Coder", "AI & ML Student"];
  const [index, setIndex] = useState(0);

  // Rotate text every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-6"
    >
      {/* Tag */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-gray-300 text-base md:text-lg font-medium">Available For Work</span>
      </div>

      {/* New badge */}
      <div className="mb-8">
        <span className="bg-blue-600 text-white text-sm md:text-base font-semibold px-4 py-1 rounded-full shadow-lg">
          New
        </span>
        <span className="ml-3 text-white text-base md:text-lg">ResumeGEN is live! ➜</span>
      </div>

      {/* Main heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6">
        Coder{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          X
        </span>{" "}
        Designer
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mb-4">
        Hello, I'm <span className="text-white font-semibold">Sahil Mulla</span>, a Freelance Developer
      </p>

      {/* Animated role text */}
      <div className="h-8 md:h-10 mb-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={texts[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-lg md:text-xl"
          >
            {texts[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="bg-black border border-gray-700 hover:border-white text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300">
          <a
            href="https://www.linkedin.com/in/sahil-mulla-625364263/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Let’s Connect</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-mulla-625364263/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-white text-black p-2 rounded-full">🤝</span>
          </a>
        </button>

        {/* Email with copy functionality */}
        <button
          onClick={handleCopyEmail}
          className="text-gray-300 text-base md:text-lg flex items-center space-x-2 hover:text-white transition-colors"
        >
          <span>📧 {email}</span>
          {copied && <span className="text-green-400 text-sm">Copied!</span>}
        </button>
      </div>
    </section>
  );
}
