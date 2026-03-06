import { useEffect, useRef } from "react";

/**
 * Returns a ref to attach to a container element.
 * All children with .animate-on-scroll, .animate-fade-left, .animate-fade-right
 * inside the container will get the `is-visible` class when they enter the viewport.
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Immediately show all animated elements
      const allAnimated = document.querySelectorAll(
        ".animate-on-scroll, .animate-fade-left, .animate-fade-right",
      );
      for (const el of allAnimated) {
        el.classList.add("is-visible");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = ref.current?.querySelectorAll(
      ".animate-on-scroll, .animate-fade-left, .animate-fade-right",
    );

    if (elements) {
      for (const el of elements) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Observe a single element and call back when visible.
 */
export function useElementVisible(onVisible: () => void, threshold = 0.3) {
  const ref = useRef<HTMLElement | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            onVisible();
            observer.disconnect();
          }
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onVisible, threshold]);

  return ref;
}
