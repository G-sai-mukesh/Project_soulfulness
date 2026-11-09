import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostMeta from "@/components/PostMeta";
import RevealSection from "@/components/RevealSection";
import { blogPosts } from "@/lib/blogs";

/* Stays a Server Component so the full article text in blogs.ts isn't sent to the browser. */
export default function RecentBlogs() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <RevealSection id="blogs" className="bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-12 pb-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">The Soulful Journal</span>
            <h2 className="mt-3 font-serif font-semibold text-3xl lg:text-5xl text-ink">Recent Blogs</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
          >
            View All Blogs <ArrowRight size={16} />
          </Link>
        </div>

        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <li key={p.slug} className={`reveal delay-${i + 1}`}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-paper shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={p.imageAlt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <PostMeta category={p.category} date={p.date} readTime={p.readTime} />
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
    </RevealSection>
  );
}
