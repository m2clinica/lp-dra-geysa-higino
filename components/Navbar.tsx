import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Locais', href: '#locais' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col items-center leading-none select-none cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <span className="font-serif text-2xl font-bold text-primary tracking-wide">DRA. GEYSA HIGINO</span>
             <span className="text-[10px] uppercase tracking-[0.2em] text-accent">Ginecologia e Obstetrícia</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text hover:text-primary font-medium text-sm transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#locais"
              className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4A3256] transition-colors shadow-soft flex items-center gap-2"
            >
              <Phone size={16} />
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-text hover:text-primary font-medium text-center w-full"
                >
                  {link.name}
                </a>
              ))}
               <a 
                  href="#locais"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 w-full text-center bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4A3256] transition-colors"
                >
                  Agendar Consulta
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};