import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, GitBranch, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheick Bamba — Assistant Agile Master en alternance" },
      { name: "description", content: "Portfolio de Cheick Bamba, étudiant en informatique candidat à une alternance d'Assistant Agile Master." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <div className="absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-card">
            <Sparkles className="h-3.5 w-3.5" /> Alternance · Bac+3 · Rentrée 2026
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-foreground md:text-7xl">
            Cheick <span className="bg-gradient-hero bg-clip-text text-transparent">Bamba</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground/80 md:text-2xl">
            Assistant Agile Master — Alternance
          </p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            « J'aide les équipes à mieux collaborer, à fluidifier leur delivery et à progresser grâce à l'agilité. »
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projets" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90">
              Voir mes projets <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "Facilitation", text: "Animer les rituels Scrum et fluidifier la communication d'équipe." },
            { icon: GitBranch, title: "Flux & Kanban", text: "Visualiser le travail, limiter le WIP, accélérer la livraison." },
            { icon: Sparkles, title: "Amélioration continue", text: "Cultiver une culture d'apprentissage par les rétrospectives." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}