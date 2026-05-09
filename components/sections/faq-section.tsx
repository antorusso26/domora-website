"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quali canali sono supportati?",
    a: "Booking.com, Airbnb, Expedia, Vrbo, Agoda, TripAdvisor, Hotels.com e booking engine diretto sul tuo sito. Stiamo aggiungendo nuovi canali ogni mese.",
  },
  {
    q: "DOMORA è conforme alla normativa italiana?",
    a: "Sì. Invio automatico Alloggiati Web (Polizia di Stato), statistiche ISTAT, calcolo e versamento tassa di soggiorno per tutti i Comuni italiani. Aggiorniamo le aliquote automaticamente.",
  },
  {
    q: "Posso migrare da un altro channel manager?",
    a: "Assolutamente. Importiamo per te calendario, prenotazioni e storico ospiti. La migrazione è gestita dal nostro team in 24-48h.",
  },
  {
    q: "Come funziona l'AI Receptionist?",
    a: "L'AI viene addestrata sui dati della tua struttura (FAQ, regole casa, raccomandazioni) e risponde a ospiti via WhatsApp/email/chat in 30+ lingue. Tu vedi tutto in dashboard e puoi intervenire in qualsiasi momento.",
  },
  {
    q: "Ci sono commissioni sulle prenotazioni?",
    a: "No. DOMORA è un abbonamento mensile fisso. Nessuna commissione, nessun costo nascosto.",
  },
  {
    q: "Posso provarlo gratis?",
    a: "Sì, 14 giorni di prova gratuita su tutti i piani. Nessuna carta di credito richiesta.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm text-primary font-medium">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">Domande frequenti</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="border border-border rounded-xl bg-background-elevated overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
