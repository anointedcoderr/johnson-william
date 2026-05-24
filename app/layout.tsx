import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { firm } from "@/data/firm";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johnsonwilliam.example"),
  title: {
    default: `Trusted Legal Guidance | ${firm.firmName}`,
    template: `%s | ${firm.firmName}`,
  },
  description: `Speak with ${firm.firmName} for clear legal guidance, confidential consultation, and professional representation across bankruptcy, foreclosure, pharmaceutical liability, wrongful death, personal injury, and truck accident matters in Maryland.`,
  openGraph: {
    title: `Trusted Legal Guidance | ${firm.firmName}`,
    description: `Speak with ${firm.firmName} for clear legal guidance and confidential consultation.`,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable}`}>
      <body className="font-sans text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-ivory focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
