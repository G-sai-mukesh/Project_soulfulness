import type { Metadata } from "next";
import Navbar       from "@/components/Navbar";
import HeroSection  from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Experiences  from "@/components/Experiences";
import WhoWeServe   from "@/components/WhoWeServe";
import Positioning  from "@/components/Positioning";
import Events       from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Footer       from "@/components/Footer";
import { contact, siteUrl } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

/* Tells search engines this is a real café in Madhapur, Hyderabad (helps local and map searches). */
const localBusiness = {
  "@context":    "https://schema.org",
  "@type":       "CafeOrCoffeeShop",
  name:          "Project Soulfulness",
  description:   "A garden café and social-wellness community in Madhapur, Hyderabad.",
  url:           siteUrl,
  image:         `${siteUrl}/images/about-garden-bulldogs.jpg`,
  logo:          `${siteUrl}/images/logo.png`,
  email:         contact.email,
  telephone:     contact.phone.replace(/\s/g, ""),
  address: {
    "@type":         "PostalAddress",
    streetAddress:   "Western Dallas Center, Dallas Centre Rd, Silpa Gram Craft Village",
    addressLocality: "Madhapur, Hyderabad",
    addressRegion:   "Telangana",
    postalCode:      "500032",
    addressCountry:  "IN",
  },
  hasMap:        contact.mapsUrl,
  servesCuisine: ["Coffee", "Healthy food"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Experiences />
        <WhoWeServe />
        <Positioning />
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
