import type { MetadataRoute } from "next";
import { articles } from "./data/articles";
import { projects } from "./data/projects";

const siteUrl = "https://suffixs.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/motion-design`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/web-design`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/design-thoughts/${article.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
