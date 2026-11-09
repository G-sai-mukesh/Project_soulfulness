"use client";

import type { ComponentProps } from "react";
import { useReveal } from "@/lib/useReveal";

/* A <section> with scroll-reveal, for sections that render on the server. */
export default function RevealSection(props: ComponentProps<"section">) {
  const ref = useReveal<HTMLElement>();
  return <section ref={ref} {...props} />;
}
