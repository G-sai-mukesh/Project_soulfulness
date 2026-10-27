"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

export type BlogTeaser = {
  slug:     string;
  title:    string;
  excerpt:  string;
  category: string;
  date:     string; // ISO, for <time>
  dateText: string; // already formatted for display
  readTime: string;
  image:    string;
  imageAlt: string;
};

/* Home-page teaser of the newest journal posts (stands in for testimonials until we have real member reviews). */
export default function LatestBlogs({ posts }: { posts: BlogTeaser[] }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="journal" ref={ref} className="bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-12 pb-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">From Our Journal</span>
            <h2 className="mt-3 font-serif font-semibold text-3xl lg:text-5xl text-ink">Stories for Better Days</h2>
            <p className="mt-3 text-base text-muted">Fresh reads on Hyderabad weekends, friendship, wellbeing and everything in between.</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
          >
            Read All Blogs <ArrowRight size={16} />
          </Link>
        </div>

        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <li key={p.slug} className={`reveal delay-${i + 1}`}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-paper shadow-[0_8px_30px_rgba(0,187,101,0.12)] transition hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={p.imageAlt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                    <span className="rounded-full bg-magenta-soft px-3 py-1 font-semibold text-magenta">{p.category}</span>
                    <time dateTime={p.date}>{p.dateText}</time>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1"><Clock size={13} /> {p.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-serif font-semibold text-xl text-ink group-hover:text-forest transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">{p.excerpt}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                    Read more <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
