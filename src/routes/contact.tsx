import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Download, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import cheickPhoto from "@/assets/cheick.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact // Cheick Bamba" },
      { name: "description", content: "Disponible pour une alternance Assistant Agile Master. Email, téléphone, CV." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (v: string) => { navigator.clipboard.writeText(v); setCopied(v); setTimeout(() => setCopied(null), 1800); };

  const items = [
    { icon: Mail, label: "Email", value: "bamba15cheick@gmail.com", href: "mailto:bamba15cheick@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "07 64 46 86 29", href: "tel:+33764468629" },
  ];

  return (
    <div className="relative">
      <div className="grid min-h-[calc(100vh-100px)] md:grid-cols-12">
        {/* LEFT: portrait full-bleed */}
        <aside className="relative md:col-span-5 lg:col-span-4 border-b md:border-b-0 md:border-r border-border overflow-hidden">
          <img src={cheickPhoto} alt="Cheick Bamba" className="h-80 w-full object-cover md:absolute md:inset-0 md:h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent md:bg-gradient-to-r" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">// vCard</p>
            <p className="mt-2 font-display text-4xl text-foreground md:text-5xl">Cheick Bamba</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Assistant Agile Master · Alternance 2026</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
              <span className="relative flex h-1.5 w-1.5"><span className="absolute inset-0 rounded-full bg-primary animate-pulse-dot" /></span>
              disponible · rentrée 2026
            </div>
          </div>
        </aside>

        {/* RIGHT: details */}
        <main className="md:col-span-7 lg:col-span-8 p-6 md:p-12 lg:p-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">[06] · contact.connect()</p>
          <h1 className="mt-4 font-display text-5xl text-foreground md:text-7xl text-balance">
            On <span className="text-gradient">démarre</span> ?
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Un message, un appel, un café : je réponds vite. Si vous cherchez un alternant
            Assistant Agile Master sérieux, curieux et pédagogue, on est au bon endroit.
          </p>

          {/* Channels */}
          <div className="mt-10 space-y-3">
            {items.map((it) => {
              const Icon = it.icon;
              const isCopied = copied === it.value;
              return (
                <div key={it.label} className="group flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card p-4 transition hover:border-primary/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{it.label}</p>
                    <p className="truncate font-display text-xl text-foreground md:text-2xl">{it.value}</p>
                  </div>
                  <button onClick={() => copy(it.value)} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary">
                    {isCopied ? <><Check className="h-3.5 w-3.5" />copié</> : <><Copy className="h-3.5 w-3.5" />copier</>}
                  </button>
                  <a href={it.href} className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-primary-foreground hover:bg-accent">
                    contacter <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* CV CTA */}
          <a
            href="/cv-cheick-bamba.pdf"
            download
            className="group mt-10 flex items-center justify-between gap-4 rounded-lg border border-primary bg-primary/10 p-6 transition hover:bg-primary hover:text-primary-foreground"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary group-hover:text-primary-foreground">// download</p>
              <p className="mt-1 font-display text-2xl text-foreground group-hover:text-primary-foreground">Télécharger mon CV (PDF)</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground group-hover:text-primary-foreground/80">cv-cheick-bamba.pdf · ~120 ko</p>
            </div>
            <Download className="h-6 w-6 text-primary group-hover:text-primary-foreground transition group-hover:translate-y-1" />
          </a>

          <p className="mt-10 max-w-xl border-l-2 border-primary pl-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            // « Disponible pour une alternance Assistant Agile Master · rentrée 2026. »
          </p>
        </main>
      </div>
    </div>
  );
}
