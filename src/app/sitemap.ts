import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { absoluteUrl, isIndexable } from "@/lib/site-url";

// Fora da produção com domínio definitivo, o sitemap sai vazio.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];

  return [
    { url: absoluteUrl("/") },
    ...projects.map((project) => ({
      url: absoluteUrl(`/projetos/${project.slug}`),
      images: [absoluteUrl(project.cover.src)],
    })),
  ];
}
