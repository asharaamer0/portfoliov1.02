import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Sidebar from "@/app/components/Sidebar";

export const metadata = {
  title: "After Effects & Motion Design | Ashar Aamer",
  description: "Motion design and After Effects work by Ashar Aamer.",
};

export default function MotionDesignPage() {
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
            After Effects & Motion Design
          </h1>
          <p className="mb-10 text-lg text-[#9ca3af]">
            Bringing static ideas to life through movement, rhythm, and visual
            storytelling.
          </p>

          <article className="max-w-none text-lg leading-relaxed">
            <p className="mb-6 text-[#b0b0b0]">
              Motion design is where editing meets animation. Every project
              starts with a clear idea — a feeling, a message, or a product
              feature that needs to be communicated quickly. From there, it
              becomes a process of building rhythm, choosing the right
              transitions, and making sure every frame earns its place.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Tools of the trade
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              After Effects is the main workspace. It handles everything from
              simple text animations to complex 3D camera moves and character
              motion. Combined with Illustrator for assets, Premiere Pro for
              timing, and a handful of expressions for automation, it becomes
              possible to build polished motion pieces without sacrificing
              creative control.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              The editing mindset
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              Good motion design is not just about making things move. It is
              about guiding attention. Speed ramps keep cuts smooth. Easing
              curves make movement feel natural. Negative space lets the viewer
              breathe. Every decision is made to keep the viewer locked in from
              the first frame to the last.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Speed graphs and seamless transitions
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              One of the most powerful techniques is the use of speed graphs.
              A slow-to-fast-to-slow curve creates anticipation and release. A
              fast-to-slow curve delivers impact. These curves are applied to
              position, scale, rotation, and even opacity to make every
              transition feel intentional rather than mechanical.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Typography in motion
            </h2>
            <p className="mb-6 text-[#b0b0b0]">
              Text is not just information — it is a visual element. Kinetic
              typography turns words into part of the animation itself. Timing
              the entrance, hold, and exit of type is just as important as the
              footage around it. The right font, weight, and motion can make a
              simple sentence feel dramatic.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
              Why motion matters
            </h2>
            <p className="text-[#b0b0b0]">
              In a world of short attention spans, motion is one of the most
              effective ways to communicate value quickly. A well-made demo
              video, ad, or social clip can explain a product in seconds and
              leave a lasting impression. That is the goal behind every motion
              project — clarity, rhythm, and impact.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
