import { Leaf } from "@/components/Decor";

/* Decorative, non-interactive layer in the hero (see "Hero backdrop" in globals.css): soft green
   hills along the bottom edge and drifting dots and leaves, on a plain white background.
   Greens are tints of the logo green. */

const drifters = [
  { x: "58%", y: "70%", dur: "38s", d: "0s",   leaf: false }, { x: "70%", y: "22%", dur: "46s", d: "-12s", leaf: false, magenta: true },
  { x: "92%", y: "48%", dur: "42s", d: "-20s", leaf: false }, { x: "48%", y: "88%", dur: "50s", d: "-30s", leaf: false, magenta: true },
  { x: "84%", y: "80%", dur: "54s", d: "-8s",  leaf: true },  { x: "62%", y: "24%", dur: "60s", d: "-26s", leaf: true },
  { x: "30%", y: "90%", dur: "58s", d: "-40s", leaf: true },
];

/* Leaves scattered around the hero, gently drifting and turning. size in px, r = starting tilt. */
const leaves = [
  { x: "4%",  y: "18%", size: 22, r: 20,  dur: "44s", d: "-6s",  mobile: true },
  { x: "38%", y: "12%", size: 16, r: 140, dur: "52s", d: "-18s", mobile: false },
  { x: "46%", y: "46%", size: 20, r: -30, dur: "48s", d: "-32s", mobile: false },
  { x: "52%", y: "8%",  size: 26, r: 75,  dur: "56s", d: "-10s", mobile: true },
  { x: "76%", y: "6%",  size: 18, r: 200, dur: "40s", d: "-24s", mobile: false },
  { x: "96%", y: "28%", size: 24, r: -60, dur: "50s", d: "-2s",  mobile: true },
  { x: "88%", y: "62%", size: 20, r: 110, dur: "62s", d: "-36s", mobile: false },
  { x: "68%", y: "84%", size: 28, r: 30,  dur: "46s", d: "-14s", mobile: true },
  { x: "14%", y: "70%", size: 18, r: 250, dur: "54s", d: "-28s", mobile: false },
  { x: "40%", y: "78%", size: 22, r: -100, dur: "58s", d: "-44s", mobile: true },
];

export default function HeroBackdrop() {
  return (
    <div className="hero-bg" aria-hidden="true">
      {/* Soft green hills along the bottom edge */}
      <svg className="hb-flow" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M0 760C220 690 380 820 640 760S1080 620 1440 690V900H0Z" className="hb-flow-a" />
        <path d="M0 820C260 770 520 870 800 810S1220 730 1440 780V900H0Z" className="hb-flow-b" />
      </svg>

      {drifters.map((d, i) => (
        <span key={`d${i}`} className={`hb-drift ${d.leaf ? "hb-drift-leaf" : "hb-drift-dot"} ${"magenta" in d ? "hb-drift-magenta" : ""}`} style={{ left: d.x, top: d.y, animationDuration: d.dur, animationDelay: d.d }}>
          {d.leaf && <Leaf />}
        </span>
      ))}

      {leaves.map((l, i) => (
        <span key={`l${i}`} className={`hb-drift hb-leaf ${l.mobile ? "" : "max-lg:hidden"}`} style={{ left: l.x, top: l.y, width: l.size, height: l.size, rotate: `${l.r}deg`, animationDuration: l.dur, animationDelay: l.d }}>
          <Leaf />
        </span>
      ))}
    </div>
  );
}
