"use client";

import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import ClientProjects from './components/ClientProjects';
import Skills from './components/Skills';
import ProfessionalExperience from './components/ProfessionalExperience';
import CreativeEngineering from './components/CreativeEngineering';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-bg text-text-primary font-body min-h-screen relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen">
          {/* Cinematic Rounded Viewport Frame */}
          <div className="fixed inset-0 border-[8px] md:border-[16px] border-bg pointer-events-none z-[9999] rounded-[24px] md:rounded-[40px] ring-1 ring-stroke/30" />
          
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <SelectedWorks />
            <ClientProjects />
            <Skills />
            <ProfessionalExperience />
            <CreativeEngineering />
            <Stats />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}