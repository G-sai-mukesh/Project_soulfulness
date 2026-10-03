"use client";

import Image from "next/image";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReveal } from "@/lib/useReveal";
import { contact, navLinks, navHref } from "@/lib/content";

export default function Footer() {
  const ref = useReveal<HTMLElement>();
  const onHome = usePathname() === "/";

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink text-white">
      {/* Curved top edge from the light page into the dark footer */}
      <svg className="absolute top-0 left-0 z-10 w-full h-14 lg:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,20 C1100,80 340,80 0,20 Z" fill="var(--color-paper)" />
      </svg>

      {/* Join CTA */}
      <div className="relative">
        <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(31,36,32,0.82), rgba(31,36,32,0.95))" }} />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-20 grid lg:grid-cols-[auto_1fr_auto] items-center gap-10">
          <div className="reveal-left flex justify-center lg:justify-start"><Logo size="lg" /></div>

          <div className="reveal text-center">
            <span className="eyebrow text-white/80!">Join the Community</span>
            <h2 className="mt-3 font-serif font-semibold text-3xl lg:text-5xl">Good People. Better Days.</h2>
            <p className="mt-4 text-base text-white/80 max-w-lg mx-auto">
              Be part of a community that believes in meaningful connections, mindful living, and happier days.
            </p>
          </div>

          <div className="reveal-right flex justify-center lg:justify-end">
            <a
              href={`mailto:${contact.email}?subject=I'd%20like%20to%20join%20Project%20Soulfulness`}
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Join the Community <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Contact + links share one row on wide screens; they stack (centred) below xl, where both can't fit */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-8 flex flex-col items-center gap-6 xl:flex-row xl:justify-between border-t border-white/10">
        <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-x-7 gap-y-3 text-sm text-white/80">
          <li className="flex items-center gap-2 whitespace-nowrap"><Mail size={16} className="text-forest" /><a href={`mailto:${contact.email}`} className="transition-colors hover:text-forest">{contact.email}</a></li>
          <li className="flex items-center gap-2 whitespace-nowrap"><Phone size={16} className="text-forest" /><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-forest">{contact.phone}</a></li>
          <li className="flex items-center gap-2 whitespace-nowrap"><MapPin size={16} className="text-forest" />{contact.address}</li>
        </ul>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.href} className="whitespace-nowrap"><Link href={navHref(l.href, onHome)} className="transition-colors hover:text-forest">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="pb-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Project Soulfulness. Made with care.
      </p>
    </footer>
  );
}
