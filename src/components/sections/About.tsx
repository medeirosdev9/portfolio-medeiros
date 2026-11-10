import { Cpu, GraduationCap, type LucideIcon } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { type Education, about } from "@/content/about";
import { cn } from "@/lib/cn";

const educationIcons: Record<Education["icon"], LucideIcon> = {
  "graduation-cap": GraduationCap,
  cpu: Cpu,
};

const gridStyles =
  "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10";

export function About() {
  return (
    <SectionWrapper id="sobre" aria-labelledby="sobre-titulo">
      <Reveal>
        <Eyebrow>01 — Sobre</Eyebrow>
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
        <h3 className="text-sm tracking-wide text-muted md:pt-1">Formação</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {about.education.map(({ title, detail, status, icon }) => {
            const Icon = educationIcons[icon];

            return (
              <li
                key={title}
                className={cn(
                  "relative border bg-surface p-6",
                  status ? "border-accent/30" : "border-border",
                )}
              >
                <span
                  className={cn(
                    "flex size-11 items-center justify-center border",
                    status
                      ? "border-accent/45 text-accent"
                      : "border-border text-muted",
                  )}
                >
                  <Icon aria-hidden className="size-[22px]" strokeWidth={1.5} />
                </span>
                {status && (
                  <span className="absolute top-6 right-6 flex items-center gap-2 text-xs tracking-wide text-accent">
                    <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                    {status}
                  </span>
                )}
                <p className="mt-8 font-display text-xl leading-tight font-semibold tracking-tight">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 tracking-wide text-muted">
                  {detail}
                </p>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </SectionWrapper>
  );
}
