"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Folder,
  Briefcase,
  Wrench,
  PenLine,
  CircleHelp,
  ArrowUpRight,
  ArrowRight,
  Layers,
  LayoutGrid,
  MessageCircle,
  Instagram,
  Github,
} from "lucide-react";
import MobileHeader from "./components/MobileHeader";
import CustomSelect from "./components/CustomSelect";
import HoverTooltip from "./components/HoverTooltip";
import Faq from "./components/Faq";

const navItems = [
  { href: "#hero", icon: Home, label: "Home" },
  { href: "#projects", icon: Folder, label: "Projects" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#tools", icon: Wrench, label: "Tools" },
  { href: "#thoughts", icon: PenLine, label: "Thoughts" },
  { href: "#faq", icon: CircleHelp, label: "FAQ" },
];

const socialLinks = [
  { href: "https://discord.com/users/suffixs", label: "Discord", icon: MessageCircle },
  { href: "https://instagram.com/asharaamer", label: "Instagram", icon: Instagram },
  { href: "https://github.com/Suffixsxd", label: "GitHub", icon: Github },
];

const stats = [
  { number: "+5", label: "YEARS OF\nEXPERIENCE" },
  { number: "+105", label: "PROJECTS\nCOMPLETED" },
  { number: "+5", label: "WORLDWIDE\nCLIENTS" },
];

const projects = [
  {
    slug: "fisik-app-video",
    title: "Fisik.app Promo Video",
    subtitle: "Instagram Reel — motion design for fisik.app",
    image: "/fisiklogo.png",
    imageFit: "contain" as const,
  },
  {
    slug: "saas-demo-video",
    title: "SaaS Demo Video",
    subtitle: "Instagram Reel",
    image: "/saas-video.png",
  },
  {
    slug: "suffixs-portfolio",
    title: "Suffixs Portfolio",
    subtitle: "Portfolio site, motion design",
    image: "/suffixsportfolio.png",
  },
  {
    slug: "beesim-support",
    title: "BeeSim Support",
    subtitle: "Full discord linked support system",
    image: "/beesim.png",
  },
];

const experiences = [
  {
    href: "https://beesim.gg",
    title: "BeeSim GG",
    description:
      "Led the staff team of 35+ members, developed user-centric workflows and support systems for 3+ years.",
  },
  {
    href: "https://minemen.club",
    title: "Minemen Club",
    description:
      "Worked in a team of 20+ members, worked as a team for the media department of a community of over 100,000 members.",
  },
  {
    href: "https://theraviancurrent.netlify.app",
    title: "The Ravian Current",
    description:
      "Worked, and edited short form and long form content utilizing my design and cyber security skills, working both as a developer and an editor.",
  },
];

const tools = [
  {
    name: "Figma",
    description: "Design Tool",
    href: "https://figma.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path fill="#F24E1E" d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" />
        <path fill="#A259FF" d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" />
        <path fill="#F24E1E" d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" />
        <path fill="#1ABCFE" d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" />
        <path fill="#0ACF83" d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    description: "Productivity Tool",
    href: "https://notion.so",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path fill="#000" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.213.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.047-.746.327-.746.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933l-4.577-7.186v6.952l1.446.327s0 .84-1.166.84l-3.22.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.453-.233 4.764 7.279v-6.44l-1.213-.14c-.093-.513.28-.886.746-.933l3.22-.186zM1.936 1.035l13.31-.98c1.633-.14 2.051-.047 3.079.7l4.249 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.633-1.68 1.726l-15.458.933c-.98.047-1.446-.093-1.96-.746l-3.126-4.066c-.56-.747-.793-1.306-.793-1.96V2.667c0-.84.374-1.493 1.446-1.632z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    description: "AI Assistant",
    href: "https://claude.ai",
    icon: "/claude.png",
  },
  {
    name: "NextJS",
    description: "React Framework",
    href: "https://nextjs.org",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="black">
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.021 3.509-.0026 3.3802-.0026 3.5162-.0516 3.596-.0613.1029-.1056.1438-.2065.1745-.0759.0208-1.4693.0261-1.7436.0078-.4217-.0286-.8493-.1371-1.2286-.3101-.6309-.2894-1.0752-.8814-1.2398-1.6475-.0421-.1864-.0461-.367-.0408-3.8382.0026-2.0298.0094-3.7526.0139-3.8293.0093-.1321.0364-.208.088-.2879.0613-.0952.1412-.1592.2464-.1968.0915-.0312 1.5761-.0377 3.8728-.0328l3.7353.0083.5249.7869c.2887.4331.7932 1.1896 1.121 1.6818l.5967.8953-2.2762 3.3674-2.2762 3.3674 1.7551 2.5933 1.7571 2.5959.1029-.0788c1.7259-1.3227 3.2334-3.3253 4.056-5.4046.2894-.7213.5434-1.6042.6947-2.4309.0962-.659.108-.8537.108-1.7474 0-.8937-.012-1.0884-.108-1.7476-.652-4.506-3.8591-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.5065-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.0568.0993.0666.1437.147.1654.2909.0109.0697.0154 1.2529.0109 2.8403l-.0067 2.7292-1.5089-2.29L11.572 8.4783l.0188-.0821c.0236-.0957.092-.1783.1784-.2263.0775-.0416.169-.0495.5112-.0495h.0444z" />
      </svg>
    ),
  },
  {
    name: "Opencode",
    description: "AI Code Editor",
    href: "https://opencode.ai",
    icon: "/opencode-v2.png",
  },
  {
    name: "After Effects",
    description: "Motion Design",
    href: "https://www.adobe.com/products/aftereffects.html",
    icon: "/after-effects-v2.png",
  },
];

