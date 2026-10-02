"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/Icon";
import { useReveal } from "@/lib/useReveal";
import { aboutHighlights, problemSolutionPromise } from "@/lib/content";

const tones = {
  blush: { bg: "var(--color-magenta-soft)", iconBg: "var(--color-magenta-tint)", icon: "var(--color-magenta)" },
  mint:  { bg: "var(--color-forest-soft)", iconBg: "var(--color-forest-tint)", icon: "var(--color-forest)" },
  peach: { bg: "var(--color-peach)",        iconBg: "#FBDCD3", icon: "var(--color-magenta)" },
};

export default function AboutSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-12 pb-20">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          <div className="reveal-left">
            <span className="eyebrow">About</span>
            <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-ink">Project Soulfulness</h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted max-w-lg">
              A curated social-wellness platform — part coffee shop, part community sanctuary — where
              young individuals can unwind, connect, and gradually convert inner stress into a life of
              greater integrity and balance.
            </p>
            <a
              href="#experiences"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition hover:brightness-95 hover:-translate-y-0.5"
            >
              Our Story <ArrowRight size={16} />
            </a>
          </div>

          <div className="reveal-right relative">
            <div className="relative aspect-[16/10] overflow-hidden blob-a shadow-xl">
              <Image src="/images/about-cafe.jpg" alt="Warm café interior with hanging lights" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div className="relative -mt-14 mx-3 sm:mx-10 sm:ml-auto sm:w-[78%] grid grid-cols-3 rounded-3xl bg-paper/95 shadow-xl backdrop-blur py-5">
              {aboutHighlights.map((h, i) => (
                <div key={h.label} className={`flex flex-col items-center text-center px-3 ${i > 0 ? "border-l border-forest/10" : ""}`}>
                  <Icon name={h.icon} size={26} strokeWidth={1.7} className="text-forest" />
                  <span className="mt-2 text-[11px] sm:text-xs leading-snug text-ink/80">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {problemSolutionPromise.map((c, i) => {
            const t = tones[c.tone];
            return (
              <article key={c.title} className={`reveal delay-${i + 1} flex gap-5 rounded-3xl p-7`} style={{ background: t.bg }}>
                <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full" style={{ background: t.iconBg, color: t.icon }}>
                  <Icon name={c.icon} size={26} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
