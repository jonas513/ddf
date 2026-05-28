import type { Metadata } from "next";
import InkoopForm from "@/components/InkoopForm";
import HoeWerktHet from "@/components/HoeWerktHet";
import FAQ from "@/components/FAQ";
import InkoopHero from "@/components/InkoopHero";

export const metadata: Metadata = {
  title: "Auto Verkopen in West-Vlaanderen | Gratis Taxatie",
  description:
    "Verkoop uw auto snel en eerlijk via DDF Motors in Brugge. Gratis taxatie, geen gezeur. Wij kopen alle merken op in regio Brugge, Torhout, Oostende en Roeselare. Bel 0495 50 98 95.",
  keywords: [
    "auto verkopen West-Vlaanderen",
    "auto opkoop Brugge",
    "auto verkopen Eernegem",
    "auto verkopen Torhout",
    "auto verkopen Oostende",
    "auto verkopen Roeselare",
    "gratis taxatie auto",
    "auto opkoop West-Vlaanderen",
    "direct geld voor je auto",
  ],
};

export default function AutoVerkopenPage() {
  return (
    <>
      <InkoopHero />
      <HoeWerktHet />

      {/* Form section */}
      <section id="formulier" className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <div className="lg:sticky lg:top-24">
              <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                Vrijblijvende aanvraag
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-text leading-tight mb-6">
                Wat is uw auto waard?
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Vul het formulier in en ontvang binnen 24 uur een eerlijk bod.
                Geen verplichtingen, geen verborgen kosten.
              </p>

              {/* Trust signals */}
              <div className="space-y-4">
                {[
                  { icon: "✓", text: "100% gratis & vrijblijvend" },
                  { icon: "✓", text: "Bod binnen 24 uur" },
                  { icon: "✓", text: "Wij regelen keuring & papieren" },
                  { icon: "✓", text: "Ophaling aan huis mogelijk" },
                  { icon: "✓", text: "Directe uitbetaling na akkoord" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent text-xs font-bold">
                      {item.icon}
                    </div>
                    <span className="text-text text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Or call */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-muted text-sm mb-4">Liever direct bellen?</p>
                <a
                  href="tel:0495509895"
                  className="inline-flex items-center gap-3 bg-bg border border-border hover:border-text/30 text-text font-semibold rounded-xl px-6 py-4 transition-all hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  0495 50 98 95
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-bg border border-border rounded-2xl p-6 lg:p-8">
              <InkoopForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
