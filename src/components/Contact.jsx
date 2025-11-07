import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_80%_20%,rgba(236,72,153,0.12),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-balance text-3xl font-semibold md:text-4xl"
        >
          “Let’s build something people love to use.”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4"
        >
          <a
            href="mailto:hello@abhijith.design"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            <span className="relative z-10">Let’s Talk</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-200/50 via-white/60 to-indigo-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:border-white/30">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:border-white/30">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
