import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Sparkles, Lightbulb } from 'lucide-react';

const items = [
  {
    icon: PenTool,
    title: 'Human-centered UX',
    desc: 'Flows that reduce friction and feel natural at every step.'
  },
  {
    icon: Layout,
    title: 'Clean Visual Systems',
    desc: 'Grid, rhythm, and hierarchy that scale across platforms.'
  },
  {
    icon: Sparkles,
    title: 'Microinteractions',
    desc: 'Delightful motion that communicates state and intent.'
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem-Solving',
    desc: 'Turning ambiguity into clarity with structured thinking.'
  },
];

export default function WhatYouGet() {
  return (
    <section id="benefits" className="relative w-full overflow-hidden bg-gradient-to-b from-black to-[#0b0b10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(139,92,246,0.15),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-semibold md:text-4xl"
          >
            What You’ll Get
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-white/70"
          >
            Clean visuals, human-centered design, and creative problem-solving that brings ideas to life.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24, x: [ -10, 10, -8, 6, -2, 0 ][idx % 6] }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.65, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(20rem 12rem at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.12), transparent 60%)' }} />
              <div className="relative z-10">
                <it.icon className="h-6 w-6 text-fuchsia-300 transition-transform duration-300 group-hover:-rotate-3" />
                <h3 className="mt-3 text-lg font-medium">{it.title}</h3>
                <p className="mt-1.5 text-sm text-white/70">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
