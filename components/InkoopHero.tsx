"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay } },
});

export default function InkoopHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 60%, #E8303A18 0%, transparent 70%)",
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-navy to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Gratis taxatie · Geen verplichtingen · West-Vlaanderen
        </motion.div>

        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 max-w-3xl"
        >
          Auto verkopen{" "}
          <span className="text-accent">in West-Vlaanderen?</span>
          <br />
          <span className="text-muted font-light text-4xl sm:text-5xl lg:text-6xl">
            Wij betalen cash.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="text-muted text-xl leading-relaxed max-w-2xl mb-10"
        >
          Bij DDF Motors in Brugge krijgt u een eerlijke prijs voor uw wagen —
          zonder lange wachttijden of onnodig gezeur. Al meer dan{" "}
          <strong className="text-text">30 jaar</strong> uw vertrouwde partner in
          de regio Brugge, Torhout, Oostende en Roeselare.
        </motion.p>

        <motion.div
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4"
        >
          <a
            href="#formulier"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Gratis bod aanvragen
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="tel:0495509895"
            className="inline-flex items-center gap-2 border border-border hover:border-text/40 text-text font-semibold px-7 py-4 rounded-xl transition-all hover:bg-surface hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            0495 50 98 95
          </a>
        </motion.div>

        {/* Region pills */}
        <motion.div
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap gap-2"
        >
          <span className="text-muted text-xs mr-2">Actief in:</span>
          {["Brugge", "Torhout", "Oostende", "Roeselare", "Ichtegem", "Eernegem", "Gent"].map(
            (city) => (
              <span
                key={city}
                className="bg-surface border border-border text-muted text-xs px-3 py-1 rounded-full"
              >
                {city}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
