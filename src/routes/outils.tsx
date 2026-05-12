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
      <PageHeader eyebrow="Stack" title="Outils" description="Les outils que j'utilise pour collaborer, organiser et faire avancer le travail." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:shadow-elegant">
              <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-2xl font-bold text-white shadow-elegant`}>
                {t.letter}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}