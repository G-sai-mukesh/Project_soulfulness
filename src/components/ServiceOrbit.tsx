import Image from "next/image";
import logo from "../../public/images/logo.png";
import Icon from "@/components/Icon";
import { Butterfly, Leaf } from "@/components/Decor";
import { experiences } from "@/lib/content";

/* Hero "solar system": the logo at the centre, the ten services on two rings.
   Pure CSS (see the "Hero service orbit" block in globals.css) — each ring rotates
   as one piece and every card counter-rotates to stay upright. Cards on the same
   ring never move relative to each other, and the two radii are far enough apart
   that labels can't collide at any angle. */

// Clockwise from 12 o'clock; services reveal in this order (ring 0 = inner, ring 1 = outer).
const slots = [
  { ring: 1, angle: -90 }, { ring: 0, angle: -45 }, { ring: 1, angle: -30 }, { ring: 1, angle: 30 },
  { ring: 0, angle: 45 },  { ring: 1, angle: 90 },  { ring: 0, angle: 135 }, { ring: 1, angle: 150 },
  { ring: 1, angle: 210 }, { ring: 0, angle: 225 },
];

const particles = [
  { r: 24, dur: 34, start: 20 }, { r: 24, dur: 34, start: 200 },
  { r: 42, dur: 52, start: 110, magenta: true }, { r: 42, dur: 70, start: 290 },
];

export default function ServiceOrbit() {
  const placed = experiences.map((e, i) => ({ ...e, ...slots[i], order: i }));

  return (
    <div className="orbit" aria-label="Our ten experiences">
      <div className="orbit-aura" />
      <svg className="orbit-bg-rings" viewBox="-20 -20 140 140" aria-hidden="true">
        <circle cx="50" cy="50" r="56" strokeDasharray="0.3 1.8" />
        <circle cx="50" cy="50" r="64" className="orbit-bg-far" />
        <circle cx="106" cy="50" r=".8" className="twinkle" />
        <circle cx="10.4" cy="89.6" r=".7" className="twinkle" style={{ animationDelay: "-2s" }} />
        <circle cx="50" cy="-14" r=".7" className="twinkle" style={{ animationDelay: "-3.5s" }} />
      </svg>
      <div className="orbit-glow" />

      <svg className="orbit-paths" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="17" className="orbit-path orbit-path-core" />
        <circle cx="50" cy="50" r="24" className="orbit-path" strokeDasharray="0.6 1.6" />
        <circle cx="50" cy="50" r="42" className="orbit-path" strokeDasharray="14 3 1 3" />
        <circle cx="50" cy="50" r="48.5" className="orbit-path orbit-path-extra" strokeDasharray="0.4 2.4" />
      </svg>

      {particles.map((p, i) => (
        <div key={i} className={`orbit-particle ${"magenta" in p ? "orbit-particle-magenta" : ""}`} style={{ ["--R" as string]: `${p.r}cqw`, ["--dur" as string]: `${p.dur}s`, rotate: `${p.start}deg` } as React.CSSProperties}>
          <span />
        </div>
      ))}

      <span className="orbit-decor orbit-drift" style={{ left: "7%",  top: "12%", width: "6.5cqw", ["--tilt" as string]: "-12deg" } as React.CSSProperties}><Butterfly className="splash-flutter" /></span>
      <span className="orbit-decor orbit-drift" style={{ left: "90%", top: "86%", width: "5cqw",   ["--tilt" as string]: "10deg", animationDelay: "-3s" } as React.CSSProperties}><Butterfly className="splash-flutter" /></span>
      <span className="orbit-decor orbit-drift" style={{ left: "92%", top: "9%",  width: "3.6cqw", ["--tilt" as string]: "30deg", animationDelay: "-1.5s" } as React.CSSProperties}><Leaf /></span>
      <span className="orbit-decor orbit-drift" style={{ left: "5%",  top: "84%", width: "3.2cqw", ["--tilt" as string]: "200deg", animationDelay: "-4s" } as React.CSSProperties}><Leaf /></span>

      <div className="orbit-logo">
        <Image src={logo} alt="Project Soulfulness" sizes="(min-width:1024px) 180px, 30vw" className="h-full w-full" />
      </div>

      {[0, 1].map((ring) => (
        <div key={ring} className={`orbit-ring orbit-ring-${ring}`}>
          {placed.filter((s) => s.ring === ring).map((s) => (
            <div key={s.id} className="orbit-slot" style={{ ["--a" as string]: `${s.angle}deg`, ["--i" as string]: s.order } as React.CSSProperties}>
              <div className="orbit-counter">
                <span className="orbit-seed" />
                <div className="orbit-reveal">
                  <a href={`#${s.id}`} className="orbit-card">
                    <span className="orbit-photo">
                      <Image src={s.image} alt="" fill sizes="(min-width:1024px) 80px, 14vw" className="object-cover" />
                    </span>
                    <span className="orbit-badge" style={{ background: s.accent }}>
                      <Icon name={s.icon} strokeWidth={2.2} className="h-[58%] w-[58%]" />
                    </span>
                    <span className="orbit-label">{s.title}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
