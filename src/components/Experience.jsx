import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-4 ">
      <h2 className="text-4xl font-bold mb-10 text-white">Experience</h2>
      <div className="relative border-l-2 border-primary pl-8 space-y-12">
        {/* Apexxport Letter of Recommendation */}
        <div className="relative">
          <span className="absolute -left-5 top-2 w-5 h-5 rounded-full bg-primary border-2 border-gray-900"></span>
          <h3 className="text-2xl font-semibold text-white mb-1">
            Freelance Developer — Apexxport Pvt. Ltd.
          </h3>
          <p className="text-sm text-gray-400 mb-2">Nov 2024 – Dec 2024 · Remote · Mumbai, Maharashtra, India</p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Received a Letter of Recommendation from the Partner at Apexxport Pvt. Ltd. for outstanding contributions in front-end development, React, and UI/UX optimization.
          </p>
          <p className="mt-2 text-gray-400 italic text-sm">
            Skills: Search Engine Optimization (SEO), React, UI/UX.
          </p>
        </div>

        {/* Internship */}
        <div className="relative">
          <span className="absolute -left-5 top-2 w-5 h-5 rounded-full bg-primary border-2 border-gray-900"></span>
          <h3 className="text-2xl font-semibold text-white mb-1">
            Web Developer Intern — A to Z IT Solutions
          </h3>
          <p className="text-sm text-gray-400 mb-2">Jul 2022 – Aug 2022 · On-site · Maharashtra, India</p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Gained hands-on experience working on real-time web development projects. Designed and developed a portfolio website using HTML, CSS, and JavaScript, focusing on responsive design and improving user engagement.
          </p>
          <p className="mt-2 text-gray-400 italic text-sm">
            Skills: Web Development, Debugging, Responsive Design, UI Improvement
          </p>
        </div>
      </div>
    </section>
  );
}
