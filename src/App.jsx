import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import About from "./components/About";
import Education from "./components/Education";
import Footer from './components/Footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App(){
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const t = setTimeout(()=> setLoading(false), 900)
    return ()=> clearTimeout(t)
  },[])

  useEffect(()=>{
    if(!loading){
      gsap.from('.fade-up', { y: 30, opacity:0, duration: 0.8, stagger: 0.12, ease: 'power3.out' })
      gsap.utils.toArray('section').forEach((sec)=>{
        gsap.from(sec, {
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%'
          },
          opacity: 0,
          y: 30,
          duration: 0.8
        })
      })
    }
  },[loading])

  if(loading) return (
    <div className="loader-wrap">
      <div className="loader-inner"><div className="loader-bar"></div></div>
    </div>
  )

  return (
    <div className="min-h-screen font-inter bg-bg text-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto px-6 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education/>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
