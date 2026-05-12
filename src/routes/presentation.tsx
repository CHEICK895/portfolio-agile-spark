import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/presentation")({
  head: () => ({
    meta: [
      { title: "À propos // Cheick Bamba" },
      { name: "description", content: "Étudiant en informatique passionné par l'agilité et la facilitation d'équipe." },
    ],
  }),
  component: PresentationPage,
});

const story = [
  { year: "2023", title: "Premiers pas en informatique", text: "Découverte du développement, de Git, des bases de la collaboration en équipe technique." },
  { year: "2024", title: "Bac+2 · L'éveil agile", text: "Premier projet en cadre Scrum simplifié. Je découvre que la valeur naît dans la conversation, pas dans l'outil." },
  { year: "2025", title: "Facilitation & ateliers", text: "J'anime brainstormings, story mappings, rétros. La posture de service et l'écoute deviennent une boussole." },
  { year: "2026", title: "Bac+3 · Cap alternance", text: "Direction Assistant Agile Master : accompagner une vraie équipe, mesurer, itérer, transmettre." },
];

const traits = [
  { k: "écoute", v: "comprendre avant de proposer" },
  { k: "pédagogie", v: "rendre simple sans appauvrir" },
  { k: "curiosité", v: "lire, tester, demander" },
  { k: "humilité", v: "l'équipe avant l'ego" },
  { k: "rigueur", v: "préparer pour mieux improviser" },
  { k: "énergie", v: "tenir le groupe en mouvement" },
];

function PresentationPage() {
  return (
    <>
      <PageHeader index="01" eyebrow="profile.read()" title="Une approche humaine de l'agilité." description="Je viens de la tech, je me forme à l'humain. C'est l'intersection des deux qui m'intéresse." />

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        {/* TIMELINE */}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// timeline</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Le fil rouge.</h2>
            <p className="mt-3 text-sm text-muted-foreground">Quatre étapes, une trajectoire qui converge naturellement vers l'agilité.</p>
          </div>
          <div className="md:col-span-9 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-32" />
            <ol className="space-y-10">
              {story.map((s, i) => (
                <li key={s.year} className="relative grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-[8rem_1fr] md:gap-8">
                  <div className="relative">
                    <span className="absolute left-3 top-2 z-10 h-3 w-3 rounded-full bg-primary glow-cyan md:left-[7.625rem]" />
                    <span className="font-mono text-xs text-muted-foreground md:text-base md:text-foreground">{s.year}</span>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl text-foreground md:text-2xl">{s.title}</h3>
                      <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}/04</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* TRAITS as key/value table */}
        <div className="mt-28 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// signal:noise</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl text-balance">Ce que j'apporte au collectif.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              {traits.map((t, i) => (
                <div key={t.k} className={`grid grid-cols-[120px_1fr] items-center gap-6 px-5 py-4 transition hover:bg-secondary md:grid-cols-[200px_1fr] md:px-8 ${i !== traits.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.k}</div>
                  <div className="font-display text-lg text-foreground md:text-2xl">{t.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MANIFESTO */}
        <div className="mt-28 rounded-2xl border border-border bg-card/60 p-8 md:p-16 bg-dot">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// manifest</p>
          <p className="mt-6 font-display text-3xl leading-tight text-foreground md:text-5xl text-balance">
            « Le rôle d'Assistant Agile Master, ce n'est pas <span className="text-gradient">faire à la place</span>. C'est <span className="text-gradient">créer les conditions</span> pour que l'équipe trouve, livre et progresse par elle-même. »
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">— ma boussole pour cette alternance</p>
        </div>
      </section>
    </>
  );
}
