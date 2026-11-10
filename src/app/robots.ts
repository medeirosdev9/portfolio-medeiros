import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/lib/site-url";

// Bloqueia todos os robôs fora da produção com domínio definitivo.
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
