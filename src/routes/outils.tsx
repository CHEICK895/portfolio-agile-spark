import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/outils")({
  head: () => ({
    meta: [
      { title: "Stack // Cheick Bamba" },
      { name: "description", content: "Jira, Miro, Office 365, GitLab, Trello, Notion." },
    ],
  }),
  component: ToolsPage,
});

const tools = [
  { name: "Jira", role: "Tickets · sprints · boards", level: "intermédiaire", usage: "Suivi des sprints, gestion du backlog, création de tableaux Scrum/Kanban", code: "JIR" },
  { name: "Miro", role: "Ateliers visuels", level: "intermédiaire", usage: "Story mapping, brainstormings, rétrospectives en distanciel", code: "MIR" },
  { name: "Notion", role: "Knowledge base", level: "intermédiaire", usage: "Notes, comptes-rendus, base de connaissance d'équipe", code: "NOT" },
  { name: "Trello", role: "Kanban léger", level: "à l'aise", usage: "Tableaux Kanban simples pour projets perso et étudiants", code: "TRE" },
  { name: "Office 365", role: "Doc & collab", level: "à l'aise", usage: "Documents, présentations, partage en équipe", code: "O365" },
  { name: "GitLab", role: "Versioning", level: "notions", usage: "Lecture des MR, comprendre la pipeline et le flow Git", code: "GLB" },
];

function ToolsPage() {
  return (
    <>
      <PageHeader index="05" eyebrow="stack.config" title="Les outils, des moyens — pas des fins." description="Je m'adapte au contexte de l'équipe. Voici ceux que j'utilise déjà avec aisance." />

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        {/* TABLE */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="grid grid-cols-[60px_1fr_1fr_120px] gap-4 border-b border-border bg-secondary/40 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:grid-cols-[60px_1fr_2fr_3fr_140px] md:px-8">
            <span>code</span>
            <span>outil</span>
            <span className="hidden md:inline">rôle</span>
            <span>usage</span>
            <span className="text-right">niveau</span>
          </div>
          {tools.map((t, i) => (
            <div
              key={t.name}
              className={`group grid grid-cols-[60px_1fr_1fr_120px] items-center gap-4 px-5 py-5 transition hover:bg-secondary md:grid-cols-[60px_1fr_2fr_3fr_140px] md:px-8 ${
                i !== tools.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{t.code}</span>
              <span className="font-display text-2xl text-foreground md:text-3xl">{t.name}</span>
              <span className="hidden font-mono text-xs uppercase tracking-wider text-muted-foreground md:inline">{t.role}</span>
              <span className="text-sm text-muted-foreground">{t.usage}</span>
              <span className="text-right">
                <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground group-hover:border-primary group-hover:text-primary">
                  {t.level}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* PHILOSOPHY */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { t: "L'outil suit la pratique", d: "On choisit l'outil pour servir le rituel, jamais l'inverse." },
            { t: "Un outil par besoin", d: "Pas de stack-bingo. Mieux vaut maîtriser trois outils que survoler dix." },
            { t: "Toujours partagé", d: "Si l'équipe ne lit pas le board, le board n'existe pas." },
          ].map((p, i) => (
            <div key={p.t} className="relative rounded-lg border border-border bg-card p-6">
              <span className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground">P.0{i + 1}</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// principe</p>
              <p className="mt-3 font-display text-2xl text-foreground text-balance">{p.t}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
