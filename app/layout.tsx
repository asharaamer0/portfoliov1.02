import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suffixs.vercel.app"),
  title: {
    default: "Ashar Aamer | Developer & Video Editor",
    template: "%s | Ashar Aamer",
  },
  description:
    "Ashar Aamer is a Pakistan-based developer and video editor available for international clients. Explore web development, SaaS, motion design, video editing, and client work.",
  keywords: [
    "Ashar Aamer",
    "Pakistan developer",
    "Pakistan video editor",
    "freelance developer",
    "freelance video editor",
    "web development",
    "SaaS development",
    "motion design",
    "video editing",
    "international clients",
  ],
  authors: [{ name: "Ashar Aamer", url: "https://suffixs.vercel.app" }],
  creator: "Ashar Aamer",
  publisher: "Ashar Aamer",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://suffixs.vercel.app",
    siteName: "Ashar Aamer Portfolio",
    title: "Ashar Aamer | Developer & Video Editor",
    description:
      "Pakistan-based developer and video editor available for clients worldwide.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashar Aamer | Developer & Video Editor",
    description:
      "Pakistan-based developer and video editor available for clients worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body
        className="min-h-screen overflow-x-hidden bg-[#111111] text-white"
        data-scroll-behavior="smooth"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashar Aamer",
              url: "https://suffixs.vercel.app",
              image: "https://suffixs.vercel.app/pfpicon.png",
              jobTitle: "Developer and Video Editor",
              description:
                "Pakistan-based developer and video editor available for international clients.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Pakistan",
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Web development",
                "SaaS development",
                "Motion design",
                "Video editing",
                "Figma",
                "React",
                "Next.js",
              ],
              sameAs: [
                "https://discord.com/users/suffixs",
                "https://instagram.com/asharaamer",
                "https://github.com/Suffixsxd",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Client inquiries",
                url: "https://suffixs.vercel.app/#contact",
                availableLanguage: ["English", "Urdu"],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
