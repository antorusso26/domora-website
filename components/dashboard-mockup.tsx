"use client";
import {
  LayoutDashboard,
  CalendarRange,
  BookOpen,
  BedDouble,
  KeyRound,
  Sparkles,
  Users,
  ShieldCheck,
  BarChart3,
  Receipt,
  Wallet,
  FileSpreadsheet,
  ArrowRight,
  ArrowDownRight,
  TrendingUp,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Wrench,
  Plus,
  Download,
} from "lucide-react";

const navGroups = [
  {
    label: "Operativo",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", active: true },
      { icon: CalendarRange, label: "Planning" },
      { icon: BookOpen, label: "Prenotazioni" },
      { icon: BedDouble, label: "Camere" },
      { icon: KeyRound, label: "Check-in" },
      { icon: Sparkles, label: "Pulizie" },
    ],
  },
  {
    label: "CRM",
    items: [{ icon: Users, label: "Ospiti" }],
  },
  {
    label: "Compliance",
    items: [
      { icon: ShieldCheck, label: "Alloggiati Web" },
      { icon: BarChart3, label: "ISTAT" },
      { icon: Receipt, label: "Tassa Soggiorno" },
    ],
  },
  {
    label: "Finance",
    items: [
      { icon: TrendingUp, label: "Finanze" },
      { icon: Wallet, label: "Spese" },
      { icon: FileSpreadsheet, label: "Export Fatture" },
    ],
  },
];

const kpis = [
  { label: "Arrivi oggi", value: "12", sub: "8 da fare", tag: "Attivo", tagColor: "bg-violet-500/15 text-violet-500", border: "from-violet-500 to-violet-400", icon: ArrowRight },
  { label: "Partenze oggi", value: "9", sub: "In partenza", tag: "OK", tagColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400", border: "from-amber-500 to-amber-400", icon: ArrowDownRight },
  { label: "In casa", value: "34", sub: "42 camere totali", tag: "Live", tagColor: "bg-emerald-500/15 text-emerald-500", border: "from-emerald-500 to-emerald-400", icon: Users },
  { label: "Occupazione", value: "87%", sub: "+4.2% vs sett. scorsa", tag: "", tagColor: "", border: "from-sky-500 to-sky-400", icon: TrendingUp },
];

const roomStatus = [
  { icon: CheckCircle2, label: "Pulite", value: 28, color: "text-emerald-500", bg: "bg-emerald-500/15", barBg: "bg-emerald-500" },
  { icon: AlertTriangle, label: "Da pulire", value: 6, color: "text-amber-500", bg: "bg-amber-500/15", barBg: "bg-amber-500" },
  { icon: Loader2, label: "In pulizia", value: 4, color: "text-sky-500", bg: "bg-sky-500/15", barBg: "bg-sky-500" },
  { icon: Wrench, label: "Manutenzione", value: 1, color: "text-rose-500", bg: "bg-rose-500/15", barBg: "bg-rose-500" },
];

export function DashboardMockup({ greeting = "Buongiorno" }: { greeting?: string }) {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-[210px_1fr] bg-background-elevated text-foreground rounded-xl overflow-hidden text-[10px] md:text-xs font-medium">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col border-r border-border bg-background py-4 px-3 gap-4 overflow-hidden">
        <div className="flex items-center gap-2.5 px-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-white">
            <Building2 className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-[11px]">DOMORA</div>
            <div className="text-[9px] text-muted-foreground font-normal">Gestionale strutture</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 overflow-y-auto">
          {navGroups.map((g) => (
            <div key={g.label}>
              <div className="text-[8.5px] uppercase tracking-wider text-muted-foreground px-2 mb-1.5">{g.label}</div>
              <div className="flex flex-col gap-0.5">
                {g.items.map((it) => (
                  <div
                    key={it.label}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors ${
                      it.active
                        ? "bg-violet-500/10 text-violet-500"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <it.icon className="h-3.5 w-3.5" />
                    <span>{it.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 p-3 md:p-5 border-b border-border">
          <div className="min-w-0 flex-1">
            <h2 className="text-base md:text-2xl font-bold tracking-tight truncate">{greeting}</h2>
            <p className="text-muted-foreground mt-0.5 text-[9px] md:text-xs">Panoramica · Sab 9 Mag 2026</p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button className="hidden md:inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border bg-background hover:bg-muted">
              <Download className="h-3 w-3" /> Report
            </button>
            <button className="inline-flex items-center gap-1 h-7 md:h-8 px-2 md:px-3 rounded-lg bg-violet-600 text-white hover:bg-violet-700">
              <Plus className="h-3 w-3" /> <span className="hidden sm:inline">Nuova prenotazione</span><span className="sm:hidden">Nuova</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden p-3 md:p-5 grid grid-cols-12 gap-3 auto-rows-min">
          {/* KPI cards */}
          {kpis.map((k) => (
            <div
              key={k.label}
              className="col-span-6 md:col-span-3 rounded-xl border border-border bg-background-elevated overflow-hidden relative"
            >
              <div className={`h-1 bg-gradient-to-r ${k.border}`} />
              <div className="p-3">
                <div className="flex items-start justify-between">
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">{k.label}</div>
                  <div className={`h-6 w-6 rounded-md flex items-center justify-center ${k.tagColor || "bg-muted text-muted-foreground"}`}>
                    <k.icon className="h-3 w-3" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold mt-2">{k.value}</div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-muted-foreground text-[9.5px]">{k.sub}</span>
                  {k.tag && (
                    <span className={`text-[8.5px] px-1.5 py-0.5 rounded-full font-semibold ${k.tagColor}`}>{k.tag}</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Revenue chart */}
          <div className="col-span-12 lg:col-span-8 rounded-xl border border-border bg-background-elevated p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Revenue del periodo</div>
                <div className="text-2xl font-bold mt-1">€ 24.580</div>
                <div className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1 mt-0.5">
                  <TrendingUp className="h-3 w-3" /> +18.4% vs mese scorso
                </div>
              </div>
              <button className="text-violet-500 text-[10px] font-semibold border border-border rounded-md px-2 py-1 hover:bg-muted">
                Vedi finanze →
              </button>
            </div>
            <RevenueChart />
          </div>

          {/* Room status */}
          <div className="col-span-12 lg:col-span-4 rounded-xl border border-border bg-background-elevated p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">Stato camere</div>
              <a className="text-violet-500 text-[10px] font-semibold">Dettaglio →</a>
            </div>
            <div className="space-y-3">
              {roomStatus.map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <div className={`h-7 w-7 rounded-md ${r.bg} ${r.color} flex items-center justify-center shrink-0`}>
                    <r.icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span>{r.label}</span>
                      <span className="font-bold">{r.value}</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full mt-1 overflow-hidden">
                      <div className={`h-full ${r.barBg}`} style={{ width: `${(r.value / 28) * 100}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function RevenueChart() {
  // Simple SVG line chart with gradient fill
  const points = [12, 18, 14, 22, 26, 24, 30, 28, 35, 38, 42, 45, 48, 52];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 600;
  const h = 120;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - ((p - min) / (max - min)) * (h - 10) - 5}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="relative h-28 md:h-32">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chart-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#F08060" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#chart-fill)" />
        <path d={path} fill="none" stroke="url(#chart-line)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle
          cx={(points.length - 1) * step}
          cy={h - ((points[points.length - 1] - min) / (max - min)) * (h - 10) - 5}
          r="4"
          fill="#F08060"
        />
      </svg>
      <div className="flex justify-between text-[8px] text-muted-foreground mt-1">
        {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}
