"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  TrendingUp,
  TrendingDown,
  Sparkles,
  Activity,
  Target,
  Zap,
  ArrowUpRight,
  Minus,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

type Competitor = {
  name: string;
  type: string;
  distance: string;
  price: number;
  change: number;
  trend: "up" | "down" | "flat";
};

const initialCompetitors: Competitor[] = [
  { name: "Hotel Belvedere", type: "Hotel 4★", distance: "0.3 km", price: 168, change: +4, trend: "up" },
  { name: "Casa Aurora B&B", type: "B&B", distance: "0.5 km", price: 124, change: -2, trend: "down" },
  { name: "Residenza del Centro", type: "Affittacamere", distance: "0.7 km", price: 142, change: 0, trend: "flat" },
  { name: "Suites Mariposa", type: "Hotel 3★", distance: "0.9 km", price: 156, change: +8, trend: "up" },
  { name: "Locanda San Marco", type: "B&B", distance: "1.2 km", price: 119, change: -3, trend: "down" },
];

export function PricingIntelSection() {
  const [competitors, setCompetitors] = useState(initialCompetitors);
  const [flashRow, setFlashRow] = useState<number | null>(null);
  const [yourPrice, setYourPrice] = useState(149);
  const [suggested, setSuggested] = useState(162);

  // Live update simulation
  useEffect(() => {
    const i = setInterval(() => {
      setCompetitors((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const delta = [-3, -2, -1, 0, 1, 2, 3, 4][Math.floor(Math.random() * 8)];
        const next = [...prev];
        const newPrice = Math.max(80, next[idx].price + delta);
        next[idx] = {
          ...next[idx],
          price: newPrice,
          change: delta,
          trend: delta > 0 ? "up" : delta < 0 ? "down" : "flat",
        };
        setFlashRow(idx);
        setTimeout(() => setFlashRow(null), 1200);
        return next;
      });
    }, 2400);
    return () => clearInterval(i);
  }, []);

  // AI suggested price drift
  useEffect(() => {
    const i = setInterval(() => {
      setSuggested((s) => Math.max(140, Math.min(175, s + (Math.random() > 0.5 ? 1 : -1))));
    }, 3500);
    return () => clearInterval(i);
  }, []);

  const avgComp = Math.round(competitors.reduce((a, c) => a + c.price, 0) / competitors.length);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-violet-500/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Tracing beam container */}
        <div className="relative">
          {/* Vertical tracing beam (decorative) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "top" }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-violet-500 to-transparent"
          />

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background-elevated/60 backdrop-blur text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-muted-foreground">Live · monitoraggio in tempo reale</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4">
              Sai sempre come <span className="text-gradient-primary">prezzano i competitor.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              DOMORA monitora le tariffe della concorrenza nel tuo raggio, calcola il prezzo ottimale
              e ti suggerisce quando alzare o abbassare. Massimizza il RevPAR senza spreadsheet.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-6 relative">
            {/* Your price card */}
            <div className="relative rounded-2xl border border-border bg-background-elevated p-6 overflow-hidden">
              <BorderBeam size={180} duration={10} colorFrom="#F08060" colorTo="#7C3AED" />
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Il tuo prezzo</div>
                <Target className="h-4 w-4 text-primary" />
              </div>
              <div className="text-4xl font-bold mt-3">€ {yourPrice}</div>
              <div className="text-xs text-muted-foreground mt-1">Camera Standard · Stanotte</div>

              <div className="mt-5 p-3 rounded-xl bg-primary/8 border border-primary/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[11px] font-semibold text-primary">Suggerimento AI</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <motion.span
                    key={suggested}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-primary"
                  >
                    € {suggested}
                  </motion.span>
                  <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-0.5">
                    <ArrowUpRight className="h-3 w-3" /> +€{suggested - yourPrice} potenziali
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5">
                  Mercato in salita: 3 competitor stanno vendendo di più nelle ultime 24h.
                </p>
                <button
                  onClick={() => setYourPrice(suggested)}
                  className="mt-3 w-full h-8 rounded-lg bg-primary text-primary-foreground text-[11px] font-semibold inline-flex items-center justify-center gap-1.5 hover:opacity-90 transition"
                >
                  <Zap className="h-3 w-3" /> Applica & sincronizza canali
                </button>
              </div>
            </div>

            {/* Competitor live feed */}
            <div className="lg:col-span-2 rounded-2xl border border-border bg-background-elevated overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-semibold">Competitor in zona · prezzi live</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                  Aggiornato {new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>

              <div className="p-2">
                <div className="grid grid-cols-[1.4fr_0.6fr_0.7fr] sm:grid-cols-[1.6fr_0.8fr_0.8fr_0.6fr] px-3 py-2 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                  <span>Struttura</span>
                  <span className="hidden sm:block">Tipologia</span>
                  <span>Distanza</span>
                  <span className="text-right">Prezzo</span>
                </div>
                {competitors.map((c, i) => {
                  const trendColor =
                    c.trend === "up"
                      ? "text-emerald-500"
                      : c.trend === "down"
                      ? "text-rose-500"
                      : "text-muted-foreground";
                  const TrendIcon = c.trend === "up" ? TrendingUp : c.trend === "down" ? TrendingDown : Minus;
                  return (
                    <div
                      key={c.name}
                      className={`grid grid-cols-[1.4fr_0.6fr_0.7fr] sm:grid-cols-[1.6fr_0.8fr_0.8fr_0.6fr] px-3 py-3 rounded-lg items-center text-xs ${
                        flashRow === i ? "flash-price" : ""
                      } hover:bg-muted/40`}
                    >
                      <div className="min-w-0">
                        <div className="font-medium truncate">{c.name}</div>
                        <div className="text-[10px] text-muted-foreground">{c.type} · ⭐ 4.{Math.floor(2 + i * 0.7) % 9}</div>
                      </div>
                      <span className="hidden sm:block text-muted-foreground">{c.type}</span>
                      <span className="text-muted-foreground">{c.distance}</span>
                      <div className="text-right">
                        <motion.div
                          key={c.price}
                          initial={{ opacity: 0.5, y: -3 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-bold"
                        >
                          € {c.price}
                        </motion.div>
                        <div className={`text-[10px] flex items-center justify-end gap-0.5 ${trendColor}`}>
                          <TrendIcon className="h-2.5 w-2.5" />
                          {c.change > 0 ? `+€${c.change}` : c.change < 0 ? `-€${Math.abs(c.change)}` : "stabile"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer summary */}
              <div className="grid grid-cols-3 border-t border-border">
                {[
                  { label: "Media zona", value: `€ ${avgComp}` },
                  { label: "Più basso", value: `€ ${Math.min(...competitors.map((c) => c.price))}` },
                  { label: "Più alto", value: `€ ${Math.max(...competitors.map((c) => c.price))}` },
                ].map((s) => (
                  <div key={s.label} className="px-5 py-3 border-r last:border-r-0 border-border">
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</div>
                    <div className="text-lg font-bold mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* History chart card */}
          <div className="mt-6 relative rounded-2xl border border-border bg-background-elevated p-6 overflow-hidden">
            <BorderBeam size={250} duration={14} delay={2} colorFrom="#7C3AED" colorTo="#F08060" />
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="text-sm font-semibold">Storico prezzi · ultimi 30 giorni</div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Confronto fra il tuo prezzo, la media zona e il prezzo top 3 competitor.
                </p>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <Legend c="bg-primary" l="Tu" />
                <Legend c="bg-violet-500" l="Media zona" />
                <Legend c="bg-muted-foreground" l="Top 3" />
              </div>
            </div>
            <PriceHistoryChart />
          </div>
        </div>
      </div>
    </section>
  );
}

function Legend({ c, l }: { c: string; l: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
      <span className={`h-2 w-2 rounded-full ${c}`} /> {l}
    </span>
  );
}

function PriceHistoryChart() {
  const yours = [135, 138, 140, 142, 145, 144, 148, 150, 149, 152, 155, 154, 158, 160, 162, 159, 161, 164, 168, 165, 162, 158, 155, 152, 149, 152, 156, 160, 162, 165];
  const avg = [130, 132, 134, 136, 138, 140, 142, 144, 145, 147, 149, 150, 152, 154, 156, 155, 156, 158, 160, 158, 156, 154, 152, 150, 148, 150, 153, 156, 158, 160];
  const top = [148, 150, 152, 155, 158, 160, 162, 165, 167, 168, 170, 172, 175, 177, 178, 176, 178, 180, 182, 180, 178, 175, 172, 170, 168, 170, 173, 176, 178, 180];
  const all = [...yours, ...avg, ...top];
  const min = Math.min(...all) - 5;
  const max = Math.max(...all) + 5;
  const w = 800;
  const h = 160;
  const step = w / (yours.length - 1);

  const toPath = (arr: number[]) =>
    arr
      .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - ((p - min) / (max - min)) * (h - 10) - 5}`)
      .join(" ");

  return (
    <div className="mt-4 h-40 md:h-48 relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ph-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F08060" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F08060" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((p) => (
          <line key={p} x1="0" x2={w} y1={h * p} y2={h * p} stroke="currentColor" strokeOpacity="0.06" strokeDasharray="3,3" />
        ))}
        {/* Top 3 (dashed, muted) */}
        <path d={toPath(top)} fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4,4" />
        {/* Avg (violet) */}
        <path d={toPath(avg)} fill="none" stroke="#7C3AED" strokeWidth="2" />
        {/* Yours (primary) — area + line */}
        <path d={`${toPath(yours)} L ${w} ${h} L 0 ${h} Z`} fill="url(#ph-fill)" />
        <path d={toPath(yours)} fill="none" stroke="#F08060" strokeWidth="2.5" strokeLinecap="round" />
        <circle
          cx={(yours.length - 1) * step}
          cy={h - ((yours[yours.length - 1] - min) / (max - min)) * (h - 10) - 5}
          r="5"
          fill="#F08060"
        />
        <circle
          cx={(yours.length - 1) * step}
          cy={h - ((yours[yours.length - 1] - min) / (max - min)) * (h - 10) - 5}
          r="10"
          fill="#F08060"
          opacity="0.25"
          className="animate-pulse-dot"
        />
      </svg>
    </div>
  );
}
