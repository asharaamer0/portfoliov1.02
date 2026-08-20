"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://discord.com/users/suffixs", label: "Discord" },
  { href: "https://instagram.com/asharaamer", label: "Instagram" },
  { href: "https://github.com/Suffixsxd", label: "GitHub" },
];

export default function MobileHeader() {
  return (
    <div className="mb-10 flex flex-col items-center rounded-[28px] bg-white p-5 text-[#171717] lg:hidden">
      <div className="relative mb-4 w-32 overflow-hidden rounded-[12px] bg-[#cc3300]">
        <Image
          src="/pfpicon.png"
          alt="Ashar Aamer"
          width={128}
          height={128}
          className="aspect-square w-full object-cover"
          priority
        />
      </div>
      <h2 className="mb-4 text-[22px] font-bold tracking-tight">Ashar Aamer</h2>
      <p className="mb-5 px-2 text-center text-[13px] leading-relaxed text-[#666666]">
        A professional editor with a thousand hours of experience and a life long
        developer.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#e8533a] px-4 py-1.5 text-sm font-medium text-[#e8533a] transition-opacity hover:opacity-70"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
