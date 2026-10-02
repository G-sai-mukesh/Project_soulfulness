import { Leaf } from "@/components/Decor";

/* Decorative, non-interactive atmosphere behind the hero (see "Hero backdrop" in globals.css).
   Everything is CSS/SVG; greens are tints of the logo green. The left half stays clear so
   the headline keeps its contrast. */

// A soft botanical sprig: leaves alternating along a gently curved stem.
function Sprig() {
  const leaves = [
    { x: 102, y: 262, r: -52 }, { x: 99, y: 226, r: 48 }, { x: 101, y: 190, r: -46 },
    { x: 104, y: 154, r: 44 },  { x: 104, y: 118, r: -40 }, { x: 103, y: 82, r: 38 },
    { x: 101, y: 48,  r: -30 }, { x: 100, y: 26,  r: 0 },
  ];
  return (
    <svg viewBox="0 0 200 300" className="h-full w-full" aria-hidden="true">
      <path d="M100 300C94 230 112 150 100 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <path key={i} d="M0 0C14-10 16-32 0-48C-16-32-14-10 0 0Z" transform={`translate(${l.x} ${l.y}) rotate(${l.r})`} fill="currentColor" />
      ))}
    </svg>
  );
}

const bokeh = [
  { x: "62%", y: "14%", s: 120, d: "0s" },  { x: "88%", y: "30%", s: 70,  d: "-4s" },
  { x: "96%", y: "62%", s: 150, d: "-8s" }, { x: "54%", y: "78%", s: 90,  d: "-2s" },
  { x: "74%", y: "90%", s: 60,  d: "-6s" }, { x: "47%", y: "22%", s: 80,  d: "-10s" },
  { x: "8%",  y: "96%", s: 110, d: "-5s" },
];

const drifters = [
  { x: "58%", y: "70%", dur: "38s", d: "0s",   leaf: false }, { x: "70%", y: "22%", dur: "46s", d: "-12s", leaf: false, magenta: true },
  { x: "92%", y: "48%", dur: "42s", d: "-20s", leaf: false }, { x: "48%", y: "88%", dur: "50s", d: "-30s", leaf: false, magenta: true },
  { x: "84%", y: "80%", dur: "54s", d: "-8s",  leaf: true },  { x: "62%", y: "24%", dur: "60s", d: "-26s", leaf: true },
  { x: "30%", y: "90%", dur: "58s", d: "-40s", leaf: true },
];

export default function HeroBackdrop() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hb-blob hb-blob-1" />
      <div className="hb-blob hb-blob-2" />
      <div className="hb-blob hb-blob-3" />
      <div className="hb-sun" />

      {/* Flowing translucent shapes along the bottom and behind the orbit */}
      <svg className="hb-flow" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M0 760C220 690 380 820 640 760S1080 620 1440 690V900H0Z" className="hb-flow-a" />
        <path d="M0 820C260 770 520 870 800 810S1220 730 1440 780V900H0Z" className="hb-flow-b" />
        <path d="M1440 120C1230 150 1060 300 1010 470S1100 760 1440 800Z" className="hb-flow-c" />
      </svg>

      <div className="hb-foliage hb-foliage-tr"><Sprig /></div>
      <div className="hb-foliage hb-foliage-tr2"><Sprig /></div>
      <div className="hb-foliage hb-foliage-bl"><Sprig /></div>
      <div className="hb-foliage hb-foliage-bl2"><Sprig /></div>

      {bokeh.map((b, i) => (
        <span key={i} className="hb-bokeh" style={{ left: b.x, top: b.y, width: b.s, height: b.s, animationDelay: b.d }} />
      ))}

      {drifters.map((d, i) => (
        <span key={`d${i}`} className={`hb-drift ${d.leaf ? "hb-drift-leaf" : "hb-drift-dot"} ${"magenta" in d ? "hb-drift-magenta" : ""}`} style={{ left: d.x, top: d.y, animationDuration: d.dur, animationDelay: d.d }}>
          {d.leaf && <Leaf />}
        </span>
      ))}

      <div className="hb-veil" />
      <div className="hb-grain" />
    </div>
  );
}
