// Define a URL base do site e se ele pode ser indexado, a partir das variáveis
// de sistema da Netlify ou da Vercel. Nenhum domínio fica fixo no código: o
// domínio definitivo vem de SITE_URL, configurada só no ambiente de produção.
//
// | Ambiente                           | URL base                        | Indexável |
// | ---------------------------------- | ------------------------------- | --------- |
// | Local (next dev/build/start)       | http://localhost:<PORT>         | Não       |
// | Netlify deploy preview / branch    | DEPLOY_PRIME_URL                | Não       |
// | Vercel preview                     | URL do branch ou do deploy      | Não       |
// | Produção sem SITE_URL              | URL principal da plataforma     | Não       |
// | Produção com SITE_URL              | SITE_URL                        | Sim       |
//
// Os valores são calculados no build e fixados no código pelo next.config.ts
// (opção `env`). Assim, quando a Netlify regenera uma página numa function,
// onde CONTEXT não existe, o resultado continua igual ao do build.
//
// Este arquivo também é importado pelo next.config.ts: use caminhos relativos.

type DeployEnv = "production" | "preview" | "development";

export type SiteConfig = {
  deployEnv: DeployEnv;
  siteUrl: string;
  isIndexable: boolean;
};

// Netlify entrega URLs completas ("https://site.netlify.app"); a Vercel entrega
// só o host ("projeto.vercel.app").
function fromUrl(value: string | undefined) {
  if (!value) return undefined;
  try {
    return new URL(value).origin;
  } catch {
    return undefined;
  }
}

function fromHost(host: string | undefined) {
  return host ? fromUrl(`https://${host}`) : undefined;
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

  return url.origin;
}

function detectDeploy(env: NodeJS.ProcessEnv) {
  // Netlify: CONTEXT = production | deploy-preview | branch-deploy | dev ...
  if (env.NETLIFY === "true" || env.CONTEXT) {
    const deployEnv: DeployEnv =
      env.CONTEXT === "production"
        ? "production"
        : env.CONTEXT === "deploy-preview" ||
            env.CONTEXT === "branch-deploy" ||
            env.CONTEXT === "preview-server"
          ? "preview"
          : "development";

    return {
      deployEnv,
      platformUrl:
        deployEnv === "production"
          ? fromUrl(env.URL)
          : fromUrl(env.DEPLOY_PRIME_URL) ?? fromUrl(env.DEPLOY_URL),
    };
  }

  // Vercel: VERCEL_ENV = production | preview | development
  if (env.VERCEL_ENV === "production" || env.VERCEL_ENV === "preview") {
    return {
      deployEnv: env.VERCEL_ENV as DeployEnv,
      platformUrl:
        env.VERCEL_ENV === "production"
          ? fromHost(env.VERCEL_PROJECT_PRODUCTION_URL) ?? fromHost(env.VERCEL_URL)
          : fromHost(env.VERCEL_BRANCH_URL) ?? fromHost(env.VERCEL_URL),
    };
  }

  return { deployEnv: "development" as DeployEnv, platformUrl: undefined };
}

// Calcula a configuração a partir das variáveis de ambiente. Usado no build
// pelo next.config.ts; o app usa os valores já fixados (ver abaixo).
export function resolveSiteConfig(env: NodeJS.ProcessEnv = process.env): SiteConfig {
  const { deployEnv, platformUrl } = detectDeploy(env);
  const configuredSiteUrl =
    deployEnv === "production" ? parseSiteUrl(env.SITE_URL) : undefined;

  const deployUrl = configuredSiteUrl ?? platformUrl;

  // Em produção ou preview, nunca usar localhost como canonical: se nenhuma
  // URL estiver disponível, o build falha em vez de publicar URLs erradas.
  if (deployEnv !== "development" && !deployUrl) {
    throw new Error(
      `Não foi possível determinar a URL do site (${deployEnv}). Defina SITE_URL ou verifique as variáveis da plataforma.`,
    );
  }

  const siteUrl =
    deployEnv === "development"
      ? `http://localhost:${env.PORT ?? 3000}`
      : (deployUrl as string);

  return {
    deployEnv,
    siteUrl,
    // Só a produção com domínio definitivo pode ser indexada.
    isIndexable: configuredSiteUrl !== undefined,
  };
}

// Os nomes abaixo são substituídos pelos valores do build (next.config.ts,
// opção `env`). Precisam ser lidos assim, por extenso, para a substituição
// funcionar. Se não existirem (ex.: dentro do próprio next.config.ts), a
// configuração é calculada na hora.
const fixed = process.env.PORTFOLIO_SITE_URL
  ? {
      deployEnv: process.env.PORTFOLIO_DEPLOY_ENV as DeployEnv,
      siteUrl: process.env.PORTFOLIO_SITE_URL,
      isIndexable: process.env.PORTFOLIO_INDEXABLE === "true",
    }
  : resolveSiteConfig();

export const deployEnv = fixed.deployEnv;
export const siteUrl = new URL(fixed.siteUrl);
export const isIndexable = fixed.isIndexable;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).href;
}
