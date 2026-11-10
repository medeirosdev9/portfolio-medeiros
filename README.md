# portfolio-medeiros
meu portfólio pessoal como desenvolvedor de software

## Stack

Next.js 16 (App Router, Cache Components), React 19, TypeScript, Tailwind CSS 4 e Motion. Node.js 24 (ver `.nvmrc`).

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Publicação e SEO

O site é publicado na **Netlify** (`netlify.toml`) e continua compatível com a **Vercel**.

A URL do site e a permissão de indexação são definidas em `src/lib/site-url.ts`, a partir das variáveis de sistema da plataforma, e fixadas no código durante o build (`next.config.ts`). Assim, as páginas regeneradas depois do deploy mantêm a mesma configuração.

| Ambiente                                   | URL usada em canonical e Open Graph        | Indexável |
| ------------------------------------------ | ------------------------------------------ | --------- |
| Local                                      | `http://localhost:3000`                    | Não       |
| Netlify: deploy preview e branch deploy    | URL do deploy (`DEPLOY_PRIME_URL`)         | Não       |
| Vercel: preview                            | URL do branch ou do deploy                 | Não       |
| Produção sem `SITE_URL`                    | URL principal (`*.netlify.app` ou `*.vercel.app`) | Não |
| Produção com `SITE_URL`                    | `SITE_URL`                                 | Sim       |

Fora do último caso, o site responde com `noindex` (meta tag e cabeçalho `X-Robots-Tag`), o `robots.txt` bloqueia tudo e o `sitemap.xml` sai vazio. Na produção indexável, os demais endereços do mesmo deploy (`*.netlify.app`, `*.vercel.app` e permalinks) também recebem `noindex`; só o domínio de `SITE_URL` é indexado.

### Definir o domínio definitivo na Netlify

1. Adicione o domínio em **Domain management** (opcional: sem domínio próprio, use o endereço `https://<nome>.netlify.app`).
2. Em **Project configuration → Environment variables**, crie `SITE_URL` com a origem completa (ex.: `https://<seu-dominio>`), com valor **somente no contexto Production**.
3. Faça um novo deploy de produção: a variável é lida durante o build.

### Na Vercel

Em **Settings → Environment Variables**, crie `SITE_URL` marcando **somente Production** e faça um novo deploy de produção.

Veja também `.env.example`. As fontes em `src/assets/fonts` (licença OFL) são usadas só para gerar as imagens de compartilhamento.
