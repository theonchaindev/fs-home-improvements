import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { areas } from "@/lib/areas";

const base = "https://fshome-improvements.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/projects",
    "/services",
    "/services/windows",
    "/services/doors",
    "/services/conservatories",
    "/services/bifold-doors",
    "/services/roofline",
  ];
  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/services/") ? 0.9 : 0.7,
    })),
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${base}/areas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...areas.map((a) => ({
      url: `${base}/areas/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
