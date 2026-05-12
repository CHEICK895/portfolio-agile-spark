import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/livrables")({
  head: () => ({
    meta: [
      { title: "Livrables agiles | Cheick Bamba" },
      { name: "description", content: "Exemples concrets : user story, board Kanban, rétrospective, story mapping, KPI." },
    ],
  }),
  component: DeliverablesPage,
});

function UserStoryCard() {
  return (
    <div className="rounded-xl border border-border bg-background p-5 font-mono text-sm">
      <p className="text-xs uppercase tracking-wider text-primary">US-014</p>
      <p className="mt-2 text-foreground"><b>En tant que</b> utilisateur connecté,</p>
      <p className="text-foreground"><b>je veux</b> filtrer mes commandes par statut,</p>
      <p className="text-foreground"><b>afin de</b> retrouver rapidement les commandes en cours.</p>
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-xs font-semibold text-muted-foreground">CRITÈRES D'ACCEPTATION</p>
        <ul className="mt-1 list-inside list-disc text-xs text-muted-foreground">
          <li>Filtre par statut : En attente / Validée / Livrée</li>
          <li>Persistance du filtre après rechargement</li>
          <li>Compteur visible par catégorie</li>
        </ul>
      </div>
    </div>
  );
}

function KanbanBoard() {
  const cols = [
    { name: "À faire", items: ["Maquette login", "Story map MVP", "Setup CI"] },
    { name: "En cours", items: ["API auth", "Tests unitaires"] },
    { name: "Revue", items: ["Page profil"] },
    { name: "Terminé", items: ["Setup repo", "Daily du lundi"] },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {cols.map((c) => (
        <div key={c.name} className="rounded-lg bg-secondary/60 p-3">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">{c.name} <span className="text-muted-foreground">({c.items.length})</span></p>
          <div className="space-y-2">
            {c.items.map((i) => (
              <div key={i} className="rounded-md bg-card p-2 text-xs shadow-card">{i}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Retro() {
  const cols = [
    { name: "Ce qui a marché", color: "bg-emerald-50 text-emerald-900", items: ["Daily concis", "Bonne entraide dev/test"] },
    { name: "À améliorer", color: "bg-amber-50 text-amber-900", items: ["Stories trop grosses", "Revue tardive"] },
    { name: "Actions", color: "bg-sky-50 text-sky-900", items: ["Découper en < 1 jour", "Revue quotidienne 16h"] },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {cols.map((c) => (
        <div key={c.name} className={`rounded-lg p-4 ${c.color}`}>
          <p className="text-sm font-semibold">{c.name}</p>
          <ul className="mt-2 list-inside list-disc text-sm">
            {c.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function StoryMap() {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 text-xs font-semibold">
        {["S'inscrire", "Commander", "Payer", "Suivre"].map((s) => (
          <div key={s} className="flex-1 rounded-md bg-primary/10 px-3 py-2 text-center text-primary">{s}</div>
        ))}
      </div>
      {[["Email", "Panier", "CB", "Email"], ["SSO", "Favoris", "PayPal", "Notif push"]].map((row, ri) => (
        <div key={ri} className="flex gap-2 text-xs">
          {row.map((cell, i) => (
            <div key={i} className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-center text-foreground">{cell}</div>
          ))}
        </div>
      ))}
      <p className="text-xs text-muted-foreground">Ligne 1 : MVP · Ligne 2 : itérations suivantes</p>
    </div>
  );
}

function PlanningPoker() {
  return (
    <div className="flex flex-wrap gap-3">
      {["1", "2", "3", "5", "8", "13", "?"].map((v, i) => (
        <div key={v} className={`flex h-24 w-16 items-center justify-center rounded-xl border-2 text-2xl font-bold shadow-card ${i === 3 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}>
          {v}
        </div>
      ))}
    </div>
  );
}

function Kpis() {
  const k = [
    { name: "Lead time moyen", value: "3,2 j", trend: "-18%" },
    { name: "Vélocité (sprint)", value: "24 pts", trend: "+9%" },
    { name: "Throughput / sem.", value: "11 tickets", trend: "+12%" },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {k.map((m) => (
        <div key={m.name} className="rounded-xl border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.name}</p>
          <p className="mt-2 text-3xl font-bold text-foreground">{m.value}</p>
          <p className="mt-1 text-sm font-semibold text-primary">{m.trend} vs sprint précédent</p>
        </div>
      ))}
    </div>
  );
}

const items = [
  { title: "Exemple de user story", desc: "Format standard avec critères d'acceptation.", node: <UserStoryCard /> },
  { title: "Exemple de board Kanban", desc: "Visualiser le flux et limiter le WIP.", node: <KanbanBoard /> },
  { title: "Exemple de rétrospective", desc: "Format Glad / Sad / Action et enseignements.", node: <Retro /> },
  { title: "Exemple de story mapping", desc: "Du parcours utilisateur au découpage MVP.", node: <StoryMap /> },
  { title: "Exemple de planning poker", desc: "Estimer collectivement la complexité.", node: <PlanningPoker /> },
  { title: "Exemple de KPI simples", desc: "Lead time, vélocité, throughput.", node: <Kpis /> },
];

function DeliverablesPage() {
  return (
    <>
      <PageHeader eyebrow="Exemples" title="Livrables agiles" description="Des exemples illustratifs (réalistes mais fictifs) pour montrer ce que je sais produire." />
      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        {items.map((it) => (
          <div key={it.title} className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-xl font-bold text-foreground">{it.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            <div className="mt-6">{it.node}</div>
          </div>
        ))}
      </section>
    </>
  );
}