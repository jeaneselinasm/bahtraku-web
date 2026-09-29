import type { Metadata, Viewport } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-young-serif", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Bahtraku | Bahasa Transformasi Suku", template: "%s | Bahtraku" },
  description:
    "Bahtraku partners with churches and institutions across Indonesia to translate the Bible into mother tongues, disciple believers and serve every tribe.",
  openGraph: {
    title: "Bahtraku | God’s Word in every tribe’s language",
    description: "Bible translation, discipleship and community development across Indonesia.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // lets the phone pay bar sit above the iPhone home indicator
  themeColor: "#0E2A3B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${figtree.variable}`}>
      <body>
        <LanguageProvider>
          <a href="#main" className="skip">Skip to content</a>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
