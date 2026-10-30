import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { experiences } from "@/content/experience";
import { cn } from "@/lib/cn";

export function Experience() {
  return (
    <SectionWrapper id="experiencia" aria-labelledby="experiencia-titulo">
      <Reveal>
        <SectionHeading
          id="experiencia-titulo"
          eyebrow="02 — Experiência"
          title="Experiência"
        />
      </Reveal>

      {/* O recuo acompanha a coluna de texto do SectionHeading. */}
      <ul className="mt-16 border-l border-border md:mt-24 md:ml-[calc((100%-2.5rem)/4+2.5rem)]">
        {experiences.map(({ title, label, isCurrent, activities }) => (
          <li key={title} className="relative pb-16 pl-8 last:pb-0 md:pl-12">
            <span
              aria-hidden
              className={cn(
                "absolute top-3 -left-[5px] size-[9px] rounded-full border",
                isCurrent
                  ? "border-accent bg-accent"
                  : "border-muted bg-background",
              )}
            />
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {title}
              </h3>
              {label && (
                <p className="mt-2 text-sm tracking-wide text-accent">
                  {label}
                </p>
              )}
              <ul className="mt-6 grid gap-x-10 gap-y-3 leading-7 text-muted sm:grid-cols-2">
                {activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
