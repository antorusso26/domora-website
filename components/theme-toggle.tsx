"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";
  return (
    <button
      aria-label="Cambia tema"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-background-elevated/60 backdrop-blur transition-colors hover:bg-muted"
    >
      {mounted && (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
    </button>
  );
}
