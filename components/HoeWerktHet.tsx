"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Vul het formulier in",
    desc: "Geef ons de basisgegevens van uw wagen: merk, model, jaar en kilometerstand.",
  },
  {
    num: "02",
    title: "Wij contacteren u",
    desc: "Binnen 24 uur belt of mailt DDF Motors met een eerlijk en vrijblijvend bod.",
  },
  {
    num: "03",
    title: "Akkoord & afhandeling",
    desc: "Gaan we akkoord? Wij regelen de keuring, documenten en betaling. U hoeft niets te doen.",
  },
];

export default function HoeWerktHet() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Eenvoudig proces
          </div>
          <h2 className="text-4xl font-black text-text">
            Hoe werkt het?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center mb-5 relative z-10">
                <span className="text-accent font-black text-xl">{s.num}</span>
              </div>
              <h3 className="font-bold text-text text-lg mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
