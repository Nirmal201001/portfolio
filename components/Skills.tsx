'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { SkillIcon } from '@/components/icons/SkillIcon';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Flatten all skills but keep their category association
  const allSkills = portfolioData.skills.flatMap(category =>
    category.items.map(skill => ({ ...skill, category: category.category }))
  );

  const currentHighlight = hoveredCategory || activeCategory;

  return (
    <section id="skills" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - More compact spacing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-indigo-500 font-mono text-sm mb-4"
            >
              <Terminal size={16} />
              <span>Technical Arsenal</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              My <span className="text-indigo-500">Work Stack</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-base leading-relaxed"
            >
              Strategic technology selection designed for performance and scale.
              Select a category to highlight specific tools.
            </motion.p>
          </div>

          {/* Category Highlighters (Tabs) */}
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {portfolioData.skills.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                onMouseEnter={() => setHoveredCategory(category.category)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`group relative px-4 py-2 rounded-full text-[11px] font-bold transition-all duration-300 border ${currentHighlight === category.category
                  ? 'text-white border-indigo-500/30'
                  : 'text-zinc-500 hover:text-zinc-300 bg-zinc-900/30 border-zinc-800/50'
                  }`}
              >
                {currentHighlight === category.category && (
                  <motion.div
                    layoutId="activeHighlightMinimal"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 uppercase tracking-tighter">{category.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - High Density/Minimalist */}
        <div className="relative">
          {/* Subtle global glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-x-6 gap-y-10 relative z-10">
            {allSkills.map((skill, idx) => {
              const isMatched = skill.category === currentHighlight;
              const isDimmed = !!currentHighlight && !isMatched;

              return (
                <motion.div
                  key={`${skill.category}-${skill.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.01 }}
                  className={`group relative flex flex-col items-center justify-center gap-3 transition-all duration-500 ${isDimmed ? 'opacity-10 grayscale brightness-50 blur-[1px] scale-90' : 'opacity-100 scale-100'
                    } ${isMatched ? 'z-20 scale-110' : ''}`}
                >
                  {/* Highlight Background Glow */}
                  <AnimatePresence>
                    {isMatched && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-x-[-15px] inset-y-[-10px] bg-indigo-500/10 rounded-2xl blur-xl -z-10"
                      />
                    )}
                  </AnimatePresence>

                  <div className={`relative w-7 h-7 flex items-center justify-center transition-all duration-500 ${isMatched ? 'drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]' : ''}`}>
                    <SkillIcon
                      iconName={skill.icon}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className={`text-[9px] font-bold tracking-tight text-center transition-colors ${isMatched ? 'text-white' : 'text-zinc-600'}`}>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
