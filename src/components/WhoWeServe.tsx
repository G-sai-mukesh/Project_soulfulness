"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { audiencePoints } from "@/lib/content";

export default function WhoWeServe() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-paper">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-soft">
          {/* Photo — right side on desktop, top on mobile */}
          <div className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]">
            <Image src="/images/community.jpg" alt="Friends sitting together, arms around each other" fill className="object-cover" sizes="(min-width:1024px) 58vw, 100vw" />
            <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(90deg, var(--color-forest-soft) 0%, transparent 35%)" }} />
            <p
              className="absolute right-6 top-6 font-hand text-white text-2xl sm:text-3xl lg:text-4xl leading-tight text-right drop-shadow-lg"
              style={{ transform: "rotate(-6deg)" }}
            >
              Real<br />Conversations.<br />Brighter<br />Tomorrows ♡
            </p>
          </div>

          <div className="reveal-left relative z-10 p-8 sm:p-12 lg:py-16 lg:max-w-[46%]">
            <span className="eyebrow">Who We Serve</span>
            <h2 className="mt-3 font-sans font-bold text-3xl lg:text-4xl text-ink">Young Individuals Navigating</h2>
            <ul className="mt-6 space-y-3">
              {audiencePoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base text-ink/85">
                  <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md bg-forest text-white">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-muted">
              All seeking a soft, social path back to balance, rather than a clinical intervention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
