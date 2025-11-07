import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Depth gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-16 bottom-[-6rem] h-64 rounded-[100%] bg-gradient-to-t from-indigo-500/25 via-fuchsia-500/25 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
            <span className="tracking-wide text-white/80">Abhijith Sebastian • Bengaluru, India</span>
          </motion.div>

          <motion.h1 variants={item} className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Designing intuitive experiences that connect and inspire.
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            I’m Abhijith, a UI/UX and graphic designer obsessed with crafting experiences that feel effortless and look beautiful.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition-transform duration-300 hover:scale-[1.02] focus:outline-none">
              <span className="relative z-10">Hire Me</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-200/50 via-white/60 to-indigo-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a href="#work" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur transition-colors hover:border-white/30">
              <span className="relative z-10">View Work</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 opacity-0 [background:radial-gradient(80px_80px_at_var(--x,50%)_50%,rgba(255,255,255,0.12),transparent_60%)] transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
