"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroGallery } from "@/lib/content";

/* Where each card sits by its distance from the front card (0). Anything further back stays hidden behind. */
const layers = [
  { x: 0,  y: 0,  rotate: -2, scale: 1,    opacity: 1 },
  { x: 18, y: -6, rotate: 5,  scale: 0.94, opacity: 1 },
  { x: 34, y: -2, rotate: 10, scale: 0.88, opacity: 0.9 },
];

export default function PhotoStack() {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const n = heroGallery.length;
  const go = (step: number) => setIndex((i) => (i + step + n) % n);

  return (
    <div>
      <div
        className="relative aspect-[4/3] w-full max-w-[19rem] sm:max-w-[21rem]"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Moments from Project Soulfulness"
      >
        {heroGallery.map((img, i) => {
          const depth = (i - index + n) % n;
          const l = layers[Math.min(depth, layers.length - 1)];
          const hidden = depth >= layers.length;
          return (
            <figure
              key={img.src}
              className="absolute inset-0 overflow-hidden rounded-3xl border-[6px] border-white bg-white shadow-xl transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
              style={{
                zIndex:    n - depth,
                opacity:   hidden ? 0 : l.opacity,
                transform: `translate(${l.x}px, ${l.y}px) rotate(${l.rotate}deg) scale(${l.scale})`,
              }}
              aria-hidden={depth !== 0}
            >
              <Image src={img.src} alt={img.caption} fill className="object-cover" sizes="(min-width:640px) 336px, 304px" />
            </figure>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-4 max-w-[19rem] sm:max-w-[21rem]">
        <button
          onClick={() => go(-1)}
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border-2 border-forest text-forest transition hover:bg-forest hover:text-white"
          aria-label="Previous photo"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="min-w-0 flex-1 text-center">
          <p className="truncate font-hand text-2xl leading-none text-forest" aria-live="polite">{heroGallery[index].caption}</p>
          <div className="mt-2 flex justify-center gap-1.5">
            {heroGallery.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all"
                style={{ width: i === index ? 18 : 6, background: i === index ? "var(--color-forest)" : "color-mix(in srgb, var(--color-forest) 25%, transparent)" }}
                aria-label={`Show photo ${i + 1}: ${img.caption}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => go(1)}
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-forest text-white shadow-md transition hover:brightness-95"
          aria-label="Next photo"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
