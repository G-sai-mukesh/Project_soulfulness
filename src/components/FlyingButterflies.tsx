"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Butterfly } from "@/components/Decor";

/* Butterflies drifting across every page (mounted once in the root layout).
   A fixed, click-through layer: each flyer crosses the viewport on a wavy path (see "Flying butterflies"
   in globals.css). Negative delays start them mid-flight so the page never loads empty.
   They stay out of the home hero: the layer is clipped to start below the hero's bottom edge as it scrolls. */

const MAGENTA = "var(--color-magenta)";

const flyers = [
  { top: "14%", size: 48, dur: 26, delay: -4,  rtl: false, color: undefined, mobile: true },
  { top: "62%", size: 38, dur: 34, delay: -18, rtl: true,  color: MAGENTA,   mobile: true },
  { top: "36%", size: 32, dur: 30, delay: -11, rtl: false, color: MAGENTA,   mobile: false },
  { top: "80%", size: 42, dur: 38, delay: -27, rtl: false, color: undefined, mobile: true },
  { top: "24%", size: 30, dur: 42, delay: -33, rtl: true,  color: undefined, mobile: false },
  { top: "50%", size: 40, dur: 46, delay: -8,  rtl: true,  color: undefined, mobile: false },
  { top: "8%",  size: 28, dur: 36, delay: -22, rtl: true,  color: MAGENTA,   mobile: false },
];

export default function FlyingButterflies() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const layer = ref.current;
    const hero = document.getElementById("home");
    if (!layer) return;
    if (!hero) { layer.style.clipPath = ""; return; }

    let frame = 0;
    const update = () => {
      frame = 0;
      const bottom = Math.max(0, hero.getBoundingClientRect().bottom);
      layer.style.clipPath = `inset(${bottom}px 0 0 0)`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <div ref={ref} className="flyers" aria-hidden="true">
      {flyers.map((f, i) => (
        <span
          key={i}
          className={`flyer ${f.rtl ? "flyer-rtl" : ""} ${f.mobile ? "" : "max-md:hidden"}`}
          style={{ top: f.top, width: f.size, animationDuration: `${f.dur}s`, animationDelay: `${f.delay}s` }}
        >
          <span className="flyer-bob" style={{ animationDelay: `${f.delay / 3}s` }}>
            <Butterfly className="splash-flutter" color={f.color} />
          </span>
        </span>
      ))}
    </div>
  );
}
