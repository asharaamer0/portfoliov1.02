"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Sidebar from "./Sidebar";

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  children: React.ReactNode;
}

export default function ProjectLayout({
  title,
  subtitle,
  image,
  imageWidth = 800,
  imageHeight = 400,
  children,
}: ProjectLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10 lg:pl-12 lg:pr-10 lg:py-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#projects"
            className="group mb-8 inline-flex items-center gap-2 rounded-full bg-[#1e1e1e] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-[#2a2a2a] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to projects
          </Link>

          {/* Banner: ambient blurred fill + sharp foreground capped at
              natural resolution so logos never upscale into grain */}
          <div className="relative mb-8 aspect-[2/1] w-full overflow-hidden rounded-3xl bg-[#0d0d0d]">
            <Image
              src={image}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="scale-110 object-cover opacity-40 blur-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
              <Image
                src={image}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                className="h-auto max-h-full w-auto max-w-full rounded-xl shadow-2xl"
                style={{ maxWidth: imageWidth }}
                priority
              />
            </div>
          </div>

          <p className="mb-3 text-sm text-[#9ca3af]">{subtitle}</p>

          <h1 className="mb-10 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <article className="max-w-none text-lg leading-relaxed">
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}
