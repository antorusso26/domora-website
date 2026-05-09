"use client";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#funzionalita", label: "Funzionalità" },
  { href: "#ai", label: "AI Receptionist" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-mark.png" alt="DOMORA" width={36} height={36} style={{ height: "auto" }} />
          <span className="font-bold tracking-tight text-lg">DOMORA</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#prezzi"
            className="hidden sm:inline-flex items-center h-9 px-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            Prova gratis
          </a>
        </div>
      </div>
    </header>
  );
}
