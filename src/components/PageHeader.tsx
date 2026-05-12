export function PageHeader({ eyebrow, title, description, index }: { eyebrow: string; title: string; description: string; index?: string }) {
  return (
    <section className="relative border-b border-border bg-gradient-soft">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-4 pt-16 pb-12 md:px-8 md:pt-24">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="text-primary">[{index ?? "00"}]</span>
          <span className="h-px flex-1 max-w-[60px] bg-border" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-6 font-display text-5xl leading-[0.92] text-foreground md:text-7xl text-balance">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
      </div>
    </section>
  );
}
