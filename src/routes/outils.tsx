import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/outils")({
  head: () => ({
    meta: [
      { title: "Outils | Cheick Bamba" },
      { name: "description", content: "Jira, Miro, Office 365, GitLab, Trello, Notion." },
    ],
  }),
  component: ToolsPage,
});

const tools = [
  { name: "Jira", letter: "J", color: "from-blue-500 to-blue-700", desc: "Suivi des tickets, sprints et tableaux Scrum/Kanban." },
  { name: "Miro", letter: "M", color: "from-yellow-400 to-orange-500", desc: "Ateliers visuels, story mapping, brainstormings." },
  { name: "Office 365", letter: "O", color: "from-red-500 to-orange-600", desc: "Documents, présentations et collaboration." },
  { name: "GitLab", letter: "G", color: "from-orange-500 to-red-600", desc: "Notions de versioning, branches et merge requests." },
  { name: "Trello", letter: "T", color: "from-sky-400 to-blue-600", desc: "Tableaux Kanban simples pour projets perso." },
  { name: "Notion", letter: "N", color: "from-gray-700 to-gray-900", desc: "Base de connaissance, prise de notes et rétros." },
];

function ToolsPage() {
  return (
    <>
      <PageHeader index="05" eyebrow="Stack" title="Outils." description="Les outils que j'utilise pour collaborer, organiser et faire avancer le travail." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => (
            <div key={t.name} className="group flex items-center gap-5 bg-background p-7 transition hover:bg-foreground hover:text-background">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center border border-foreground/30 italic-display text-3xl text-foreground transition group-hover:border-accent group-hover:bg-accent group-hover:text-foreground">
                {t.letter}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-background/60">
                  <span>/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-1 italic-display text-2xl">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground group-hover:text-background/70">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}