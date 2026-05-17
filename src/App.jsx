"use client";

import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import ProfessionalExperience from './components/ProfessionalExperience';
import CreativeEngineering from './components/CreativeEngineering';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-bg text-text-primary font-body">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative">
          <Navbar />
          <main>
            <Hero />
            <SelectedWorks />
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