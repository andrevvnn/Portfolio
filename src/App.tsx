import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <PortfolioGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}