const thoughts = [
  {
    slug: "discord-linked-support-portal-beesim",
    title: "I Built a Discord-Linked Support Portal for a Game Community",
    excerpt:
      "How I connected Discord and the web into one support system for BeeSim — verified account linking, synced tickets, and rotating staff passwords.",
    date: "Jul 8, 2025",
    readTime: "5 min read",
    image: "/beesim.png",
  },
  {
    slug: "after-effects-workflow-saas-videos",
    title: "My After Effects Workflow for SaaS Product Videos",
    excerpt:
      "Speed graphs, PosterizeTime, kinetic type, and 3D cameras — the exact workflow I use to cut SaaS demo videos and promos like the fisik.app Reel.",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    image: "/saas-video.png",
  },
  {
    slug: "developer-and-video-editor-overlap",
    title: "What Working as a Developer and Video Editor Taught Me",
    excerpt:
      "Timing, systems thinking, and iteration — why writing code made my edits sharper, and why cutting video made my interfaces better.",
    date: "Nov 22, 2025",
    readTime: "4 min read",
    image: "/suffixsportfolio.png",
  },
];

const budgetOptions = [
  { value: "", label: "Select..." },
  { value: "small", label: "$500 - $1,000" },
  { value: "medium", label: "$1,000 - $5,000" },
  { value: "large", label: "$5,000+" },
];

function SectionTitle({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <div className="mb-8 text-center md:mb-12 lg:text-left">
      <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {line1}
      </h2>
      <h2 className="text-4xl font-extrabold tracking-tight text-white/10 sm:text-5xl md:text-6xl lg:text-7xl">
        {line2}
      </h2>
    </div>
  );
}

