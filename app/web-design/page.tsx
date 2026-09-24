import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Sidebar from "@/app/components/Sidebar";

export const metadata = {
  title: "Figma, ReactJS & Web Design | Ashar Aamer",
  description:
    "Ashar Aamer designs in Figma and builds with React and Next.js — responsive interfaces, component systems, and portfolio-grade websites for clients worldwide.",
  openGraph: {
    title: "Figma, ReactJS & Web Design | Ashar Aamer",
    description:
      "Responsive interfaces designed in Figma and built with React and Next.js by Ashar Aamer.",
    url: "/web-design",
    images: [
      { url: "/suffixsportfolio.png", alt: "Suffixs portfolio website" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Figma, ReactJS & Web Design | Ashar Aamer",
    description:
      "Responsive interfaces designed in Figma and built with React and Next.js by Ashar Aamer.",
    images: ["/suffixsportfolio.png"],
  },
};

export default function WebDesignPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10 lg:pl-12 lg:pr-10 lg:py-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#hero"
            className="group mb-8 inline-flex items-center gap-2 rounded-full bg-[#1e1e1e] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-[#2a2a2a] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back home
          </Link>

          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Figma, ReactJS & Web Design
          </h1>
          <p className="mb-10 text-lg text-[#9ca3af]">
            Designing and building interfaces that feel intuitive, fast, and
            memorable.
          </p>

          <article className="max-w-none text-lg leading-relaxed">
            <p className="mb-6 text-[#b0b0b0]">
              Web design is the bridge between an idea and its audience. Every
              project starts in Figma, where structure, typography, color, and
              interaction come together before a single line of code is written.
              That planning phase is what separates a pretty page from a product
              that actually works.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Design in Figma
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              Figma is where the visual language is defined. Components,
              auto-layout, and design tokens keep everything consistent. Every
              screen is designed with responsiveness in mind, so the same
              system scales from mobile to desktop without losing its identity.
              Prototyping in Figma also makes it easy to test flows and catch
              usability issues early.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Built with React
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              Once the design is locked in, it is brought to life with React.
              Component-based architecture keeps the codebase clean and
              maintainable. Next.js handles routing, rendering, and performance
              optimizations out of the box. The result is a site that loads
              quickly, feels snappy, and is easy to extend over time.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Motion on the web
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              Static websites are forgettable. Subtle scroll animations,
              hover states, and page transitions add personality without
              slowing things down. The key is restraint — motion should guide,
              not distract. Every animation has a purpose, whether it is
              drawing attention to a call-to-action or making a page transition
              feel seamless.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Typography and color
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              Type and color do most of the heavy lifting in interface design.
              A strong type hierarchy makes content scannable. A limited color
              palette keeps the design focused. Whether the project calls for
              a bold, high-contrast look or a clean, minimal aesthetic, the
              fundamentals stay the same: clarity first, decoration second.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              The end goal
            </h2>
            <p className="text-[#b0b0b0]">
              A great website should feel inevitable. The layout should make
              sense, the navigation should be invisible, and the experience
              should leave the user with a clear understanding of what the
              product is about. That is the standard behind every Figma and
              React project — design with intent, build with care.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
