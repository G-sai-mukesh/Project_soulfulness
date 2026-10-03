import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin, Sparkles, Backpack, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contact, events, eventDateParts, formatEventTime, siteUrl, type EventItem } from "@/lib/content";

export const metadata: Metadata = {
  title:       "Upcoming Events — Yoga, Comedy, Workshops & Community Circles",
  description: "See every upcoming Project Soulfulness event: yoga and mindfulness mornings, stand-up comedy nights, discussion circles, workshops and more.",
  alternates:  { canonical: "/events" },
  openGraph: {
    title:       "Upcoming Events at Project Soulfulness",
    description: "Mindful mornings, comedy nights, workshops and community circles.",
    type:        "website",
    url:         "/events",
  },
};

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const IST = "+05:30";

function EventCard({ ev, first }: { ev: EventItem; first: boolean }) {
  const d = eventDateParts(ev.date);
  const fullDate = `${d.day.charAt(0)}${d.day.slice(1).toLowerCase()}, ${Number(d.date)} ${MONTH_NAMES[Number(ev.date.slice(5, 7)) - 1]} ${d.year}`;
  const reserve = `mailto:${contact.email}?subject=${encodeURIComponent(`Reserve a spot: ${ev.title} (${fullDate})`)}`;

  return (
    <article id={ev.slug} className="scroll-mt-32 grid overflow-hidden rounded-3xl border border-black/5 bg-paper shadow-lg target:ring-4 target:ring-forest/40 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-full">
        <Image src={ev.image} alt={ev.title} fill preload={first} className="object-cover" sizes="(min-width:1024px) 45vw, 100vw" />
        <time dateTime={ev.date} className="absolute left-5 top-5 flex flex-col items-center rounded-2xl bg-paper px-4 py-2 text-center leading-tight shadow-lg">
          <span className="text-xs font-semibold tracking-wider text-muted">{d.day}</span>
          <span className="text-3xl font-bold text-ink">{d.date}</span>
          <span className="text-xs font-semibold tracking-wider text-magenta">{d.month}</span>
        </time>
      </div>

      <div className="p-7 lg:p-10">
        <span className="rounded-full bg-magenta-soft px-3 py-1 text-xs font-semibold text-magenta">{ev.category}</span>
        <h3 className="mt-4 font-serif font-semibold text-2xl lg:text-3xl text-ink">{ev.title}</h3>
        <p className="mt-1 font-hand text-2xl text-forest">{ev.tagline}</p>

        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/80">
          <li className="flex items-center gap-2"><CalendarDays size={16} className="text-forest" />{fullDate}</li>
          <li className="flex items-center gap-2"><Clock size={16} className="text-forest" />{formatEventTime(ev.start)} – {formatEventTime(ev.end)}</li>
          <li className="flex items-center gap-2"><MapPin size={16} className="text-forest" />{contact.address}</li>
        </ul>

        <p className="mt-5 leading-relaxed text-muted">{ev.about}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-ink"><Sparkles size={16} className="text-magenta" /> What to expect</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-muted">
              {ev.highlights.map((h) => <li key={h} className="relative pl-4"><span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />{h}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-ink"><Backpack size={16} className="text-magenta" /> What to bring</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-muted">
              {ev.bring.map((b) => <li key={b} className="relative pl-4"><span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />{b}</li>)}
            </ul>
          </div>
        </div>

        <p className="mt-6 flex items-start gap-2 rounded-2xl bg-forest-soft px-4 py-3 text-sm text-ink/80">
          <Heart size={16} className="mt-0.5 flex-shrink-0 text-forest" />
          <span><span className="font-semibold text-ink">Perfect for:</span> {ev.goodFor}</span>
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={reserve} className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-95">
            Reserve a spot <ArrowRight size={16} />
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white">
            Ask a question
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function EventsPage() {
  // Group by month, keeping the calendar order from content.ts
  const byMonth = new Map<string, EventItem[]>();
  for (const ev of events) {
    const key = ev.date.slice(0, 7);
    byMonth.set(key, [...(byMonth.get(key) ?? []), ev]);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": events.map((ev) => ({
      "@type":               "Event",
      name:                  ev.title,
      description:           ev.about,
      startDate:             `${ev.date}T${ev.start}:00${IST}`,
      endDate:               `${ev.date}T${ev.end}:00${IST}`,
      eventStatus:           "https://schema.org/EventScheduled",
      eventAttendanceMode:   "https://schema.org/OfflineEventAttendanceMode",
      image:                 `${siteUrl}${ev.image}`,
      url:                   `${siteUrl}/events#${ev.slug}`,
      location:              { "@type": "Place", name: "Project Soulfulness", address: contact.address },
      organizer:             { "@type": "Organization", name: "Project Soulfulness", url: siteUrl },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main className="bg-paper pt-32 lg:pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <header className="hero-in max-w-2xl">
            <span className="eyebrow">Upcoming Events</span>
            <h1 className="mt-3 font-serif font-semibold text-4xl lg:text-6xl text-ink">Join, learn, connect</h1>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
              Mindful mornings, laughter-filled evenings and conversations that matter. Everyone is welcome —
              come solo, bring a friend, and leave with a few more.
            </p>
          </header>

          {[...byMonth].map(([key, list]) => (
            <section key={key} className="mt-14" aria-labelledby={`m-${key}`}>
              <h2 id={`m-${key}`} className="flex items-center gap-4 font-serif font-semibold text-2xl lg:text-3xl text-ink">
                {MONTH_NAMES[Number(key.slice(5, 7)) - 1]} {key.slice(0, 4)}
                <span className="h-px flex-1 bg-forest/20" aria-hidden="true" />
              </h2>
              <div className="mt-8 space-y-8">
                {list.map((ev) => <EventCard key={ev.slug} ev={ev} first={ev.slug === events[0].slug} />)}
              </div>
            </section>
          ))}

          <aside className="mt-20 rounded-3xl bg-ink px-7 py-10 lg:px-12 text-center text-white">
            <h2 className="font-serif font-semibold text-2xl lg:text-3xl">Have an idea for an event?</h2>
            <p className="mt-3 text-white/80 max-w-lg mx-auto">
              We love hosting workshops, talks and circles led by our community. Tell us what you&apos;d like to see — or run.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Get in touch <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
