// Define a URL base do site e se ele pode ser indexado, a partir das variáveis
// de sistema da Vercel. Nenhum domínio fica fixo no código: o domínio
// definitivo vem de SITE_URL, configurada só no ambiente de produção.
//
// | Ambiente                     | URL base                         | Indexável |
// | ---------------------------- | -------------------------------- | --------- |
// | Local (next dev/build/start) | http://localhost:<PORT>          | Não       |
// | Preview da Vercel            | URL do branch ou do deploy       | Não       |
// | Produção sem SITE_URL        | domínio de produção da Vercel    | Não       |
// | Produção com SITE_URL        | SITE_URL                         | Sim       |
//
// Este arquivo também é importado pelo next.config.ts: use caminhos relativos.

type DeployEnv = "production" | "preview" | "development";

function getDeployEnv(): DeployEnv {
  const env = process.env.VERCEL_ENV;
  return env === "production" || env === "preview" ? env : "development";
}

// As variáveis da Vercel vêm sem protocolo (ex.: "projeto.vercel.app").
function fromHost(host: string | undefined) {
  return host ? new URL(`https://${host}`) : undefined;
}

// Aceita só uma origem HTTPS, como "https://<seu-dominio>". Um valor inválido
// interrompe o build, em vez de publicar URLs canônicas erradas.
function parseSiteUrl(value: string | undefined) {
  if (!value) return undefined;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`SITE_URL inválida: "${value}". Use, por exemplo, https://<seu-dominio>.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`SITE_URL deve usar https: "${value}".`);
  }

  return new URL(url.origin);
}

export const deployEnv = getDeployEnv();

const configuredSiteUrl =
  deployEnv === "production" ? parseSiteUrl(process.env.SITE_URL) : undefined;

function resolveSiteUrl(): URL {
  if (deployEnv === "production") {
    return (
      configuredSiteUrl ??
      fromHost(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
      fromHost(process.env.VERCEL_URL) ??
      new URL("http://localhost:3000")
    );
  }

  if (deployEnv === "preview") {
    return (
      fromHost(process.env.VERCEL_BRANCH_URL) ??
      fromHost(process.env.VERCEL_URL) ??
      new URL("http://localhost:3000")
    );
  }

  return new URL(`http://localhost:${process.env.PORT ?? 3000}`);
}

export const siteUrl = resolveSiteUrl();

// Só a produção com domínio definitivo pode ser indexada.
export const isIndexable = configuredSiteUrl !== undefined;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).href;
}
