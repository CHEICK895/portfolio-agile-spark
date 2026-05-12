export function PageHeader({ eyebrow, title, description, index }: { eyebrow: string; title: string; description: string; index?: string }) {
  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">({index ?? "00"}) · {eyebrow}</p>
          <div className="mt-6 hidden h-px w-12 bg-foreground/40 md:block" />
        </div>
        <div className="md:col-span-9">
          <h1 className="text-5xl leading-[0.95] text-foreground md:text-7xl lg:text-8xl">
            <span className="italic-display">{title}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
}