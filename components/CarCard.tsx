"use client";

import { motion } from "framer-motion";
import { Car, fuelColors } from "@/lib/data";

function formatPrice(price: number) {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

function formatKm(km: number) {
  return new Intl.NumberFormat("nl-BE").format(km) + " km";
}

const makeColors: Record<string, string> = {
  BMW: "from-[#1a1a2e] to-[#0d0d1a]",
  Jaguar: "from-[#1a2e1a] to-[#0d1a0d]",
  Audi: "from-[#2e1a1a] to-[#1a0d0d]",
  Citroën: "from-[#1a1a2e] to-[#0a0d1a]",
  Ford: "from-[#1a2030] to-[#0a1020]",
  MINI: "from-[#2e2a1a] to-[#1a160d]",
};

export default function CarCard({ car }: { car: Car }) {
  const gradientClass = makeColors[car.make] ?? "from-surface2 to-bg";
  const fuelClass = fuelColors[car.fuel] ?? "bg-muted/20 text-muted";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-black/40 hover:border-border/80"
    >
      {/* Badge */}
      {car.badge && (
        <div className="absolute top-3 left-3 z-10 bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {car.badge}
        </div>
      )}

      {/* Type badge */}
      {car.type === "bestelwagen" && (
        <div className="absolute top-3 right-3 z-10 bg-surface/80 backdrop-blur-sm border border-border text-muted text-xs px-2.5 py-1 rounded-full">
          Bestelwagen
        </div>
      )}

      {/* Image area */}
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradientClass} overflow-hidden`}>
        {car.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={car.image}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-text/10 text-5xl font-black tracking-tight">
                {car.make}
              </div>
              <div className="text-text/5 text-2xl font-bold mt-1">{car.model}</div>
            </div>
            {/* Subtle car silhouette */}
            <svg
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full opacity-10"
            >
              <path
                d="M60 140 L90 90 Q110 72 140 70 L260 70 Q290 72 310 90 L340 140 Z"
                fill="white"
              />
              <path
                d="M40 140 Q40 152 52 152 L348 152 Q360 152 360 140 L340 140 L60 140 Z"
                fill="white"
              />
              <circle cx="110" cy="152" r="22" fill="#12172B" stroke="white" strokeWidth="1.5" />
              <circle cx="110" cy="152" r="12" fill="#1F2640" />
              <circle cx="290" cy="152" r="22" fill="#12172B" stroke="white" strokeWidth="1.5" />
              <circle cx="290" cy="152" r="12" fill="#1F2640" />
              <path d="M140 70 L155 100 L245 100 L260 70" fill="#12172B" />
            </svg>
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-accent/5 flex items-center justify-center"
        >
          <span className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
            Bekijk details →
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-text text-base leading-tight">
              {car.make} {car.model}
            </h3>
            <p className="text-muted text-xs mt-0.5">{car.location}</p>
          </div>
          <div className="text-accent font-black text-xl whitespace-nowrap">
            {formatPrice(car.price)}
          </div>
        </div>

        {/* Specs row */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="bg-surface2 border border-border text-muted text-xs px-2.5 py-1 rounded-lg">
            {car.year}
          </span>
          <span className="bg-surface2 border border-border text-muted text-xs px-2.5 py-1 rounded-lg">
            {formatKm(car.km)}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-lg ${fuelClass}`}>
            {car.fuel}
          </span>
          <span className="bg-surface2 border border-border text-muted text-xs px-2.5 py-1 rounded-lg">
            {car.transmission}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
