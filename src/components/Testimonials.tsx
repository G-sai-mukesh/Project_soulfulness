"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { testimonials } from "@/lib/content";

/* Reviews glide past in an endless loop (see "Testimonial marquee" in globals.css).
   The list is rendered twice back to back and the track slides by exactly one copy,
   so the loop has no visible seam. Hovering pauses it. */
export default function Testimonials() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="community" ref={ref} className="bg-paper scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-12">
        <div className="reveal">
          <span className="eyebrow">What Our Community Says</span>
          <h2 className="mt-3 font-serif font-semibold text-3xl lg:text-5xl text-ink">Real People. Real Stories.</h2>
        </div>
      </div>

      <div className="reveal marquee mt-8 pb-24">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-group" aria-hidden={copy === 1}>
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  className="w-[300px] sm:w-[380px] flex-shrink-0 flex gap-5 rounded-3xl bg-paper p-7 border border-black/5 shadow-[0_8px_30px_rgba(0,187,101,0.1)]"
                >
                  {t.avatar ? (
                    <Image src={t.avatar} alt={t.name} width={64} height={64} className="h-16 w-16 flex-shrink-0 rounded-full object-cover" />
                  ) : (
                    <span
                      className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-full font-serif text-2xl font-semibold text-white"
                      style={{ background: i % 2 ? "var(--color-magenta)" : "var(--color-forest)" }}
                      aria-hidden="true"
                    >
                      {t.name.charAt(0)}
                    </span>
                  )}
                  <div>
                    <blockquote className="text-sm leading-relaxed text-ink/85">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-3 text-xs">
                      <span className="font-semibold text-magenta">{t.name}, {t.age}</span>
                      <span className="block mt-0.5 text-muted">{t.role}</span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
