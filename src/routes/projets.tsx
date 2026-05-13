import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets // Cheick Bamba" },
      { name: "description", content: "Trois fiches projets illustrant ma pratique de l'agilité." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    code: "PRJ-01",
    tag: "Académique · 5 sprints",
    title: "Application web en équipe Scrum",
    summary: "Construction d'une app collaborative en équipe de 4 sur un cadre Scrum simplifié, du backlog initial à la démo finale.",
    role: "Membre actif des rituels, support à la facilitation",
    stack: ["Jira", "GitLab", "Scrum"],
    points: [
      "Participation aux rituels : daily, planning, revue, rétrospective",
      "Suivi des tickets dans Jira et nettoyage régulier du board",
      "Rédaction de user stories simples avec critères d'acceptation",
      "Co-animation de deux rétrospectives Glad/Sad/Action",
    ],
    learn: "Transparence, communication, et la valeur d'un board toujours à jour.",
  },
  {
    code: "PRJ-02",
    tag: "Atelier · 1 séance",
    title: "Atelier de facilitation Miro",
    summary: "Animation d'un brainstorming structuré pour cadrer le besoin d'un nouveau projet d'équipe en moins de 90 minutes.",
    role: "Facilitateur",
    stack: ["Miro", "Brainstorming", "Synthèse"],
    points: [
      "Cadrage de l'objectif et des règles du jeu",
      "Divergence puis convergence en sous-groupes",
      "Synthèse collaborative en direct sur Miro",
      "Restitution claire des décisions et des prochaines étapes",
    ],
    learn: "Une compréhension partagée vaut dix slides solo.",
  },
  {
    code: "PRJ-03",
    tag: "Personnel · ongoing",
    title: "Kanban personnel & WIP discipliné",
    summary: "Organisation de mes projets perso sur un tableau Kanban avec règle stricte de 3 tâches en cours maximum et revue hebdo.",
    role: "Owner",
    stack: ["Notion", "Kanban", "WIP"],
    points: [
      "4 colonnes : Backlog · En cours · Revue · Terminé",
      "Limite WIP = 3 (jamais plus, sinon on bloque)",
      "Revue hebdomadaire et nettoyage du backlog",
      "Indicateur simple : tâches livrées / semaine",
    ],
    learn: "La contrainte du WIP est un cadeau, pas une punition.",
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHeader index="03" eyebrow="projects.list" title="Trois fiches, trois contextes." description="Académique, ateliers, personnel : chacun a appris quelque chose à mon rapport au flux." />

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 space-y-24">
        {projects.map((p, i) => (
          <article key={p.code} className="grid gap-8 md:grid-cols-12">
            {/* left rail */}
            <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{p.code}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h2 className="font-display text-4xl text-foreground md:text-5xl text-balance">{p.title}</h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* right content */}
            <div className={`md:col-span-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>0{i + 1}/{projects.length} · {p.code.toLowerCase()}.md</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-display text-xl text-foreground md:text-2xl">{p.summary}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    rôle : <span className="text-primary">{p.role}</span>
                  </p>
                  <ul className="mt-6 grid gap-2 md:grid-cols-2">
                    {p.points.map((pt, j) => (
                      <li key={pt} className="flex gap-3 rounded-md border border-border bg-background/40 p-3 text-sm text-foreground/90">
                        <span className="font-mono text-[10px] text-primary">{String(j + 1).padStart(2, "0")}</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-l-2 border-primary bg-primary/5 px-5 py-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// learn</p>
                    <p className="mt-1 font-display text-lg text-foreground md:text-xl">{p.learn}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
