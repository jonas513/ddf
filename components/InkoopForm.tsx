"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  merk: string;
  model: string;
  jaar: string;
  km: string;
  brandstof: string;
  transmissie: string;
  toestand: string;
  beschrijving: string;
  naam: string;
  telefoon: string;
  email: string;
};

const EMPTY: FormData = {
  merk: "", model: "", jaar: "", km: "", brandstof: "",
  transmissie: "", toestand: "", beschrijving: "",
  naam: "", telefoon: "", email: "",
};

const slideVariant = {
  enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
};

export default function InkoopForm() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setData((prev) => ({ ...prev, [field]: e.target.value }));

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-surface border border-border hover:border-muted focus:border-accent focus:ring-1 focus:ring-accent/30 text-text placeholder-muted rounded-xl px-4 py-3 text-sm outline-none transition-all";
  const labelClass = "block text-muted text-xs font-medium mb-1.5";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-400" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-text mb-3">Aanvraag verzonden!</h3>
        <p className="text-muted max-w-sm mx-auto leading-relaxed">
          Wij nemen binnen de 24u contact op met een eerlijk en vrijblijvend bod voor uw voertuig.
        </p>
      </motion.div>
    );
  }

  const steps = [
    {
      title: "Uw voertuig",
      subtitle: "Vertel ons over uw wagen",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Merk *</label>
            <input className={inputClass} value={data.merk} onChange={set("merk")} placeholder="bijv. BMW" required />
          </div>
          <div>
            <label className={labelClass}>Model *</label>
            <input className={inputClass} value={data.model} onChange={set("model")} placeholder="bijv. 320e" required />
          </div>
          <div>
            <label className={labelClass}>Bouwjaar *</label>
            <input className={inputClass} type="number" min="1990" max="2026" value={data.jaar} onChange={set("jaar")} placeholder="bijv. 2020" required />
          </div>
          <div>
            <label className={labelClass}>Kilometerstand *</label>
            <input className={inputClass} type="number" value={data.km} onChange={set("km")} placeholder="bijv. 45000" required />
          </div>
          <div>
            <label className={labelClass}>Brandstof</label>
            <select className={inputClass} value={data.brandstof} onChange={set("brandstof")}>
              <option value="">Selecteer...</option>
              <option>Benzine</option>
              <option>Diesel</option>
              <option>Hybride</option>
              <option>Elektrisch</option>
              <option>LPG</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Transmissie</label>
            <select className={inputClass} value={data.transmissie} onChange={set("transmissie")}>
              <option value="">Selecteer...</option>
              <option>Manueel</option>
              <option>Automaat</option>
            </select>
          </div>
        </div>
      ),
      valid: !!data.merk && !!data.model && !!data.jaar && !!data.km,
    },
    {
      title: "Toestand",
      subtitle: "Beschrijf de staat van uw wagen",
      content: (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Algemene toestand *</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "uitstekend", label: "Uitstekend", desc: "Als nieuw, geen gebreken" },
                { value: "goed", label: "Goed", desc: "Normale gebruikssporen" },
                { value: "matig", label: "Matig", desc: "Zichtbare schade of slijtage" },
                { value: "slecht", label: "Voor herstelling", desc: "Mechanische of carrosserieproblemen" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setData((prev) => ({ ...prev, toestand: opt.value }))}
                  className={`text-left p-3 rounded-xl border transition-all ${
                    data.toestand === opt.value
                      ? "border-accent bg-accent/10 text-text"
                      : "border-border bg-surface hover:border-muted text-muted"
                  }`}
                >
                  <div className="font-medium text-sm">{opt.label}</div>
                  <div className="text-xs mt-0.5 opacity-70">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className={labelClass}>Extra opmerkingen</label>
            <textarea
              className={`${inputClass} resize-none`}
              rows={3}
              value={data.beschrijving}
              onChange={set("beschrijving")}
              placeholder="Opties, recente herstellingen, bijzonderheden..."
            />
          </div>
          <div>
            <label className={labelClass}>Foto&apos;s toevoegen (optioneel)</label>
            <div className="border border-dashed border-border hover:border-muted rounded-xl p-6 text-center cursor-pointer transition-colors">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-muted mx-auto mb-2">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-muted text-sm">Sleep foto&apos;s hierheen of klik om te uploaden</div>
              <div className="text-muted/50 text-xs mt-1">JPG, PNG tot 10MB</div>
            </div>
          </div>
        </div>
      ),
      valid: !!data.toestand,
    },
    {
      title: "Uw gegevens",
      subtitle: "Hoe kunnen wij u bereiken?",
      content: (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Naam *</label>
            <input className={inputClass} value={data.naam} onChange={set("naam")} placeholder="Uw naam" required />
          </div>
          <div>
            <label className={labelClass}>Telefoon *</label>
            <input className={inputClass} type="tel" value={data.telefoon} onChange={set("telefoon")} placeholder="04xx xx xx xx" required />
          </div>
          <div>
            <label className={labelClass}>E-mail</label>
            <input className={inputClass} type="email" value={data.email} onChange={set("email")} placeholder="uw@email.be" />
          </div>
          <div className="bg-surface2 border border-border rounded-xl p-4 text-muted text-sm leading-relaxed">
            <strong className="text-text">Overzicht:</strong>{" "}
            {data.merk} {data.model} ({data.jaar}) · {parseInt(data.km).toLocaleString("nl-BE")} km · Toestand: {data.toestand}
          </div>
        </div>
      ),
      valid: !!data.naam && !!data.telefoon,
    },
  ];

  return (
    <form onSubmit={submit} className="space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2 flex-1">
            <div
              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${
                i < step
                  ? "bg-accent border-accent text-white"
                  : i === step
                  ? "border-accent text-accent"
                  : "border-border text-muted"
              }`}
            >
              {i < step ? (
                <svg viewBox="0 0 12 12" className="w-3.5 h-3.5" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 transition-colors ${i < step ? "bg-accent" : "bg-border"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step header */}
      <div>
        <div className="font-bold text-text text-lg">{steps[step].title}</div>
        <div className="text-muted text-sm">{steps[step].subtitle}</div>
      </div>

      {/* Step content */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            variants={slideVariant}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {steps[step].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        {step > 0 && (
          <button
            type="button"
            onClick={() => go(step - 1)}
            className="flex-1 border border-border hover:border-text/30 text-muted hover:text-text font-medium rounded-xl py-3.5 transition-all text-sm"
          >
            Vorige
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={() => go(step + 1)}
            disabled={!steps[step].valid}
            className="flex-1 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl py-3.5 transition-all text-sm hover:shadow-lg hover:shadow-accent/20"
          >
            Volgende stap →
          </button>
        ) : (
          <button
            type="submit"
            disabled={!steps[step].valid}
            className="flex-1 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl py-3.5 transition-all text-sm hover:shadow-lg hover:shadow-accent/20"
          >
            Verstuur aanvraag
          </button>
        )}
      </div>
    </form>
  );
}
