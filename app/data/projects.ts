export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "saas-demo-video",
    title: "SaaS Demo Video",
    subtitle: "Instagram Reel",
    image: "/saas-video.png",
    description: "A SaaS demo video edited for Instagram.",
  },
  {
    slug: "suffixs-portfolio",
    title: "Suffixs Portfolio",
    subtitle: "Portfolio site, motion design",
    image: "/suffixsportfolio.png",
    description: "A portfolio site showcasing motion design work.",
  },
  {
    slug: "beesim-support",
    title: "BeeSim Support",
    subtitle: "Full discord linked support system",
    image: "/beesim.png",
    description: "A full Discord-linked support system.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
