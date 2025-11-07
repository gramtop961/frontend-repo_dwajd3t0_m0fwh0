import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0b0b10] py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_100%,rgba(139,92,246,0.15),transparent)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-white/70 sm:text-left"
        >
          Crafted with purpose and passion — Abhijith Sebastian.
        </motion.p>
        <div className="flex items-center gap-3">
          <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:border-white/30">
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:border-white/30">
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:border-white/30">
            <Instagram className="h-4 w-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
