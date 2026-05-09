export function LogosSection() {
  const logos = ["Booking.com", "Airbnb", "Expedia", "Vrbo", "Agoda", "TripAdvisor", "Hotels.com"];
  return (
    <section className="py-12 md:py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Sincronizzato in tempo reale con i principali canali
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-lg md:text-xl font-semibold text-muted-foreground/70 hover:text-foreground transition">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
