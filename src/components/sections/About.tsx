import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { about } from "@/content/about";

const gridStyles =
  "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10";

export function About() {
  return (
    <SectionWrapper id="sobre" aria-labelledby="sobre-titulo">
      <Reveal>
        <p className="text-sm tracking-wide text-accent">01 — Sobre</p>
        <h2
          id="sobre-titulo"
          className="mt-8 max-w-5xl font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl"
        >
          {about.headline}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className={`${gridStyles} mt-12 md:mt-20`}>
        <p className="max-w-2xl text-lg leading-8 text-muted md:col-start-2 md:text-xl md:leading-9">
          {about.description}
        </p>
      </Reveal>

      <Reveal
        delay={0.15}
        className={`${gridStyles} mt-16 border-t border-border pt-8 md:mt-24`}
      >
        <h3 className="text-sm tracking-wide text-muted">Formação</h3>
        <ul className="space-y-4 text-sm leading-6 tracking-wide">
          {about.education.map(({ title, detail }) => (
            <li key={title}>
              {title}
              <span className="block text-muted">{detail}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionWrapper>
  );
}
