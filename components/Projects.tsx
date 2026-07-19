'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Code2, Globe, ChevronLeft, ChevronRight, Layout, Phone } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/lib/data';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = portfolioData.projects[activeIndex];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioData.projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioData.projects.length) % portfolioData.projects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section id="projects" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2 text-indigo-500 font-mono text-sm mb-4">
            <Code2 size={16} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Selected <span className="text-indigo-500">Projects</span>.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A showcase of digital products I&apos;ve built, emphasizing performance, scalability, and intuitive UX.
          </p>
        </motion.div>

        {/* Main Showcase Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center bg-zinc-900/30 border border-zinc-800/50 rounded-[3rem] p-8 md:p-12 lg:p-16 backdrop-blur-sm"
            >
              {/* Left Side: Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <div className="text-xs font-mono text-indigo-500 mb-3 uppercase tracking-widest">{activeProject.subtitle}</div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {activeProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Layout size={16} className="text-indigo-500" />
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono font-bold px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 border border-zinc-700/50 hover:border-indigo-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {activeProject?.link && <a
                    href={activeProject?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-xl shadow-indigo-500/20 group"
                  >
                    <Globe size={18} />
                    Live Preview
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>}
                  {activeProject?.githubUrl &&
                    <a
                      href={activeProject?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm transition-all border border-zinc-700"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  }
                </div>
              </div>

              {/* Right Side: Mockup Visual */}
              <div className="relative order-1 lg:order-2 flex items-center justify-center">
                {/* Background glow for the image */}
                <div className="absolute -inset-10 bg-indigo-500/5 rounded-full blur-[100px]" />

                {/* Main Desktop Mockup */}
                <div className="relative w-full aspect-[16/10] bg-zinc-950 border-[6px] md:border-[10px] border-zinc-800 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                  {/* Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-zinc-800/80 flex items-center gap-1.5 px-3 md:px-4 z-10 border-b border-zinc-700/30">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/40" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500/40" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500/40" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 top-4 md:top-6 overflow-hidden">
                    {activeProject.image ? (
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        fill
                        className="object-cover"
                        priority
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-950/80 to-zinc-900 flex items-center justify-center p-6 text-center select-none">
                        <div className="space-y-2">
                          <span className="block text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            {activeProject.title}
                          </span>
                          <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            {activeProject.subtitle}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Overlapping Mobile Mockup */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-[100px] md:w-[160px] aspect-[9/19] bg-zinc-950 border-[4px] md:border-[6px] border-zinc-800 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl z-20 hidden sm:block"
                >
                  {/* Speaker Grill */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-800 rounded-full z-10" />

                  <div className="relative h-full w-full">
                    {activeProject.image ? (
                      <Image
                        src={activeProject.image}
                        alt={`${activeProject.title} mobile`}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-950/90 to-zinc-950 flex items-center justify-center p-3 text-center select-none">
                        <span className="text-xs md:text-sm font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent break-words max-w-[85%]">
                          {activeProject.title}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Navigation Buttons for the carousel */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 flex flex-col gap-4 z-30">
                  <button
                    onClick={prevProject}
                    className="p-3 md:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-indigo-500 hover:border-indigo-500/50 transition-all backdrop-blur-md"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft size={20} />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 flex flex-col gap-4 z-30">
                  <button
                    onClick={nextProject}
                    className="p-3 md:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-indigo-500 hover:border-indigo-500/50 transition-all backdrop-blur-md"
                    aria-label="Next Project"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail Navigation Bar */}
          <div className="mt-12 flex justify-start sm:justify-center gap-3 overflow-x-auto pb-6 scrollbar-hide px-6 sm:px-0">
            {portfolioData.projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`group relative flex-shrink-0 w-24 md:w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeIndex === i ? 'border-indigo-500 ring-4 ring-indigo-500/10' : 'border-zinc-800 grayscale hover:grayscale-0 hover:border-zinc-700'
                  }`}
              >
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* Dark gradient to guarantee high text contrast for project numbers */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center p-2 text-center select-none">
                    <span className="text-[8px] md:text-[10px] font-bold tracking-tight text-zinc-400 group-hover:text-white transition-colors break-words max-w-[90%]">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className={`absolute inset-0 bg-indigo-500/10 transition-opacity duration-300 ${activeIndex === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                <div className="absolute bottom-1 left-2 text-[8px] font-bold text-white uppercase tracking-tighter drop-shadow-md z-10">0{i + 1}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
