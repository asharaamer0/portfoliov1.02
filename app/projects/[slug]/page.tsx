import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/app/data/projects";
import ProjectLayout from "@/app/components/ProjectLayout";
import {
  SpeedGraphExplorer,
  PosterizeTimeDemo,
  TextAnimatorDemo,
  ModelTiltDemo,
  PhysicsDiagramDemo,
  AeStackGraphic,
} from "@/app/components/FisikVisuals";

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
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Ashar Aamer`,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ashar Aamer`,
      description: project.description,
      images: [project.image],
    },
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
  if (slug === "fisik-app-video") {
    return (
      <>
        <p className="mb-6 text-[#b0b0b0]">
          A fast-paced promo video for{" "}
          <span className="font-semibold text-white">fisik.app</span> — a
          physics learning platform — cut as an Instagram Reel. The whole piece
          was constructed in After Effects: PosterizeTime for stepped snap,
          kinetic text animators, 3D models with a one-node camera, advanced
          speed graphs for every cut, and fully animated physics diagrams.
        </p>

        <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-[#e8533a]/30 bg-[#e8533a]/10 p-5 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-wider text-[#e8533a]">
              Watch it live
            </p>
            <p className="mt-1 text-sm text-[#b0b0b0]">
              The finished Reel is up on Instagram — sound on, it&apos;s timed
              to the whooshes.
            </p>
          </div>
          <Link
            href="https://www.instagram.com/p/Ddc9fE4iPQO/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#e8533a] px-6 py-2.5 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Open the Reel ↗
          </Link>
        </div>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          The brief
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          fisik.app needed a video that feels like physics itself: precise,
          snappy, and a little bit playful. In under a minute it had to show
          the product UI, prove the simulations are real math — not stock
          animation — and end on the logo so viewers remember the name. That
          meant every second had to do double duty: teach and tease at the
          same time.
        </p>
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {[
            { k: "Format", v: "9:16 Reel · <60s" },
            { k: "Tool", v: "After Effects" },
            { k: "Delivery", v: "fisik.app + Instagram" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-[#1a1a1a] p-4 text-center">
              <p className="text-[11px] uppercase tracking-widest text-[#9ca3af]">
                {s.k}
              </p>
              <p className="mt-1 text-sm font-bold text-white">{s.v}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          01 · PosterizeTime — the stepped textbook snap
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          Continuous motion feels digital; stepped motion feels printed — like
          a textbook flipping pages. An adjustment layer running{" "}
          <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[0.85em] text-[#c8e832]">
            posterizeTime()
          </code>{" "}
          was laid over the diagram sections so UI highlights and formula
          reveals tick in discrete steps instead of gliding. Camera moves were
          kept on a separate, smooth layer so the product still feels premium
          while the diagrams feel tactile. Try it below — low fps is the
          textbook look, high fps is the product look.
        </p>
        <PosterizeTimeDemo />

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          02 · Kinetic text animators
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          Almost every headline — “Motion”, “Forces”, “Simulate” — is a text
          animator, not keyframes on every letter. Tracking animators slam
          words in from wide spacing, blur-rise animators float feature names
          up out of the phone mockup, and a staggered overshoot preset gives
          the “FISIK.APP” lockup its bounce. Range selectors with Ease High
          mean one animator drives the whole word, so retiming the voiceover
          never breaks the animation. Preview the three hero presets:
        </p>
        <TextAnimatorDemo />

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          03 · 3D models, cameras & depth
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The phone running fisik.app, the orbiting atom, and the floating
          formula cards are layered 3D elements inside a single comp. A
          one-node camera pushes in on every hook while null-parented parallax
          layers drift at different depths, and a touch of depth of field
          racks focus from the UI to the diagrams. Hover the mockup to feel
          the parallax rig:
        </p>
        <ModelTiltDemo />

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          04 · Advanced speed graphs — no choppy cuts
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          Nothing in this video cuts at constant speed. Scene changes ride a
          slow → fast → slow ramp across position, scale, and rotation at
          once; logo and UI impacts slam in fast and settle slow with motion
          blur; diagram wipes use a whip-pan ramp with directional blur to
          hide the splice. Each preset below is one of the actual graph shapes
          from the project — the dot is the playhead riding the curve:
        </p>
        <SpeedGraphExplorer />

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          05 · Diagrams for physics — real equations on screen
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          The centerpiece is a projectile-motion diagram drawn exactly the way
          the app simulates it: launch vector, parabolic trim-path trajectory,
          live range and height readouts. The path is a shape layer revealed
          with Trim Paths, the vector rotates with an angle expression, and
          the readouts are driven by the same{" "}
          <code className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[0.85em] text-[#7dd3fc]">
            R = v²·sin(2θ)/g
          </code>{" "}
          math. Change the angle and velocity — the video&apos;s diagram
          obeys the same formulas:
        </p>
        <PhysicsDiagramDemo />
        <p className="mb-6 text-[#b0b0b0]">
          Supporting diagrams — free-body arrows, velocity vectors, energy
          bars — all reuse one graphic language: lime trajectories, coral
          vectors, dark-lab background. That consistency is what makes three
          different physics ideas read as one brand in under a minute.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          How the timeline was stacked
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          Six layer groups, top to bottom. Text always wins the top slot so
          headlines never get buried; the PosterizeTime adjustment sits above
          everything diagram-related so it can be toggled per section without
          touching the smooth camera layer.
        </p>
        <AeStackGraphic />

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Sound & finishing
        </h2>
        <p className="mb-6 text-[#b0b0b0]">
          Whooshes land exactly on speed-graph peaks, UI ticks on every
          PosterizeTime step, and a soft low-end thump marks each equation
          locking into place. Final grade: crushed blacks, coral pushed warm,
          lime kept electric — the same palette as the fisik.app site so the
          Reel and the landing page feel like one continuous surface.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-6 text-center text-[#171717] md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8533a]">
            Result
          </p>
          <p className="mx-auto mt-3 max-w-xl text-lg font-bold leading-snug">
            A sub-60-second loop that demos the product, proves the physics,
            and ends on the logo.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="https://www.instagram.com/p/Ddc9fE4iPQO/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#171717] px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-85"
            >
              Watch on Instagram ↗
            </Link>
            <Link
              href="https://fisik.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#171717] px-6 py-2.5 text-sm font-bold text-[#171717] transition-colors hover:bg-[#171717] hover:text-white"
            >
              Visit fisik.app ↗
            </Link>
          </div>
        </div>
      </>
    );
  }

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
      imageWidth={project.imageWidth}
      imageHeight={project.imageHeight}
    >
      <ProjectContent slug={slug} />
    </ProjectLayout>
  );
}
