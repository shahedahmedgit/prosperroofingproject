import { PHONE, PHONE_HREF } from "./nav";

export function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden bg-atmosphere">
      <div className="mx-auto max-w-[1440px] px-5 py-28 text-center sm:px-8 lg:px-12 lg:py-44">
        <p className="eyebrow reveal" data-reveal>
          Free Roof Inspection
        </p>
        <h2
          className="reveal-mask mx-auto mt-7 max-w-4xl text-[clamp(2.3rem,6vw,5rem)] font-bold"
          data-reveal
          data-reveal-delay="90"
        >
          Know exactly what
          <br />
          your roof needs.
        </h2>
        <p
          className="reveal mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground"
          data-reveal
          data-reveal-delay="160"
        >
          One call, one honest assessment, no pressure. Talk directly with the
          owner.
        </p>
        <div
          className="reveal mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          data-reveal
          data-reveal-delay="230"
        >
          <a
            href={PHONE_HREF}
            className="bg-terracotta px-9 py-5 text-[0.75rem] font-semibold tracking-[0.18em] text-sand uppercase transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:brightness-110"
          >
            Call or Text {PHONE}
          </a>
          <a
            href={PHONE_HREF}
            className="group border border-border px-9 py-5 text-[0.75rem] font-semibold tracking-[0.18em] text-sand uppercase transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-primary"
          >
            Get a Free Roof Inspection
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.22em] text-sand uppercase">
            Prosper Roofing
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Owner — Moses Caballero
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="font-display text-2xl text-sand transition-colors duration-300 hover:text-primary lg:text-3xl"
        >
          {PHONE}
        </a>
      </div>
      <div className="mx-auto mt-12 max-w-[1440px] text-[0.68rem] tracking-[0.2em] text-muted-foreground/70 uppercase">
        © {new Date().getFullYear()} Prosper Roofing
      </div>
    </footer>
  );
}
