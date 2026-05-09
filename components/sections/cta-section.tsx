export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl border border-border bg-background-elevated p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 -z-10 blur-2xl" />
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Pronto a semplificare il tuo lavoro?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Unisciti agli host italiani che hanno scelto DOMORA. Setup in 10 minuti, supporto in italiano.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#prezzi" className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Inizia 14 giorni gratis
            </a>
            <a href="#" className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-border bg-background hover:bg-muted font-medium transition">
              Prenota una demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
