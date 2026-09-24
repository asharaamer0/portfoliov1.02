export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  /** Logos and wide graphics render with contain instead of cover. */
  imageFit?: "cover" | "contain";
  /** Natural dimensions — contain banners render at most this wide (no upscale blur). */
  imageWidth?: number;
  imageHeight?: number;
}

export const projects: Project[] = [
  {
    slug: "fisik-app-video",
    title: "Fisik.app Promo Video",
    subtitle: "Instagram Reel — After Effects motion design",
    image: "/fisiklogo.png",
    description:
      "Ashar Aamer produced a sub-60-second Instagram promo video for fisik.app, a physics learning platform — built entirely in After Effects with PosterizeTime, kinetic text animators, 3D camera moves, speed-graph transitions, and animated physics diagrams.",
    imageFit: "contain",
    imageWidth: 421,
    imageHeight: 196,
  },
  {
    slug: "saas-demo-video",
    title: "SaaS Demo Video",
    subtitle: "Instagram Reel",
    image: "/saas-video.png",
    description:
      "A SaaS demo video edited by Ashar Aamer for Instagram, inspired by the ChatGPT launch video — cut in After Effects 2024 with speed-ramp transitions across position, scale, and rotation.",
    imageFit: "contain",
    imageWidth: 535,
    imageHeight: 357,
  },
  {
    slug: "suffixs-portfolio",
    title: "Suffixs Portfolio",
    subtitle: "Portfolio site, motion design",
    image: "/suffixsportfolio.png",
    description:
      "Suffixs Portfolio is a black-and-white portfolio website designed and built by Ashar Aamer to showcase motion design and development work, with parallax depth and scroll-triggered animation.",
    imageFit: "contain",
    imageWidth: 1598,
    imageHeight: 856,
  },
  {
    slug: "beesim-support",
    title: "BeeSim Support",
    subtitle: "Full discord linked support system",
    image: "/beesim.png",
    description:
      "BeeSim Support is a Discord-linked web support system built by Ashar Aamer — players link their Discord account, open tickets on the web, and staff resolve them from a secured admin portal with rotating passwords.",
    imageFit: "contain",
    imageWidth: 500,
    imageHeight: 500,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
