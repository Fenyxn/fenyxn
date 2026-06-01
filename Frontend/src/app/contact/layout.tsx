import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fenyxn. We build real-time fintech systems, trading automation, and enterprise platforms. Tell us about your project — we reply within one business day.",
  alternates: { canonical: "/contact/" },
  keywords: [
    "contact Fenyxn",
    "hire software studio India",
    "fintech development inquiry",
    "trading automation quote",
    "custom software project",
  ],
  openGraph: {
    title: "Contact Fenyxn — Let's Build Together",
    description:
      "Get in touch with Fenyxn. We build real-time fintech systems, trading automation, and enterprise platforms.",
    url: "/contact/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Contact Fenyxn" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fenyxn — Let's Build Together",
    description:
      "Get in touch with Fenyxn. We build real-time fintech systems, trading automation, and enterprise platforms.",
    images: ["/opengraph-image.png"],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
