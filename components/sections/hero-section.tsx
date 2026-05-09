"use client";
import { motion } from "motion/react";
import { CalendarRange, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DashboardMockup } from "@/components/dashboard-mockup";

const floatingBadges = [
  { icon: CalendarRange, label: "Sync OTA", sub: "tempo reale", x: "-18%", y: "10%", delay: 0 },
  { icon: ShieldCheck, label: "Alloggiati Web", sub: "auto", x: "98%", y: "8%", delay: 0.4 },
  { icon: Sparkles, label: "AI Receptionist", sub: "30+ lingue", x: "100%", y: "65%", delay: 0.8 },
  { icon: TrendingUp, label: "+18% RevPAR", sub: "vs trim. scorso", x: "-14%", y: "60%", delay: 1.2 },
];

export function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade pointer-events-none" />
      {/* Cinematic glow */}
      <div className="pointer-events-none absolute top-32 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-br from-primary/20 via-violet-500/10 to-transparent blur-3xl" />

      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background-elevated/60 backdrop-blur text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Channel manager italiano · pensato per host indipendenti
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] md:leading-[1.05] px-2">
              Tutto il tuo extralberghiero <br className="hidden sm:block" />
              <span className="text-gradient-primary">in un unico gestionale.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Channel manager, prezzi competitor, check-in automatico, Alloggiati Web,
              ISTAT, tassa di soggiorno, housekeeping, AI receptionist. Tutto in DOMORA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a href="#prezzi" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/30">
                Inizia 14 giorni gratis
              </a>
              <a href="#funzionalita" className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-border bg-background-elevated/60 backdrop-blur hover:bg-muted font-medium transition">
                Scopri le funzionalità
              </a>
            </div>
          </div>
        }
      >
        <div className="relative h-full w-full">
          <DashboardMockup />
          {/* Floating glass badges */}
          {floatingBadges.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: b.delay + 0.3, duration: 0.6 }}
              className="hidden lg:flex absolute z-10 items-center gap-2 px-3 py-2 rounded-xl border border-border/60 bg-background-elevated/70 backdrop-blur-md shadow-xl animate-float"
              style={{ left: b.x, top: b.y, animationDelay: `${b.delay}s` }}
            >
              <div className="h-7 w-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <b.icon className="h-3.5 w-3.5" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold">{b.label}</div>
                <div className="text-[9px] text-muted-foreground">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
