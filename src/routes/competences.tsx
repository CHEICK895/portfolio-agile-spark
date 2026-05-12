import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Layers, Trello, Users, Lightbulb, ListChecks, TrendingUp, BarChart3, Workflow } from "lucide-react";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Compétences agiles | Cheick Bamba" },
      { name: "description", content: "Scrum, Kanban, facilitation, animation d'ateliers, backlog et amélioration continue." },
    ],
  }),
  component: SkillsPage,
});

const skills = [
  { icon: Layers, title: "Scrum (bases)", text: "Rôles, événements, artefacts. Compréhension du cadre et des valeurs." },
  { icon: Trello, title: "Kanban", text: "Visualisation du flux, limite du WIP, gestion du board." },
  { icon: Users, title: "Facilitation de rituels", text: "Daily, rétrospective, planning : cadrer le temps et l'énergie." },
  { icon: Lightbulb, title: "Animation d'ateliers", text: "Story mapping, 3 amigos, brainstorming structuré." },
  { icon: ListChecks, title: "Backlog & user stories", text: "Rédaction claire, critères d'acceptation, priorisation." },
  { icon: TrendingUp, title: "Amélioration continue", text: "Boucles de feedback courtes, expérimentation, mesures simples." },
  { icon: BarChart3, title: "Suivi de performance", text: "KPI simples : lead time, vélocité, throughput." },
  { icon: Workflow, title: "Travail transversal", text: "Collaboration fluide entre dev, test et Product Owner." },
];

function SkillsPage() {
  return (
    <>
      <PageHeader index="02" eyebrow="Savoir-faire" title="Compétences." description="Les fondamentaux que je maîtrise et que je continue à approfondir au quotidien." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}