export default function PortfolioPage() {
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "error" | "success"
  >("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!budget) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please select a budget range before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setSubmissionMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          budget,
          message: formData.get("message"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setSubmissionStatus("error");
        setSubmissionMessage(
          result.error || "The message could not be delivered. Please try again.",
        );
        return;
      }

      form.reset();
      setBudget("");
      setSubmissionStatus("success");
      setSubmissionMessage("Thanks! Your message has been sent.");
    } catch {
      setSubmissionStatus("error");
      setSubmissionMessage(
        "The message could not be delivered. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-[#111111] text-white">
      {/* Left column — original profile card */}
      <aside className="hidden min-w-0 flex-shrink-0 lg:block lg:w-[40%]">
        <div className="fixed top-[120px] left-[60px] z-40 w-[280px] max-w-full rounded-[28px] bg-white p-5 text-[#171717] lg:left-[80px] lg:w-[300px] xl:left-[120px] xl:w-[320px] 2xl:left-[200px]">
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
              src="/pfpiconnew.png"
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
                  className="group relative text-[#e8533a] transition-opacity duration-300 hover:opacity-70"
                >
                  <Icon className="h-5 w-5" />
                  <HoverTooltip label={link.label} />
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Right column */}
      <main className="w-full min-w-0 max-w-full flex-1 px-6 pt-[110px] lg:w-[60%] lg:flex-shrink-0 lg:px-0 lg:pr-[60px] lg:pt-[130px]">
        <h1 className="sr-only">
          Ashar Aamer — Pakistan-based developer and video editor specializing
          in SaaS products, Next.js web development, and After Effects motion
          design for international clients
        </h1>
        <MobileHeader />

        {/* Top nav — centered, no pill */}
        <nav className="fixed top-[max(1rem,env(safe-area-inset-top))] left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border border-white/10 bg-[#1e1e1e]/85 px-5 py-2.5 shadow-lg shadow-black/40 backdrop-blur-md lg:top-10 lg:gap-8 lg:rounded-full lg:border lg:border-white/10 lg:bg-[#1e1e1e]/85 lg:px-6 lg:py-3 lg:shadow-lg lg:shadow-black/40 lg:backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="group relative text-white/70 transition-colors hover:text-white"
              >
                <Icon size={20} />
                <HoverTooltip label={item.label} />
              </Link>
            );
          })}
        </nav>

        {/* Hero */}
        <section id="hero" className="flex min-w-0 flex-col pt-10 lg:pt-0">
          <div className="leading-none text-center lg:text-left">
            <span className="block font-black uppercase tracking-tight text-[52px] text-white sm:text-[48px] md:text-[72px] lg:text-[96px]" style={{ lineHeight: "0.95" }}>
              DEVELOPER
            </span>
            <span className="block font-black uppercase tracking-tight text-[52px] sm:text-[48px] md:text-[72px] lg:text-[96px]" style={{ color: "#333333", lineHeight: "0.95" }}>
              EDITOR
            </span>
          </div>

          <p className="mb-12 mt-8 max-w-[420px] text-center text-[15px] leading-relaxed text-[#888888] lg:text-left">
            Passionate about creating intuitive software and professional grade
            videos, specializing in SaaS and short form editing.
          </p>

          <div className="mb-16 flex flex-wrap justify-center gap-6 md:gap-16 lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-bold leading-none text-white text-[40px] md:text-[52px] lg:text-[64px]"
                >
                  {stat.number}
                </div>
                <div
                  className="mt-1.5 uppercase tracking-wider text-[#555555]"
                  style={{
                    fontSize: "10px",
                    lineHeight: "1.4",
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex w-full min-w-0 flex-col items-center gap-4 pb-6 md:flex-row md:items-stretch lg:items-stretch">
            {/* Orange card */}
            <Link
              href="/motion-design"
              className="group relative flex h-[200px] w-full min-w-0 max-w-[340px] flex-col justify-between overflow-hidden rounded-[12px] bg-[#f06b4a] p-6 transition-opacity duration-300 hover:opacity-90 md:h-[240px] md:w-[340px]"
            >
              {/* Curved line pattern */}
              <svg
                viewBox="0 0 340 240"
                fill="none"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
                preserveAspectRatio="none"
              >
                <path
                  d="M-20 140 C 60 140, 80 80, 160 80 S 280 120, 360 60"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M-20 100 C 50 100, 100 160, 170 140 S 260 80, 360 100"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M-20 170 C 70 170, 120 120, 190 130 S 290 160, 360 120"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <Layers size={28} className="relative z-10 text-white" />
              <div className="relative z-10 flex items-end justify-between">
                <p className="text-[15px] font-bold uppercase leading-tight text-white">
                  AFTER EFFECTS,
                  <br />
                  MOTION DESIGN
                </p>
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
              <HoverTooltip
                label="Motion"
                className="left-auto right-3 top-3 mt-0 -translate-x-0"
              />
            </Link>

            {/* Lime card */}
            <Link
              href="/web-design"
              className="group relative flex h-[200px] w-full min-w-0 max-w-[340px] flex-col justify-between overflow-hidden rounded-[12px] bg-[#d4f538] p-6 transition-opacity duration-300 hover:opacity-90 md:h-[240px] md:w-[340px]"
            >
              {/* Zigzag chart pattern */}
              <svg
                viewBox="0 0 340 240"
                fill="none"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
                preserveAspectRatio="none"
              >
                <path
                  d="M-20 140 L 40 80 L 90 120 L 140 50 L 190 100 L 240 40 L 290 90 L 360 20"
                  stroke="#171717"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M-20 100 L 50 130 L 110 70 L 170 110 L 230 60 L 290 100 L 360 50"
                  stroke="#171717"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <LayoutGrid size={28} className="relative z-10 text-black" />
              <div className="relative z-10 flex items-end justify-between">
                <p className="text-[15px] font-bold uppercase leading-tight text-black">
                  FIGMA, REACTJS,
                  <br />
                  WEB DESIGN
                </p>
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-black">
                  <ArrowRight size={14} className="text-black" />
                </div>
              </div>
              <HoverTooltip
                label="Web"
                className="left-auto right-3 top-3 mt-0 -translate-x-0"
              />
            </Link>
          </div>
        </section>

        {/* Recent Projects */}
        <section id="projects" className="mb-24 md:mb-32">
          <SectionTitle line1="RECENT" line2="PROJECTS" />
          <div className="flex flex-col gap-5">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative flex items-center gap-5 overflow-hidden rounded-2xl bg-[#1a1a1a] p-4 transition-all duration-500 hover:bg-white/[0.06]"
              >
                <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/[0.03]" />
                <div className="relative aspect-[16/10] w-32 shrink-0 overflow-hidden rounded-xl bg-[#0d0d0d] md:w-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain"
                  />
                </div>
                <div className="relative flex-1">
                  <h3 className="text-center text-xl font-bold text-white md:text-left md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-center text-sm text-[#9ca3af] md:text-left md:text-base">
                    {project.subtitle}
                  </p>
                </div>
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ed6b4e] text-[#ed6b4e] transition-all duration-300 group-hover:bg-white/10 md:mr-2">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </div>
                <HoverTooltip
                  label={project.title}
                  className="left-auto right-3 top-3 mt-0 -translate-x-0"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-24 md:mb-32">
          <SectionTitle line1="5 YEARS OF" line2="EXPERIENCE" />
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <Link
                key={exp.href}
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative -mx-2 block overflow-hidden rounded-2xl bg-[#121212] p-5 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/[0.03]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-center text-2xl font-bold text-white md:text-left md:text-3xl">
                      {exp.title}
                    </h3>
                    <p className="max-w-xl text-center text-base leading-relaxed text-[#9ca3af] md:text-left">
                      {exp.description}
                    </p>
                  </div>
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ed6b4e] text-[#ed6b4e] transition-all duration-300 group-hover:bg-white/10">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
                <HoverTooltip
                  label={exp.title}
                  className="left-auto right-3 top-3 mt-0 -translate-x-0"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Premium Tools */}
        <section id="tools" className="mb-24 md:mb-32">
          <SectionTitle line1="PREMIUM" line2="TOOLS" />
          <p className="mx-auto mb-8 max-w-xl text-center text-[15px] leading-relaxed text-[#888888] lg:mx-0 lg:text-left">
            The stack behind recent work — from the{" "}
            <Link
              href="/projects/beesim-support"
              className="text-[#ed6b4e] transition-colors hover:underline"
            >
              BeeSim support portal
            </Link>{" "}
            to the{" "}
            <Link
              href="/projects/fisik-app-video"
              className="text-[#ed6b4e] transition-colors hover:underline"
            >
              fisik.app promo video
            </Link>
            . Design, code, motion, and AI-assisted editing, each picked for
            the job it does best.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 rounded-2xl bg-transparent p-3 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1a1a1a] shadow-sm transition-opacity duration-300 group-hover:opacity-90">
                  {typeof tool.icon === "string" ? (
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    tool.icon
                  )}
                </div>
                <div>
                  <h3 className="text-center text-lg font-bold text-white md:text-left">
                    {tool.name}
                  </h3>
                  <p className="text-center text-sm text-[#9ca3af] md:text-left">
                    {tool.description}
                  </p>
                </div>
                <HoverTooltip
                  label={tool.name}
                  className="left-auto right-3 top-3 mt-0 -translate-x-0"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Design Thoughts */}
        <section id="thoughts" className="mb-24 md:mb-32">
          <SectionTitle line1="DESIGN" line2="THOUGHTS" />
          <div className="flex flex-col gap-6">
            {thoughts.map((thought) => (
              <Link
                key={thought.slug}
                href={`/design-thoughts/${thought.slug}`}
                className="group relative block overflow-hidden rounded-2xl bg-[#121212] transition-all duration-500 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/[0.03]" />
                <div className="relative flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="mb-2 text-center text-xl font-bold text-white md:text-left md:text-2xl">
                      {thought.title}
                    </h3>
                    <p className="mb-4 max-w-xl text-center text-base leading-relaxed text-[#9ca3af] md:text-left">
                      {thought.excerpt}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-[#9ca3af] md:justify-start">
                      <span>{thought.date}</span>
                      <span>{thought.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ed6b4e] text-[#ed6b4e] transition-all duration-300 group-hover:bg-white/10">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
                <HoverTooltip
                  label={thought.title}
                  className="left-auto right-3 top-3 mt-0 -translate-x-0"
                />
              </Link>
            ))}
          </div>
        </section>

        <Faq />

        {/* Contact */}
        <section id="contact" className="mb-24 md:mb-32">
          <div className="mb-10 text-center md:mb-14 lg:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              LET&apos;S WORK
            </h2>
            <h2 className="text-4xl font-extrabold tracking-tight text-white/10 sm:text-5xl md:text-6xl lg:text-7xl">
              TOGETHER
            </h2>
          </div>
          <form
            onSubmit={handleContactSubmit}
            onChange={() => {
              if (submissionStatus !== "idle") {
                setSubmissionStatus("idle");
                setSubmissionMessage("");
              }
            }}
            className="mx-auto flex w-full max-w-[760px] flex-col gap-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs text-[#9ca3af]">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="rounded-lg bg-[#2a2a2a] px-4 py-2.5 text-sm text-white placeholder-[#6b7280] outline-none transition-opacity duration-300 hover:opacity-90 focus:opacity-100 focus:ring-2 focus:ring-[#ed6b4e]/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs text-[#9ca3af]">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your@email.com"
                  required
                  className="rounded-lg bg-[#2a2a2a] px-4 py-2.5 text-sm text-white placeholder-[#6b7280] outline-none transition-opacity duration-300 hover:opacity-90 focus:opacity-100 focus:ring-2 focus:ring-[#ed6b4e]/20"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#9ca3af]">Budget</label>
              <CustomSelect
                options={budgetOptions}
                value={budget}
                onChange={setBudget}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs text-[#9ca3af]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="resize-y rounded-lg bg-[#2a2a2a] px-4 py-2.5 text-sm text-white placeholder-[#6b7280] outline-none transition-opacity duration-300 hover:opacity-90 focus:opacity-100 focus:ring-2 focus:ring-[#ed6b4e]/20"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-[#ed6b4e] px-6 py-2.5 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90"
            >
              {isSubmitting
                ? "Sending..."
                : submissionStatus === "success"
                  ? "Sent"
                  : "Submit"}
            </button>
            {submissionMessage && (
              <p
                aria-live="polite"
                className={`text-sm ${
                  submissionStatus === "success"
                    ? "text-[#c8e832]"
                    : "text-[#f06b4a]"
                }`}
                role={submissionStatus === "error" ? "alert" : undefined}
              >
                {submissionMessage}
              </p>
            )}
          </form>
        </section>

        {/* Footer */}
        <footer className="pb-12 text-center text-sm text-[#9ca3af]">
          <p>
            Made by{" "}
            <Link
              href="https://www.asharaamer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ed6b4e] transition-colors hover:underline"
            >
              Ashar Aamer
            </Link>{" "}
            | Powered by Next.js
          </p>
        </footer>
      </main>
    </div>
  );
}
