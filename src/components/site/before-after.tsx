import { useCallback, useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section
      id="transformations"
      className="bg-surface px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow reveal" data-reveal>
          Transformations
        </p>
        <h2
          className="reveal-mask mt-6 max-w-2xl text-[clamp(2rem,4.4vw,3.75rem)] font-bold"
          data-reveal
          data-reveal-delay="90"
        >
          Before, and after.
        </h2>

        <div
          ref={frameRef}
          data-reveal
          data-reveal-delay="150"
          className="reveal-wipe relative mt-12 aspect-[16/10] w-full touch-none overflow-hidden border border-border select-none lg:mt-16 lg:aspect-[21/9]"
          onPointerDown={(e) => {
            dragging.current = true;
            setFromClientX(e.clientX);
          }}
        >
          <img
            src={afterImg}
            alt="Roof after replacement by Prosper Roofing"
            loading="lazy"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 h-full w-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={beforeImg}
              alt="Weathered roof before replacement"
              loading="lazy"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute bottom-5 left-5 border border-border bg-background/70 px-3 py-1.5 text-[0.6rem] tracking-[0.28em] text-sand uppercase backdrop-blur-sm">
            Before
          </span>
          <span className="absolute right-5 bottom-5 border border-border bg-background/70 px-3 py-1.5 text-[0.6rem] tracking-[0.28em] text-sand uppercase backdrop-blur-sm">
            After
          </span>

          <div
            className="absolute inset-y-0 w-px bg-primary/80"
            style={{ left: `${pos}%` }}
          >
            <button
              type="button"
              aria-label="Drag to compare"
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
                if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
              }}
              className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-primary bg-background/85 text-primary shadow-[0_0_28px_rgba(201,111,74,0.35)] backdrop-blur-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            >
              <span className="text-xs tracking-tight">◀ ▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
