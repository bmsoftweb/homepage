'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import HistorySection from '../components/HistorySection';
import AISimulator from '../components/AISimulator';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Monitor active scroll sections for navbar highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'aplicativos', 'historia', 'resultados', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navbar with layout-specific styling */}
      <Navbar
        onScrollToContact={() => scrollToSection('contato')}
        activeSection={activeSection}
      />

      {/* Main content sections with matching layouts */}
      <HeroSection
        onScrollToSimulator={() => scrollToSection('simulador')}
        onScrollToApps={() => scrollToSection('aplicativos')}
      />

      <CapabilitiesSection />

      <HistorySection />

      {/* Gemini AI Powered Interactive Consultant Simulator */}
      <AISimulator
        onScrollToContact={() => scrollToSection('contato')}
      />

      <TestimonialsSection />

      <ContactSection />

      {/* Trustful clean footer */}
      <Footer />
    </div>
  );
}

