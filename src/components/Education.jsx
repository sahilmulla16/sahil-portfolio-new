import React, { useEffect, useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const educationData = [
    {
      degree: "Computer Science and Engineering in AI & ML",
      year: "2023 - 2026",
      institution: "M.H Saboo Siddik College Of Engineering ",
    },
    {
      degree: "Diploma In Information Technology",
      year: "2021 - 2023",
      institution: "M.H Saboo Siddik Polytechnic",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      year: "2020",
      institution: "Rosary High School",
    },
  ];

  const timelineRef = useRef([]);

  useEffect(() => {
    timelineRef.current.forEach((el, index) => {
      const icon = el.querySelector(".edu-icon");
      const text = el.querySelector(".edu-text");
      const line = el.querySelector(".edu-line");

      gsap.set([icon, text, line], { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top center+=100",
        },
      });

      tl.to(icon, { opacity: 1, scale: 1, duration: 0.4 })
        .to(text, { opacity: 1, y: 0, duration: 0.5 }, "+=0.2")
        .to(line, {
          opacity: 1,
          height: "100%",
          duration: 0.6,
          ease: "power1.inOut",
        });
    });
  }, []);

  return (
    <section id="education" className="py-20">
      <h2 className="text-5xl font-bold text-white text-center mb-2">
        Education
      </h2>
      <p className="uppercase tracking-widest text-gray-400 text-sm mb-12 text-center">
        Academic Milestones
      </p>

      <div className="relative max-w-xl mx-auto">
        {educationData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (timelineRef.current[index] = el)}
            className="flex flex-col items-center text-center relative"
          >
            {/* Icon */}
            <div className="edu-icon bg-gray-900 border-2 border-purple-500 p-3 rounded-full z-10">
              <FaGraduationCap className="text-purple-500 text-2xl" />
            </div>

            {/* Text */}
            <div className="edu-text mt-6 transform translate-y-3">
              <h3 className="text-2xl font-bold text-white mb-1">
                {item.degree}
              </h3>
              <span className="text-gray-400 text-base mb-1 block">
                {item.year}
              </span>
              <p className="text-gray-300 text-lg font-semibold">
                {item.institution}
              </p>
            </div>

            {/* Line */}
            {index !== educationData.length - 1 && (
              <div
                className="edu-line w-px bg-gray-500"
                style={{ minHeight: "150px" }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
