"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    href: "https://discord.com/users/suffixs",
    label: "Discord",
    icon: MessageCircle,
  },
  {
    href: "https://instagram.com/asharaamer",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://github.com/Suffixsxd",
    label: "GitHub",
    icon: Github,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden shrink-0 lg:block lg:w-[35%] xl:w-[33%]">
      <div className="fixed top-[120px] left-[40px] z-40 w-[300px] rounded-[28px] bg-white p-5 text-[#171717] xl:left-[60px] xl:w-[320px]">
          {/* Decorative dashed arc — outside top-left corner */}
          <div className="pointer-events-none absolute -left-[18px] -top-[18px] h-[150px] w-[150px]">
            <svg viewBox="0 0 150 150" fill="none" className="h-full w-full">
              <path
                d="M12 138 C 12 28, 138 28, 138 12"
                stroke="#e8533a"
                strokeWidth="3"
                strokeDasharray="8 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Profile image */}
          <div className="relative mb-4 overflow-hidden rounded-[12px] bg-[#cc3300]">
            <Image
              src="/pfpicon.png"
              alt="Ashar Aamer"
              width={320}
              height={320}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>

          {/* Name */}
          <h2 className="mb-4 text-center text-[22px] font-bold leading-tight tracking-tight">
            Ashar Aamer
          </h2>

          {/* Flame icon */}
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8533a] text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2.5c0 0-1.4 3.6-1.4 5.8 0 2.2.9 3.1.9 3.1s-2.7-1.3-2.7-4c0-1.3.4-2.6.4-2.6s-2.7 2.2-2.7 5.8c0 4 3.1 7.1 6.7 8.4.9-.4 1.8-1.3 1.8-1.3s-.9.4-1.8.4c3.6 0 6.3-3.1 6.3-7.1 0-3.6-2.7-5.8-2.7-5.8s.4 1.3.4 2.6c0 2.7-2.7 4-2.7 4s.9-.9.9-3.1c0-2.2-1.4-5.8-1.4-5.8z" />
            </svg>
          </div>

          {/* Description */}
          <p className="mb-6 px-2 text-center text-[13px] leading-relaxed text-[#666666]">
            A professional editor with a thousand hours of experience and a life
            long developer.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 pb-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[#e8533a] transition-opacity duration-300 hover:opacity-70"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
    </aside>
  );
}
