import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Skills // Cheick Bamba" },
      { name: "description", content: "Compétences agiles : Scrum, Kanban, facilitation, animation, KPI." },
    ],
  }),
  component: SkillsPage,
});

const groups = {
  "frameworks": [
    { name: "Scrum (cadre, rôles, événements)", level: "Opérationnel" },
    { name: "Kanban (flux, WIP, board)", level: "À l'aise" },
    { name: "User stories & critères d'acceptation", level: "Opérationnel" },
    { name: "Story mapping", level: "Notions" },
  ],
  "facilitation": [
    { name: "Animer un daily concis", level: "À l'aise" },
    { name: "Préparer & animer une rétrospective", level: "Opérationnel" },
    { name: "Brainstorming structuré", level: "À l'aise" },
    { name: "Cadrer le temps et l'énergie", level: "Opérationnel" },
  ],
  "mesure & flux": [
    { name: "Lecture lead time / cycle time", level: "Notions" },
    { name: "Vélocité & throughput", level: "Notions" },
    { name: "Identifier un goulot", level: "Notions" },
    { name: "Boucles de feedback courtes", level: "À l'aise" },
  ],
  "posture": [
    { name: "Écoute active", level: "À l'aise" },
    { name: "Communication claire", level: "À l'aise" },
    { name: "Pédagogie", level: "À l'aise" },
    { name: "Travail transversal dev/test/PO", level: "Opérationnel" },
  ],
} as const;

type GroupKey = keyof typeof groups;

const levelStyle: Record<string, string> = {
  "Notions": "border-border bg-secondary text-muted-foreground",
  "Opérationnel": "border-primary/30 bg-primary/10 text-primary",
  "À l'aise": "border-accent/40 bg-accent/15 text-accent-foreground",
};

function SkillsPage() {
  const keys = Object.keys(groups) as GroupKey[];
  const [active, setActive] = useState<GroupKey>(keys[0]);

  return (
    <>
      <PageHeader index="02" eyebrow="skills.matrix" title="Le matériel embarqué." description="Pas de superlatif. Une lecture honnête de ce que je sais faire et de ce que je continue d'apprendre." />

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        {/* tabs */}
        <div className="flex flex-wrap gap-2">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                active === k ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        {/* matrix */}
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5 rounded-lg border border-border bg-card p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// {active}</p>
            <ul className="divide-y divide-border">
              {groups[active].map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="text-foreground">{s.name}</span>
                  <span className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${levelStyle[s.level] ?? ""}`}>
                    {s.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// niveau global</p>
              <p className="mt-3 font-display text-5xl text-foreground">Junior <span className="text-muted-foreground">/ apprentissage actif</span></p>
              <p className="mt-3 text-sm text-muted-foreground">
                Les bases sont là. L'alternance, c'est le contexte qui les transforme en savoir-faire incarné.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px rounded-lg border border-border bg-border overflow-hidden">
              {[
                { k: "rituels animés", v: "5+" },
                { k: "ateliers facilités", v: "3" },
                { k: "stories rédigées", v: "30+" },
                { k: "rétros pilotées", v: "2" },
              ].map((s) => (
                <div key={s.k} className="bg-card p-5">
                  <p className="font-display text-3xl text-primary">{s.v}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* legend */}
        <div className="mt-12 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="rounded-full border border-border bg-secondary px-3 py-1 text-muted-foreground">Notions</span>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">Opérationnel</span>
          <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1">À l'aise</span>
        </div>
      </section>
    </>
  );
}
