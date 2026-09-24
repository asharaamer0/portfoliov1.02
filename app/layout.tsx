import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asharaamer.dev"),
  title: {
    default: "Ashar Aamer | Developer & Video Editor",
    template: "%s | Ashar Aamer",
  },
  description:
    "Ashar Aamer is a Pakistan-based developer and motion designer specializing in SaaS products, Next.js web development, and After Effects animation — available for international clients.",
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
    "After Effects",
    "Next.js developer",
    "international clients",
  ],
  authors: [{ name: "Ashar Aamer", url: "https://www.asharaamer.dev" }],
  creator: "Ashar Aamer",
  publisher: "Ashar Aamer",
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.asharaamer.dev",
    siteName: "Ashar Aamer Portfolio",
    title: "Ashar Aamer | Developer & Video Editor",
    description:
      "Pakistan-based developer and motion designer specializing in SaaS products, Next.js web development, and After Effects animation — available for clients worldwide.",
    locale: "en_US",
    images: [
      {
        url: "/pfpiconnew.png",
        width: 1086,
        height: 1448,
        alt: "Ashar Aamer profile image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashar Aamer | Developer & Video Editor",
    description:
      "Pakistan-based developer and motion designer specializing in SaaS products, Next.js web development, and After Effects animation — available for clients worldwide.",
    images: ["/pfpiconnew.png"],
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
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
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
              url: "https://www.asharaamer.dev",
              image: "https://www.asharaamer.dev/pfpiconnew.png",
              jobTitle: "Developer & Video Editor",
              description:
                "Pakistan-based developer and motion designer specializing in SaaS products, Next.js web development, and After Effects animation, available for international clients.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Pakistan",
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Web Development",
                "SaaS",
                "After Effects",
                "Motion Design",
                "Video Editing",
                "Figma",
                "React",
                "Next.js",
              ],
              sameAs: [
                "https://discord.com/users/suffixs",
                "https://instagram.com/asharaamer",
                "https://github.com/Suffixsxd",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ashar Aamer Portfolio",
              url: "https://www.asharaamer.dev",
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: "Ashar Aamer",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
