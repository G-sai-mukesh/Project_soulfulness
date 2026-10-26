"use client";

import ServiceOrbit from "@/components/ServiceOrbit";
import HeroBackdrop from "@/components/HeroBackdrop";
import PhotoStack from "@/components/PhotoStack";

export default function HeroSection() {
  const enter = (delay: number) => ({ animationDelay: `${delay}s` });

  return (
    <section id="home" className="relative isolate overflow-hidden bg-paper">
      <HeroBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-40 lg:pt-52 pb-32 lg:pb-40 min-h-[92vh] grid items-center gap-10 lg:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
        <div className="max-w-xl">
          <span className="hero-in eyebrow text-sm! lg:text-base!" style={enter(0.1)}>A Social Wellness Space</span>

          <h1 className="hero-in mt-5 font-sans font-bold leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl" style={enter(0.2)}>
            <span className="text-ink">Good People</span><br />
            <span className="text-forest">Better Days</span>
          </h1>

          <p className="hero-in mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-md" style={enter(0.35)}>
            A warm, welcoming space to unwind, connect and find balance — through
            meaningful experiences in a community with a kinder way of living.
          </p>

          <div className="hero-in mt-10" style={enter(0.5)}>
            <PhotoStack />
          </div>
        </div>

        {/* Services orbiting the logo */}
        <ServiceOrbit />
      </div>

      {/* Wave into the next section */}
      <svg className="absolute bottom-0 left-0 w-full h-20 lg:h-28 z-10" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,70 C240,10 420,10 720,60 C1000,108 1200,110 1440,40 L1440,120 L0,120 Z" fill="var(--color-paper)" />
      </svg>
    </section>
  );
}
