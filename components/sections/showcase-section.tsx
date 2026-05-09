"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard, CalendarRange, ShieldCheck, Wallet } from "lucide-react";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { PlanningView, ComplianceView, FinanceView } from "@/components/showcase-views";

const tabs = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", desc: "Tutto sotto controllo a colpo d'occhio" },
  { id: "planning", icon: CalendarRange, label: "Planning", desc: "Calendario unificato di tutti i canali" },
  { id: "compliance", icon: ShieldCheck, label: "Compliance", desc: "Alloggiati Web, ISTAT, tassa di soggiorno" },
  { id: "finance", icon: Wallet, label: "Finanze", desc: "Spese per camera, fatture, marginalità" },
];

export function ShowcaseSection() {
  const [active, setActive] = useState("dashboard");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-sm text-primary font-medium">Un&apos;unica piattaforma</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">
            Quattro sezioni, <span className="text-gradient-primary">tutto il tuo lavoro.</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">{current.desc}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`relative inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative inline-flex items-center gap-2">
                  <t.icon className="h-4 w-4" />
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase frame */}
        <div className="relative">
          <div className="absolute -inset-x-10 -inset-y-6 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10 blur-3xl -z-10" />
          <div className="relative rounded-[20px] md:rounded-[28px] border-2 md:border-4 border-[#6C6C6C] dark:border-[#2a2a35] bg-[#222] dark:bg-[#0d0d14] p-1.5 md:p-4 shadow-2xl">
            <div className="rounded-xl md:rounded-2xl overflow-hidden h-[560px] md:h-[640px] bg-background-elevated">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  {active === "dashboard" && <DashboardMockup />}
                  {active === "planning" && <PlanningView />}
                  {active === "compliance" && <ComplianceView />}
                  {active === "finance" && <FinanceView />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
