import type { Metadata } from "next";
import { Outfit, Lora, Caveat, Dancing_Script } from "next/font/google";
import "./globals.css";
import Splash from "@/components/Splash";
import FlyingButterflies from "@/components/FlyingButterflies";
import { siteUrl } from "@/lib/content";

const outfit = Outfit({
  subsets:  ["latin"],
  variable: "--font-outfit",
  weight:   ["300", "400", "500", "600", "700", "800"],
  display:  "swap",
});

const lora = Lora({
  subsets:  ["latin"],
  variable: "--font-lora",
  weight:   ["500", "600", "700"],
  display:  "swap",
});

const caveat = Caveat({
  subsets:  ["latin"],
  variable: "--font-caveat",
  weight:   ["500", "700"],
  display:  "swap",
});

const dancing = Dancing_Script({
  subsets:  ["latin"],
  variable: "--font-dancing",
  weight:   ["600", "700"],
  display:  "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:  "Project Soulfulness | Good People. Better Days.",
    template: "%s | Project Soulfulness",
  },
  description: "A garden café and social-wellness community in Madhapur, Hyderabad — coffee, jamming sessions, comedy nights, French bulldogs, group treks and workshops for young people to unwind and make real friends.",
  keywords:    "Project Soulfulness, café in Madhapur, pet friendly café Hyderabad, French bulldog café, community café Hyderabad, things to do in Hyderabad, jamming sessions Hyderabad, stand-up comedy Hyderabad, make friends in Hyderabad, social wellness",
  openGraph: {
    title:       "Project Soulfulness | Good People. Better Days.",
    description: "A garden café and community in Madhapur, Hyderabad. More than a café — a community for a calmer you.",
    type:        "website",
    locale:      "en_IN",
    siteName:    "Project Soulfulness",
    images:      [{ url: "/images/about-garden-bulldogs.jpg", width: 1400, height: 933, alt: "Project Soulfulness garden café with French bulldogs" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/about-garden-bulldogs.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable} ${caveat.variable} ${dancing.variable}`}>
      <body className="font-sans antialiased">
        <Splash />
        <FlyingButterflies />
        {children}
      </body>
    </html>
  );
}
