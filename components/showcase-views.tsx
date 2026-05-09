"use client";
import { ShieldCheck, Send, Check, Euro, Receipt, FileSpreadsheet, ArrowUpRight, Building2 } from "lucide-react";

export function PlanningView() {
  const rooms = ["Camera 101", "Camera 102", "Camera 103", "Camera 201", "Camera 202", "Suite A", "Suite B", "Loft"];
  const days = Array.from({ length: 14 }, (_, i) => 9 + i);
  const bars: Record<string, { start: number; len: number; c: string; ch: string; guest: string }[]> = {
    "Camera 101": [{ start: 0, len: 3, c: "bg-violet-500", ch: "Booking", guest: "M. Rossi" }, { start: 4, len: 4, c: "bg-rose-500", ch: "Airbnb", guest: "L. Chen" }, { start: 9, len: 3, c: "bg-emerald-500", ch: "Diretto", guest: "P. Bianchi" }],
    "Camera 102": [{ start: 1, len: 5, c: "bg-amber-400", ch: "Expedia", guest: "A. Miller" }, { start: 7, len: 6, c: "bg-violet-500", ch: "Booking", guest: "S. Dupont" }],
    "Camera 103": [{ start: 0, len: 2, c: "bg-rose-500", ch: "Airbnb", guest: "K. Müller" }, { start: 3, len: 7, c: "bg-violet-500", ch: "Booking", guest: "R. García" }, { start: 11, len: 3, c: "bg-emerald-500", ch: "Diretto", guest: "F. Conti" }],
    "Camera 201": [{ start: 2, len: 4, c: "bg-emerald-500", ch: "Diretto", guest: "D. Verdi" }, { start: 7, len: 5, c: "bg-rose-500", ch: "Airbnb", guest: "T. Tanaka" }],
    "Camera 202": [{ start: 0, len: 6, c: "bg-violet-500", ch: "Booking", guest: "E. Brown" }, { start: 8, len: 4, c: "bg-amber-400", ch: "Expedia", guest: "G. Rosi" }],
    "Suite A": [{ start: 1, len: 3, c: "bg-emerald-500", ch: "Diretto", guest: "VIP" }, { start: 5, len: 8, c: "bg-violet-500", ch: "Booking", guest: "VIP" }],
    "Suite B": [{ start: 0, len: 4, c: "bg-amber-400", ch: "Expedia", guest: "Honey." }, { start: 6, len: 7, c: "bg-violet-500", ch: "Booking", guest: "VIP" }],
    "Loft": [{ start: 2, len: 6, c: "bg-rose-500", ch: "Airbnb", guest: "C. Smith" }, { start: 10, len: 4, c: "bg-emerald-500", ch: "Diretto", guest: "Family" }],
  };

  return (
    <div className="h-full flex flex-col bg-background-elevated text-foreground p-3 md:p-6 text-[10px] md:text-xs">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3 md:mb-4">
        <div>
          <h3 className="text-sm md:text-xl font-bold">Planning · Mag 2026</h3>
          <p className="text-muted-foreground mt-0.5 text-[9px] md:text-xs">Sincronizzato con Booking, Airbnb, Expedia</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] flex-wrap">
          <Legend c="bg-violet-500" l="Booking" />
          <Legend c="bg-rose-500" l="Airbnb" />
          <Legend c="bg-amber-400" l="Expedia" />
          <Legend c="bg-emerald-500" l="Diretto" />
        </div>
      </div>

      <div className="rounded-xl border border-border overflow-hidden flex-1 min-h-0 flex flex-col">
        <div className="overflow-x-auto flex-1 flex flex-col">
          <div className="min-w-[640px] md:min-w-0 flex flex-col flex-1">
            <div className="grid grid-cols-[80px_repeat(14,1fr)] md:grid-cols-[100px_repeat(14,1fr)] text-center text-[9px] md:text-[10px] bg-muted/40 border-b border-border">
              <div className="py-2 text-left pl-3 text-muted-foreground font-semibold">Unità</div>
              {days.map((d) => (
                <div key={d} className="py-2 text-muted-foreground font-semibold border-l border-border">{d}</div>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto">
              {rooms.map((room) => (
                <div key={room} className="grid grid-cols-[80px_repeat(14,1fr)] md:grid-cols-[100px_repeat(14,1fr)] border-b border-border last:border-0 items-stretch">
                  <div className="py-2 pl-3 text-muted-foreground text-[10px] font-medium flex items-center">{room}</div>
                  <RoomRow bars={bars[room] || []} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Legend({ c, l }: { c: string; l: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-muted-foreground">
      <span className={`h-2 w-2 rounded-sm ${c}`} /> {l}
    </span>
  );
}

function RoomRow({ bars }: { bars: { start: number; len: number; c: string; ch: string; guest: string }[] }) {
  const cells: React.ReactNode[] = [];
  let day = 0;
  while (day < 14) {
    const bar = bars.find((b) => b.start === day);
    if (bar) {
      cells.push(
        <div
          key={day}
          className={`${bar.c} text-white/95 m-1 rounded-md flex items-center px-1.5 text-[9px] truncate shadow-sm`}
          style={{ gridColumn: `span ${bar.len} / span ${bar.len}` }}
        >
          {bar.guest}
        </div>
      );
      day += bar.len;
    } else {
      cells.push(<div key={day} className="border-l border-border min-h-[28px]" />);
      day += 1;
    }
  }
  return <>{cells}</>;
}

export function ComplianceView() {
  const submissions = [
    { date: "09/05/2026", guest: "Marco Rossi", room: "101", country: "🇮🇹 IT", status: "ok" },
    { date: "09/05/2026", guest: "Lin Chen", room: "102", country: "🇨🇳 CN", status: "ok" },
    { date: "09/05/2026", guest: "Anna Miller", room: "103", country: "🇩🇪 DE", status: "ok" },
    { date: "09/05/2026", guest: "Sofia Dupont", room: "201", country: "🇫🇷 FR", status: "ok" },
    { date: "08/05/2026", guest: "Tomáš Novák", room: "202", country: "🇨🇿 CZ", status: "ok" },
    { date: "08/05/2026", guest: "Robert García", room: "Suite A", country: "🇪🇸 ES", status: "pending" },
  ];

  return (
    <div className="h-full flex flex-col bg-background-elevated text-foreground p-3 md:p-6 text-[10px] md:text-xs gap-3 md:gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-sm md:text-xl font-bold flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" /> <span className="truncate">Compliance · Polizia di Stato</span>
          </h3>
          <p className="text-muted-foreground mt-0.5 text-[9px] md:text-xs">Schedine · ISTAT · Tassa di soggiorno</p>
        </div>
        <button className="self-start inline-flex items-center gap-1.5 h-7 md:h-8 px-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
          <Send className="h-3 w-3" /> Invia ora
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
        {[
          { label: "Schedine inviate (mese)", value: "247", sub: "100% conforme", color: "from-emerald-500 to-emerald-400" },
          { label: "ISTAT compilato", value: "Aprile ✓", sub: "Maggio in corso", color: "from-violet-500 to-violet-400" },
          { label: "Tassa di soggiorno", value: "€ 1.842", sub: "Da versare entro 16/06", color: "from-amber-500 to-amber-400" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border overflow-hidden">
            <div className={`h-1 bg-gradient-to-r ${s.color}`} />
            <div className="p-3">
              <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</div>
              <div className="text-xl font-bold mt-1">{s.value}</div>
              <div className="text-muted-foreground text-[10px] mt-0.5">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border overflow-hidden flex-1 min-h-0 flex flex-col">
        <div className="overflow-x-auto flex-1">
          <div className="min-w-[520px] md:min-w-full h-full flex flex-col">
            <div className="grid grid-cols-[1fr_1.5fr_0.6fr_0.6fr_0.7fr] py-2 px-3 bg-muted/40 border-b border-border text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
              <span>Data check-in</span>
              <span>Ospite</span>
              <span>Camera</span>
              <span>Provenienza</span>
              <span>Stato</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {submissions.map((s, i) => (
                <div key={i} className="grid grid-cols-[1fr_1.5fr_0.6fr_0.6fr_0.7fr] py-2.5 px-3 border-b border-border last:border-0 items-center">
                  <span className="text-muted-foreground">{s.date}</span>
                  <span className="font-medium">{s.guest}</span>
                  <span>{s.room}</span>
                  <span>{s.country}</span>
                  <span>
                    {s.status === "ok" ? (
                      <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <Check className="h-2.5 w-2.5" /> Inviato
                      </span>
                    ) : (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold">In coda</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinanceView() {
  const expenses = [
    { cat: "Pulizie", room: "Camera 101", amount: 45, date: "08/05" },
    { cat: "Lavanderia", room: "Struttura", amount: 320, date: "07/05" },
    { cat: "Manutenzione", room: "Suite A", amount: 180, date: "06/05" },
    { cat: "Forniture bagno", room: "Struttura", amount: 124, date: "05/05" },
    { cat: "Pulizie", room: "Camera 202", amount: 45, date: "05/05" },
  ];
  const months = ["Gen", "Feb", "Mar", "Apr", "Mag"];
  const revenue = [12, 15, 18, 22, 25];
  const cost = [4, 5, 6, 7, 8];

  return (
    <div className="h-full flex flex-col bg-background-elevated text-foreground p-3 md:p-6 text-[10px] md:text-xs gap-3 md:gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-sm md:text-xl font-bold">Finanze</h3>
          <p className="text-muted-foreground mt-0.5 text-[9px] md:text-xs">Spese per camera · Marginalità reale</p>
        </div>
        <button className="self-start inline-flex items-center gap-1.5 h-7 md:h-8 px-3 rounded-lg bg-violet-600 text-white hover:bg-violet-700">
          <FileSpreadsheet className="h-3 w-3" /> Export CSV
        </button>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {[
          { label: "Ricavi (YTD)", value: "€ 92.430", delta: "+24%", icon: ArrowUpRight, color: "text-emerald-500" },
          { label: "Spese (YTD)", value: "€ 28.110", delta: "+8%", icon: Receipt, color: "text-amber-500" },
          { label: "Margine netto", value: "€ 64.320", delta: "69.6%", icon: Euro, color: "text-violet-500" },
        ].map((k) => (
          <div key={k.label} className="rounded-xl border border-border bg-background-elevated p-3">
            <div className="flex items-start justify-between">
              <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">{k.label}</div>
              <k.icon className={`h-3.5 w-3.5 ${k.color}`} />
            </div>
            <div className="text-xl font-bold mt-1">{k.value}</div>
            <div className={`text-[10px] font-semibold mt-0.5 ${k.color}`}>{k.delta}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-2 md:gap-3 flex-1 min-h-0">
        {/* Bar chart */}
        <div className="col-span-12 lg:col-span-7 rounded-xl border border-border p-3 md:p-4 flex flex-col min-h-[180px]">
          <div className="font-semibold mb-2">Ricavi vs Spese · 2026</div>
          <div className="flex-1 flex items-end gap-2 md:gap-4">
            {months.map((m, i) => {
              const maxR = Math.max(...revenue);
              const rH = (revenue[i] / maxR) * 100;
              const cH = (cost[i] / maxR) * 100;
              return (
                <div key={m} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div className="w-full flex gap-1 items-end" style={{ height: "85%" }}>
                    <div className="flex-1 bg-violet-500 rounded-t" style={{ height: `${rH}%` }} />
                    <div className="flex-1 bg-amber-400 rounded-t" style={{ height: `${cH}%` }} />
                  </div>
                  <span className="text-[9px] text-muted-foreground">{m}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mt-2 text-[9px]">
            <Legend c="bg-violet-500" l="Ricavi" />
            <Legend c="bg-amber-400" l="Spese" />
          </div>
        </div>

        {/* Recent expenses */}
        <div className="col-span-12 lg:col-span-5 rounded-xl border border-border p-4 flex flex-col">
          <div className="font-semibold mb-2">Spese recenti</div>
          <div className="flex-1 overflow-y-auto -mx-2">
            {expenses.map((e, i) => (
              <div key={i} className="flex items-center gap-2 py-2 px-2 hover:bg-muted/40 rounded-md">
                <div className="h-7 w-7 rounded-md bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0">
                  <Building2 className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{e.cat}</div>
                  <div className="text-[9px] text-muted-foreground">{e.room} · {e.date}</div>
                </div>
                <div className="font-bold">€{e.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
