import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/livrables")({
  head: () => ({
    meta: [
      { title: "Livrables // Cheick Bamba" },
      { name: "description", content: "User story, Kanban, rétrospective, story mapping, planning poker, KPI." },
    ],
  }),
  component: DeliverablesPage,
});

/* ---------- Widgets ---------- */
function UserStory() {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="flex items-center gap-3">
        <span className="rounded bg-primary/15 px-2 py-0.5 text-xs uppercase text-primary">US-014</span>
        <span className="text-xs text-muted-foreground">priorité: haute · estim: 5 pts</span>
      </div>
      <div className="rounded-md border border-border bg-background/60 p-5 leading-relaxed text-foreground">
        <p><span className="text-primary">En tant que</span> utilisateur connecté,</p>
        <p><span className="text-primary">je veux</span> filtrer mes commandes par statut,</p>
        <p><span className="text-primary">afin de</span> retrouver rapidement les commandes en cours.</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">// critères d'acceptation</p>
        <ul className="mt-2 space-y-1.5 text-sm">
          {["Filtres : En attente / Validée / Livrée", "Persistance après rechargement", "Compteur visible par catégorie", "Accessible au clavier"].map((c, i) => (
            <li key={c} className="flex gap-3"><span className="text-primary">✓</span> <span>{c}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Kanban() {
  const cols = [
    { name: "À faire", items: ["Maquette login", "Story map MVP", "Setup CI"], color: "text-muted-foreground" },
    { name: "En cours", items: ["API auth", "Tests unitaires"], color: "text-primary" },
    { name: "Revue", items: ["Page profil"], color: "text-accent" },
    { name: "Terminé", items: ["Setup repo", "Daily du lundi"], color: "text-foreground/60" },
  ];
  return (
    <div className="space-y-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">WIP global : <span className="text-primary">3</span> / max 4</p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {cols.map((c) => (
          <div key={c.name} className="rounded-md border border-border bg-background/40 p-3">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
              <span className={c.color}>{c.name}</span>
              <span className="text-muted-foreground">{c.items.length}</span>
            </div>
            <div className="mt-3 space-y-2">
              {c.items.map((i) => (
                <div key={i} className="rounded border border-border bg-card p-2 text-xs text-foreground hover:border-primary">{i}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Retro() {
  const cols = [
    { name: "Glad", color: "border-primary text-primary", items: ["Daily concis (8 min)", "Bonne entraide dev/test", "Démo claire"] },
    { name: "Sad", color: "border-accent text-accent", items: ["Stories trop grosses", "Revue tardive vendredi"] },
    { name: "Action", color: "border-foreground text-foreground", items: ["Stories < 1 jour", "Revue quotidienne 16h", "DoD partagée et affichée"] },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {cols.map((c) => (
        <div key={c.name} className={`rounded-md border-l-4 ${c.color} bg-background/40 p-4`}>
          <p className="font-mono text-xs uppercase tracking-wider">{c.name}</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground">
            {c.items.map((i) => <li key={i} className="flex gap-2"><span className="text-muted-foreground">→</span> {i}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function StoryMap() {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 font-mono text-[10px] uppercase">
        {["S'inscrire", "Commander", "Payer", "Suivre"].map((s) => (
          <div key={s} className="flex-1 rounded bg-primary/15 px-3 py-2 text-center text-primary">{s}</div>
        ))}
      </div>
      {[
        { tag: "MVP", row: ["Email", "Panier", "CB", "Email"] },
        { tag: "v1.1", row: ["SSO", "Favoris", "PayPal", "Push"] },
        { tag: "v1.2", row: ["Magic link", "Recommandations", "Apple Pay", "SMS"] },
      ].map((r) => (
        <div key={r.tag} className="flex items-center gap-2">
          <span className="w-12 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{r.tag}</span>
          {r.row.map((cell, i) => (
            <div key={i} className="flex-1 rounded border border-border bg-card px-3 py-2 text-center text-xs text-foreground">{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Poker() {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">// estim: « formulaire de contact »</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {["1", "2", "3", "5", "8", "13", "?"].map((v, i) => (
          <div
            key={v}
            className={`flex h-24 w-16 items-center justify-center rounded-md border font-display text-3xl transition hover:-translate-y-1 ${
              i === 3 ? "border-primary bg-primary text-primary-foreground glow-cyan" : "border-border bg-card text-foreground"
            }`}
          >
            {v}
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[10px] text-muted-foreground">médiane équipe : <span className="text-primary">5</span> · consensus après 1 reveal</p>
    </div>
  );
}

function Kpis() {
  const k = [
    { name: "Lead time moyen", value: "3.2j", trend: "-18%", good: true },
    { name: "Vélocité (sprint)", value: "24 pts", trend: "+9%", good: true },
    { name: "Throughput / sem.", value: "11", trend: "+12%", good: true },
    { name: "Stories bloquées", value: "1", trend: "-2", good: true },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-4">
      {k.map((m) => (
        <div key={m.name} className="rounded-md border border-border bg-background/40 p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.name}</p>
          <p className="mt-2 font-display text-3xl text-foreground">{m.value}</p>
          <p className={`mt-1 font-mono text-xs ${m.good ? "text-primary" : "text-destructive"}`}>{m.trend} vs sprint -1</p>
          <div className="mt-3 flex gap-1">
            {[40, 60, 50, 75, 65, 90, 80].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-primary/30" style={{ height: `${h * 0.3}px` }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const tabs = [
  { id: "story", label: "user-story.md", widget: <UserStory /> },
  { id: "kanban", label: "kanban.board", widget: <Kanban /> },
  { id: "retro", label: "retro.gsa", widget: <Retro /> },
  { id: "map", label: "story-map.json", widget: <StoryMap /> },
  { id: "poker", label: "planning-poker.cards", widget: <Poker /> },
  { id: "kpi", label: "metrics.dashboard", widget: <Kpis /> },
];

function DeliverablesPage() {
  const [active, setActive] = useState(tabs[0].id);
  const cur = tabs.find((t) => t.id === active)!;

  return (
    <>
      <PageHeader index="04" eyebrow="deliverables.fs" title="L'atelier, à ciel ouvert." description="Six artefacts illustratifs (réalistes mais fictifs) pour montrer concrètement ce que je sais produire." />

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 hidden md:inline">~/cheick/livrables</span>
            </div>
            <span>{tabs.findIndex((t) => t.id === active) + 1} / {tabs.length}</span>
          </div>
          {/* Tab bar */}
          <div className="flex flex-wrap gap-px border-b border-border bg-border">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider transition ${
                  active === t.id ? "bg-card text-primary" : "bg-secondary/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${active === t.id ? "bg-primary" : "bg-muted-foreground/40"}`} />
                {t.label}
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="p-6 md:p-10">
            {cur.widget}
          </div>
          {/* Status footer */}
          <div className="flex items-center justify-between border-t border-border bg-secondary/30 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span>artefact: {cur.label}</span>
            <span>encoding: utf-8 · ln 1, col 1</span>
          </div>
        </div>
      </section>
    </>
  );
}
