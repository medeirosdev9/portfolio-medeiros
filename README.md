# portfolio-medeiros
meu portfólio pessoal como desenvolvedor de software

## Stack

Next.js 16 (App Router, Cache Components), React 19, TypeScript, Tailwind CSS 4 e Motion.

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Publicação e SEO

A URL do site e a permissão de indexação são definidas em `src/lib/site-url.ts`, a partir das variáveis de sistema da Vercel:

| Ambiente                | URL usada em canonical e Open Graph | Indexável |
| ----------------------- | ----------------------------------- | --------- |
| Local                   | `http://localhost:3000`             | Não       |
| Preview da Vercel       | URL do branch ou do deploy          | Não       |
| Produção sem `SITE_URL` | domínio de produção `*.vercel.app`  | Não       |
| Produção com `SITE_URL` | `SITE_URL`                          | Sim       |

Fora do último caso, o site responde com `noindex` (meta tag e cabeçalho `X-Robots-Tag`), o `robots.txt` bloqueia tudo e o `sitemap.xml` sai vazio. Na produção indexável, os endereços `*.vercel.app` do mesmo deploy também recebem `noindex`; só o domínio de `SITE_URL` é indexado.

### Definir o domínio definitivo

1. Adicione o domínio em **Vercel → Project → Settings → Domains**.
2. Em **Settings → Environment Variables**, crie `SITE_URL` com a origem completa (ex.: `https://<seu-dominio>`), marcando **somente Production**.
3. Faça um novo deploy de produção: a variável é lida durante o build.

Veja também `.env.example`. As fontes em `src/assets/fonts` (licença OFL) são usadas só para gerar as imagens de compartilhamento.
