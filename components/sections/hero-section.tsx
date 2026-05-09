"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DashboardMockup } from "@/components/dashboard-mockup";

export function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade pointer-events-none" />
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background-elevated/60 backdrop-blur text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Channel manager italiano · pensato per host indipendenti
            </span>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Tutto il tuo extralberghiero <br />
              <span className="text-gradient-primary">in un unico gestionale.</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Channel manager, prezzi competitor, check-in automatico, Alloggiati Web,
              ISTAT, tassa di soggiorno, housekeeping, AI receptionist. Tutto in DOMORA.
            </p>
          </div>
        }
      >
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}
