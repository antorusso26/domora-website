"use client";
import { Sparkles, Bot, MessageSquare, Languages } from "lucide-react";

export function AiSection() {
  return (
    <section id="ai" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <Sparkles className="h-4 w-4" /> AI Receptionist
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">
              Una receptionist AI che <span className="text-gradient-primary">non dorme mai.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Risponde agli ospiti su WhatsApp, email e chat 24/7. In 30+ lingue. Conosce la tua struttura,
              propone upsell, gestisce richieste di check-in tardivo, raccomanda ristoranti.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: MessageSquare, t: "Risposte istantanee H24", d: "WhatsApp, email, chat sito — automatiche e personalizzate." },
                { icon: Languages, t: "30+ lingue", d: "Ogni ospite riceve risposta nella propria lingua, in tono brand." },
                { icon: Bot, t: "Escalation intelligente", d: "Sa quando passare la conversazione a te. Mai conversazioni perse." },
              ].map((i) => (
                <li key={i.t} className="flex gap-4">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <i.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{i.t}</div>
                    <div className="text-sm text-muted-foreground">{i.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat mockup */}
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-3xl -z-10" />
            <div className="rounded-2xl border border-border bg-background-elevated shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <div className="h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Aurora · AI di DOMORA</div>
                  <div className="text-xs text-emerald-500 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <Bubble side="left">
                  Hi! Is it possible to check in at 23:00? My flight lands at 21:30. 🙏
                </Bubble>
                <Bubble side="right">
                  Of course, Mark! I&apos;ve enabled self check-in for you. You&apos;ll receive a digital key 1 hour before arrival.
                  The address is Via Roma 12 — here&apos;s a Google Maps link 📍
                </Bubble>
                <Bubble side="left">Perfect. Any restaurant nearby still open at midnight?</Bubble>
                <Bubble side="right">
                  Yes — &quot;Trattoria del Porto&quot; is 4 min walk and open until 1am. Want me to book a table for 2?
                </Bubble>
                <div className="text-[10px] text-muted-foreground pl-2">Aurora sta scrivendo…</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-3.5 py-2 rounded-2xl ${
          side === "right"
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-muted text-foreground rounded-bl-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
