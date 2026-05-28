"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="over-ons" className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Over DDF Motors
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-text leading-tight mb-6">
              30 jaar kennis,{" "}
              <span className="text-muted font-light">West-Vlaamse</span>{" "}
              eerlijkheid.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              DDF Motors BV is uw partner in aan- en verkoop van geselecteerde
              tweedehands auto&apos;s en lichte bedrijfswagens. Wij zijn reeds
              meer dan 30 jaar actief in de sector.
            </p>
            <p className="text-muted leading-relaxed">
              Onze ervaring en kennis zetten wij ook in voor de levering van
              auto&apos;s op bestelling, importadvies en bemiddeling in verkoop.
              Geen groot anoniem platform — u spreekt altijd met een persoon die
              de markt kent.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                "Geselecteerde tweedehands personenwagens",
                "Lichte bedrijfswagens",
                "Levering op bestelling & importadvies",
                "Bemiddeling in verkoop",
                "Gratis taxatie bij aankoop",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 12 12" className="w-3 h-3 text-accent" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-text text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-4"
          >
            {/* Contact block */}
            <div className="bg-bg border border-border rounded-2xl p-6">
              <div className="text-muted text-xs font-semibold tracking-widest uppercase mb-4">
                Contactgegevens
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    ),
                    label: "Adres",
                    value: "Sint-Michielsestraat 30, 8200 Brugge",
                    href: "https://maps.google.com/?q=Sint-Michielsestraat+30+Brugge",
                  },
                  {
                    icon: (
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    ),
                    label: "Telefoon",
                    value: "0495 50 98 95",
                    href: "tel:0495509895",
                  },
                  {
                    icon: (
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    ),
                    label: "E-mail",
                    value: "salesddfmotors@outlook.be",
                    href: "mailto:salesddfmotors@outlook.be",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-surface2 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent" fill="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="text-muted text-xs mb-0.5">{item.label}</div>
                      <div className="text-text text-sm font-medium group-hover:text-accent transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/32495509895"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] font-semibold rounded-2xl p-5 transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat via WhatsApp</span>
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
