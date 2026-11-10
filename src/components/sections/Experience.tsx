import { Briefcase, CodeXml, type LucideIcon } from "lucide-react";
import { TimelineProgress } from "@/components/sections/experience/TimelineProgress";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { type Experience as ExperienceItem, experiences } from "@/content/experience";
import { cn } from "@/lib/cn";

const icons: Record<ExperienceItem["icon"], LucideIcon> = {
  briefcase: Briefcase,
  code: CodeXml,
};

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

      {/* O recuo acompanha a coluna de texto do SectionHeading. No celular,
          ml-5 abre espaço para os marcadores, centralizados sobre a linha. */}
      <TimelineProgress className="mt-16 ml-5 md:mt-24 md:ml-[calc((100%-2.5rem)/4+2.5rem)]">
        <ul className="border-l border-border">
          {experiences.map(({ title, label, isCurrent, icon, activities }) => {
            const Icon = icons[icon];

            return (
              <li key={title} className="relative pb-16 pl-9 last:pb-0 md:pl-14">
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-0 -left-[20.5px] z-20 flex size-10 items-center justify-center rounded-full border bg-background",
                    isCurrent
                      ? "border-accent text-accent"
                      : "border-border text-muted",
                  )}
                >
                  {isCurrent && (
                    <span className="absolute inset-0 animate-pulse-ring rounded-full border border-accent motion-reduce:hidden" />
                  )}
                  <Icon className="size-[18px]" strokeWidth={1.5} />
                </span>

                <Reveal>
                  <h3 className="pt-1 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                    {title}
                  </h3>
                  {label && (
                    <p className="mt-2 text-sm tracking-wide text-accent">
                      {label}
                    </p>
                  )}
                  <ul className="mt-6 grid gap-x-10 gap-y-3 border border-border bg-surface p-5 leading-7 text-muted sm:p-6 md:p-8 lg:grid-cols-2">
                    {activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex gap-3 before:mt-[11px] before:size-1.5 before:shrink-0 before:bg-accent/70 before:content-['']"
                      >
                        {activity}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </TimelineProgress>
    </SectionWrapper>
  );
}
