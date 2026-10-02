"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import Icon from "@/components/Icon";
import ServiceOrbit from "@/components/ServiceOrbit";
import HeroBackdrop from "@/components/HeroBackdrop";
import { heroPillars, heroVideoSrc } from "@/lib/content";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVideoOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen]);

  const enter = (delay: number) => ({ animationDelay: `${delay}s` });

  return (
    <section id="home" className="relative isolate overflow-hidden bg-cream">
      <HeroBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-32 lg:pt-36 pb-32 lg:pb-40 min-h-[92vh] grid items-center gap-10 lg:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="max-w-xl">
          <span className="hero-in eyebrow" style={enter(0.1)}>A Social Wellness Space</span>

          <h1 className="hero-in mt-5 font-sans font-bold leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl" style={enter(0.2)}>
            <span className="text-ink">Good People.</span><br />
            <span className="text-forest">Better Days.</span>
          </h1>

          <p className="hero-in mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-md" style={enter(0.35)}>
            A warm, welcoming space to unwind, connect, and find balance — through
            meaningful experiences, community, and a kinder way of living.
          </p>

          <div className="hero-in mt-8 flex flex-wrap items-center gap-5" style={enter(0.5)}>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest/25 transition hover:brightness-95 hover:-translate-y-0.5"
            >
              Be Part of the Journey <ArrowRight size={16} />
            </a>
            <button onClick={() => setVideoOpen(true)} className="group inline-flex items-center gap-3 text-sm font-medium text-ink">
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-forest text-forest transition group-hover:bg-forest group-hover:text-white">
                <Play size={16} className="ml-0.5" fill="currentColor" />
              </span>
              Watch Video
            </button>
          </div>

          <ul className="hero-in mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6 max-w-lg" style={enter(0.65)}>
            {heroPillars.map((p, i) => (
              <li key={p.label} className={`flex flex-col items-center text-center px-2 ${i > 0 ? "sm:border-l border-forest/15" : ""}`}>
                <Icon name={p.icon} size={30} strokeWidth={1.6} className="text-forest" />
                <span className="mt-2 text-xs font-medium leading-tight text-ink/80">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services orbiting the logo */}
        <ServiceOrbit />
      </div>

      {/* Wave into the next section */}
      <svg className="absolute bottom-0 left-0 w-full h-20 lg:h-28 z-10" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,70 C240,10 420,10 720,60 C1000,108 1200,110 1440,40 L1440,120 L0,120 Z" fill="var(--color-paper)" />
      </svg>

      {videoOpen && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-5"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Project Soulfulness video"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-ink shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
            {heroVideoSrc ? (
              <video src={heroVideoSrc} controls autoPlay className="aspect-video w-full" />
            ) : (
              <div className="relative aspect-video w-full">
                <Image src="/images/about-cafe.jpg" alt="" fill className="object-cover opacity-50" sizes="768px" />
                <div className="absolute inset-0 grid place-items-center p-6 text-center text-white">
                  <div>
                    <p className="font-hand text-4xl">Our story video is coming soon ♡</p>
                    <p className="mt-2 text-sm text-white/80">Until then, come say hello over coffee.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
