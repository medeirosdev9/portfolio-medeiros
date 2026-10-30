import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { technologiesIntro, technologyGroups } from "@/content/technologies";

export function Technologies() {
  return (
    <SectionWrapper id="tecnologias" aria-labelledby="tecnologias-titulo">
      <Reveal>
        <SectionHeading
          id="tecnologias-titulo"
          eyebrow="04 — Tecnologias"
          title="Tecnologias"
          description={technologiesIntro}
        />
      </Reveal>

      <div className="mt-16 border-b border-border md:mt-24">
        {technologyGroups.map(({ title, items }) => (
          <Reveal
            key={title}
            className="grid gap-6 border-t border-border py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10 md:py-10"
          >
            <h3 className="text-sm tracking-wide text-muted md:pt-2">
              {title}
            </h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
