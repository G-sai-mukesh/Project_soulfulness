"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const ref   = useReveal<HTMLElement>();
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? el.clientWidth) + 20), behavior: "smooth" });
  };

  const arrow = "grid h-11 w-11 place-items-center rounded-full border border-forest/20 bg-paper text-forest transition hover:bg-forest hover:text-white disabled:opacity-35 disabled:hover:bg-paper disabled:hover:text-forest";

  return (
    <section id="community" ref={ref} className="bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-12 pb-24">
        <div className="reveal flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">What Our Community Says</span>
            <h2 className="mt-3 font-serif font-semibold text-3xl lg:text-5xl text-ink">Real People. Real Stories.</h2>
          </div>
          <div className="flex gap-3">
            <button className={arrow} onClick={() => scroll(-1)} disabled={!canPrev} aria-label="Previous story"><ChevronLeft size={20} /></button>
            <button className={arrow} onClick={() => scroll(1)}  disabled={!canNext} aria-label="Next story"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div
          ref={track}
          onScroll={update}
          className="reveal mt-6 -mx-3 flex gap-5 overflow-x-auto snap-x snap-mandatory px-3 pt-4 pb-10 scroll-px-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex gap-5 rounded-3xl bg-paper p-7 border border-black/5 shadow-[0_8px_30px_rgba(0,187,101,0.1)]"
            >
              <Image src={t.avatar} alt={t.name} width={64} height={64} className="h-16 w-16 flex-shrink-0 rounded-full object-cover" />
              <div>
                <blockquote className="text-sm leading-relaxed text-ink/85">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-magenta">{t.name}, {t.age}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
