import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets agiles — Cheick Bamba" },
      { name: "description", content: "Trois fiches projets illustrant ma pratique de l'agilité." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    tag: "Projet académique",
    title: "Projet Agile étudiant",
    summary: "Application web développée en équipe avec un cadre Scrum simplifié sur 5 sprints.",
    points: ["Participation aux rituels : daily, revue, rétrospective", "Utilisation de Jira pour le suivi des tickets", "Mise en place d'un tableau Kanban d'équipe", "Rédaction de user stories simples avec critères d'acceptation"],
    learn: "Transparence, communication, gestion du flux et du WIP.",
  },
  {
    tag: "Atelier",
    title: "Atelier de facilitation",
    summary: "Animation d'un brainstorming pour cadrer le besoin d'un nouveau projet d'équipe.",
    points: ["Animation d'un brainstorming structuré", "Synthèse collaborative sur Miro", "Gestion du temps et de la parole", "Restitution claire des décisions"],
    learn: "Une meilleure compréhension partagée du besoin et de la valeur.",
  },
  {
    tag: "Personnel",
    title: "Mini-projet personnel",
    summary: "Organisation de mes projets perso avec un tableau Kanban et des règles de WIP claires.",
    points: ["Tableau Kanban : Backlog · En cours · Revue · Terminé", "Mise en place de règles WIP (max 3 en cours)", "Suivi régulier des tâches et revue hebdo"],
    learn: "Démonstration concrète de la compréhension du flux agile.",
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Réalisations" title="Projets agiles" description="Trois expériences académiques et personnelles qui illustrent ma pratique." />
      <section className="mx-auto max-w-6xl space-y-8 px-6 py-16">
        {projects.map((p, i) => (
          <article key={p.title} className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-card md:grid-cols-[180px_1fr] md:p-10">
            <div>
              <div className="text-6xl font-bold text-primary/20">0{i + 1}</div>
              <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{p.tag}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{p.title}</h2>
              <p className="mt-2 text-muted-foreground">{p.summary}</p>
              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-secondary/60 p-4 text-sm">
                <span className="font-semibold text-foreground">Ce que j'ai appris : </span>
                <span className="text-muted-foreground">{p.learn}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}