import {
  Globe2,
  LineChart,
  ShieldCheck,
  Sparkles,
  Brush,
  Receipt,
  History,
  FileSpreadsheet,
  PlusCircle,
  KeyRound,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Channel Manager unificato",
    desc: "Sincronizza prezzi, disponibilità e prenotazioni su Booking, Airbnb, Expedia, Vrbo e oltre, in tempo reale. Niente più overbooking.",
  },
  {
    icon: LineChart,
    title: "Confronto prezzi competitor",
    desc: "Monitora le tariffe della concorrenza nella tua zona, ricevi suggerimenti automatici e massimizza il RevPAR.",
  },
  {
    icon: ShieldCheck,
    title: "Alloggiati Web · ISTAT · Tassa di soggiorno",
    desc: "Invio automatico delle schedine, statistiche ISTAT e calcolo tassa di soggiorno. Conforme alla normativa italiana.",
  },
  {
    icon: KeyRound,
    title: "Check-in online automatico",
    desc: "Link di pre-check-in inviato all'ospite, documento d'identità verificato, firma digitale. Zero attese al banco.",
  },
  {
    icon: Brush,
    title: "Housekeeping intelligente",
    desc: "Pianifica le pulizie sulla base del calendario di check-in/out, assegna le camere alle governanti e monitora lo stato in tempo reale.",
  },
  {
    icon: History,
    title: "Storico ospiti e clienti ricorrenti",
    desc: "CRM integrato che riconosce gli ospiti che tornano, salva preferenze e permette campagne di fidelizzazione mirate.",
  },
  {
    icon: Receipt,
    title: "Spese per camera e struttura",
    desc: "Traccia ogni spesa associandola alla singola camera o all'intera struttura. Marginalità chiara e profittabilità reale.",
  },
  {
    icon: PlusCircle,
    title: "Extra e pagamenti facili",
    desc: "Aggiungi extra alle camere (parcheggio, spa, transfer), registra pagamenti parziali e gestisci caparre senza fogli Excel.",
  },
  {
    icon: FileSpreadsheet,
    title: "Export CSV per fatture",
    desc: "Genera CSV pronti per il commercialista o per il tuo software di fatturazione elettronica. Chiusure mensili in 2 click.",
  },
  {
    icon: Sparkles,
    title: "Pagina ospite personalizzata",
    desc: "Ogni prenotazione attiva una pagina dedicata con info struttura, check-in digitale, mappa, contatti e upsell.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funzionalita" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-sm text-primary font-medium">Funzionalità</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">
            Tutto quello che ti serve per gestire la tua struttura.
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Un unico software al posto di 7 strumenti diversi. Più tempo per gli ospiti, meno tempo davanti al PC.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background-elevated p-6 md:p-8 hover:bg-muted/40 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
