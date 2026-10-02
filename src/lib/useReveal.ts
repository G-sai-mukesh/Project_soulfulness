"use client";

import { useEffect, useRef } from "react";

/**
 * Adds `.visible` to every `.reveal*` element inside the returned ref
 * once it scrolls into view (see the scroll-reveal utilities in globals.css).
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return ref;
}
