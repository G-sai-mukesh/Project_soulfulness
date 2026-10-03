import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,           changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${siteUrl}/events`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    ...blogPosts.map((p) => ({
      url:             `${siteUrl}/blog/${p.slug}`,
      lastModified:    p.date,
      changeFrequency: "yearly" as const,
      priority:        0.7,
    })),
  ];
}
