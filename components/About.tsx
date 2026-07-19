'use client';

import { motion } from 'motion/react';
import { User, Code, Rocket, Target, Heart, Cpu, Globe, Server, ChevronRight, Download } from 'lucide-react';
import { portfolioData } from '@/lib/data';

// ─── Orbit Visual Data ──────────────────────────────────────────────────────

const ORBIT_RINGS = [
  {
    size: 140,
    duration: 12,
    icons: [
      { label: 'TS', color: '#3178c6', bg: '#1a2c4e', angle: 0 },
      { label: 'JS', color: '#f7df1e', bg: '#2d2a05', angle: 180 },
    ]
  },
  {
    size: 220,
    duration: 18,
    icons: [
      { label: 'React', color: '#61dafb', bg: '#0f2d3d', angle: 60 },
      { label: 'Redux', color: '#764abc', bg: '#1a1228', angle: 180 },
      { label: 'Tailwind', color: '#06b6d4', bg: '#082f3a', angle: 300 },
    ]
  },
  {
    size: 310,
    duration: 26,
    icons: [
      { label: 'Node', color: '#68a063', bg: '#0f2a1a', angle: 30 },
      { label: 'FastAPI', color: '#05998b', bg: '#02211d', angle: 150 },
      { label: 'Python', color: '#3776ab', bg: '#0d1d2b', angle: 270 },
    ]
  },
  {
    size: 400,
    duration: 36,
    icons: [
      { label: 'Next', color: '#e2e8f0', bg: '#1a1a2e', angle: 0 },
      { label: 'PG', color: '#336791', bg: '#0f1e2e', angle: 72 },
      { label: 'Mongo', color: '#47a248', bg: '#112211', angle: 144 },
      { label: 'Docker', color: '#2496ed', bg: '#0a1f35', angle: 216 },
      { label: 'AWS', color: '#ff9900', bg: '#2e1d05', angle: 288 },
    ]
  },
];

const PARTICLE_COUNT = 24;

