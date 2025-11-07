import React from 'react';
import Hero from './components/Hero';
import WhatYouGet from './components/WhatYouGet';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter antialiased bg-black selection:bg-fuchsia-500/30 selection:text-white">
      <Hero />
      <About />
      <WhatYouGet />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

// Lightweight inline About and Skills to keep focus while still modular
function About() {
  return (
    <section className="relative w-full bg-[#0b0b10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_0%_10%,rgba(236,72,153,0.10),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
          <p className="mt-4 text-white/70">
            From curiosity to craft — I design with empathy and a fascination for how people think. My work blends
            interface clarity, brand story, and micro-interactions to build products that feel effortless.
          </p>
          <div className="mt-6 space-y-3 text-white/70">
            <p className="text-sm">2017 — First steps into design, experimenting with visuals and motion.</p>
            <p className="text-sm">2019 — Diving into UX, prototyping and research-led thinking.</p>
            <p className="text-sm">2022—Now — Building product stories across platforms with a systems mindset.</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600&auto=format&fit=crop"
              alt="Abhijith portrait"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    {
      title: 'UI/UX Tools',
      items: ['Figma', 'Framer', 'Protopie', 'Notion'],
    },
    {
      title: 'Graphic Tools',
      items: ['Photoshop', 'Illustrator', 'After Effects'],
    },
    {
      title: 'Core Skills',
      items: ['Design Systems', 'Interaction Design', 'Prototyping', 'Accessibility'],
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0b0b10] to-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_100%_20%,rgba(99,102,241,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium">{g.title}</div>
              <ul className="mt-3 space-y-2 text-white/70">
                {g.items.map((s) => (
                  <li key={s} className="flex items-center justify-between">
                    <span>{s}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
