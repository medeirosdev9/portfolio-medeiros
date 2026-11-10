import type { NextConfig } from "next";
import { isIndexable, siteUrl } from "./src/lib/site-url";

// Reforço via cabeçalho HTTP, que vale também para imagens e arquivos:
// - fora da produção com domínio definitivo, nada é indexado;
// - na produção, só o domínio de SITE_URL é indexado. Os endereços
//   *.vercel.app do mesmo deploy recebem noindex.
const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  async headers() {
    if (!isIndexable) return [{ source: "/:path*", headers: noindex }];

    return [
      {
        source: "/:path*",
        // `value` é uma expressão regular: os pontos do domínio são escapados.
        missing: [
          { type: "host", value: siteUrl.hostname.replace(/\./g, "\\.") },
        ],
        headers: noindex,
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
