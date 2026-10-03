"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo.png";
import { Butterfly, Leaf } from "@/components/Decor";

/* Intro splash, played on every load of the home page (including refreshes) — other pages, like blog posts, skip it.
   While it has `splash-playing`, globals.css locks page scroll and holds the hero animations.
   The whole timeline is CSS (see globals.css), so it also clears itself without JS. */

const EXIT_AT  = 3400; // ms — overlay starts fading, hero entrance begins
const DONE_AT  = 4000; // ms — overlay removed
const REDUCED  = { exit: 1000, done: 1400 };
const SKIP_FADE = 450;

const butterflies = [
  { x: "84%", y: "18%", r: "14deg",  s: 1,    d: "1.55s" },
  { x: "12%", y: "30%", r: "-18deg", s: 0.8,  d: "1.75s" },
  { x: "78%", y: "80%", r: "-8deg",  s: 0.7,  d: "1.95s" },
];
const leaves = [
  { x: "22%", y: "12%", r: "-30deg", s: 0.9,  d: "1.6s"  },
  { x: "92%", y: "52%", r: "40deg",  s: 0.75, d: "1.8s"  },
  { x: "16%", y: "78%", r: "200deg", s: 0.85, d: "1.7s"  },
  { x: "50%", y: "96%", r: "120deg", s: 0.6,  d: "2.0s"  },
];
const particles = [
  [30, 22], [70, 14], [88, 36], [10, 56], [26, 90], [62, 88], [94, 70], [44, 6], [6, 20], [80, 94],
];

export default function Splash() {
  // Lives in the root layout, so this only reflects the page the visitor first landed on
  const pathname = usePathname();
  const [landedOnHome] = useState(pathname === "/");
  const [phase, setPhase] = useState<"play" | "leaving" | "skip" | "done">(landedOnHome ? "play" : "done");
  const skipRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (!landedOnHome) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = reduced ? REDUCED : { exit: EXIT_AT, done: DONE_AT };

    const finish = () => setPhase("done");
    const exitTimer = setTimeout(() => setPhase("leaving"), t.exit);
    const doneTimer = setTimeout(finish, t.done);

    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip(); };
    let skipTimer: ReturnType<typeof setTimeout>;
    function skip() {
      clearTimeout(exitTimer); clearTimeout(doneTimer);
      setPhase("skip");
      skipTimer = setTimeout(finish, SKIP_FADE);
      window.removeEventListener("keydown", onKey);
    }
    window.addEventListener("keydown", onKey);
    skipRef.current = skip;

    return () => {
      clearTimeout(exitTimer); clearTimeout(doneTimer); clearTimeout(skipTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [landedOnHome]);

  if (phase === "done") return null;

  return (
    <div
      className={`splash ${phase === "play" ? "splash-playing" : ""} ${phase === "skip" ? "splash-skip" : ""}`}
      role="dialog"
      aria-label="Welcome to Project Soulfulness"
      onClick={() => skipRef.current()}
    >
      <div className="splash-stage">
        <div className="splash-glow" />

        {[0, 1, 2].map((i) => (
          <div key={i} className={`splash-ring splash-ring-${i}`}>
            <svg viewBox="0 0 100 100" className="splash-spin h-full w-full" aria-hidden="true">
              <circle cx="50" cy="50" r="49" fill="none" stroke="var(--color-forest)" strokeWidth={i === 0 ? 0.5 : 0.35}
                strokeDasharray={i === 1 ? "60 18 8 18" : i === 2 ? "2 6" : "120 40"} strokeLinecap="round" />
            </svg>
          </div>
        ))}

        {particles.map(([x, y], i) => (
          <span key={i} className="splash-particle" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${0.8 + (i % 5) * 0.12}s` }} />
        ))}

        {leaves.map((l, i) => (
          <span key={`l${i}`} className="splash-float splash-leaf" style={{ left: l.x, top: l.y, ["--r" as string]: l.r, ["--s" as string]: l.s, animationDelay: l.d } as React.CSSProperties}>
            <Leaf />
          </span>
        ))}
        {butterflies.map((b, i) => (
          <span key={`b${i}`} className="splash-float splash-butterfly" style={{ left: b.x, top: b.y, ["--r" as string]: b.r, ["--s" as string]: b.s, animationDelay: b.d } as React.CSSProperties}>
            <Butterfly className="splash-flutter" />
          </span>
        ))}

        <div className="splash-logo">
          <Image src={logo} alt="Project Soulfulness" preload sizes="300px" className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
