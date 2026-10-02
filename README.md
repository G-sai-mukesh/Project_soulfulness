# Project Soulfulness

Landing page for Project Soulfulness — a social-wellness café and community space.

Same stack as `new-static-website-liv`: Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · lucide-react.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
public/images/        photos (Unsplash, free licence)
src/app/              layout, page, global styles, favicon
src/components/       one component per page section
src/lib/content.ts    all copy, events, testimonials, contact details
src/lib/useReveal.ts  scroll-reveal hook
```

## Before launch

- Replace placeholder contact details, events and testimonials in `src/lib/content.ts`.
- Set `heroVideoSrc` in `src/lib/content.ts` to enable the "Watch Video" player.
