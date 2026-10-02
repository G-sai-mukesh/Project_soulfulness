"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/Icon";
import { useReveal } from "@/lib/useReveal";
import { experiences } from "@/lib/content";

export default function Experiences() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="experiences" ref={ref} className="bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Experiences</span>
            <h2 className="mt-3 font-sans font-bold text-3xl lg:text-5xl text-ink">Ten Ways to a Happier You</h2>
            <p className="mt-3 text-base text-muted">Complementary offerings that create a low-pressure, socially rich environment.</p>
          </div>
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 hover:-translate-y-0.5"
          >
            Explore All Experiences <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {experiences.map((e, i) => (
            <article key={e.title} id={e.id} className={`exp-card reveal delay-${(i % 5) + 1} group scroll-mt-28`}>
              <div className="relative">
                <div className="exp-media relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw"
                  />
                </div>
                <span
                  className="absolute -bottom-4 left-3 grid h-9 w-9 place-items-center rounded-full border-[3px] border-paper text-white shadow"
                  style={{ background: e.accent }}
                >
                  <Icon name={e.icon} size={16} strokeWidth={2} />
                </span>
              </div>
              <h3 className="mt-6 text-sm sm:text-base font-semibold text-ink">{e.title}</h3>
              <p className="mt-1 text-xs sm:text-sm leading-snug text-muted">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
