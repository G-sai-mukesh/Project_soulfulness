"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, navHref } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const onHome   = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [section,  setSection]  = useState("#home");
  const active = onHome ? section : navLinks.find((l) => l.href.startsWith("/") && pathname.startsWith(l.href))?.href ?? "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the nav link for whichever section is mid-viewport (home page only)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setSection(`#${e.target.id}`); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    if (onHome) {
      navLinks.forEach((l) => {
        const el = l.href.startsWith("#") && document.querySelector(l.href);
        if (el) obs.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, [onHome]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow:      scrolled ? "0 4px 24px rgba(0,187,101,0.12)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between" style={{ height: scrolled ? 80 : 104, transition: "height .3s ease" }}>
        <Link href={navHref("#home", onHome)} aria-label="Project Soulfulness home"><Logo preload className={`transition-all duration-300 ${scrolled ? "h-16 lg:h-[72px]" : "h-[72px] lg:h-[92px]"}`} /></Link>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-9">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={navHref(l.href, onHome)}
                className="relative text-sm font-medium transition-colors hover:text-forest"
                style={{ color: active === l.href ? "var(--color-forest)" : "var(--color-ink)" }}
              >
                {l.label}
                <span
                  className="absolute left-0 -bottom-1.5 h-0.5 rounded-full bg-magenta transition-all duration-300"
                  style={{ width: active === l.href ? "100%" : "0%" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-95 hover:-translate-y-0.5"
        >
          Join the Community <ArrowRight size={16} />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-full bg-forest text-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden mx-4 mb-4 rounded-2xl bg-paper shadow-2xl border border-black/5 p-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={navHref(l.href, onHome)}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-xl text-base font-medium hover:bg-forest-soft transition-colors"
              style={{ color: active === l.href ? "var(--color-forest)" : "var(--color-ink)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-forest py-3 text-sm font-semibold text-white"
          >
            Join the Community <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
