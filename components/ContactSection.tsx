"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Maandag – Vrijdag", time: "Op afspraak" },
  { day: "Zaterdag", time: "Op afspraak" },
  { day: "Zondag", time: "Gesloten" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Kom langs
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-text">
            Contacteer{" "}
            <span className="text-muted font-light">ons</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Openingsuren */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface border border-border rounded-2xl p-6"
          >
            <div className="text-muted text-xs font-semibold tracking-widest uppercase mb-5">
              Openingsuren
            </div>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between">
                  <span className="text-muted text-sm">{h.day}</span>
                  <span
                    className={`text-sm font-medium ${
                      h.time === "Gesloten" ? "text-muted" : "text-text"
                    }`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted text-xs leading-relaxed">
                Bezoeken steeds op afspraak. Bel of WhatsApp ons om een
                moment te plannen.
              </p>
            </div>
          </motion.div>

          {/* Adres + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-surface border border-border rounded-2xl p-6 flex flex-col"
          >
            <div className="text-muted text-xs font-semibold tracking-widest uppercase mb-5">
              Locatie
            </div>
            <div className="text-text font-semibold text-lg leading-snug mb-1">
              Sint-Michielsestraat 30
            </div>
            <div className="text-muted text-sm mb-6">8200 Brugge, West-Vlaanderen</div>
            <a
              href="https://maps.google.com/?q=Sint-Michielsestraat+30+8200+Brugge"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
            >
              Open in Google Maps
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="text-muted text-xs font-semibold tracking-widest uppercase mb-1">
              Direct contact
            </div>
            <a
              href="tel:0495509895"
              className="flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl px-5 py-4 transition-all hover:shadow-lg hover:shadow-accent/20 group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              0495 50 98 95
            </a>
            <a
              href="https://wa.me/32495509895"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 text-[#25D366] font-semibold rounded-xl px-5 py-4 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:salesddfmotors@outlook.be"
              className="flex items-center gap-3 border border-border hover:border-text/30 text-muted hover:text-text font-medium rounded-xl px-5 py-4 transition-all text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              salesddfmotors@outlook.be
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
