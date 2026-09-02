import { useEffect, useRef } from "react";

/**
 * Attaches a single IntersectionObserver to a container and toggles
 * data-inview on every [data-reveal] descendant, with optional stagger.
 * Elements already inside (or above) the viewport at mount are revealed
 * immediately; the rest animate on scroll.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (targets.length === 0) return;

    const reveal = (el: HTMLElement) => {
      const delay = Number(el.dataset["revealDelay"] ?? 0);
      window.setTimeout(() => el.setAttribute("data-inview", "true"), delay);
    };

    const isInView = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      // Fully above the viewport counts as "already passed" — reveal it.
      if (rect.bottom <= 0) return true;
      return rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
    };

    const remaining: HTMLElement[] = [];
    for (const el of targets) {
      if (isInView(el)) reveal(el);
      else remaining.push(el);
    }

    if (remaining.length === 0) return;

    const pending = new Set(remaining);
    const check = (el: HTMLElement) => {
      if (!pending.has(el)) return;
      if (isInView(el)) {
        pending.delete(el);
        reveal(el);
        observer.unobserve(el);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Use geometry rather than isIntersecting: clip-path/opacity
        // animations can suppress intersection events on some elements.
        for (const entry of entries) check(entry.target as HTMLElement);
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );

    remaining.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
