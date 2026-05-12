import { Link, useRouterState } from "@tanstack/react-router";
import { Home, User, Sparkles, Layers, FileCheck2, Wrench, Send } from "lucide-react";

const links = [
  { to: "/", label: "Index", num: "00", icon: Home },
  { to: "/presentation", label: "À propos", num: "01", icon: User },
  { to: "/competences", label: "Skills", num: "02", icon: Sparkles },
  { to: "/projets", label: "Projets", num: "03", icon: Layers },
  { to: "/livrables", label: "Livrables", num: "04", icon: FileCheck2 },
  { to: "/outils", label: "Stack", num: "05", icon: Wrench },
  { to: "/contact", label: "Contact", num: "06", icon: Send },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const current = links.find((l) => l.to === path) ?? links[0];

  return (
    <>
      {/* Status bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:px-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-pulse-dot" />
            </span>
            <span className="text-foreground">CB.OS</span>
            <span className="hidden md:inline">v.2026.1</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">user: cheick.bamba</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">{current.num}/{links.length - 1} {current.label}</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">status: <span className="text-primary">disponible</span></span>
            <span className="md:hidden text-primary">● live</span>
          </div>
        </div>
      </header>

      {/* Floating dock */}
      <nav className="pointer-events-none fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-2xl -translate-x-1/2">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-card/80 p-1.5 shadow-elegant backdrop-blur-2xl">
          {links.map((l) => {
            const Icon = l.icon;
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`group relative flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-2 text-xs transition ${
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
                title={l.label}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden md:inline font-mono text-[10px] uppercase tracking-wider">{l.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-card/30">
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">// signal</p>
            <p className="mt-3 font-display text-4xl text-foreground md:text-5xl">
              On lance le <span className="text-gradient">sprint zéro</span> ensemble ?
            </p>
          </div>
          <div className="md:col-span-4 font-mono text-xs text-muted-foreground">
            <p className="uppercase tracking-[0.2em] text-foreground/60">// canal</p>
            <p className="mt-3 text-foreground">bamba15cheick@gmail.com</p>
            <p className="text-foreground">+33 7 64 46 86 29</p>
          </div>
          <div className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:text-right">
            <p>© {new Date().getFullYear()} · CB.OS</p>
            <p className="mt-2 text-foreground/70">Built with intent.</p>
            <p className="text-foreground/40">No cloud · local first</p>
          </div>
        </div>
      </div>
      <div className="h-20" /> {/* spacing for floating dock */}
    </footer>
  );
}
