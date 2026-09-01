import heroImg from "@/assets/hero.jpg";
import { PHONE, PHONE_HREF } from "./nav";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury Arizona desert home with a new tile roof at dusk"
        width={1920}
        height={1088}
        className="hero-img absolute inset-0 h-full w-full origin-center object-cover"
      />
      <div className="hero-veil absolute inset-0 bg-hero-veil" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] flex-col justify-end px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <p className="eyebrow hero-rise" style={{ animationDelay: "400ms" }}>
          Prosper Roofing
        </p>

        <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7.4vw,6.2rem)] font-bold">
          <span className="block overflow-hidden">
            <span className="hero-line" style={{ animationDelay: "600ms" }}>
              Roofs built for
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line" style={{ animationDelay: "740ms" }}>
              desert extremes.
            </span>
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground hero-rise sm:text-lg" style={{ animationDelay: "1150ms" }}>
          Craftsmanship-first roofing for homes that deserve better than a quick
          patch. Honest assessments, clean installs, and work that holds up
          under Arizona sun.
        </p>

        <div className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "1400ms" }}>
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center justify-center gap-3 bg-terracotta px-8 py-5 text-[0.75rem] font-semibold tracking-[0.18em] text-sand uppercase transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:brightness-110"
          >
            Call or Text {PHONE}
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 border border-border px-8 py-5 text-[0.75rem] font-semibold tracking-[0.18em] text-sand uppercase transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-primary"
          >
            Get a Free Roof Inspection
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}
