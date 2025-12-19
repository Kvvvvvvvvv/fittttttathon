import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-md' 
          : 'bg-white/95 backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <motion.h1
            className="text-2xl font-bold gradient-primary bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            VIT FITNESS
          </motion.h1>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-semibold text-gray-800 hover:text-primary-purple transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="font-semibold text-gray-800 hover:text-primary-purple transition-colors relative group"
            >
              Benefits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="font-semibold text-gray-800 hover:text-primary-purple transition-colors relative group"
            >
              Programs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="font-semibold text-gray-800 hover:text-primary-purple transition-colors relative group"
            >
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <Button
              onClick={() => scrollToSection('cta')}
              className="gradient-primary text-white rounded-full px-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Join Now
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}