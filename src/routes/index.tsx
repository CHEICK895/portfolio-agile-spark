import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Zap, Users, GitBranch, Terminal } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheick Bamba // Assistant Agile Master" },
      { name: "description", content: "Portfolio de Cheick Bamba, étudiant en informatique, candidat à une alternance d'Assistant Agile Master." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-scanlines opacity-50" />

        <div className="relative mx-auto max-w-[1400px] px-4 pt-16 pb-24 md:px-8 md:pt-28 md:pb-40">
          {/* breadcrumb */}
          <div className="mb-12 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary">● disponible</span>
            <span>alternance · 2026 · 12 mois</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">bac+2 → bac+3</span>
          </div>

          {/* huge type */}
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h1 className="font-display text-foreground text-balance">
                <span className="block text-[clamp(3rem,12vw,11rem)] leading-[0.85] tracking-tighter">
                  Assistant
                </span>
                <span className="block text-[clamp(3rem,12vw,11rem)] leading-[0.85] tracking-tighter">
                  <span className="text-gradient">Agile</span> Master<span className="text-primary">.</span>
                </span>
              </h1>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end">
              <div className="border-l-4 border-primary pl-6 font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <p className="text-sm text-primary md:text-base">// candidat</p>
                <p className="mt-4 font-display text-3xl text-foreground md:text-4xl normal-case tracking-normal">Cheick Bamba</p>
                <p className="mt-2 text-xs md:text-sm">Étudiant informatique</p>
                <p className="text-xs md:text-sm">Bac+2 → Bac+3</p>
              </div>
            </div>
          </div>

          {/* mission row */}
          <div className="mt-16 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// mission</p>
              <p className="mt-3 font-display text-2xl leading-tight text-foreground md:text-4xl text-balance">
                J'aide les équipes à mieux collaborer, à fluidifier leur delivery et à progresser grâce à l'agilité.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projets" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition hover:gap-4 hover:bg-accent">
                  Explorer les projets
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-border bg-card/50 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:border-primary hover:text-primary">
                  Lancer un échange
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ticker */}
        <div className="relative border-t border-border bg-card/40 py-3 backdrop-blur-xl">
          <div className="flex animate-ticker gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0 gap-12">
                {["scrum", "kanban", "facilitation", "story mapping", "rétrospective", "user story", "WIP limit", "lead time", "vélocité", "amélioration continue"].map((t) => (
                  <span key={t} className="flex items-center gap-3">
                    <span className="text-primary">◆</span> {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="mx-auto max-w-[1400px] px-4 py-24 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// modules.exe</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl text-balance">
              Trois leviers pour des équipes qui respirent.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pas de jargon. Du flux, des rituels qui servent vraiment, des feedbacks courts.
            </p>
          </div>
          <div className="md:col-span-8 grid gap-4 md:grid-cols-3">
            {[
              { n: "01", icon: Users, title: "Facilitation", text: "Animer daily, revue et rétro pour que chacun trouve sa place et son énergie." },
              { n: "02", icon: GitBranch, title: "Flux", text: "Visualiser, limiter le WIP, décongestionner. Le travail circule, l'équipe respire." },
              { n: "03", icon: Activity, title: "Amélioration", text: "Petits cycles, mesures simples, expérimentations. Apprendre est un livrable." },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.n} className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-elegant">
                  <div className="absolute right-3 top-3 font-mono text-[10px] text-muted-foreground">{c.n}</div>
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-8 font-display text-2xl text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                  <div className="mt-6 h-px w-full bg-border transition group-hover:bg-primary" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK STATS / CTA */}
      <section className="mx-auto max-w-[1400px] px-4 pb-32 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 md:p-14">
          <div className="absolute inset-0 bg-dot opacity-50" />
          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// statut</p>
              <h3 className="mt-3 font-display text-3xl text-foreground md:text-5xl text-balance">
                Une posture humble. Une exigence haute. Un terrain prêt à apprendre.
              </h3>
            </div>
            <div className="md:col-span-5 grid grid-cols-3 gap-px border border-border bg-border">
              {[
                { v: "Bac+3", l: "rentrée 2026" },
                { v: "12", l: "mois alternance" },
                { v: "100%", l: "engagement" },
              ].map((s) => (
                <div key={s.l} className="bg-card p-4 text-center">
                  <p className="font-display text-3xl text-primary">{s.v}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-10 flex flex-wrap gap-3">
            <Link to="/livrables" className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground">
              <Terminal className="h-3.5 w-3.5" /> Voir les livrables
            </Link>
            <Link to="/competences" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:border-foreground/60">
              <Zap className="h-3.5 w-3.5" /> Mes compétences
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
