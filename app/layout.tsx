import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashar Aamer | Developer & Editor",
  description:
    "A professional editor with a thousand hours of experience and a life long developer. Passionate about creating intuitive software and professional grade videos.",
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
        {children}
      </body>
    </html>
  );
}
