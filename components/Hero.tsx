'use client';

import { motion } from 'motion/react';
import { ChevronRight, Download, Globe, Laptop } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import portfolioImg from '@/assets/images/protfolio-image-2.png';
import { SkillIcon } from '@/components/icons/SkillIcon';

const techBadges = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Golang', icon: 'golang' },
  { name: 'SQL', icon: 'postgresql' },
  { name: 'AWS', icon: 'amazonaws' }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center justify-center pt-28 lg:pt-20 pb-16 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6 mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </div>

            {/* Mobile Hero Image (shown only on mobile/tablet, hidden on large screens) */}
            <div className="block lg:hidden mb-8 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] mx-auto">
              <Image
                src={portfolioImg}
                alt="Nirmal Kushwah"
                className="w-full h-auto object-cover mix-blend-lighten"
                priority
                placeholder="blur"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-center lg:text-left">
              Building <span className="text-indigo-500">scalable</span> full-stack solutions.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Software Engineer with <span className="text-indigo-400 font-medium">{portfolioData.experienceYears} years</span> of experience building high-performance web applications using React, Next.js, FastAPI, Node.js, Golang, and PostgreSQL.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 max-w-xl mx-auto lg:mx-0">
              {techBadges.map((tech) => (
                <div key={tech.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 text-xs font-mono hover:border-indigo-500/30 hover:bg-zinc-900 transition-colors">
                  <SkillIcon iconName={tech.icon} className="w-3.5 h-3.5" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-600/20"
              >
                View Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-bold transition-all flex items-center justify-center gap-2"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            {/* Bottom Footer Info Bar */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-zinc-500 text-xs font-mono border-t border-zinc-900 pt-6 w-full max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <Globe size={14} className="text-indigo-400" />
                <span>Based in India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available Now</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Laptop size={14} className="text-indigo-400" />
                <span>Remote Friendly</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop/Tablet Hero Image (hidden on mobile/tablet, shown only on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block max-w-[480px] xl:max-w-[540px] mx-auto lg:mr-0 lg:ml-auto w-full lg:-translate-y-10 xl:-translate-y-14"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src={portfolioImg}
                alt="Nirmal Kushwah"
                className="w-full h-auto object-cover mix-blend-lighten"
                priority
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-indigo-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
