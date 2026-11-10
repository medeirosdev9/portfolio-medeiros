import { ArrowUpRight } from "lucide-react";
import { Button, ButtonIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contact } from "@/content/contact";
import { socialLinks } from "@/content/site";

const gridStyles =
  "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10";

export function Contact() {
  const channels = socialLinks.filter(
    (link): link is typeof link & { url: string } => link.url !== null,
  );

  return (
    <SectionWrapper id="contato" aria-labelledby="contato-titulo">
      <Reveal>
        <p className="text-sm tracking-wide text-accent">06 — Contato</p>
        <h2
          id="contato-titulo"
          className="mt-8 max-w-5xl font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl"
        >
          {contact.title}
          <span className="text-accent">?</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className={`${gridStyles} mt-12 md:mt-20`}>
        <div className="md:col-start-2">
          <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
            {contact.description}
          </p>
          <Button
            href={contact.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full sm:w-auto"
          >
            {contact.whatsapp.label}
            <span className="sr-only">(abre em nova aba)</span>
            <ButtonIcon direction="up-right">
              <ArrowUpRight aria-hidden className="size-4" />
            </ButtonIcon>
          </Button>
        </div>
      </Reveal>

      {channels.length > 0 && (
        <Reveal
          delay={0.15}
          className={`${gridStyles} mt-16 md:mt-24 md:border-t md:border-border`}
        >
          <h3 className="text-sm tracking-wide text-muted md:pt-8">
            {contact.channelsTitle}
          </h3>
          <ul className="border-t border-border md:border-t-0">
            {channels.map(({ label, url, handle }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-border py-6 transition-colors duration-300 hover:border-accent"
                >
                  <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="font-display text-2xl font-semibold tracking-tight text-muted transition-colors duration-300 group-hover:text-foreground sm:text-3xl">
                      {label}
                    </span>
                    {handle && (
                      <span className="truncate text-sm tracking-wide text-muted">
                        {handle}
                      </span>
                    )}
                  </span>
                  <span className="sr-only">(abre em nova aba)</span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-5 shrink-0 text-muted transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent motion-reduce:transition-colors motion-reduce:group-hover:translate-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </SectionWrapper>
  );
}
