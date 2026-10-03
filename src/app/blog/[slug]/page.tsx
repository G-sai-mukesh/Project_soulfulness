import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostMeta from "@/components/PostMeta";
import { blogPosts, getPost, type BlogBlock } from "@/lib/blogs";
import { siteUrl } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

// Only the posts in lib/blogs.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title:       post.title,
    description: post.excerpt,
    keywords:    post.keywords,
    alternates:  { canonical: `/blog/${post.slug}` },
    openGraph: {
      title:         post.title,
      description:   post.excerpt,
      type:          "article",
      url:           `/blog/${post.slug}`,
      publishedTime: post.date,
      images:        [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 font-serif font-semibold text-2xl lg:text-3xl text-ink">{block.text}</h2>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="relative pl-6 text-base lg:text-lg leading-relaxed text-ink/85">
              <span className="absolute left-0 top-[0.7em] h-2 w-2 rounded-full bg-forest" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 rounded-3xl bg-forest-soft px-7 py-6 font-serif text-xl lg:text-2xl italic leading-snug text-forest border-l-4 border-forest">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink/85">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);

  const jsonLd = {
    "@context":      "https://schema.org",
    "@type":         "BlogPosting",
    headline:        post.title,
    description:     post.excerpt,
    image:           `${siteUrl}${post.image}`,
    datePublished:   post.date,
    keywords:        post.keywords.join(", "),
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author:          { "@type": "Organization", name: "Project Soulfulness", url: siteUrl },
    publisher:       { "@type": "Organization", name: "Project Soulfulness", logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.png` } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main className="bg-paper pt-32 lg:pt-40 pb-24">
        <article className="max-w-3xl mx-auto px-5">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-forest">
            <ArrowLeft size={16} /> All articles
          </Link>

          <header className="hero-in mt-6">
            <PostMeta category={post.category} date={post.date} readTime={post.readTime} />
            <h1 className="mt-4 font-serif font-semibold text-3xl lg:text-5xl leading-tight text-ink">{post.title}</h1>
            <p className="mt-5 text-lg lg:text-xl leading-relaxed text-muted">{post.excerpt}</p>
          </header>

          <div className="hero-in relative mt-10 aspect-[16/9] overflow-hidden blob-a shadow-xl" style={{ animationDelay: ".15s" }}>
            <Image src={post.image} alt={post.imageAlt} fill preload className="object-cover" sizes="(min-width:768px) 768px, 100vw" />
          </div>

          <div className="mt-10">
            {post.body.map((b, i) => <Block key={i} block={b} />)}
          </div>

          <aside className="mt-16 rounded-3xl bg-ink px-7 py-9 lg:px-10 text-white text-center">
            <h2 className="font-serif font-semibold text-2xl lg:text-3xl">Good People. Better Days.</h2>
            <p className="mt-3 text-white/80 max-w-md mx-auto">
              Come unwind, connect and find your people at Project Soulfulness — part café, part community sanctuary.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/events" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                See upcoming events <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Join the community
              </Link>
            </div>
          </aside>
        </article>

        <section className="max-w-7xl mx-auto px-5 lg:px-10 mt-20" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-serif font-semibold text-2xl lg:text-3xl text-ink">Keep reading</h2>
          <ul className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-paper shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={p.image} alt={p.imageAlt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                  </div>
                  <div className="p-6">
                    <PostMeta category={p.category} date={p.date} readTime={p.readTime} />
                    <h3 className="mt-3 font-serif font-semibold text-lg text-ink group-hover:text-forest transition-colors">{p.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
