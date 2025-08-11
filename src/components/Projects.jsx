import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { FaGithub, FaGlobe, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import jarvisImg from "../Pic/Jarvis home.png";
import voiceAgentImg from "../Pic/Banner.png";
import portfolioImg from "../Pic/portfolio new.png";
import iphoneImg from "../Pic/iphone.png";
import ems from "../Pic/EMS.png";

export default function Projects() {
  const projects = [
    {
      title: "AI Powered Jarvis",
      description:
        "An AI-powered assistant with voice control, built to execute commands and provide real-time responses.",
      tech: ["Python", "Bootstrap", "HTML", "CSS", "JavaScript"],
      img: jarvisImg,
      source: "https://github.com/yourusername/jarvis",
      live: "https://your-jarvis-demo.com",
    },
    {
      title: "Automated Voice AI Agent",
      description:
        "A conversational AI agent built using n8n and Retell AI for automated workflows and real-time voice communication.",
      tech: ["n8n", "Retell AI"],
      img: voiceAgentImg,
      source: "https://github.com/yourusername/voice-agent",
      live: "https://your-voiceagent-demo.com",
    },
    {
      title: "Professional Portfolio",
      description:
        "My personal portfolio showcasing projects, skills, and experience with immersive 3D animations.",
      tech: ["React", "Three.js", "GSAP"],
      img: portfolioImg,
      source: "https://github.com/yourusername/portfolio",
      live: "https://sahilmulla-portfolio.netlify.app/",
    },
    {
      title: "iPhone 15 Pro Website",
      description:
        "A pixel-perfect 3D clone of the iPhone 15 Pro website with smooth animations and interactions.",
      tech: ["React", "Three.js", "GSAP"],
      img: iphoneImg,
      source: "https://github.com/yourusername/iphone15",
      live: "https://iphone15pro-web.netlify.app/",
    },
    {
      title: "Network Security Monitoring System",
      description:
        "A real-time monitoring system for tracking network security metrics.",
      tech: ["React", "Firebase"],
      img: ems,
      source: "https://github.com/yourusername/network-security",
      live: "https://ems121.netlify.app/#/",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [slideDuration, setSlideDuration] = useState(5000); // default 5s

  useEffect(() => {
    // Detect mobile and set slower speed
    if (window.innerWidth < 768) {
      setSlideDuration(7000); // 7s for mobile
    }
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    progressRef.current = 0;
    setProgress(0);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
      progressRef.current = 0;
    }, slideDuration);

    const progressTimer = setInterval(() => {
      progressRef.current += 100 / (slideDuration / 100);
      setProgress(progressRef.current);
    }, 100);

    intervalRef.progressTimer = progressTimer;
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (intervalRef.progressTimer) clearInterval(intervalRef.progressTimer);
  };

  const handleIndicatorClick = (index) => {
    setCurrent(index);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
    startAutoSlide();
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section id="projects" className="py-20 text-white w-full">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 uppercase tracking-widest mt-2 text-sm sm:text-base">
          Some of my best work
        </p>
      </div>

      <div
        className="relative max-w-6xl mx-auto group"
        onMouseEnter={() => {
          stopAutoSlide();
          setHovered(true);
        }}
        onMouseLeave={() => {
          startAutoSlide();
          setHovered(false);
        }}
        {...swipeHandlers}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col md:flex-row md:h-[550px] shadow-lg"
          >
            {/* Image */}
            <div className="w-full md:w-[60%] overflow-hidden">
              <img
                src={projects[current].img}
                alt={projects[current].title}
                className="w-full h-[220px] sm:h-[300px] md:h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col md:w-[40%] text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                {projects[current].title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base flex-1">
                {projects[current].description}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6">
                {projects[current].tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs sm:text-sm px-3 py-1 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={projects[current].source}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-primary transition-all duration-300 w-full sm:w-auto"
                >
                  <FaGithub /> Source
                </a>
                <a
                  href={projects[current].live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-primary transition-all duration-300 w-full sm:w-auto"
                >
                  <FaGlobe /> Website
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {hovered && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors"
            >
              <FaChevronLeft size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors"
            >
              <FaChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-4 sm:w-6 h-2 rounded-full overflow-hidden cursor-pointer ${
                index === current ? "bg-gray-700" : "bg-gray-500"
              }`}
              onClick={() => handleIndicatorClick(index)}
            >
              {index === current && (
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    ease: "linear",
                    duration: slideDuration / 1000,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
