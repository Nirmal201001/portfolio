'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Experience Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
              {portfolioData.experience.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-indigo-500 z-10" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-indigo-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
                    <MapPin size={14} />
                    {exp.location}
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-zinc-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-indigo-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Education</h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{portfolioData.education.school}</h3>
                <p className="text-blue-400 text-sm font-medium mb-6">{portfolioData.education.degree}</p>
                
                <div className="flex flex-col gap-2 text-sm font-mono text-zinc-500">
                  <div className="flex justify-between">
                    <span>Period:</span>
                    <span className="text-zinc-300">{portfolioData.education.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Performance:</span>
                    <span className="text-indigo-500 font-bold">{portfolioData.education.stats}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
