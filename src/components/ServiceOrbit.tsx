import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Leaf } from "@/components/Decor";
import { experiences } from "@/lib/content";

/* Hero "solar system": the logo at the centre, the services on two rings.
   Pure CSS (see the "Hero service orbit" block in globals.css) — each ring rotates
   as one piece and every card counter-rotates to stay upright. Cards on the same
   ring never move relative to each other, and the two radii are far enough apart
   that labels can't collide at any angle. */

// Clockwise from 12 o'clock; photos reveal in this order (ring 0 = inner, ring 1 = outer).
// Six on the outer ring (60° apart), four on the inner ring offset 45° so they sit between.
const slots = [
  { ring: 1, angle: -90 }, { ring: 0, angle: -45 }, { ring: 1, angle: -30 }, { ring: 1, angle: 30 },
  { ring: 0, angle: 45 },  { ring: 1, angle: 90 },  { ring: 0, angle: 135 }, { ring: 1, angle: 150 },
  { ring: 1, angle: 210 }, { ring: 0, angle: 225 },
];

// Two extra photos beyond the experiences, linking to the experience they belong to.
const extras = [
  { id: "exp-cafe",   title: "Café & Coffee Raving", orbitImage: "/images/exp-cafe.jpg" },
  { id: "exp-comedy", title: "Stand-up Comedy",      orbitImage: "/images/exp-comedy.jpg" },
];

const particles = [
  { r: 32, dur: 34, start: 20 }, { r: 32, dur: 34, start: 200 },
  { r: 47, dur: 52, start: 110, magenta: true }, { r: 47, dur: 70, start: 290 },
];

export default function ServiceOrbit() {
  const photos = [...experiences.map(({ id, title, orbitImage }) => ({ id, title, orbitImage })), ...extras];
  const placed = photos.map((p, i) => ({ ...p, ...slots[i], order: i }));

  return (
    <div className="orbit" aria-label="Our experiences">
      <svg className="orbit-paths" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="32" className="orbit-path" strokeDasharray="0.6 1.6" />
        <circle cx="50" cy="50" r="47" className="orbit-path" strokeDasharray="14 3 1 3" />
        <circle cx="50" cy="50" r="52" className="orbit-path orbit-path-extra" strokeDasharray="0.4 2.4" />
      </svg>

      {particles.map((p, i) => (
        <div key={i} className={`orbit-particle ${"magenta" in p ? "orbit-particle-magenta" : ""}`} style={{ ["--R" as string]: `${p.r}cqw`, ["--dur" as string]: `${p.dur}s`, rotate: `${p.start}deg` } as React.CSSProperties}>
          <span />
        </div>
      ))}

      <span className="orbit-decor orbit-drift" style={{ left: "92%", top: "9%",  width: "3.6cqw", ["--tilt" as string]: "30deg", animationDelay: "-1.5s" } as React.CSSProperties}><Leaf /></span>
      <span className="orbit-decor orbit-drift" style={{ left: "5%",  top: "84%", width: "3.2cqw", ["--tilt" as string]: "200deg", animationDelay: "-4s" } as React.CSSProperties}><Leaf /></span>

      <div className="orbit-logo">
        <Image src={logo} alt="Project Soulfulness" sizes="(min-width:1024px) 320px, 40vw" className="h-full w-full" />
      </div>

      {[0, 1].map((ring) => (
        <div key={ring} className={`orbit-ring orbit-ring-${ring}`}>
          {placed.filter((s) => s.ring === ring).map((s) => (
            <div key={s.order} className="orbit-slot" style={{ ["--a" as string]: `${s.angle}deg`, ["--i" as string]: s.order } as React.CSSProperties}>
              <div className="orbit-counter">
                <span className="orbit-seed" />
                <div className="orbit-reveal">
                  <a href={`#${s.id}`} className="orbit-card" aria-label={s.title} title={s.title}>
                    <span className="orbit-photo">
                      <Image src={s.orbitImage} alt="" fill sizes="(min-width:1024px) 100px, 16vw" className="object-cover" />
                    </span>
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
