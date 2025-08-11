import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Sahil Mulla — Built with React, Three.js & GSAP
    </footer>
  )
}
