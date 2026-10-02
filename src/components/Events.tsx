"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { events } from "@/lib/content";

export default function Events() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="events" ref={ref} className="bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Upcoming Events</span>
            <h2 className="mt-3 font-serif font-semibold text-3xl lg:text-5xl text-ink">Join, Learn, Connect</h2>
            <p className="mt-3 text-base text-muted">From mindful mornings to engaging evenings — there&apos;s always something happening.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
          >
            View All Events <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((ev, i) => (
            <article key={ev.title} className={`reveal delay-${i + 1} group overflow-hidden rounded-3xl bg-paper shadow-[0_8px_30px_rgba(0,187,101,0.12)] border border-black/5 transition hover:-translate-y-1`}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={ev.image} alt={ev.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" />
                <time className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-paper px-3 py-1.5 text-center leading-tight shadow">
                  <span className="text-[10px] font-semibold tracking-wider text-muted">{ev.day}</span>
                  <span className="text-xl font-bold text-ink">{ev.date}</span>
                  <span className="text-[10px] font-semibold tracking-wider text-magenta">{ev.month}</span>
                </time>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base text-ink">{ev.title}</h3>
                <p className="mt-1 text-sm text-muted">{ev.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
