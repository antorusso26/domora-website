"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Smartphone,
  KeyRound,
  Bell,
  CheckCircle2,
  MapPin,
  QrCode,
  Sparkles,
  Camera,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

export function MobileSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/15 via-violet-500/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: copy */}
          <div className="lg:order-1 order-2">
            <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <Smartphone className="h-4 w-4" /> Mobile App · iOS &amp; Android
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 leading-tight">
              Anche in tasca. <br className="hidden sm:block" />
              <span className="text-gradient-primary">Tutto sotto controllo, ovunque.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl">
              Gestisci check-in, pulizie e arrivi dal tuo telefono. I tuoi ospiti aprono la porta
              con un tap. Tu ricevi notifiche in tempo reale, anche quando sei fuori sede.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                { icon: KeyRound, t: "Check-in con QR code", d: "L'ospite scansiona, entra in autonomia. Niente attese." },
                { icon: Bell, t: "Notifiche live", d: "Arrivi, partenze e richieste in tempo reale." },
                { icon: Camera, t: "Documenti via foto", d: "L'ospite carica il documento, l'AI compila la schedina." },
                { icon: MapPin, t: "Pagina ospite mobile", d: "Mappa, contatti, regole casa, codici Wi-Fi." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{f.t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-10">
              <a className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition cursor-pointer">
                <AppleLogo /> App Store
              </a>
              <a className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition cursor-pointer">
                <PlayLogo /> Google Play
              </a>
            </div>
          </div>

          {/* Right: tilting iPhone */}
          <div className="lg:order-2 order-1 flex justify-center">
            <TiltingPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

function TiltingPhone() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 25 });
  const sy = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateY = useTransform(sx, [-1, 1], [-15, 15]);
  const rotateX = useTransform(sy, [-1, 1], [10, -10]);

  function onMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 2 - 1;
    const py = ((e.clientY - r.top) / r.height) * 2 - 1;
    x.set(px);
    y.set(py);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        x.set(0);
        y.set(0);
      }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      {/* Floating glass badges */}
      <FloatingBadge
        icon={CheckCircle2}
        label="Check-in completato"
        sub="Marco · Camera 101"
        color="emerald"
        position="left-[-90px] top-[60px]"
        delay={0}
      />
      <FloatingBadge
        icon={QrCode}
        label="QR digitale"
        sub="Inviato via email"
        color="violet"
        position="right-[-100px] top-[150px]"
        delay={0.3}
      />
      <FloatingBadge
        icon={Sparkles}
        label="AI · 4 messaggi"
        sub="risposti in 30s"
        color="primary"
        position="left-[-80px] bottom-[120px]"
        delay={0.6}
      />

      {/* Phone */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[3rem] bg-gradient-to-b from-zinc-900 to-zinc-800 dark:from-zinc-900 dark:to-zinc-950 p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
          {/* Screen */}
          <div className="relative h-full w-full rounded-[2.4rem] overflow-hidden bg-background">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-6 w-28 rounded-full bg-black" />
            <PhoneUI />
          </div>
          {/* Reflection */}
          <motion.div
            animate={{ opacity: hovered ? 0.3 : 0.15 }}
            className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/30 to-transparent"
            style={{ mixBlendMode: "overlay" }}
          />
        </div>
        {/* Side button */}
        <div className="absolute left-[-3px] top-32 h-16 w-1 rounded-l bg-zinc-700" />
        <div className="absolute right-[-3px] top-28 h-10 w-1 rounded-r bg-zinc-700" />
      </motion.div>
    </div>
  );
}

function FloatingBadge({
  icon: Icon,
  label,
  sub,
  color,
  position,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  color: "emerald" | "violet" | "primary";
  position: string;
  delay: number;
}) {
  const colorMap = {
    emerald: "bg-emerald-500/15 text-emerald-500",
    violet: "bg-violet-500/15 text-violet-500",
    primary: "bg-primary/15 text-primary",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.3, duration: 0.6 }}
      className={`hidden lg:flex absolute z-10 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-border/60 bg-background-elevated/80 backdrop-blur-xl shadow-2xl animate-float ${position}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${colorMap[color]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="leading-tight">
        <div className="text-xs font-semibold whitespace-nowrap">{label}</div>
        <div className="text-[10px] text-muted-foreground whitespace-nowrap">{sub}</div>
      </div>
    </motion.div>
  );
}

function PhoneUI() {
  return (
    <div className="h-full w-full flex flex-col text-[10px] bg-gradient-to-b from-background-elevated to-background">
      {/* Status bar */}
      <div className="flex items-center justify-between px-7 pt-4 pb-1 text-[9px] font-semibold">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="h-2.5 w-2.5" />
          <Wifi className="h-2.5 w-2.5" />
          <Battery className="h-3 w-3" />
        </div>
      </div>

      {/* Header */}
      <div className="px-5 pt-4">
        <div className="text-muted-foreground text-[10px]">Buongiorno</div>
        <div className="text-lg font-bold">Villa Aurora</div>
      </div>

      {/* Today card */}
      <div className="mx-4 mt-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4 text-white shadow-lg">
        <div className="text-[9px] uppercase tracking-wider opacity-80 font-semibold">Oggi</div>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-3xl font-bold">3</span>
          <span className="text-xs opacity-90">arrivi in attesa</span>
        </div>
        <button className="mt-3 inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/25 backdrop-blur text-[10px] font-semibold">
          <KeyRound className="h-3 w-3" /> Apri check-in
        </button>
      </div>

      {/* List */}
      <div className="flex-1 px-4 mt-4 space-y-2 overflow-hidden">
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Prossimi arrivi</div>

        {[
          { name: "Marco Rossi", room: "101", time: "15:30", status: "ok", flag: "🇮🇹" },
          { name: "Lin Chen", room: "102", time: "16:00", status: "wait", flag: "🇨🇳" },
          { name: "Anna Miller", room: "103", time: "18:15", status: "wait", flag: "🇩🇪" },
        ].map((g) => (
          <div
            key={g.name}
            className="flex items-center gap-2.5 p-2.5 rounded-xl border border-border bg-background-elevated"
          >
            <div className="h-8 w-8 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">
              {g.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold truncate">
                {g.flag} {g.name}
              </div>
              <div className="text-[9px] text-muted-foreground">
                Camera {g.room} · {g.time}
              </div>
            </div>
            {g.status === "ok" ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            ) : (
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="mx-3 mb-3 mt-3 rounded-2xl border border-border bg-background-elevated/90 backdrop-blur p-1.5 flex justify-around">
        {[
          { icon: KeyRound, active: true, label: "Check-in" },
          { icon: Bell, label: "Notifiche" },
          { icon: Sparkles, label: "AI" },
          { icon: Smartphone, label: "Profilo" },
        ].map((i) => (
          <div
            key={i.label}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg ${
              i.active ? "bg-primary/15 text-primary" : "text-muted-foreground"
            }`}
          >
            <i.icon className="h-3.5 w-3.5" />
            <span className="text-[8px]">{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.05 20.28c-.98.95-2.05.86-3.08.43-1.09-.45-2.09-.46-3.24 0-1.44.61-2.2.43-3.06-.43C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zM16.81 15.12 6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.92-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
    </svg>
  );
}
