import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title:       "Contact Us",
  description: "Get in touch with Project Soulfulness — ask about joining the community, upcoming events, workshops or collaborations.",
  alternates:  { canonical: "/contact" },
  openGraph: {
    title:       "Contact Project Soulfulness",
    description: "Say hello — we'd love to hear from you.",
    type:        "website",
    url:         "/contact",
  },
};

const details = [
  { icon: Mail,   label: "Email us",  value: contact.email,   href: `mailto:${contact.email}` },
  { icon: Phone,  label: "Call us",   value: contact.phone,   href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Visit us",  value: contact.address, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper pt-32 lg:pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <header className="hero-in">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-3 font-serif font-semibold text-4xl lg:text-6xl text-ink">Let&apos;s talk over coffee</h1>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted max-w-md">
              Thinking of joining, curious about an event, or want to collaborate with us? Send a note —
              we read every message and will get back to you soon.
            </p>

            <ul className="mt-10 space-y-4">
              {details.map(({ icon: I, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 rounded-3xl border border-black/5 bg-paper p-5 shadow-md">
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-forest-soft text-forest">
                    <I size={22} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-widest text-magenta">{label}</span>
                    {href
                      ? <a href={href} className="block break-words text-base font-medium text-ink transition-colors hover:text-forest">{value}</a>
                      : <span className="block text-base font-medium text-ink">{value}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </header>

          <section className="hero-in rounded-3xl border border-black/5 bg-paper p-7 lg:p-10 shadow-xl" style={{ animationDelay: ".15s" }} aria-labelledby="form-heading">
            <h2 id="form-heading" className="font-serif font-semibold text-2xl lg:text-3xl text-ink">Send us a message</h2>
            <p className="mt-2 text-sm text-muted">Good people. Better days. It starts with hello.</p>
            <div className="mt-8"><ContactForm /></div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
