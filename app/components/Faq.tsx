"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Ashar Aamer offer?",
    answer: (
      <>
        Three things: web development with React and Next.js (including full
        SaaS products), motion design in After Effects (demo videos, Instagram
        promos, kinetic typography), and short-form video editing. Most clients
        hire me for one lane, but projects like my{" "}
        <Link
          href="/projects/suffixs-portfolio"
          className="text-[#ed6b4e] transition-colors hover:underline"
        >
          portfolio site
        </Link>{" "}
        show what happens when both crafts share one screen.
      </>
    ),
    plainAnswer:
      "Web development with React and Next.js including full SaaS products, motion design in After Effects (demo videos, Instagram promos, kinetic typography), and short-form video editing.",
  },
  {
    question: "Where is Ashar Aamer based, and does he work internationally?",
    answer: (
      <>
        I am based in Pakistan and I work with clients worldwide. Async
        communication, clear milestones, and overlapping hours for calls keep
        remote projects smooth — past work includes communities and clients far
        beyond my own timezone.
      </>
    ),
    plainAnswer:
      "Ashar Aamer is based in Pakistan and works with clients worldwide through async communication, clear milestones, and overlapping hours for calls.",
  },
  {
    question: "What tools and technologies does Ashar Aamer use?",
    answer: (
      <>
        After Effects and Premiere Pro for motion and editing, Figma for
        design, and React with Next.js for the web — plus an AI-assisted
        workflow for drafting and iteration. You can see the full stack in the{" "}
        <Link
          href="/#tools"
          className="text-[#ed6b4e] transition-colors hover:underline"
        >
          premium tools
        </Link>{" "}
        section above.
      </>
    ),
    plainAnswer:
      "After Effects and Premiere Pro for motion and editing, Figma for design, and React with Next.js for the web, plus an AI-assisted workflow for drafting and iteration.",
  },
  {
    question: "What kind of projects has Ashar Aamer worked on?",
    answer: (
      <>
        Recent work includes the{" "}
        <Link
          href="/projects/beesim-support"
          className="text-[#ed6b4e] transition-colors hover:underline"
        >
          BeeSim Discord-linked support portal
        </Link>
        , SaaS demo videos and the{" "}
        <Link
          href="/projects/fisik-app-video"
          className="text-[#ed6b4e] transition-colors hover:underline"
        >
          fisik.app promo video
        </Link>
        , plus staff leadership for large gaming communities. The{" "}
        <Link
          href="/#projects"
          className="text-[#ed6b4e] transition-colors hover:underline"
        >
          recent projects
        </Link>{" "}
        section has the full list with breakdowns.
      </>
    ),
    plainAnswer:
      "Recent work includes the BeeSim Discord-linked support portal, SaaS demo videos, the fisik.app promo video, plus staff leadership for large gaming communities.",
  },
  {
    question: "How can I hire Ashar Aamer?",
    answer: (
      <>
        Use the{" "}
        <Link
          href="/#contact"
          className="text-[#ed6b4e] transition-colors hover:underline"
        >
          contact form
        </Link>{" "}
        below — send your name, email, budget range, and a few lines about the
        project. I reply to every serious inquiry, and we take it from there.
      </>
    ),
    plainAnswer:
      "Use the contact form on this page with your name, email, budget range, and a few lines about the project. Every serious inquiry gets a reply.",
  },
  {
    question: "How long does a typical project take?",
    answer: (
      <>
        A short-form video or Reel usually takes a few days, a demo or promo
        video one to two weeks depending on revisions, and a website two to
        four weeks from Figma to deployed Next.js build. Exact timelines are
        agreed before work starts so there are no surprises.
      </>
    ),
    plainAnswer:
      "A short-form video usually takes a few days, a demo or promo video one to two weeks, and a website two to four weeks from Figma to deployed build.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="mb-24 md:mb-32">
      <div className="mb-8 text-center md:mb-12 lg:text-left">
        <h2
          id="faq-heading"
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          FREQUENTLY
        </h2>
        <p
          aria-hidden="true"
          className="text-4xl font-extrabold tracking-tight text-white/10 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          ASKED QUESTIONS
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl transition-colors duration-300 ${
                open ? "bg-white/[0.06]" : "bg-[#121212] hover:bg-white/[0.04]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-bold text-white md:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ed6b4e] text-[#ed6b4e] transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
              <div
                id={`faq-panel-${index}`}
                className={`grid transition-all duration-300 ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[#9ca3af] md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.plainAnswer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
