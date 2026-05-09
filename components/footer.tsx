import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/images/logo-mark.png" alt="DOMORA" width={32} height={32} style={{ height: "auto" }} />
            <span className="font-bold tracking-tight">DOMORA</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Il gestionale italiano per l&apos;extralberghiero.</p>
        </div>
        {[
          { title: "Prodotto", items: ["Funzionalità", "Prezzi", "Integrazioni", "Roadmap"] },
          { title: "Risorse", items: ["Blog", "Guide host", "Documentazione", "API"] },
          { title: "Azienda", items: ["Chi siamo", "Contatti", "Privacy", "Termini"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="font-medium text-sm mb-3">{c.title}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} DOMORA. Tutti i diritti riservati.</span>
        <span>Made in Italy 🇮🇹</span>
      </div>
    </footer>
  );
}
