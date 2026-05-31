import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const SITE_URL = "https://fenyxn.in";
const SITE_DESC =
  "Fenyxn is a software studio building real-time fintech systems, trading automation, and production-grade enterprise platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fenyxn — Real-time Fintech & Software Studio",
    template: "%s — Fenyxn",
  },
  description: SITE_DESC,
  keywords: [
    "Fenyxn",
    "software studio",
    "fintech",
    "algorithmic trading",
    "trading automation",
    "real-time systems",
    "FastAPI",
    "Next.js",
    "full-stack development",
    "India",
  ],
  authors: [{ name: "Fenyxn" }],
  creator: "Fenyxn",
  publisher: "Fenyxn",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Fenyxn",
    title: "Fenyxn — Real-time Fintech & Software Studio",
    description: SITE_DESC,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenyxn — Real-time Fintech & Software Studio",
    description: SITE_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fenyxn",
  url: SITE_URL,
  description: SITE_DESC,
  email: "fenyxn2402@gmail.com",
  sameAs: ["https://github.com/Fenyxn", "https://portfolio.fenyxn.in"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <AnimatedBackground />
          <div className="relative z-10 flex flex-col min-h-full">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
