function VideoCard({ index, delay }: { index: string; delay: number }) {
  return (
    <figure
      data-reveal
      data-reveal-delay={delay}
      className="reveal group relative aspect-video w-full overflow-hidden border border-border bg-surface transition-colors duration-500 hover:border-primary/50"
    >
      {/* Replace this block with a <video> element when footage is ready. */}
      <div className="absolute inset-0 bg-atmosphere opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:border-primary">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            aria-hidden="true"
            className="translate-x-[1px] fill-primary"
          >
            <path d="M0 0l16 9-16 9z" />
          </svg>
        </span>
        <figcaption className="text-[0.65rem] tracking-[0.32em] text-muted-foreground uppercase">
          Prosper Roofing
        </figcaption>
      </div>
      <span className="absolute top-5 left-5 font-display text-xs tracking-[0.28em] text-sand/70">
        Video Card {index}
      </span>
    </figure>
  );
}

export function VideoShowcase() {
  return (
    <section id="work" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow reveal" data-reveal>
              Showcase
            </p>
            <h2
              className="reveal-mask mt-6 max-w-2xl text-[clamp(2rem,4.4vw,3.75rem)] font-bold"
              data-reveal
              data-reveal-delay="90"
            >
              The work, on film.
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-muted-foreground"
            data-reveal
            data-reveal-delay="160"
          >
            Project films are being finalized. These two slots are reserved for
            full-length walkthroughs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          <VideoCard index="01" delay={120} />
          <VideoCard index="02" delay={240} />
        </div>
      </div>
    </section>
  );
}
