"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavTooltipProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function NavTooltip({ href, icon: Icon, label }: NavTooltipProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative flex h-10 w-10 items-center justify-center text-white/50 transition-all duration-300 hover:text-white"
    >
      <Icon className="h-5 w-5" />
      <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1a1a1a] px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
    </Link>
  );
}
