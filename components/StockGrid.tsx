"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarCard from "./CarCard";
import { stock, Car } from "@/lib/data";

type Filter = "all" | "personenwagen" | "bestelwagen";

export default function StockGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered: Car[] =
    filter === "all" ? stock : stock.filter((c) => c.type === filter);

  return (
    <section id="aanbod" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
              Huidig aanbod
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-text">
              {filtered.length} wagen{filtered.length !== 1 ? "s" : ""}{" "}
              <span className="text-muted font-light">beschikbaar</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 bg-surface border border-border rounded-xl p-1">
            {(["all", "personenwagen", "bestelwagen"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {filter === f && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-surface2 border border-border rounded-lg"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}
                <span className="relative capitalize">
                  {f === "all" ? "Alles" : f === "personenwagen" ? "Personenwagens" : "Bestelwagens"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted text-sm">
            Niet gevonden wat u zoekt?{" "}
            <a
              href="mailto:salesddfmotors@outlook.be"
              className="text-accent hover:underline font-medium"
            >
              Contacteer ons
            </a>{" "}
            — wij zoeken het voor u.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
