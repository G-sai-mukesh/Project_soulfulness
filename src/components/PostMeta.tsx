import { Clock } from "lucide-react";
import { formatPostDate } from "@/lib/blogs";

export default function PostMeta({ category, date, readTime }: { category: string; date: string; readTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
      <span className="rounded-full bg-magenta-soft px-3 py-1 font-semibold text-magenta">{category}</span>
      <time dateTime={date}>{formatPostDate(date)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1"><Clock size={13} /> {readTime}</span>
    </div>
  );
}
