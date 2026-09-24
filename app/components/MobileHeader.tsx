"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, MessageCircle } from "lucide-react";
import HoverTooltip from "./HoverTooltip";

const socialLinks = [
  { href: "https://discord.com/users/suffixs", label: "Discord", icon: MessageCircle },
  { href: "https://instagram.com/asharaamer", label: "Instagram", icon: Instagram },
  { href: "https://github.com/Suffixsxd", label: "GitHub", icon: Github },
];

export default function MobileHeader() {
  return (
    <div className="relative mb-10 flex w-full max-w-full flex-col items-center overflow-hidden rounded-[28px] bg-white p-5 pt-7 text-[#171717] lg:hidden">
      <div className="pointer-events-none absolute -left-3 -top-3 h-[130px] w-[130px]">
        <svg viewBox="0 0 130 130" fill="none" className="h-full w-full">
          <path
            d="M10 118 C 10 22, 118 22, 118 10"
            stroke="#e8533a"
            strokeWidth="4"
            strokeDasharray="10 8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="relative mb-5 w-full max-w-[270px] overflow-hidden rounded-[22px] bg-[#cc3300]">
        <Image
          src="/pfpiconnew.png"
          alt="Ashar Aamer"
          width={270}
          height={270}
          className="aspect-square w-full object-cover"
          priority
        />
      </div>
      <h2 className="mb-4 text-center text-[48px] font-black leading-none tracking-tight">
        Ashar Aamer
      </h2>
      <p className="mb-6 max-w-[320px] px-2 text-center text-[13px] leading-relaxed text-[#666666]">
        A professional editor with a thousand hours of experience and a life long
        developer.
      </p>
      <div className="flex w-full max-w-[320px] flex-wrap items-center justify-center gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full text-[#e8533a] transition-opacity hover:opacity-70"
            >
              <Icon className="h-5 w-5" />
              <HoverTooltip label={link.label} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
