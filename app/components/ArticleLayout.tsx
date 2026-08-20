"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Sidebar from "./Sidebar";

interface ArticleLayoutProps {
  title: string;
  date: string;
  readTime: string;
  image: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  date,
  readTime,
  image,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10 lg:pl-12 lg:pr-10 lg:py-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#thoughts"
            className="group mb-8 inline-flex items-center gap-2 rounded-full bg-[#1e1e1e] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-[#2a2a2a] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to thoughts
          </Link>

          <div className="relative mb-8 aspect-[2/1] w-full overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          <div className="mb-6 flex items-center justify-between text-sm text-[#9ca3af]">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>

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
