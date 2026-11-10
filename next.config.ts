import type { NextConfig } from "next";
import { resolveSiteConfig } from "./src/lib/site-url";

// Calculado uma vez, no build, a partir das variáveis da Netlify ou da Vercel.
const site = resolveSiteConfig();

// Reforço via cabeçalho HTTP, que vale também para imagens e arquivos:
// - fora da produção com domínio definitivo, nada é indexado;
// - na produção, só o domínio de SITE_URL é indexado. Os demais endereços do
//   mesmo deploy (*.netlify.app, *.vercel.app, permalinks) recebem noindex.
const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  // Fixa no código os valores do build. Na Netlify, as páginas regeneradas em
  // functions não têm acesso a CONTEXT; com isso, canonical e indexação não
  // mudam depois do deploy. Só valores públicos: nunca coloque segredos aqui,
  // porque a opção `env` pode chegar ao JavaScript enviado ao navegador.
  env: {
    PORTFOLIO_DEPLOY_ENV: site.deployEnv,
    PORTFOLIO_SITE_URL: site.siteUrl,
    PORTFOLIO_INDEXABLE: String(site.isIndexable),
  },
  async headers() {
    if (!site.isIndexable) return [{ source: "/:path*", headers: noindex }];

    return [
      {
        source: "/:path*",
        // `value` é uma expressão regular: os pontos do domínio são escapados.
        missing: [
          {
            type: "host",
            value: new URL(site.siteUrl).hostname.replace(/\./g, "\\."),
          },
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
