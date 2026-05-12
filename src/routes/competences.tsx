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
    { name: "Scrum (cadre, rôles, événements)", level: 70 },
    { name: "Kanban (flux, WIP, board)", level: 75 },
    { name: "User stories & critères d'acceptation", level: 70 },
    { name: "Story mapping", level: 60 },
  ],
  "facilitation": [
    { name: "Animer un daily concis", level: 80 },
    { name: "Préparer & animer une rétrospective", level: 70 },
    { name: "Brainstorming structuré", level: 75 },
    { name: "Cadrer le temps et l'énergie", level: 70 },
  ],
  "mesure & flux": [
    { name: "Lecture lead time / cycle time", level: 65 },
    { name: "Vélocité & throughput", level: 65 },
    { name: "Identifier un goulot", level: 60 },
    { name: "Boucles de feedback courtes", level: 75 },
  ],
  "posture": [
    { name: "Écoute active", level: 85 },
    { name: "Communication claire", level: 80 },
    { name: "Pédagogie", level: 80 },
    { name: "Travail transversal dev/test/PO", level: 75 },
  ],
} as const;

type GroupKey = keyof typeof groups;

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
            <div className="space-y-5">
              {groups[active].map((s) => (
                <div key={s.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-foreground">{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
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
        <div className="mt-12 flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2"><span className="h-2 w-6 rounded-full bg-gradient-to-r from-primary to-accent" /> niveau actuel</span>
          <span>· lecture sur 100 — 100 = autonomie pleine</span>
        </div>
      </section>
    </>
  );
}
