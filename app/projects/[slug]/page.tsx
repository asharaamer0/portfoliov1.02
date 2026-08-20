import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/app/data/projects";
import ProjectLayout from "@/app/components/ProjectLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Ashar Aamer`,
    description: project.description,
  };
}

function SpeedGraphVisual() {
  return (
    <div className="my-8 rounded-2xl bg-[#1a1a1a] p-6">
      <p className="mb-6 text-center text-sm text-[#9ca3af]">
        Speed graph comparison used for seamless cuts
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-[#9ca3af]">
            Slow → Fast → Slow
          </p>
          <svg viewBox="0 0 200 100" className="h-32 w-full">
            <path
              d="M10 90 C 50 90, 70 20, 100 50 S 150 90, 190 10"
              stroke="#e8533a"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="10" cy="90" r="4" fill="#e8533a" />
            <circle cx="190" cy="10" r="4" fill="#e8533a" />
          </svg>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-[#9ca3af]">
            Fast → Slow
          </p>
          <svg viewBox="0 0 200 100" className="h-32 w-full">
            <path
              d="M10 10 L 100 20 C 140 25, 160 60, 190 90"
              stroke="#c8e832"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="10" cy="10" r="4" fill="#c8e832" />
            <circle cx="190" cy="90" r="4" fill="#c8e832" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectContent({ slug }: { slug: string }) {
  if (slug === "saas-demo-video") {
    return (
      <>
        <p className="mb-6 text-[#b0b0b0]">
          This is a SaaS demo video created in After Effects 2024. Inspired by
          the ChatGPT sites demo video.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          How it was made
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The key animation used in this video was speed ramps to seamlessly cut
          through scenes without choppy transitions. First a speed graph was
          used from slow to fast to slow at the end, then in the second clip, a
          speed graph was used from fast to slow. This was used in position
          keyframes, scale keyframes, and even rotation keyframes.
        </p>
        <SpeedGraphVisual />

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          The Philosophy
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The key to editing is keeping the viewers hooked for the long run;
          make them fall in love with your editing style and visuals to the
          point that they actually understand what you&apos;re getting at. This
          doesn&apos;t just come to your hand easily, and this isn&apos;t
          something that can be taught but comes with years of experience.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Typography</h2>
        <p className="text-[#b0b0b0]">
          The SF Pro Apple font (Regular) was mainly used with a mix of black
          and white colors.
        </p>
      </>
    );
  }

  if (slug === "suffixs-portfolio") {
    return (
      <>
        <p className="mb-6 text-[#b0b0b0]">
          Suffixs Portfolio is a carefully crafted portfolio site built to
          showcase creative work through a clean, editorial lens. The entire
          experience is wrapped in a black and white color palette, letting the
          projects speak for themselves without unnecessary visual noise.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Visual Direction
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The design leans heavily into contrast. Deep blacks frame every
          element while white typography and subtle gray accents guide the eye
          through the page. This monochrome approach creates a timeless,
          professional feel that works across photography, motion design, and
          development portfolios.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Motion & Interactions
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          Parallax effects are used throughout the site to add depth without
          distracting from the content. As users scroll, background layers move
          at different speeds than foreground content, creating a sense of
          dimensionality. Scroll-triggered animations reveal text, images, and
          project cards at just the right moment, keeping the browsing
          experience fluid and engaging.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Technical Approach
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The site is built with performance in mind. Animations are hardware
          accelerated where possible, and the layout stays responsive across all
          device sizes. Every transition is intentional — nothing flashes or
          moves without purpose. The result is a portfolio that feels alive but
          never overwhelming.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Why It Works
        </h2>
        <p className="text-[#b0b0b0]">
          By stripping away color and leaning into motion, the portfolio puts
          focus entirely on the work. Visitors remember the experience because
          it feels intentional, polished, and confident. It proves that great
          design does not need loud colors to make a loud statement.
        </p>
      </>
    );
  }

  if (slug === "beesim-support") {
    return (
      <>
        <p className="mb-6 text-[#b0b0b0]">
          BeeSim Support is a two-way Discord and web linked support system.
          Users link their account to Discord, then create tickets through the
          web portal. Staff members answer those tickets through a dedicated
          admin portal protected by rotating secured passwords.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          How the system works
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The platform bridges Discord and the web so players never have to
          leave their community to get help. When a user creates a ticket, the
          request is synced across both interfaces. Discord bots notify the
          right staff channels while the web dashboard gives moderators a clean
          view of every open request, response history, and user details.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Security first
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          Staff access is controlled through rotating secured passwords. This
          means admin credentials are not static, reducing the risk of leaked
          passwords being used long-term. Every login attempt is validated, and
          sensitive actions require re-authentication before changes are
          applied.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Built for scale
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The system was designed to handle a large player base and a growing
          staff team. Ticket categories, priority levels, and assignment rules
          keep support organized even during peak activity. Automated status
          updates let users know when their issue is being worked on, resolved,
          or escalated.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          The result
        </h2>
        <p className="text-[#b0b0b0]">
          BeeSim Support turned a chaotic support workflow into a streamlined,
          secure process. Players get faster responses, staff stay coordinated,
          and administrators have full visibility into every interaction — all
          without sacrificing security.
        </p>
      </>
    );
  }

  return (
    <p className="text-[#b0b0b0]">
      This project page is under construction. More details will be added soon.
    </p>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      image={project.image}
    >
      <ProjectContent slug={slug} />
    </ProjectLayout>
  );
}
