import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Users, GitBranch, Sparkles } from "lucide-react";
import cheickPhoto from "@/assets/cheick.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheick Bamba | Assistant Agile Master en alternance" },
      { name: "description", content: "Portfolio de Cheick Bamba, étudiant en informatique candidat à une alternance d'Assistant Agile Master." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-foreground/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:grid-cols-12 md:pt-24 md:pb-32">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-foreground/40" />
              Portfolio · 2026 / Édition 01
            </div>
            <h1 className="mt-10 text-foreground">
              <span className="block text-[clamp(3.5rem,11vw,9rem)] leading-[0.85]">
                <span className="italic-display">Cheick</span>
              </span>
              <span className="block text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] -mt-1">
                Bamba<span className="text-accent">.</span>
              </span>
            </h1>
            <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-lg text-foreground/80 md:text-xl">
                <span className="italic-display text-2xl">«&nbsp;</span>
                J'aide les équipes à mieux collaborer, à fluidifier leur delivery et à progresser grâce à l'agilité.
                <span className="italic-display text-2xl">&nbsp;»</span>
              </p>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:text-right">
                <p>Assistant</p>
                <p>Agile Master</p>
                <p className="text-foreground">/ Alternance Bac+3</p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link to="/projets" className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-background transition hover:bg-accent hover:border-accent hover:text-foreground">
                Voir les projets
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 border border-foreground/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:border-foreground hover:bg-foreground/5">
                Prendre contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/40 -z-10 translate-x-4 translate-y-4" />
              <div className="overflow-hidden border border-foreground/15 bg-foreground">
                <img src={cheickPhoto} alt="Portrait de Cheick Bamba" className="h-full w-full object-cover grayscale contrast-110" />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Fig. 01</span>
                <span>Cheick Bamba · Portrait</span>
                <span>↓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 bg-foreground/[0.02]">
          <div className="mx-auto flex max-w-7xl items-center gap-12 overflow-hidden px-6 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>· Scrum</span><span>· Kanban</span><span>· Facilitation</span><span>· Story Mapping</span><span>· Jira</span><span>· Miro</span><span>· Notion</span><span>· GitLab</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">(01) · Méthode</p>
            <h2 className="mt-6 text-4xl text-foreground md:text-5xl"><span className="italic-display">Trois</span> axes pour une équipe vivante.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-px bg-foreground/10 md:grid-cols-3">
              {[
                { icon: Users, n: "01", title: "Facilitation", text: "Animer les rituels Scrum et fluidifier la communication d'équipe." },
                { icon: GitBranch, n: "02", title: "Flux & Kanban", text: "Visualiser le travail, limiter le WIP, accélérer la livraison." },
                { icon: Sparkles, n: "03", title: "Amélioration", text: "Cultiver une culture d'apprentissage par les rétrospectives." },
              ].map((c) => (
                <div key={c.title} className="group bg-background p-7 transition hover:bg-foreground hover:text-background">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                    <span>/{c.n}</span>
                    <c.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-12 italic-display text-3xl">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/70">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}