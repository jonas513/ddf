"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is de taxatie van mijn wagen gratis?",
    a: "Ja, 100% gratis en volledig vrijblijvend. U bent nergens toe verplicht nadat u een bod heeft ontvangen van DDF Motors.",
  },
  {
    q: "Hoe snel wordt mijn auto opgehaald?",
    a: "Na akkoord op het bod regelen wij alles binnen de 48 uur. Ophaling aan huis behoort tot de mogelijkheden in de regio Brugge, Torhout, Oostende en Roeselare.",
  },
  {
    q: "Wat met de keuring voor verkoop?",
    a: "Wij regelen alles. De keuring, de overschrijving, de documenten — u hoeft als verkoper niets te organiseren. Dit is de DDF Motors-manier.",
  },
  {
    q: "Kopen jullie ook wagens met schade of technische problemen?",
    a: "Ja. Wij kopen wagens in elke staat op. Carrosserieschade, mechanische problemen, hoge kilometerstand — contacteer ons voor een vrijblijvende inschatting.",
  },
  {
    q: "Moet ik zelf naar Brugge komen?",
    a: "Nee. Wij komen indien gewenst bij u langs in de ruime regio West-Vlaanderen. Brugge, Eernegem, Ichtegem, Torhout, Oostende, Roeselare — geen probleem.",
  },
  {
    q: "Kopen jullie ook lichte bedrijfswagens of bestelwagens?",
    a: "Absoluut. DDF Motors koopt én verkoopt lichte bedrijfswagens. Neem contact op via telefoon of het formulier hierboven.",
  },
  {
    q: "Hoe lang duurt het proces van aanvraag tot betaling?",
    a: "In de meeste gevallen van aanvraag tot betaling op uw rekening binnen de week. Wij werken snel en efficiënt zodat u geen tijd verliest.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Veelgestelde vragen
          </div>
          <h2 className="text-4xl font-black text-text">
            Uw vragen, <span className="text-muted font-light">onze antwoorden</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                open === i ? "border-accent/30 bg-surface" : "border-border bg-surface"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-medium text-sm leading-snug ${open === i ? "text-text" : "text-text/80"}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center ${
                    open === i ? "border-accent text-accent" : "border-border text-muted"
                  }`}
                >
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
