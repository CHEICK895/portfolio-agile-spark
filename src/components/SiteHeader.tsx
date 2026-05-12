import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index", num: "00" },
  { to: "/presentation", label: "Présentation", num: "01" },
  { to: "/competences", label: "Compétences", num: "02" },
  { to: "/projets", label: "Projets", num: "03" },
  { to: "/livrables", label: "Livrables", num: "04" },
  { to: "/outils", label: "Outils", num: "05" },
  { to: "/contact", label: "Contact", num: "06" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2 text-foreground">
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">CB·26</span>
          <span className="italic-display text-2xl leading-none">Cheick Bamba</span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-baseline gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "flex items-baseline gap-1.5 text-sm text-foreground" }}
              activeOptions={{ exact: true }}
            >
              <span className="font-mono text-[10px] text-muted-foreground/70 group-hover:text-accent">{l.num}</span>
              <span className="border-b border-transparent group-hover:border-accent">{l.label}</span>
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 border border-foreground bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-background transition hover:bg-accent hover:text-foreground hover:border-accent md:inline-flex"
        >
          → Échanger
        </Link>
      </div>
      <nav className="flex gap-3 overflow-x-auto border-t border-foreground/10 px-4 py-2 md:hidden">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="flex shrink-0 items-baseline gap-1 whitespace-nowrap text-xs text-muted-foreground" activeProps={{ className: "flex shrink-0 items-baseline gap-1 whitespace-nowrap text-xs text-foreground" }}>
            <span className="font-mono text-[9px] opacity-60">{l.num}</span>{l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/10 bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/50">Index · Colophon</p>
          <p className="italic-display mt-3 text-4xl">Faisons équipe.</p>
        </div>
        <div className="font-mono text-xs uppercase tracking-wider text-background/70">
          <p>bamba15cheick@gmail.com</p>
          <p className="mt-1">07 64 46 86 29</p>
        </div>
        <div className="md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/50">© {new Date().getFullYear()}</p>
          <p className="mt-2 text-sm text-background/80">Cheick Bamba · Portfolio Assistant Agile Master · Rentrée 2026</p>
        </div>
      </div>
    </footer>
  );
}