// ─── Component ─────────────────────────────────────────────────────────────

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-zinc-950 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-16 lg:gap-20 items-center"
        >
          {/* ── Left Column: Content ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div variants={itemVariants} className="w-full">
              <div className="flex items-center gap-2 text-indigo-500 font-mono text-sm mb-4 justify-center md:justify-start">
                <User size={16} />
                <span>About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-[1.1] md:leading-[1.1] text-center md:text-left">
                Passionate about building <span className="text-indigo-500">impactful</span> digital experiences.
              </h2>
              <div className="text-zinc-400 text-base sm:text-lg leading-[1.75] max-w-[480px] md:max-w-[520px] mx-auto md:mx-0 mb-0 md:mb-8 text-center md:text-left">
                <p>{portfolioData.about}</p>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Orbit Animation ── */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center md:justify-end h-[240px] sm:h-[300px] md:h-auto md:min-h-[400px] lg:min-h-[450px]"
          >
            {/* Scale-down wrapper to reduce overall size by 20-25% on tablet & desktop, and fit mobile */}
            <div className="relative w-[400px] h-[400px] flex items-center justify-center scale-[0.55] sm:scale-[0.7] md:scale-[0.75] lg:scale-[0.8] xl:scale-100 origin-center md:origin-right">
              {/* Ambient background glows */}
              <div className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-[80px] animate-pulse" />
              <div className="absolute w-48 h-48 rounded-full bg-blue-500/10 blur-[60px]"
                style={{ animation: 'pulse 4s ease-in-out 1s infinite' }} />

              {/* ── Orbit rings + icons ── */}
              {ORBIT_RINGS.map((ring, idx) => {
                const isClockwise = idx % 2 === 0;
                return (
                  <div
                    key={ring.size}
                    className="absolute rounded-full border border-zinc-800/15"
                    style={{ width: ring.size, height: ring.size }}
                  >
                    {/* Rotating wrapper */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: isClockwise ? 360 : -360 }}
                      transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
                    >
                      {ring.icons.map((icon) => {
                        const rad = (icon.angle * Math.PI) / 180;
                        const r = ring.size / 2;
                        const x = r + r * Math.cos(rad) - 22; // 22 = half badge width
                        const y = r + r * Math.sin(rad) - 22;
                        return (
                          <motion.div
                            key={icon.label}
                            className="absolute w-11 h-11 rounded-xl flex items-center justify-center text-[10px] font-bold shadow-lg border border-white/5 cursor-default select-none transition-all opacity-60 hover:opacity-100"
                            style={{
                              left: x,
                              top: y,
                              background: icon.bg,
                              color: icon.color,
                              boxShadow: `0 0 8px ${icon.color}11`,
                            }}
                            // Counter-rotate so badge text stays upright
                            animate={{ rotate: isClockwise ? -360 : 360 }}
                            transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
                            whileHover={{
                              scale: 1.25,
                              borderColor: icon.color,
                              boxShadow: `0 0 20px ${icon.color}44`,
                              zIndex: 50
                            }}
                          >
                            {icon.label}
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                );
              })}

              {/* ── Floating ambient particles ── */}
              {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
                const angle = (i / PARTICLE_COUNT) * 360;
                const radius = 60 + (i % 6) * 45;
                const size = 1.5 + (i % 3);
                const duration = 5 + (i % 5) * 2;
                const delay = i * 0.3;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-indigo-400/20"
                    style={{ width: size, height: size }}
                    animate={{
                      x: [x, x + 8, x - 6, x],
                      y: [y, y - 10, y + 6, y],
                      opacity: [0.1, 0.4, 0.2, 0.1],
                      scale: [1, 1.3, 0.9, 1],
                    }}
                    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
                  />
                );
              })}

              {/* ── Centre orb ── */}
              <div className="relative z-10 scale-110 lg:scale-125">
                {/* Ping rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute w-16 h-16 rounded-full border border-indigo-500/30 animate-ping" style={{ animationDuration: '2s' }} />
                  <span className="absolute w-24 h-24 rounded-full border border-indigo-500/15 animate-ping" style={{ animationDuration: '2.8s', animationDelay: '0.4s' }} />
                </div>
                {/* Core */}
                <motion.div
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-2xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      '0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)',
                      '0 0 50px rgba(99, 102, 241, 0.6), 0 0 90px rgba(6, 182, 212, 0.4)',
                      '0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Rocket size={22} className="text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom stacked section: Cards & Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 md:mt-20 space-y-12"
        >
          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <motion.div
              variants={itemVariants}
              className="p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-indigo-500/30 transition-all hover:bg-zinc-900/60 group flex flex-col justify-between"
            >
              <div>
                <div className="text-indigo-500 mb-5 p-3 rounded-2xl bg-indigo-500/10 w-fit group-hover:scale-110 transition-transform">
                  <Heart size={22} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Philosophy</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{portfolioData.philosophy}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-blue-500/30 transition-all hover:bg-zinc-900/60 group flex flex-col justify-between"
            >
              <div>
                <div className="text-blue-500 mb-5 p-3 rounded-2xl bg-blue-500/10 w-fit group-hover:scale-110 transition-transform">
                  <Target size={22} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Career Goals</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{portfolioData.goals}</p>
              </div>
            </motion.div>
          </div>

          {/* Badges */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Code size={18} />, title: "Clean Code", color: "text-indigo-500" },
              { icon: <Globe size={18} />, title: "Scalable", color: "text-blue-500" },
              { icon: <Cpu size={18} />, title: "AI-Ready", color: "text-purple-500" },
              { icon: <Server size={18} />, title: "Cloud Native", color: "text-orange-500" }
            ].map((pill, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                <div className={pill.color}>{pill.icon}</div>
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">{pill.title}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
