import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GraduationCap, Target, Heart, Compass } from "lucide-react";

export const Route = createFileRoute("/presentation")({
  head: () => ({
    meta: [
      { title: "Présentation | Cheick Bamba" },
      { name: "description", content: "Étudiant en informatique passionné par l'agilité et la facilitation d'équipe." },
    ],
  }),
  component: PresentationPage,
});

function PresentationPage() {
  const blocks = [
    { icon: GraduationCap, title: "Parcours", text: "Étudiant en informatique, en transition de Bac+2 vers Bac+3, avec une appétence forte pour la collaboration humaine au cœur de la tech." },
    { icon: Compass, title: "Centres d'intérêt", text: "L'agilité, la facilitation, le travail en équipe et la création d'environnements où chacun peut contribuer pleinement." },
    { icon: Target, title: "Objectif d'alternance", text: "Accompagner une équipe tech dans son amélioration continue, monter en compétence sur les rituels et le coaching agile." },
    { icon: Heart, title: "Qualités", text: "Écoute active, communication claire, pédagogie, curiosité, esprit d'équipe et envie sincère de faire grandir le collectif." },
  ];
  return (
    <>
      <PageHeader index="01" eyebrow="À propos" title="Présentation." description="Une approche humaine de l'agilité, ancrée dans la curiosité et le service de l'équipe." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-foreground">{b.title}</h2>
              <p className="mt-3 text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}