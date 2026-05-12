import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Mail, Phone, Download, ArrowUpRight } from "lucide-react";
import cheickPhoto from "@/assets/cheick.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & CV | Cheick Bamba" },
      { name: "description", content: "Disponible pour une alternance Assistant Agile Master. Email, téléphone, LinkedIn et CV." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: "bamba15cheick@gmail.com", href: "mailto:bamba15cheick@gmail.com", num: "01" },
    { icon: Phone, label: "Téléphone", value: "07 64 46 86 29", href: "tel:+33764468629", num: "02" },
  ];
  return (
    <>
      <PageHeader index="06" eyebrow="Contact" title="Échangeons." description="Disponible pour une alternance Assistant Agile Master · rentrée 2026." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/40 -z-10 -translate-x-3 translate-y-3" />
              <img src={cheickPhoto} alt="Cheick Bamba" className="w-full border border-foreground/15 grayscale contrast-110" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Fig. 02 · Disponible</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">(/) · Coordonnées directes</p>
            <div className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
              {items.map((it) => (
                <a key={it.label} href={it.href} className="group flex items-center justify-between gap-6 py-6 transition hover:bg-foreground/5">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">/{it.num}</span>
                    <it.icon className="h-4 w-4 text-foreground" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{it.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="italic-display text-2xl text-foreground md:text-3xl">{it.value}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-accent-foreground" />
                  </div>
                </a>
              ))}
            </div>

            <a
              href="/cv-cheick-bamba.pdf"
              download
              className="mt-10 group inline-flex w-full items-center justify-between gap-4 border border-foreground bg-foreground px-8 py-6 text-background transition hover:bg-accent hover:border-accent hover:text-foreground"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em]">→ Télécharger le CV</span>
              <Download className="h-5 w-5 transition group-hover:translate-y-0.5" />
            </a>

            <p className="mt-8 italic-display text-2xl text-foreground/80">
              «&nbsp;Disponible pour une alternance Assistant Agile Master · rentrée 2026.&nbsp;»
            </p>
          </div>
        </div>
      </section>
    </>
  );
}