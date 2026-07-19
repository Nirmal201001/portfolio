'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">Let&apos;s build something <span className="text-indigo-500">extraordinary</span> together.</h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                  <Mail size={20} className="group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email</p>
                  <p className="text-zinc-200 font-medium">{portfolioData.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Phone</p>
                  <p className="text-zinc-200 font-medium">{portfolioData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Location</p>
                  <p className="text-zinc-200 font-medium">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8">Quick Links</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Socials</p>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-zinc-300 hover:text-indigo-400 transition-colors group">
                  LinkedIn <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-zinc-300 hover:text-indigo-400 transition-colors group">
                  GitHub <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Navigation</p>
                <a href="#about" className="block text-zinc-300 hover:text-indigo-400 transition-colors">About</a>
                <a href="#experience" className="block text-zinc-300 hover:text-indigo-400 transition-colors">Experience</a>
                <a href="#projects" className="block text-zinc-300 hover:text-indigo-400 transition-colors">Projects</a>
                <a href="#skills" className="block text-zinc-300 hover:text-indigo-400 transition-colors">Skills</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-zinc-900">
          <p className="text-zinc-500 text-sm font-mono">
            &copy; {currentYear} Nirmal Kushwah.
          </p>
          <div className="flex items-center gap-6">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
