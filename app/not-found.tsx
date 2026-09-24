import Link from "next/link";
import { ArrowLeft, Folder, MessageCircle } from "lucide-react";
import Sidebar from "@/app/components/Sidebar";

export const metadata = {
  title: "Page Not Found | Ashar Aamer",
  description:
    "The page you are looking for does not exist. Head back to Ashar Aamer's portfolio to browse projects, motion design work, and contact details.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex flex-1 items-center justify-center px-6 py-16 md:px-10">
        <div className="w-full max-w-xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e8533a]">
            Error 404
          </p>
          <h1 className="mt-4 text-7xl font-black tracking-tight text-white md:text-8xl">
            LOST
            <span className="block text-white/10">IN FRAMES</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#9ca3af]">
            This page doesn&apos;t exist — it may have been moved, renamed, or
            never rendered in the first place. Let&apos;s cut back to something
            that does.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ed6b4e] px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
            <Link
              href="/#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Folder className="h-4 w-4" />
              Browse projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
