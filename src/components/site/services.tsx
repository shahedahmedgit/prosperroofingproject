const SERVICES = [
  {
    n: "01",
    title: "Roof Replacement",
    body: "Full tear-off and rebuild with materials selected for desert heat cycling, not for the lowest bid.",
  },
  {
    n: "02",
    title: "Tile & Shingle Repair",
    body: "Targeted repairs and underlayment work that solve the leak instead of covering it.",
  },
  {
    n: "03",
    title: "Storm & Hail Response",
    body: "Documented inspections and clear scope so damage is handled properly the first time.",
  },
  {
    n: "04",
    title: "Maintenance & Inspection",
    body: "Scheduled assessments that extend roof life and keep small issues from becoming structural.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-surface px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow reveal" data-reveal>
              What we do
            </p>
            <h2
              className="reveal-mask mt-6 text-[clamp(2rem,4.4vw,3.75rem)] font-bold"
              data-reveal
              data-reveal-delay="90"
            >
              A short list,
              <br />
              done exceptionally.
            </h2>
            <div className="hairline reveal mt-10 max-w-xs" data-reveal data-reveal-delay="180" />
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <article
                key={s.n}
                data-reveal
                data-reveal-delay={120 + i * 90}
                className="reveal group relative bg-surface p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[5px] hover:bg-background lg:p-10"
              >
                <span className="font-display text-xs tracking-[0.3em] text-primary">
                  {s.n}
                </span>
                <h3 className="mt-6 text-2xl font-semibold lg:text-[1.75rem]">
                  {s.title}
                </h3>
                <span className="mt-5 block h-px w-8 bg-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-20" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
