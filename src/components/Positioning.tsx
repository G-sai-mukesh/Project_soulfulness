"use client";

import Image from "next/image";
import { Sprout } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

export default function Positioning() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-paper">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
          <div className="reveal-left relative aspect-[16/11] overflow-hidden blob-b shadow-xl lg:-mr-10">
            <Image src="/images/positioning.jpg" alt="Coffee for two by a rainy window among plants" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>

          <div className="reveal-right relative z-10 rounded-[2rem] bg-forest-soft p-8 sm:p-12 shadow-sm">
            <span className="absolute right-8 top-8 grid h-12 w-12 place-items-center rounded-full bg-paper text-forest shadow-sm">
              <Sprout size={24} strokeWidth={1.7} />
            </span>
            <span className="eyebrow">Strategic Positioning</span>
            <h2 className="mt-3 pr-14 font-serif font-semibold text-3xl lg:text-4xl text-ink">A Third, More Approachable Option</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Project Soulfulness sits between clinical mental health services and generic social venues,
              offering a unique blend of hospitality, companionship, mindfulness, and curated programming —
              a more approachable option for urban young adults.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
