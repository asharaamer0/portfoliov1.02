export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "discord-linked-support-portal-beesim",
    title: "I Built a Discord-Linked Support Portal for a Game Community",
    excerpt:
      "How I connected Discord and the web into one support system for BeeSim — verified account linking, synced tickets, and rotating staff passwords.",
    date: "Jul 8, 2025",
    readTime: "5 min read",
    image: "/beesim.png",
    content: `Players were asking for help in five different Discord channels, staff were answering the same questions twice, and nobody could tell which issues were still open. That was the support situation at BeeSim when I took it on. I fixed it by building [BeeSim Support](/projects/beesim-support), a portal that connects Discord identities to a web dashboard so every ticket lives in one place no matter where it starts.

Linking Discord to the web
The first piece was account linking. Players connect their Discord identity to their web profile, so every ticket arrives carrying a verified username and server history. Staff never have to ask "what is your Discord" again, and impersonation stops being a problem because identity is confirmed on both sides before a ticket can even be created. That single decision removed an entire category of confusion.

One ticket, two interfaces
The second piece was syncing. A ticket created on the web is mirrored into the right staff Discord channels by bots, and replies flow both ways — a moderator answering from Discord and one answering from the dashboard see the same thread, the same history, and the same status. Players stay inside the community they already live in, while staff get a calm, organized queue instead of five noisy channels.

Security had to come first
A support system holds sensitive conversations, so the admin portal sits behind rotating secured passwords rather than static credentials. Logins are validated on every attempt, and sensitive actions ask for re-authentication before anything changes. If a password ever leaks, its useful lifetime is short by design. Security is not a feature I bolted on later — it shaped the architecture from the first sketch.

Built for a crowd
BeeSim has a large player base and a growing staff team, so the system needed structure. Ticket categories, priority levels, and assignment rules keep things organized during peak hours, and automated status updates tell players when their issue is being worked on, resolved, or escalated. Nobody is left wondering whether anyone saw their message.

What I would do differently
If I rebuilt it today, I would add an audit log on every ticket, SLA timers per priority level, and saved replies for the ten questions that make up half of all tickets. The core idea would stay exactly the same though: meet users where they already are, and give staff one calm screen. You can read the full project breakdown on the [BeeSim Support page](/projects/beesim-support).`,
  },
  {
    slug: "after-effects-workflow-saas-videos",
    title: "My After Effects Workflow for SaaS Product Videos",
    excerpt:
      "Speed graphs, PosterizeTime, kinetic type, and 3D cameras — the exact workflow I use to cut SaaS demo videos and promos like the fisik.app Reel.",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    image: "/saas-video.png",
    content: `Every SaaS video I cut — from the [SaaS demo reel](/projects/saas-demo-video) to the recent [fisik.app promo](/projects/fisik-app-video) — follows the same workflow. It is the only way I can deliver a sub-60-second promo in days instead of weeks without the edit feeling rushed. Here is that workflow, step by step.

Start with the hook, not the logo
The first two seconds decide whether anyone keeps watching, so I never open on a logo. I open on the product already in motion: a screen recording mid-scroll, a UI element slamming into frame, a diagram drawing itself. The brand lockup goes at the end, where it acts as a payoff instead of a barrier. If the hook does not work with the sound off, it does not work.

Speed graphs carry every cut
Nothing in my videos cuts at constant speed. Scene changes ride a slow, fast, slow ramp across position, scale, and rotation at the same time. Impact moments slam in fast and settle slow with motion blur. Diagram wipes use a whip-pan ramp with directional blur to hide the splice. I shape these curves in the graph editor until the playhead feels like it has weight, because weight is what makes motion feel expensive.

PosterizeTime for texture
Continuous motion feels digital, so I lay an adjustment layer running posterizeTime over diagram sections to make highlights and reveals tick in discrete steps. It gives technical content a tactile, textbook feel while the camera moves underneath stay smooth. Low step values read as stylized and snappy, higher values stay premium. One expression controls the whole texture of a section.

Type is a visual, not a label
Almost every headline I animate is a text animator, not hand-placed keyframes. Tracking animators slam words in from wide spacing, blur-rise animators float feature names out of mockups, and staggered overshoots give lockups their bounce. Range selectors with Ease High mean a single animator drives the whole word, so retiming to a voiceover never breaks the animation.

One camera, real depth
Product mockups, floating cards, and background grids live as 3D layers under a single one-node camera. Null-parented parallax layers drift at different depths on every push-in, and a touch of depth of field racks focus from the interface to the diagrams. Depth is what separates a flat slideshow from a video that feels like a place.

Sound is half the edit
Whooshes land exactly on speed-graph peaks, interface ticks fall on every stepped frame, and a soft low-end thump marks each equation locking into place. Then a final grade — crushed blacks, warm highlights — ties the video to the product website so both feel like one surface. You can see the whole approach applied across my [motion design work](/motion-design).`,
  },
  {
    slug: "developer-and-video-editor-overlap",
    title: "What Working as a Developer and Video Editor Taught Me",
    excerpt:
      "Timing, systems thinking, and iteration — why writing code made my edits sharper, and why cutting video made my interfaces better.",
    date: "Nov 22, 2025",
    readTime: "4 min read",
    image: "/suffixsportfolio.png",
    content: `People assume development and video editing are opposite talents — one logical, one creative. After doing both professionally for years, I can tell you they are the same job wearing different clothes. Writing code made my edits sharper, and cutting video made my interfaces better. This is what each craft taught the other.

Timing is everything in both
An easing curve in CSS and an easing curve in the After Effects graph editor are literally the same math, and both decide whether something feels cheap or premium. Editing taught me to feel rhythm in frames, and that sense now drives every interaction I build — how long a hover state lingers, how a page reveals on scroll, when to hold back instead of animating everything. Developers who have never cut video tend to animate too much. Editors who have never shipped code tend to ignore the cost of every millisecond.

Systems beat one-offs
In code I reach for components, design tokens, and auto-layout. In video I reach for presets, text animators, and Motion Graphics templates. Both are the same instinct: build the pattern once, reuse it everywhere, change it in one place. The [BeeSim Support](/projects/beesim-support) portal runs on ticket categories and assignment rules for the same reason my edits run on animator presets — a system scales, a one-off does not.

Iteration is the actual skill
Neither craft rewards getting it right the first time. Code goes through drafts, reviews, and refactors. Edits go through rough cuts, client notes, and version twelve. Working in both taught me to detach from any single version and to treat feedback as data instead of criticism. The willingness to cut a beloved transition is the same muscle as deleting a clever function that nobody can maintain.

Constraints make both better
A sixty-second vertical reel and a performance budget are the same kind of gift. Both force clarity: one message per section, nothing decorative, every element earning its place. Some of my cleanest code and my tightest edits came from the smallest briefs. Unlimited time and unlimited scope have never once improved my work.

Where they meet
My [portfolio site](/projects/suffixs-portfolio) is where both crafts finally share one screen — a Next.js build with motion-design instincts, parallax depth, and scroll-triggered reveals timed like cuts. If you hire one person who does both, you do not get two half-skills. You get someone who thinks in timing and ships in systems.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
