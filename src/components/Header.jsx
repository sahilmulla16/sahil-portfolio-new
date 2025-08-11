import React, { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Intersection Observer for active section highlight
  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    menuItems.forEach((item) => {
      const section = document.getElementById(item.to);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Navbar for desktop and toggle button for mobile */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full sm:w-auto px-2 sm:px-0">
        {/* Desktop menu */}
        <div className="hidden sm:flex items-center bg-[#111] border border-gray-700 rounded-full px-6 py-2 space-x-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.to}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={() => setActiveSection(item.to)}
              className={`cursor-pointer px-3 py-1 rounded-full transition-all duration-300 ${
                activeSection === item.to
                  ? "bg-white text-black font-semibold"
                  : "text-gray-300 hover:text-gray-400"
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <div className="sm:hidden flex justify-end pr-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          >
            {/* Hamburger lines */}
            <span
              className={`block h-1 w-7 bg-gray-300 rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-1 w-7 bg-gray-300 rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 w-7 bg-gray-300 rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-16 right-4 z-50 bg-[#111] border border-gray-700 rounded-lg shadow-lg py-4 w-48 flex flex-col space-y-3"
        >
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.to}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={() => {
                setActiveSection(item.to);
                setMenuOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 rounded-md transition-colors duration-200 text-lg ${
                activeSection === item.to
                  ? "bg-white text-black font-semibold"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
