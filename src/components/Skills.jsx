import React from "react";
import {
  FaPython, FaJava, FaReact, FaDatabase, FaBootstrap, FaHtml5,
  FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaMicrosoft, FaCogs
} from "react-icons/fa";
import {
  SiThreedotjs, SiGreensock, SiFirebase, SiVisualstudiocode,
  SiReplit, SiNetlify, SiCanva
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-400 text-xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-xl" /> },
    { name: "Three.js", icon: <SiThreedotjs className="text-white text-xl" /> },
    { name: "GSAP", icon: <SiGreensock className="text-green-500 text-xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-400 text-xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-xl" /> },
    { name: "n8n", icon: <FaCogs className="text-pink-500 text-xl" /> },
    { name: "Retell.ai", icon: <FaCogs className="text-blue-500 text-xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-xl" /> },
    { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500 text-xl" /> },
    { name: "Replit", icon: <SiReplit className="text-yellow-500 text-xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-green-500 text-xl" /> },
    { name: "Canva", icon: <SiCanva className="text-blue-400 text-xl" /> },
    { name: "Microsoft Office", icon: <FaMicrosoft className="text-orange-500 text-xl" /> },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center pt-15 pb-10 px-5 mb-5">
      {/* Title */}
      <h2 className="text-5xl font-bold text-white mb-4 text-center">Skills</h2>
      <p className="uppercase tracking-widest text-gray-400 mb-12 text-center">
        I constantly try to improve
      </p>

      {/* Skills Grid - Responsive + Gradient Hover */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-[#1a1a1a] px-4 py-2 rounded-xl shadow-md 
                       transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r 
                       hover:from-purple-500 hover:to-pink-500"
          >
            <span className="mr-2">{skill.icon}</span>
            <span className="text-white text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
