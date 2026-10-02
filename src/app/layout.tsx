import type { Metadata } from "next";
import { Outfit, Lora, Caveat, Dancing_Script } from "next/font/google";
import "./globals.css";
import Splash from "@/components/Splash";

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
  title:       "Project Soulfulness | Good People. Better Days.",
  description: "A warm social-wellness space — part coffee shop, part community sanctuary — where young people unwind, connect, and find balance.",
  keywords:    "Project Soulfulness, social wellness, community cafe, mindfulness, yoga, loneliness, young adults",
  openGraph: {
    title:       "Project Soulfulness | Good People. Better Days.",
    description: "More than a café. A community for a calmer you.",
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable} ${caveat.variable} ${dancing.variable}`}>
      <body className="font-sans antialiased">
        <Splash />
        {children}
      </body>
    </html>
  );
}
