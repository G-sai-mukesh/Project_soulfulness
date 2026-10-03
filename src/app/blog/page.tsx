import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostMeta from "@/components/PostMeta";
import { blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title:       "Blog — Wellness, Mindfulness & Meaningful Connection",
  description: "Stories and practical guides on loneliness, mindfulness, work stress, friendship and social wellness for young adults — from Project Soulfulness.",
  alternates:  { canonical: "/blog" },
  openGraph: {
    title:       "The Project Soulfulness Blog",
    description: "Practical guides on loneliness, mindfulness, friendship and social wellness.",
    type:        "website",
    url:         "/blog",
  },
};

export default function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main className="bg-paper pt-32 lg:pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <header className="hero-in max-w-2xl">
            <span className="eyebrow">The Soulful Journal</span>
            <h1 className="mt-3 font-serif font-semibold text-4xl lg:text-6xl text-ink">Notes for a calmer, kinder you</h1>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
              Gentle reads on loneliness, mindfulness, friendship and everyday wellbeing — written for anyone
              juggling city life and looking for a little more balance.
            </p>
          </header>

          {/* Featured (latest) post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="hero-in group mt-12 grid lg:grid-cols-[1.2fr_1fr] overflow-hidden rounded-3xl border border-black/5 bg-paper shadow-xl transition hover:-translate-y-1"
            style={{ animationDelay: ".15s" }}
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden">
              <Image src={featured.image} alt={featured.imageAlt} fill preload className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 55vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center p-7 lg:p-12">
              <PostMeta category={featured.category} date={featured.date} readTime={featured.readTime} />
              <h2 className="mt-4 font-serif font-semibold text-2xl lg:text-3xl text-ink group-hover:text-forest transition-colors">{featured.title}</h2>
              <p className="mt-4 text-muted leading-relaxed">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-paper shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={p.image} alt={p.imageAlt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <PostMeta category={p.category} date={p.date} readTime={p.readTime} />
                    <h2 className="mt-3 font-serif font-semibold text-xl text-ink group-hover:text-forest transition-colors">{p.title}</h2>
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
      </main>
      <Footer />
    </>
  );
}
