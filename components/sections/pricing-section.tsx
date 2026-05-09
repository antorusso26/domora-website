import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    desc: "Per host singoli con 1-3 unità.",
    features: [
      "Fino a 3 unità",
      "Channel manager (Booking, Airbnb)",
      "Check-in online",
      "Alloggiati Web · ISTAT",
      "Tassa di soggiorno",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "79",
    desc: "Per strutture in crescita fino a 15 unità.",
    features: [
      "Fino a 15 unità",
      "Tutti i canali (incl. Expedia, Vrbo)",
      "Confronto prezzi competitor",
      "Housekeeping",
      "AI Receptionist (1.000 msg/mese)",
      "Storico clienti + CRM",
      "Export CSV fatture",
      "Support prioritario",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "199",
    desc: "Hotel boutique e gruppi multi-struttura.",
    features: [
      "Unità illimitate",
      "Multi-struttura",
      "AI Receptionist illimitata",
      "API + integrazioni custom",
      "Account manager dedicato",
      "Onboarding personalizzato",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="prezzi" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-sm text-primary font-medium">Prezzi</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">
            Semplice, trasparente, senza commissioni sulle prenotazioni.
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Prova DOMORA gratis per 14 giorni. Nessuna carta richiesta.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${
                p.featured
                  ? "border-primary bg-background-elevated relative shadow-xl glow-primary"
                  : "border-border bg-background-elevated"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  Più scelto
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold">€{p.price}</span>
                <span className="text-muted-foreground">/mese</span>
              </div>
              <button
                className={`mt-6 w-full h-11 rounded-full font-medium transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/70"
                }`}
              >
                Inizia prova gratuita
              </button>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
