"use client";

import { motion } from "framer-motion";

const usps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Gekeurde wagens",
    desc: "Elke wagen wordt grondig gecontroleerd voor verkoop.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M17 9V7a5 5 0 00-10 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="3" y="9" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Eerlijke prijs",
    desc: "Transparante prijzen zonder verborgen kosten.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "30 jaar ervaring",
    desc: "West-Vlaamse kennis en netwerk voor elke aankoop.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 5h12M9 3v2m-6 6h18M5 21l4-4m6 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Levering op bestelling",
    desc: "Niet gevonden wat u zoekt? Wij importeren voor u.",
  },
];

export default function USPStrip() {
  return (
    <section className="bg-surface border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="text-accent">{usp.icon}</div>
              <div>
                <div className="font-semibold text-text text-sm">{usp.title}</div>
                <div className="text-muted text-sm mt-1 leading-relaxed">{usp.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
