'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import logo from '@/assets/images/portfolio-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-bottom border-zinc-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Image 
            src={logo} 
            alt="NK Logo" 
            className="h-8 w-auto object-contain"
            priority
          />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-bold text-zinc-400 hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="h-4 w-px bg-zinc-800 mx-1 lg:mx-2" />
          <div className="flex items-center gap-2 lg:gap-4">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-indigo-500 hover:border-indigo-500/50 transition-all">
              <Github size={18} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-indigo-500 hover:border-indigo-500/50 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-indigo-400"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 pt-4 border-t border-zinc-800">
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400">
                  <Github />
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400">
                  <Linkedin />
                </a>
                <a href={`mailto:${portfolioData.email}`} className="text-zinc-400">
                  <Mail />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
