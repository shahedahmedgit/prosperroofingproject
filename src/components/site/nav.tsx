import { useState } from "react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Transformations", href: "#transformations" },
  { label: "Owner", href: "#owner" },
];

export const PHONE = "512-632-6878";
export const PHONE_HREF = "tel:+15126326878";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.22em] text-sand uppercase"
        >
          Prosper<span className="text-primary"> Roofing</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.8rem] tracking-[0.16em] text-muted-foreground uppercase transition-colors duration-300 hover:text-sand"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden bg-terracotta px-5 py-3 text-[0.72rem] font-semibold tracking-[0.18em] text-sand uppercase transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 sm:inline-block"
          >
            Call or Text
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-border lg:hidden"
          >
            <span
              className={`h-px w-4 bg-sand transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-sand transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6 sm:px-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-display text-2xl text-sand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="mt-4 bg-terracotta px-5 py-4 text-center text-[0.72rem] font-semibold tracking-[0.18em] text-sand uppercase"
          >
            Call or Text {PHONE}
          </a>
        </nav>
      </div>
    </header>
  );
}
