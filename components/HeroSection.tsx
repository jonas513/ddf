"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const words = ["Geselecteerde", "tweedehands", "wagens.", "Eerlijke", "prijs."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay } },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-navy to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Brugge — West-Vlaanderen · Meer dan 30 jaar ervaring
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className={`inline-block mr-4 ${
                    i >= 3 ? "text-accent" : "text-text"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              animate="show"
              className="text-muted text-lg leading-relaxed max-w-md mb-10"
            >
              DDF Motors BV selecteert tweedehands wagens en lichte bedrijfswagens
              met oog voor kwaliteit. Levering op bestelling, importadvies en
              bemiddeling.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(1.1)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#aanbod"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                Bekijk aanbod
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/auto-verkopen"
                className="inline-flex items-center gap-2 border border-border hover:border-text/40 text-text font-semibold px-7 py-4 rounded-xl transition-all hover:bg-surface hover:-translate-y-0.5"
              >
                Verkoop je auto
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp(1.3)}
              initial="hidden"
              animate="show"
              className="flex gap-10 mt-16"
            >
              {[
                { value: "30+", label: "jaar ervaring" },
                { value: "8", label: "wagens in stock" },
                { value: "100%", label: "gratis taxatie" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-text">{stat.value}</div>
                  <div className="text-muted text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mini-jcw-countryman.jpg"
                alt="MINI JCW Countryman"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              {/* Floating info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-bg/80 backdrop-blur-md border border-border rounded-xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted mb-0.5">Nieuwste aanbieding</div>
                    <div className="font-bold text-text">MINI JCW Countryman</div>
                    <div className="text-accent font-black text-xl">€38.750</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    15.210 km
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-6 bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
