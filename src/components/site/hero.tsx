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
        className="absolute inset-0 h-full w-full origin-center object-cover [animation:hero-settle_1700ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
      />
      <div className="absolute inset-0 bg-hero-veil opacity-0 [animation:veil-in_1400ms_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] flex-col justify-end px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <p className="eyebrow opacity-0 [animation:rise-in_800ms_cubic-bezier(0.16,1,0.3,1)_400ms_forwards]">
          Prosper Roofing
        </p>

        <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7.4vw,6.2rem)] font-bold">
          <span className="block overflow-hidden">
            <span className="block translate-y-full [animation:line-up_1100ms_cubic-bezier(0.16,1,0.3,1)_600ms_forwards]">
              Roofs built for
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block translate-y-full [animation:line-up_1100ms_cubic-bezier(0.16,1,0.3,1)_720ms_forwards]">
              desert extremes.
            </span>
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground opacity-0 [animation:rise-in_900ms_cubic-bezier(0.16,1,0.3,1)_1150ms_forwards] sm:text-lg">
          Craftsmanship-first roofing for homes that deserve better than a quick
          patch. Honest assessments, clean installs, and work that holds up
          under Arizona sun.
        </p>

        <div className="mt-10 flex flex-col gap-3 opacity-0 [animation:rise-in_800ms_cubic-bezier(0.16,1,0.3,1)_1400ms_forwards] sm:flex-row sm:items-center">
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

      <style>{`
        @keyframes hero-settle { from { transform: scale(1.04); } to { transform: scale(1); } }
        @keyframes veil-in { to { opacity: 1; } }
        @keyframes rise-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @keyframes line-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </section>
  );
}
