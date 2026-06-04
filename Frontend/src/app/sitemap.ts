import type { MetadataRoute } from "next";
import { visibleProjects } from "@/data/projects";

export const dynamic = "force-static";

const SITE_URL = "https://fenyxn.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = ["", "/about", "/services", "/work", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = visibleProjects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...projectPages];
}
