import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Services } from './components/Services';
import { About } from './components/About';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text selection:bg-secondary selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <About />
        <Locations />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;