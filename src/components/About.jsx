import React from "react";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si"; // Fiverr icon

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      {/* Title */}
      <h2 className="text-5xl font-bold text-white mb-2">
        About{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Me
        </span>
      </h2>
      <p className="uppercase tracking-widest text-gray-400 text-sm mb-12">
        More About Me
      </p>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-14 max-w-7xl w-full">
        {/* Text */}
        <div className="flex-[1.5] text-left space-y-6">
          <h3 className="text-3xl font-extrabold text-white">
            Hi there! I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Sahil Mulla
            </span>
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am an aspiring <strong>Software Developer</strong> and{" "}
            <strong>AI &amp; ML enthusiast</strong> with a knack for building innovative,
            user-friendly solutions. Skilled in <strong>full-stack development, 3D interactive
            designs, and AI-powered applications</strong>, I thrive on solving real-world problems
            with creativity and precision. Always eager to learn, adapt, and push the
            boundaries of technology.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Currently pursuing my{" "}
            <strong>B.Tech in Computer Science</strong>, I am open to full-time
            roles and freelance opportunities. I’m naturally curious, highly
            detail-oriented, and committed to continuous improvement as a
            developer.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-2xl text-white">
            <a
              href="https://github.com/sahilmulla16"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/sahil._pvt_.16/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:sahilmulla9152@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-mulla-625364263/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaLinkedin/>
            </a>

            <a href="https://www.fiverr.com/your-fiverr-username" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
              <SiFiverr />
            </a>
              

          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="src/Pic/profile2.jpg"
            alt="Sahil Mulla"
            className="w-72 h-72 object-cover rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
