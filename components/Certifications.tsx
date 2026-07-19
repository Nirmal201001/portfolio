'use client';

import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/lib/data';

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-indigo-500 font-mono text-sm mb-4"
                        >
                            <Award size={16} />
                            <span>Continuous Learning</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            Licenses & <span className="text-indigo-500">Certifications</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-500 text-base leading-relaxed"
                        >
                            Validating expertise through industry-recognized credentials and continuing education.
                        </motion.p>
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

                    {portfolioData.certifications?.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-zinc-900/40 border border-zinc-800/50 hover:border-indigo-500/30 rounded-3xl p-8 transition-all duration-300 hover:bg-zinc-900/80"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500 hover:text-indigo-500 transition-colors"
                                    aria-label={`View ${cert.title} credential`}
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 text-indigo-500 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500">
                                <CheckCircle2 size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                                {cert.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm font-medium text-zinc-400 mb-4">
                                <span className="text-indigo-500">{cert.issuer}</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                <div className="flex items-center gap-1.5 opacity-80 font-mono">
                                    <Calendar size={14} />
                                    <span>{cert.date}</span>
                                </div>
                            </div>

                            <p className="text-zinc-500 text-sm leading-relaxed mt-auto pt-4 border-t border-zinc-800/50">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
