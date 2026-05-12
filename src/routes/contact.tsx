import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

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
    { icon: Mail, label: "Email", value: "cheick.bamba@email.com", href: "mailto:cheick.bamba@email.com" },
    { icon: Phone, label: "Téléphone", value: "+33 6 00 00 00 00", href: "tel:+33600000000" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/cheickbamba", href: "https://linkedin.com/in/cheickbamba" },
  ];
  return (
    <>
      <PageHeader eyebrow="Contact" title="Discutons de votre alternance" description="Disponible pour une alternance Assistant Agile Master. N'hésitez pas à me contacter." />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-gradient-hero p-1 shadow-elegant">
          <div className="rounded-[calc(1.5rem-4px)] bg-card p-10">
            <div className="grid gap-4">
              {items.map((it) => (
                <a key={it.label} href={it.href} className="flex items-center gap-4 rounded-xl border border-border p-4 transition hover:border-primary hover:bg-secondary/60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</p>
                    <p className="font-semibold text-foreground">{it.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="/cv-cheick-bamba.pdf"
              download
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90"
            >
              <Download className="h-5 w-5" /> Télécharger mon CV
            </a>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Disponible pour une alternance Assistant Agile Master · rentrée 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}