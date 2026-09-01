import ownerImg from "@/assets/owner.jpg";

export function Owner() {
  return (
    <section id="owner" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <div
          className="reveal-wipe relative overflow-hidden border border-border"
          data-reveal
        >
          <img
            src={ownerImg}
            alt="Moses Caballero, owner of Prosper Roofing"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        </div>

        <div>
          <p className="eyebrow reveal" data-reveal data-reveal-delay="80">
            Owner
          </p>
          <h2
            className="reveal-mask mt-6 text-[clamp(2.2rem,4.8vw,4rem)] font-bold"
            data-reveal
            data-reveal-delay="140"
          >
            Moses
            <br />
            Caballero
          </h2>
          <div className="hairline reveal my-10 max-w-sm" data-reveal data-reveal-delay="200" />
          <p
            className="reveal max-w-lg text-base leading-relaxed text-muted-foreground"
            data-reveal
            data-reveal-delay="240"
          >
            Moses runs Prosper Roofing the way he'd want his own home handled —
            on the roof himself, straight answers about what needs work and what
            doesn't, and a crew held to the same standard from tear-off to final
            walkthrough.
          </p>
          <p
            className="reveal mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
            data-reveal
            data-reveal-delay="300"
          >
            Every estimate comes from a real inspection. Every install is
            finished before the crew leaves.
          </p>
        </div>
      </div>
    </section>
  );
}
