"use client";

interface HoverTooltipProps {
  label: string;
  className?: string;
}

export default function HoverTooltip({ label, className = "" }: HoverTooltipProps) {
  return (
    <span
      className={`pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#171717] px-2 py-1 text-[11px] font-medium text-white/95 opacity-0 shadow-lg transition-all duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 ${className}`}
    >
      {label}
    </span>
  );
}
