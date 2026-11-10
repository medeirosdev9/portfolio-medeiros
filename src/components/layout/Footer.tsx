import { MessageCircle } from "lucide-react";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { BrandLogo } from "@/components/icons/BrandLogo";
import { Container } from "@/components/ui/Container";
import { site, socialLinks } from "@/content/site";

// Com Cache Components, a data precisa ficar em um trecho cacheado.
async function CurrentYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

// py-2: área de toque de 36px de altura. O espaçamento visual entre os links
// continua o mesmo, porque a lista não tem mais `gap` vertical.
const linkStyles =
  "inline-flex items-center gap-2.5 py-2 text-sm tracking-wide text-muted transition-colors duration-300 hover:text-foreground";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm tracking-wide text-muted">{site.role}</p>
          </div>

          <nav aria-label="Rodapé">
            {/* md:-mb-2 compensa o py-2 para alinhar a base do texto com o
                cargo ao lado. */}
            <ul className="flex flex-col md:-mb-2 md:flex-row md:gap-10">
              {socialLinks.map(({ label, url, icon }) => (
                <li key={label}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkStyles}
                    >
                      {icon && (
                        <BrandLogo name={icon} className="size-4 shrink-0" />
                      )}
                      {label}
                      <span className="sr-only">(abre em nova aba)</span>
                    </a>
                  ) : (
                    <span className="text-sm tracking-wide text-muted">
                      {label} <span className="text-xs">(link pendente)</span>
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link href="/#contato" className={linkStyles}>
                  <MessageCircle
                    aria-hidden
                    className="size-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-16 text-xs tracking-wide text-muted">
          © <CurrentYear /> {site.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
