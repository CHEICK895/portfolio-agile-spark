import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/presentation", label: "Présentation" },
  { to: "/competences", label: "Compétences" },
  { to: "/projets", label: "Projets" },
  { to: "/livrables", label: "Livrables" },
  { to: "/outils", label: "Outils" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-elegant">CB</span>
          Cheick Bamba
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold bg-secondary text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90 md:inline-flex"
        >
          Me contacter
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground" activeProps={{ className: "whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold bg-secondary text-foreground" }}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Cheick Bamba · Portfolio Assistant Agile Master</p>
        <p className="font-medium text-foreground">Disponible pour une alternance</p>
      </div>
    </footer>
  );
}