import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    key: 'triplens',
    title: 'TripLens — VR Travel Discovery',
    desc: 'A virtual reality platform to explore destinations through immersive storytelling.',
    tag: 'Product • Mobile • VR',
    image:
      'https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=1400&auto=format&fit=crop',
  },
  {
    key: 'urumi',
    title: 'URUMI — Athletic E‑commerce',
    desc: 'Personalized shopping for athletes and martial artists with adaptive UI.',
    tag: 'E‑commerce • Web • Personalization',
    image:
      'https://images.unsplash.com/photo-1518600506278-4e8ef466b010?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="relative w-full bg-[#0b0b10] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_10%_10%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-semibold md:text-4xl"
            >
              Selected Projects
            </motion.h2>
            <p className="mt-2 text-white/70">A glimpse into products and stories I’ve crafted.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.button
              key={p.key}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80" />
              </div>
              <div className="relative z-10 p-5">
                <div className="text-xs text-white/60">{p.tag}</div>
                <div className="mt-1 text-lg font-medium">{p.title}</div>
                <div className="mt-1 text-sm text-white/70">{p.desc}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Overlay modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={active.key}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c12] text-white shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              </div>
              <div className="p-6">
                <div className="text-xs text-white/60">{active.tag}</div>
                <h3 className="mt-1 text-2xl font-semibold">{active.title}</h3>
                <p className="mt-2 text-white/70">{active.desc}</p>
                <div className="mt-5 flex justify-end">
                  <button onClick={() => setActive(null)} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:border-white/30">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
